import React, { useEffect } from 'react';
import MainHero from 'components/main/MainHero';
import MainSection from 'components/main/MainSection';

const MainPage = () => {
	useEffect(() => {
		document.title = `Main | Hacker News `;
	}, []);
	return (
		<div>
			<MainHero />
			<MainSection />
		</div>
	);
};

export default MainPage;
