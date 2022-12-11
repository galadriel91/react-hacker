import React from 'react';
import './assets/scss/index.scss';
import HackerHeader from './components/common/HackerHeader';
import HackerFooter from './components/common/HackerFooter';
import ListPage from './pages/ListPage';
import UserPage from './pages/UserPage';
import PostPage from './pages/PostPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import HackerLoading from './components/common/HackerLoading';

const App = () => {
	return (
		<div>
			<HackerHeader />
			<div className="pageWrap">
				<Routes>
					<Route path="/" element={<Navigate replace to="/news" />} />
					<Route path="/news" element={<ListPage />} />
					<Route path="/ask" element={<ListPage />} />
					<Route path="/jobs" element={<ListPage />} />
					<Route path="/show" element={<ListPage />} />
					<Route path="/user/:id" element={<UserPage />} />
					<Route path="/post/:id" element={<PostPage />} />
				</Routes>
			</div>
			<HackerFooter />
			<HackerLoading />
		</div>
	);
};

export default App;
