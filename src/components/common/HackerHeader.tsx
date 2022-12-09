import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Style from '../../assets/scss/components/common/HackerHeader.module.scss';

const HackerHeader = () => {
	return (
		<header>
			<div className={Style.headerWrap}>
				<h1>
					<Link to="/news/1">
						<span>Hacker News</span>
					</Link>
				</h1>
				<nav>
					<ul>
						<li>
							<NavLink to="/news">
								<span>NEWS</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/ask">
								<span>ASK</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/jobs">
								<span>JOBS</span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/show">
								<span>SHOW</span>
							</NavLink>
						</li>
					</ul>
				</nav>
				<button className={Style.wholeMenu} />
			</div>
		</header>
	);
};

export default HackerHeader;
