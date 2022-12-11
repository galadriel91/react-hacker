import React from 'react';
import { useAppSelector } from '../../store/hooks';
import Style from '../../assets/scss/components/common/HackerLoading.module.scss';

const HackerLoading = () => {
	const loading = useAppSelector(state => state.items.isLoading);
	return (
		<div>
			{loading ? (
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
