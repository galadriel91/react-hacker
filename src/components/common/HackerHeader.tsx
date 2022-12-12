import React, { useCallback, useEffect, useState, useRef } from 'react';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import Style from '../../assets/scss/components/common/HackerHeader.module.scss';

const HackerHeader = () => {
	const [isCheck, setIsCheck] = useState(false);
	const [dark, setDark] = useState(false);
	const isInit = useRef(0);

	const onClickOffBar = useCallback(() => {
		setIsCheck(false);
	}, []);

	const onClickBars = useCallback(() => {
		setIsCheck(!isCheck);
	}, [isCheck]);

	// 다크 모드
	const onClickDark = useCallback(() => {
		setDark(!dark);
		isInit.current = 2;
		document.body.classList.toggle('dark');
	}, [dark]);

	useEffect(() => {
		if (isInit.current > 1) {
			localStorage.setItem('dark', JSON.stringify(dark));
		}
		if (localStorage.dark) {
			setDark(JSON.parse(localStorage.dark));
			if (dark === true) {
				document.body.classList.add('dark');
			}
		}
	}, [dark]);

	return (
		<header>
			<div className={Style.headerWrap}>
				<h1>
					<Link to="/news/1" state="News">
						<img src={logo} alt="리액트 로고 이미지" />
						<span>Hacker News</span>
					</Link>
				</h1>
				<nav className={isCheck ? Style.open : ''}>
					<ul>
						<li onClick={onClickOffBar}>
							<NavLink to="/news/1" state="News">
								<span>NEWS</span>
							</NavLink>
						</li>
						<li onClick={onClickOffBar}>
							<NavLink to="/ask/1" state="Ask">
								<span>ASK</span>
							</NavLink>
						</li>
						<li onClick={onClickOffBar}>
							<NavLink to="/jobs/1" state="Jobs">
								<span>JOBS</span>
							</NavLink>
						</li>
						<li onClick={onClickOffBar}>
							<NavLink to="/show/1" state="Show">
								<span>SHOW</span>
							</NavLink>
						</li>
						<li>
							<button className="xi-moon" onClick={onClickDark} />
						</li>
					</ul>
				</nav>
				<button className={`${Style.dark} ${'xi-moon'}`} />
				<button
					className={`${Style.wholeMenu} ${isCheck ? 'xi-close' : 'xi-bars'}`}
					onClick={onClickBars}
				/>
			</div>
		</header>
	);
};

export default HackerHeader;
