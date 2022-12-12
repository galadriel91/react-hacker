import React from 'react';
import HackerPagibtn from './HackerPagibtn';
import HackerUpbtn from './HackerUpbtn';
import Style from 'assets/scss/components/common/HackerBtns.module.scss';

const HackerButtons = () => {
	return (
		<div className={Style.btnWrap}>
			<HackerPagibtn />
			<HackerUpbtn />
		</div>
	);
};

export default HackerButtons;
