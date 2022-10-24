import Api from './index';

export default {
	getGameList() {
		return Api.get('game');
	},
}
