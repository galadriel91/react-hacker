import React from 'react';
import Style from '../../assets/scss/components/common/HackerBtns.module.scss';
import HackerPagibtn from './HackerPagibtn';
import HackerUpbtn from './HackerUpbtn';

const HackerButtons = () => {
	return (
		<div className={Style.btnWrap}>
			<HackerPagibtn />
			<HackerUpbtn />
		</div>
	);
};

export default HackerButtons;
