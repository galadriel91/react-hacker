import React from 'react';
import HackerUpbtn from './HackerUpbtn';
import Style from 'assets/scss/components/common/HackerBtns.module.scss';

const HackerButtons = () => {
	return (
		<div className={Style.btnWrap}>
			<HackerUpbtn />
		</div>
	);
};

export default HackerButtons;
