import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useParams } from 'react-router-dom';
import { FETCH_USER } from 'store/features/sync';
import UserItem from 'components/user/UserItem';
import Style from 'assets/scss/pages/UserPage.module.scss';

const UserPage = () => {
	const user = useAppSelector(state => state.items.user);
	const dispatch = useAppDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(FETCH_USER(params.id as string));
		document.title = `${params.id} | Hacker News`;
	}, [params.id]);

	return (
		<div className={Style.userContainer}>
			<UserItem item={user} />
		</div>
	);
};

export default UserPage;
