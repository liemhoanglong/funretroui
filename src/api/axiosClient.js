import axios from 'axios';
import queryString from 'query-string';

// const link = "https://funretroapi.herokuapp.com/";
const link = "http://localhost:3001/";

const axiosClient = axios.create({
	baseURL: link,
	headers: {
		'content-type': 'application/json',
	},
	paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    return config;
})

axiosClient.interceptors.response.use((response) => {
	if (response && response.data) {
		return response.data;
	}
	return response;
}, (error) => {
    throw error;
});

export default axiosClient;