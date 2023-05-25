import { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Style from 'assets/scss/components/common/HackerUpBtn.module.scss';

const HackerUpbtn = () => {
	const location = useLocation();
	const [windowTop, setWindowTop] = useState(0);

	const onClickUp = useCallback(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	const SCROLL = useCallback(() => {
		return windowTop >= 500;
	}, [windowTop]);

	const onScroll = useCallback(() => {
		setWindowTop(window.scrollY);
	}, [windowTop]);

	const isShow = useCallback(() => {
		if (location.state === 'jobs' || location.state === 'post') {
			return true;
		} else {
			return false;
		}
	}, [location.state]);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<div
			className={`${Style.upBtn} ${SCROLL() ? Style.on : ''} ${
				isShow() ? Style.show : ''
			} xi-angle-up-thin`}
			onClick={onClickUp}
		/>
	);
};

export default HackerUpbtn;
