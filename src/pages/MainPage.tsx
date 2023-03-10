import React, { useEffect } from 'react';
import MainHero from 'components/main/MainHero';
import MainSection from 'components/main/MainSection';
import secLogo from 'assets/images/HackerNews1.svg';
import { useAppDispatch } from 'store/hooks';
import { OFF_LOADING } from 'store/features/items';

const MainPage = () => {
	const dispatch = useAppDispatch();
	const loadImage = () => {
		dispatch(OFF_LOADING());
	};
	useEffect(() => {
		document.title = `Main | Hacker News `;
	}, []);
	return (
		<div>
			<MainHero />
			<MainSection />
			<img className="loadingimg" src={secLogo} alt="Hacker 로고 이미지" onLoad={loadImage} />
		</div>
	);
};

export default MainPage;
