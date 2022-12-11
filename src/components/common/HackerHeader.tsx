import React, { useCallback, useState } from 'react';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';
import Style from '../../assets/scss/components/common/HackerHeader.module.scss';

const HackerHeader = () => {
	const [isCheck, setIsCheck] = useState(false);

	const onClickOffBar = useCallback(() => {
		setIsCheck(false);
	}, []);

	const onClickBars = useCallback(() => {
		setIsCheck(!isCheck);
	}, [isCheck]);

	return (
		<header>
			<div className={Style.headerWrap}>
				<h1>
					<Link to="/news/1" state="News">
						<img src={logo} alt="리액트 로고 이미지" />
						<span>Hacker News</span>
					</Link>
				</h1>
				{/*  :class="{ open: isCheck }" */}
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
							<button className="xi-moon" />
						</li>
					</ul>
				</nav>
				{/* :class="{ 'xi-close': isCheck, 'xi-bars': !isCheck }" */}
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
