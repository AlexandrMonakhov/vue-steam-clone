import axios from 'axios';

export default {
	createAxios() {
		return axios.create({
			baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
			headers: {
				// 'crossDomain': true,
				// 'Content-Type': 'application/json',
				// 'Access-Control-Allow-Credentials': 'true',
				// 'Access-Control-Allow-Origin': '*',
				// 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
				// 'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Origin, Authorization',
				'X-RapidAPI-Key': '177a809748msh8cef34940e459f8p1fa13bjsn0336072601f4',
				'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
			},
			timeout: 30000,
		});
  },
  get(url, params = null) {
		console.log(process.env.VUE_APP_API_KEY);
		return this.createAxios()
			.get(url, params)
			.catch((error) => console.error(error));
	},
}
