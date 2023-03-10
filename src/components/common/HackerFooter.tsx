import React, { useCallback } from 'react';
import logo from 'assets/images/HackerNews.svg';
import Style from 'assets/scss/components/common/HackerFooter.module.scss';
import { useLocation } from 'react-router-dom';

const HackerFooter = () => {
	const location = useLocation();
	const footerMargin = useCallback(() => {
		if (location.pathname === '/404') {
			return Style.not;
		} else if (location.pathname.includes('job')) {
			return Style.job;
		} else if (location.pathname.includes('user') || location.pathname.includes('post')) {
			return Style.detail;
		} else {
			return Style.footer;
		}
	}, [location.pathname]);

	return (
		<footer className={footerMargin()}>
			<div className={Style.footerWrap}>
				<div className={Style.footerTop}>
					<div className={Style.footerLeft}>
						<h2>
							<img src={logo} alt="HackerNews 로고" />
						</h2>
						<p>
							News platform for <br />
							modern IT
						</p>
						<span>© Copyright Hacker News</span>
					</div>
					<div className={Style.footerRight}>
						<ul>
							<li>
								<h3>Company</h3>
								<a href="#none">YC Blog</a>
								<a href="#none">Contact</a>
								<a href="#none">Press</a>
								<a href="#none">People</a>
								<a href="#none">Careers</a>
							</li>
							<li>
								<h3>Programs</h3>
								<a href="#none">YC Program</a>
								<a href="#none">Startup School</a>
								<a href="#none">Work at a Startup</a>
								<a href="#none">Continuity</a>
							</li>
							<li>
								<h3>Resources</h3>
								<a href="#none">Startup Directory</a>
								<a href="#none">Startup Library</a>
								<a href="#none">Covid</a>
								<a href="#none">Investors</a>
							</li>
							<li>
								<h3>ETC</h3>
								<a href="#none">Guidelines</a>
								<a href="#none">FAQ</a>
								<a href="#none">Api</a>
								<a href="#none">Security</a>
								<a href="#none">Legal</a>
								<a href="#none">Apply to YC</a>
							</li>
						</ul>
					</div>
				</div>
				<div className={Style.footerBottom}>
					<span>© Copyright Hacker News</span>
				</div>
			</div>
		</footer>
	);
};

export default HackerFooter;
