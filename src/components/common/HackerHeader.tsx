import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import Style from '../../assets/scss/components/common/HackerHeader.module.scss';

const HackerHeader = () => {
	const location = useLocation();
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
					<Link to="/news/1" state="news">
						<img src={logo} alt="리액트 로고 이미지" />
						<span>Hacker News</span>
					</Link>
				</h1>
				<nav className={isCheck ? Style.open : ''}>
					<ul>
						<li onClick={onClickOffBar}>
							<Link to="/news/1" state="news" className={location.state === 'news' ? 'active' : ''}>
								<span>NEWS</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link to="/ask/1" state="ask" className={location.state === 'ask' ? 'active' : ''}>
								<span>ASK</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link to="/jobs/1" state="jobs" className={location.state === 'jobs' ? 'active' : ''}>
								<span>JOBS</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link to="/show/1" state="show" className={location.state === 'show' ? 'active' : ''}>
								<span>SHOW</span>
							</Link>
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
