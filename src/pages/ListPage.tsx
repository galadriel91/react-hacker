import React, { useCallback, useEffect } from 'react';
import ListItem from '../components/list/ListItem';
import ListPagination from '../components/list/ListPagination';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { FETCH_LIST } from '../store/features/sync';

const ListPage = () => {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(state => state.items.lists);
	const location = useLocation();

	const getTitleName = useCallback(() => {
		if (location.state === 'News') {
			return 'News';
		} else if (location.state === 'Ask') {
			return 'Ask';
		} else if (location.state === 'Jobs') {
			return 'Jobs';
		} else if (location.state === 'Show') {
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
