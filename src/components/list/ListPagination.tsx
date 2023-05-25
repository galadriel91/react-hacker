import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { SET_INDEXNUM, SET_CURRENT } from 'store/features/common';
import Style from 'assets/scss/components/list/ListPagi.module.scss';

const ListPagination = () => {
	const navigate = useNavigate();
	const params = useParams();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const [plus, setPlus] = useState(0);
	const [minus, setMinus] = useState(0);
	const currentPage = useAppSelector(state => state.common.currentPage);
	const indexNum = useAppSelector(state => state.common.indexNum);

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

	const pageLength = useCallback(() => {
		if (location.pathname.includes('news')) {
			return Array(10)
				.fill('')
				.map((v, i) => (v = i + 1));
		} else if (location.pathname.includes('ask')) {
			return Array(2)
				.fill('')
				.map((v, i) => (v = i + 1));
		} else if (location.pathname.includes('show')) {
			return Array(2)
				.fill('')
				.map((v, i) => (v = i + 1));
		} else {
			return Array(1)
				.fill('')
				.map((v, i) => (v = i + 1));
		}
	}, [location.state]);

	const onClickPrev = useCallback(() => {
		setMinus(minus - 1);
		dispatch(SET_INDEXNUM(-3));
		dispatch(SET_CURRENT());
	}, [minus]);

	const onClickNext = useCallback(() => {
		setPlus(plus + 1);
		dispatch(SET_INDEXNUM(3));
		dispatch(SET_CURRENT());
	}, [plus]);

	useEffect(() => {
		if (minus === 0) {
			return;
		}
		navigate(`/${getTitleName()}/${currentPage}`);
	}, [minus]);

	useEffect(() => {
		if (plus === 0) {
			return;
		}
		navigate(`/${getTitleName()}/${currentPage}`);
	}, [plus]);

	return pageLength().length === 1 ? null : (
		<div className={Style.listContainer}>
			<ul>
				{getTitleName() === 'news' && currentPage > 3 ? (
					<li className={Style.prevBtn}>
						<button className="xi-angle-left" onClick={onClickPrev} />
					</li>
				) : (
					''
				)}
				{pageLength()
					.slice(0 + indexNum, 3 + indexNum)
					.map((v, index) => (
						<li key={index}>
							<Link
								to={`/${getTitleName()}/${v}`}
								state={getTitleName()}
								className={Number(params.id) === v ? Style.active : ''}
							>
								{v}
							</Link>
						</li>
					))}
				{getTitleName() === 'news' && currentPage < 10 ? (
					<li className={Style.nextBtn}>
						<button className="xi-angle-right" onClick={onClickNext} />
					</li>
				) : (
					''
				)}
			</ul>
		</div>
	);
};

export default ListPagination;
