import React, { useCallback, useEffect, useState, useRef } from 'react';
import logo from 'assets/images/HackerNews.svg';
import secLogo from 'assets/images/HackerNews1.svg';
import Style from 'assets/scss/components/common/HackerHeader.module.scss';
import { Link, useLocation } from 'react-router-dom';

const HackerHeader = () => {
	const location = useLocation();
	const [isCheck, setIsCheck] = useState(false);

	const onClickOffBar = useCallback(() => {
		setIsCheck(false);
	}, []);

	const onClickBars = useCallback(() => {
		setIsCheck(!isCheck);
	}, [isCheck]);

	return (
		<header className={location.pathname === '/' ? '' : Style.notMain}>
			<div className={Style.headerWrap}>
				<h1>
					<Link to="/" state="news">
						{location.pathname === '/' ? (
							<img src={logo} alt="Hacker 로고 이미지" />
						) : (
							<img src={secLogo} alt="Hacker 로고 이미지" />
						)}
					</Link>
				</h1>
				<nav className={isCheck ? Style.open : ''}>
					<ul>
						<li onClick={onClickOffBar}>
							<Link
								to="/news/1"
								state="news"
								className={location.pathname.includes('news') ? Style.active : ''}
							>
								<span>News</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link
								to="/ask/1"
								state="ask"
								className={location.pathname.includes('ask') ? Style.active : ''}
							>
								<span>Ask</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link
								to="/jobs/1"
								state="jobs"
								className={location.pathname.includes('jobs') ? Style.active : ''}
							>
								<span>Jobs</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link
								to="/show/1"
								state="show"
								className={location.pathname.includes('show') ? Style.active : ''}
							>
								<span>Show</span>
							</Link>
						</li>
						<li>
							<button className={Style.login}>Login</button>
						</li>
					</ul>
				</nav>
				<button
					className={`${Style.wholeMenu} ${isCheck ? 'xi-close' : 'xi-bars'}`}
					onClick={onClickBars}
				/>
			</div>
		</header>
	);
};

export default HackerHeader;
