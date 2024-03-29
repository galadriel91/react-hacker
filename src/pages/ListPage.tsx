import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FETCH_LIST } from 'store/features/sync';
import { useNavigate } from 'react-router-dom';
import { ListItems } from 'store/features/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { INIT_INDEX, INIT_CURRENT, SET_CURRENT, SET_INDEXNUM } from 'store/features/common';
import ListItem from 'components/list/ListItem';
import ListPagination from 'components/list/ListPagination';
import ListTitle from 'components/list/ListTitle';

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
				navigate('/404', { replace: true });
			}
		} catch (err) {
			navigate('/404', { replace: true });
		}
	};

	useEffect(() => {
		dispatch(INIT_INDEX());
		dispatch(INIT_CURRENT());
	}, [getTitleName()]);

	useEffect(() => {
		if (Number(location.pathname[location.pathname.length - 1]) === 1) {
			dispatch(INIT_INDEX());
			dispatch(INIT_CURRENT());
		}
	}, [location.pathname]);

	useEffect(() => {
		handldeFetch();
		const name = getTitleName();
		document.title = `${name} | Hacker News `;
	}, [location.pathname]);

	useEffect(() => {
		if (Number(location.pathname[location.pathname.length - 1]) >= 10) {
			dispatch(SET_INDEXNUM(9));
			dispatch(SET_CURRENT());
		} else if (Number(location.pathname[location.pathname.length - 1]) >= 7) {
			dispatch(SET_INDEXNUM(6));
			dispatch(SET_CURRENT());
		} else if (Number(location.pathname[location.pathname.length - 1]) >= 4) {
			dispatch(SET_INDEXNUM(3));
			dispatch(SET_CURRENT());
		}
	}, []);

	return (
		<div>
			<ListTitle />
			<ListItem items={lists} />
			{location.state === 'Jobs' ? null : <ListPagination />}
		</div>
	);
};

export default ListPage;
