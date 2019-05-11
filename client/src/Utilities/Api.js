import axios from 'axios';
const baseUrl = 'http://localhost:5000';

export default {
	followers() {
		return {
			getFollowersByName: (name, cursor) => {
				const url = `${baseUrl}/getFollowers/${name}/${cursor ? cursor : '-1'}`;
				const response = axios.get(url);
				return response;
			},
		};
	},
};
