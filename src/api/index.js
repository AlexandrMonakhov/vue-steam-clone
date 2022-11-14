import axios from 'axios';

export default {
	createAxios() {
		const axiosConfig = {
			baseURL: process.env.VUE_APP_BASE_URL,
			headers: {
				'X-RapidAPI-Key': process.env.VUE_APP_API_KEY,
				'X-RapidAPI-Host': process.env.VUE_APP_API_HOST,
			},
		};

		return axios.create(axiosConfig);
	},
	get(url, params = null) {
		return this.createAxios()
			.get(url, params)
			.catch((error) => console.error(error));
	},
}
