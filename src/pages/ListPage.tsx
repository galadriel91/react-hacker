import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useLocation } from 'react-router-dom';
import { FETCH_LIST } from 'store/features/sync';
import ListPagination from 'components/list/ListPagination';
import ListItem from 'components/list/ListItem';

const ListPage = () => {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(state => state.items.lists);
	const location = useLocation();

	const getTitleName = useCallback(() => {
		if (location.state === 'news') {
			return 'News';
		} else if (location.state === 'ask') {
			return 'Ask';
		} else if (location.state === 'jobs') {
			return 'Jobs';
		} else if (location.state === 'show') {
			return 'Show';
		}
	}, [location.state]);

	useEffect(() => {
		dispatch(FETCH_LIST(location.pathname));
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
