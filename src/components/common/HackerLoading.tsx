import React from 'react';
import Style from '../../assets/scss/components/common/HackerLoading.module.scss';

const HackerLoading = () => {
	return (
		<div>
			{true ? (
				<div className={Style.loadingContainer}>
					<div className={Style['lds-facebook']}>
						<div />
						<div />
						<div />
					</div>
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default HackerLoading;
