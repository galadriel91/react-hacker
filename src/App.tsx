import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HackerHeader from 'components/common/HackerHeader';
import HackerFooter from 'components/common/HackerFooter';
import HackerLoading from 'components/common/HackerLoading';
import HackerButtons from 'components/common/HackerButtons';
import ListPage from 'pages/ListPage';
import UserPage from 'pages/UserPage';
import PostPage from 'pages/PostPage';
import NotPage from 'pages/NotPage';
import 'assets/scss/index.scss';

const App = () => {
	return (
		<div>
			<HackerHeader />
			<div className="pageWrap">
				<Routes>
					<Route path="/" element={<Navigate replace to="/news/1" state="news" />} />
					<Route path="/news/:id" element={<ListPage />} />
					<Route path="/ask/:id" element={<ListPage />} />
					<Route path="/jobs/:id" element={<ListPage />} />
					<Route path="/show/:id" element={<ListPage />} />
					<Route path="/user/:id" element={<UserPage />} />
					<Route path="/post/:id" element={<PostPage />} />
					<Route path="*" element={<NotPage />} />
				</Routes>
			</div>
			<HackerFooter />
			<HackerLoading />
			<HackerButtons />
		</div>
	);
};

export default App;
