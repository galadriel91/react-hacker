import React, { useCallback, useState, useEffect } from 'react';
import Style from '../../assets/scss/components/common/GoupBtn.module.scss';
import { useLocation } from 'react-router-dom';

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

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<div
			className={`${Style.upBtn} ${SCROLL() ? Style.on : ''} xi-angle-up-thin`}
			onClick={onClickUp}
		/>
	);
};

export default HackerUpbtn;
