import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ConfigProvider } from 'antd';

import './index.css';
import App from './views/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ConfigProvider>
					<App />
				</ConfigProvider>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
