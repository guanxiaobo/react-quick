import axios from 'axios';
import qs from 'query-string';

export const HTTP = axios.create({
	// baseURL: ENV.baseUrl,
	timeout: 30000,
	withCredentials: true,
	paramsSerializer: (params) => qs.stringify(params),
	headers: {},
	responseType: 'text'
});

HTTP.interceptors.response.use(
	function (res) {
		return res.data || res;
	},
	function (error) {
		const res = error.response;
		if (error && error.message.indexOf('timeout') > -1) {
			return Promise.reject({
				timeout: true
			});
		}
		if (res) {
			switch (res.status) {
				case 401:
					console.log(401);
					break;
				case 400:
					break;
				case 500:
					break;
			}
		}
		console.log(error);
		return Promise.reject(error);
	}
);

HTTP.interceptors.request.use(
	function (config) {
		if (process.env.NODE_ENV === 'development') {
			console.log('development');
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);
