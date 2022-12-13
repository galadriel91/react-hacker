import React, { useEffect } from 'react';
import Style from 'assets/scss/pages/NotPage.module.scss';
import { useAppDispatch } from 'store/hooks';
import { OFF_LOADING } from 'store/features/items';

const NotPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(OFF_LOADING());
		document.title = `Error | Hacker News `;
	}, []);

	return (
		<div className={Style.container}>
			<h1>404 Not Found</h1>
			<p>페이지를 찾을수 없습니다.</p>
		</div>
	);
};

export default NotPage;
