import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Style from 'assets/scss/components/list/ListTitle.module.scss';

const ListTitle = () => {
	const location = useLocation();
	const getTitleName = useCallback(() => {
		if (location.pathname.includes('news')) {
			return 'News';
		} else if (location.pathname.includes('ask')) {
			return 'Ask';
		} else if (location.pathname.includes('jobs')) {
			return 'Jobs';
		} else {
			return 'Show';
		}
	}, [location.state]);
	return (
		<div className={Style.titleWrap}>
			<h2>{getTitleName()}</h2>
			<p>
				latest IT trends, news, tips, insights, and&nbsp;
				<br className={Style.responsive} />
				resources, jobs, check it out here.
			</p>
			<span />
		</div>
	);
};

export default ListTitle;
