import React from 'react';
import './assets/scss/index.scss';
import HackerHeader from './components/common/HackerHeader';
import HackerFooter from './components/common/HackerFooter';
import ListPage from './pages/ListPage';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<HackerHeader />
			<Routes>
				<Route path="/" element={<Navigate replace to="/news" />} />
				<Route path="/news" element={<ListPage />} />
				<Route path="/ask" element={<ListPage />} />
				<Route path="/jobs" element={<ListPage />} />
				<Route path="/show" element={<ListPage />} />
			</Routes>
			<HackerFooter />
		</div>
	);
};

export default App;
