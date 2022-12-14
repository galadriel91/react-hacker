import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useLocation } from 'react-router-dom';
import { FETCH_LIST } from 'store/features/sync';
import { useNavigate } from 'react-router-dom';
import ListPagination from 'components/list/ListPagination';
import ListItem from 'components/list/ListItem';
import { ListItems } from 'store/features/types';

const ListPage = () => {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(state => state.items.lists);
	const location = useLocation();
	const navigate = useNavigate();

	const getTitleName = useCallback(() => {
		if (location.pathname.includes('news')) {
			return 'News';
		} else if (location.pathname.includes('ask')) {
			return 'Ask';
		} else if (location.pathname.includes('jobs')) {
			return 'Jobs';
		} else if (location.pathname.includes('show')) {
			return 'Show';
		}
	}, [location.state]);

	const handldeFetch = async () => {
		try {
			const response = await dispatch(FETCH_LIST(location.pathname));
			const payload = response.payload as ListItems[];
			if (payload.length > 1) {
				return true;
			} else {
				navigate('/404');
			}
		} catch (err) {
			navigate('/404');
		}
	};

	useEffect(() => {
		handldeFetch();
		const name = getTitleName();
		document.title = `${name} | Hacker News `;
	}, [location.pathname]);

	return (
		<div>
			<ListItem items={lists} />
			{location.state === 'Jobs' ? null : <ListPagination />}
		</div>
	);
};

export default ListPage;
