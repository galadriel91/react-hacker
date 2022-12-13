import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useParams, useNavigate } from 'react-router-dom';
import { FETCH_USER } from 'store/features/sync';
import { UserItems } from 'store/features/types';
import UserItem from 'components/user/UserItem';
import Style from 'assets/scss/pages/UserPage.module.scss';

const UserPage = () => {
	const user = useAppSelector(state => state.items.user);
	const dispatch = useAppDispatch();
	const params = useParams();
	const navigate = useNavigate();

	const handldeFetch = async () => {
		try {
			const response = await dispatch(FETCH_USER(params.id as string));
			const payload = response.payload as UserItems;
			if (payload === null) {
				navigate('/404');
			} else {
				return true;
			}
		} catch (err) {}
	};

	useEffect(() => {
		handldeFetch();
		// dispatch(FETCH_USER(params.id as string));
		document.title = `${params.id} | Hacker News`;
	}, [params.id]);

	return <div className={Style.userContainer}>{user === null ? '' : <UserItem item={user} />}</div>;
};

export default UserPage;
