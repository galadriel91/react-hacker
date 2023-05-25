import React from 'react';
import Style from 'assets/scss/components/main/MainHero.module.scss';
import HackerHeader from 'components/common/HackerHeader';
import mainBg from 'assets/images/mainBg.png';
import { useAppDispatch } from 'store/hooks';
import { OFF_LOADING } from 'store/features/items';

const MainHero = () => {
	const dispatch = useAppDispatch();
	const loadImage = () => {
		dispatch(OFF_LOADING());
	};
	return (
		<div className={Style.heroContainer}>
			<HackerHeader />
			<div className={Style.heroContainerWrap}>
				<div className={Style.heroContainerWrapText}>
					<h2>
						Hacker News <br className={Style.responsive} />
						Provides
						<br className={Style.nomal} />
						Fastest IT Trend
					</h2>
					<p>
						All-in-one place for the latest IT trends,&nbsp;
						<br className={Style.responsive} />
						Fastest,
						<br className={Style.nomal} />
						anytime, anywhere.
					</p>
					<a href="https://news.ycombinator.com/login?goto=news" target="_blank" rel="noreferrer">
						Sign Up
					</a>
				</div>
			</div>
			<img className="loadingimg" src={mainBg} alt="이미지" onLoad={loadImage} />
		</div>
	);
};

export default MainHero;
