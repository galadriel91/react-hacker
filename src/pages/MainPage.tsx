import { useEffect } from 'react';
import MainHero from 'components/main/MainHero';
import secLogo from 'assets/images/HackerNews1.svg';
import MainSection from 'components/main/MainSection';

const MainPage = () => {
	useEffect(() => {
		document.title = `Main | Hacker News `;
	}, []);
	return (
		<div>
			<MainHero />
			<MainSection />
			<img className="loadingimg" src={secLogo} alt="Hacker 로고 이미지" />
		</div>
	);
};

export default MainPage;
