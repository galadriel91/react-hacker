import { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from 'assets/images/HackerNews.svg';
import secLogo from 'assets/images/HackerNews1.svg';
import Style from 'assets/scss/components/common/HackerHeader.module.scss';

const HackerHeader = () => {
	const location = useLocation();
	const [isCheck, setIsCheck] = useState(false);

	const onClickOffBar = useCallback(() => {
		document.body.classList.remove('on');
		setIsCheck(false);
	}, []);

	const onClickBars = useCallback(() => {
		document.body.classList.toggle('on');
		setIsCheck(!isCheck);
	}, [isCheck]);

	window.addEventListener('resize', () => {
		if (window.innerWidth > 1260) {
			document.body.classList.remove('on');
			setIsCheck(false);
		}
	});

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
							<a
								href="https://news.ycombinator.com/login?goto=news"
								target="_blank"
								className={Style.login}
								rel="noreferrer"
							>
								Login
							</a>
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
