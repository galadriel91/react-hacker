import React, { useEffect } from 'react';
import Style from 'assets/scss/components/main/MainSection.module.scss';
import news from 'assets/images/news.jpg';
import sectionOne from 'assets/images/section1.jpg';
import sectionTwo from 'assets/images/section2.jpg';
import right from 'assets/images/right.svg';
import { Link } from 'react-router-dom';

const MainSection = () => {
	return (
		<div className={Style.mainSection}>
			<div className={Style.mainSectionTop}>
				<div className={Style.sectionText}>
					<h2>
						Hacker News created <br />
						a new place for the <br />
						latest IT information.
					</h2>
					<p>
						Hacker News is the leading and go-to source for timely and
						<br />
						relevant breaking news from the world of cybersecurity,
						<br />
						as well as valuable insights into the latest threats and solutions.
					</p>
					<Link to="/news/1">
						<span>View News</span>
						<img src={right} alt="화살표 이미지" />
					</Link>
				</div>
				<img className={Style.sectionImage} src={news} alt="뉴스 이미지" />
			</div>
			<div className={Style.mainSectionMiddle}>
				<img className={Style.sectionImage} src={sectionOne} alt="섹션 이미지" />
				<div className={Style.sectionText}>
					<h2>
						Share opinions with <br className={Style.responsive} />
						different people.
					</h2>
					<p>
						For over a decade, HackerNews has established itself as a
						<br />
						leading voice in the cybersecurity industry, with a dedicated <br />
						audience of over 45 million annual readers who rely on us for <br />
						the latest news, insights, and solutions.
					</p>
					<Link to="/ask/1">
						<span>View News</span>
						<img src={right} alt="화살표 이미지" />
					</Link>
				</div>
			</div>
			<div className={Style.mainSectionBottom}>
				<div className={Style.sectionText}>
					<h2>
						Find a variety of <br className={Style.responsive} />
						IT jobs here.
					</h2>
					<p>
						As an independent news source, we provide unbiased and
						<br />
						comprehensive coverage of the industry, making us a trusted
						<br />
						resource for professionals and enthusiasts alike.
					</p>
					<Link to="/jobs/1">
						<span>View News</span>
						<img src={right} alt="화살표 이미지" />
					</Link>
				</div>
				<img className={Style.sectionImage} src={sectionTwo} alt="섹션 이미지" />
			</div>
		</div>
	);
};

export default MainSection;
