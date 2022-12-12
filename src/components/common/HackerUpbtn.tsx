import React, { useCallback, useState, useEffect } from 'react';
import Style from '../../assets/scss/components/common/GoupBtn.module.scss';

const HackerUpbtn = () => {
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
	}, []);

	return (
		<div
			className={`${Style.upBtn} ${SCROLL() ? Style.on : ''} xi-angle-up-thin`}
			onClick={onClickUp}
			// :class="{ on: SCROLL, show: CHECKPAGE }"
		/>
	);
};

export default HackerUpbtn;
