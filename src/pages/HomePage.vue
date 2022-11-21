<template>
	<div
		class="home-page"
		v-if="games.length > 0"
	>
		<div
			class="home-page__cards"
			v-if="isGamesExists"
		>
			<div
				class="home-page__game-card"
				v-for="game in filtredGames"
				:key="game.id"
			>
				<game-card
					:game="game"
					clickable
					@click-card="goToGamePage(game.id)"
				/>
			</div>
		</div>

		<div
			class="home-page__nothing-found"
			v-else
		>
			<nothing-found />
		</div>
	</div>

	<div
		class="home-page__loader"
		v-else
	>
		<loader />
	</div>
</template>

<script>
import { eventBus } from '@/main';
import GameCard from '@/components/GameCard.vue';
import Loader from '@/components/Loader.vue';
import NothingFound from '@/components/NothingFound.vue';
import ApiGames from '@/api/ApiGames';

export default {
	name: 'HomePage',
	components: {
		GameCard,
		Loader,
		NothingFound,
	},
	data() {
		return {
			games: [],
			searchString: '',
		}
	},
	computed: {
		filtredGames() {
			if (this.games.length < 0) {
				return;
			}

			return this.games.filter((game) => {
				return game.title?.toLowerCase()
					.includes(this.searchString?.toLowerCase());
			});
		},
		isGamesExists() {
			return this.filtredGames.length > 0;
		},
	},
	created() {
		eventBus.$on('search', (searchString) => {
			this.searchString = searchString;
		});
		eventBus.$on('cancel', (value) => {
			this.searchString = value;
		});
	},
	mounted() {
		this.fetchGames();
	},
	methods: {
		async fetchGames() {
			await ApiGames.games()
				.then((response) => {
					this.games = response.data;
				});
		},
		goToGamePage(id) {
			this.$router.push(`/game/${id}`);
		},
	},
}
</script>

<style lang="scss" scoped>
.home-page {
	&__cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(365px, 1fr));
		gap: 32px;
	}

	&__nothing-found {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 112px);
	}

	&__loader {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 112px);
	}
}
</style>
