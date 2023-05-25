import { useEffect } from 'react';
import { useAppDispatch } from 'store/hooks';
import { OFF_LOADING } from 'store/features/items';
import Style from 'assets/scss/pages/NotPage.module.scss';

const NotPage = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(OFF_LOADING());
		document.title = `Error | Hacker News `;
	}, []);

	return (
		<div className={Style.container}>
			<h1>404</h1>
			<p>Not Found</p>
		</div>
	);
};

export default NotPage;
