import React, { useEffect } from 'react';
import Style from 'assets/scss/components/main/MainHero.module.scss';

const MainHero = () => {
	return (
		<div className={Style.heroContainer}>
			<div className={Style.heroContainerWrap}>
				<div className={Style.heroContainerWrapText}>
					<h2>
						Hacker News <br className={Style.responsive} />
						Provides
						<br className={Style.nomal} />
						Fastest IT Trend
					</h2>
					<p>
						All-in-one place for the latest IT trends,
						<br className={Style.responsive} />
						Fastest,
						<br className={Style.nomal} />
						anytime, anywhere.
					</p>
					<a href="https://news.ycombinator.com/login?goto=news">Sign Up</a>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
