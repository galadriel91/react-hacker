import React from 'react';
import 'assets/scss/components/common/HackerFooter.scss';

const HackerFooter = () => {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<footer>
			<div className="footerWrap">
				<h2>© {getCurrentYear()} LEE MOON SEOB</h2>
				<a
					href="https://github.com/galadriel91"
					target="_blank"
					className="xi-github"
					rel="noreferrer"
				>
					&nbsp;
				</a>
			</div>
		</footer>
	);
};

export default HackerFooter;
