import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import Style from 'assets/scss/components/common/PagiBtn.module.scss';

const HackerPagibtn = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const getTitleName = useCallback(() => {
		if (location.pathname.includes('news')) {
			return 'news';
		} else if (location.pathname.includes('ask')) {
			return 'ask';
		} else if (location.pathname.includes('jobs')) {
			return 'jobs';
		} else if (location.pathname.includes('show')) {
			return 'show';
		}
	}, [location.state]);

	const id = useMatch(`/${getTitleName()}/:id`);
	const [currentId, setCurrentId] = useState(id?.params.id);

	const pageLength = useCallback(() => {
		if (location.pathname.includes('news')) {
			return '10';
		} else if (location.pathname.includes('ask')) {
			return '2';
		} else if (location.pathname.includes('show')) {
			return '2';
		} else {
			return '1';
		}
	}, [location.pathname]);

	useEffect(() => {
		setCurrentId(id?.params.id);
	}, [id]);

	const onClickMovePage = useCallback(
		(page: number) => {
			navigate(`/${getTitleName()}/${page}`, {
				state: getTitleName(),
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
					className={`${currentId === pageLength() ? Style.disable : ''} xi-angle-right`}
					disabled={currentId === pageLength()}
					onClick={() => onClickMovePage(Number(currentId) + 1)}
				/>
			</div>
		</div>
	);
};

export default HackerPagibtn;
