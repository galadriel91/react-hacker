import React from 'react';
import Style from '../../assets/scss/components/common/HackerBtns.module.scss';
import HackerUpbtn from './HackerUpbtn';

const HackerButtons = () => {
	return (
		<div className={Style.btnWrap}>
			<HackerUpbtn />
			{/* <PagiBtn /> */}
		</div>
	);
};

export default HackerButtons;
