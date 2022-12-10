import React, { useCallback, useEffect } from 'react';
import ListItem from '../components/list/ListItem';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { FETCH_LIST } from '../store/features/sync';

const ListPage = () => {
	const dispatch = useAppDispatch();
	const lists = useAppSelector(state => state.items.lists);
	const location = useLocation();

	const getTitleName = useCallback(() => {
		if (location.pathname === '/news') {
			return 'News';
		} else if (location.pathname === '/ask') {
			return 'Ask';
		} else if (location.pathname === '/jobs') {
			return 'Jobs';
		} else if (location.pathname === '/show') {
			return 'Show';
		}
	}, [location.pathname]);

	useEffect(() => {
		dispatch(FETCH_LIST(location.pathname));
		const name = getTitleName();
		document.title = `${name} | Hacker News `;
	}, [location.pathname]);

	return (
		<div>
			<ListItem items={lists} />
		</div>
	);
};

export default ListPage;
