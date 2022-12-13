import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { store } from './store/index';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import HackerScroll from './components/common/HackerScroll';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<HashRouter>
		<Provider store={store}>
			<HackerScroll />
			<App />
		</Provider>
	</HashRouter>,
);
