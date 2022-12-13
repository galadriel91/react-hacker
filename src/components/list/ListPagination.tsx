import React, { useCallback } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Style from 'assets/scss/components/list/ListPagi.module.scss';

const ListPagination = () => {
	const params = useParams();
	const location = useLocation();

	const getTitleName = useCallback(() => {
		if (location.pathname.includes('news')) {
			return 'news';
		} else if (location.pathname.includes('ask')) {
			return 'ask';
		} else if (location.pathname.includes('jobs')) {
			return 'jobs';
		} else if (location.pathname.includes('show')) {
			return 'show';
		}
	}, [location.state]);

	const pageLength = useCallback(() => {
		if (location.pathname.includes('news')) {
			return Array(10).fill('');
		} else if (location.pathname.includes('ask')) {
			return Array(2).fill('');
		} else if (location.pathname.includes('show')) {
			return Array(2).fill('');
		} else {
			return Array(1).fill('');
		}
	}, [location.state]);

	return pageLength().length === 1 ? null : (
		<div className={Style.listContainer}>
			<ul>
				{pageLength().map((v, index) => (
					<li key={index}>
						<Link
							to={`/${getTitleName()}/${index + 1}`}
							state={getTitleName()}
							className={Number(params.id) === index + 1 ? Style.active : ''}
						>
							{index + 1}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListPagination;
