import React, { useCallback, useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'assets/images/HackerNews.svg';
import Style from 'assets/scss/components/common/HackerHeader.module.scss';

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
		<header>
			<div className={Style.headerWrap}>
				<h1>
					<Link to="/" state="news">
						<img src={logo} alt="Hacker 로고 이미지" />
					</Link>
				</h1>
				<nav className={isCheck ? Style.open : ''}>
					<ul>
						<li onClick={onClickOffBar}>
							<Link
								to="/news/1"
								state="news"
								className={location.state === 'news' ? Style.actvie : ''}
							>
								<span>News</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link
								to="/ask/1"
								state="ask"
								className={location.state === 'ask' ? Style.actvie : ''}
							>
								<span>Ask</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link
								to="/jobs/1"
								state="jobs"
								className={location.state === 'jobs' ? Style.actvie : ''}
							>
								<span>Jobs</span>
							</Link>
						</li>
						<li onClick={onClickOffBar}>
							<Link
								to="/show/1"
								state="show"
								className={location.state === 'show' ? Style.actvie : ''}
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
