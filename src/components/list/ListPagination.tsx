import React, { useCallback, useEffect } from 'react';
import Style from '../../assets/scss/components/list/ListPagi.module.scss';
import { useParams, useLocation } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';

const ListPagination = () => {
	const params = useParams();
	const location = useLocation();

	const pageLength = useCallback(() => {
		if (location.state === 'News') {
			return Array(10).fill('');
		} else if (location.state === 'Ask') {
			return Array(2).fill('');
		} else if (location.state === 'Show') {
			return Array(2).fill('');
		} else {
			return Array(1).fill('');
		}
	}, [location.state]);

	return (
		<div className={Style.listContainer}>
			<ul>
				{pageLength().map((v, index) => (
					<li key={index}>
						<Link to="/news">{index + 1}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ListPagination;
