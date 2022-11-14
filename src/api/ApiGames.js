import Api from './index';

export default {
	games() {
		return Api.get(`games`);
	},
	game(id) {
		return Api.get(`game?id=${id}`);
	},
}
