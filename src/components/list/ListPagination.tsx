import React, { useCallback } from 'react';
import Style from '../../assets/scss/components/list/ListPagi.module.scss';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ListPagination = () => {
	const params = useParams();
	const location = useLocation();

	const pageLength = useCallback(() => {
		if (location.state === 'news') {
			return Array(10).fill('');
		} else if (location.state === 'ask') {
			return Array(2).fill('');
		} else if (location.state === 'show') {
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
						<Link
							to={`/${location.state}/${index + 1}`}
							state={location.state}
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
