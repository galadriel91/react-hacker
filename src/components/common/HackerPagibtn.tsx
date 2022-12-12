import React, { useState, useEffect, useCallback } from 'react';
import Style from '../../assets/scss/components/common/PagiBtn.module.scss';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';

const HackerPagibtn = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const id = useMatch(`/${location.state}/:id`);
	const [currentId, setCurrentId] = useState(id?.params.id);

	const pageLength = useCallback(() => {
		if (location.state === 'news') {
			return '10';
		} else if (location.state === 'ask') {
			return '2';
		} else if (location.state === 'show') {
			return '2';
		} else {
			return '1';
		}
	}, [location.state]);

	useEffect(() => {
		setCurrentId(id?.params.id);
	}, [id]);

	const onClickMovePage = useCallback(
		(page: number) => {
			navigate(`/${location.state}/${page}`, {
				state: location.state,
			});
		},
		[id],
	);

	return pageLength() === '1' ? null : (
		<div className={Style.remoteWrap}>
			<div className={Style.remoteIndex}>
				<button
					className={`${currentId === '1' ? Style.disable : ''} xi-angle-left`}
					disabled={currentId === '1'}
					onClick={() => onClickMovePage(Number(currentId) - 1)}
				/>
				<span>{currentId}</span>
				<button
					className={`${currentId === pageLength()} xi-angle-right`}
					disabled={currentId === pageLength()}
					onClick={() => onClickMovePage(Number(currentId) + 1)}
				/>
			</div>
		</div>
	);
};

export default HackerPagibtn;
