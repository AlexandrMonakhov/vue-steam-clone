<template>
  <div class="home-page">
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
					@click-card="goToGamePage(game.id)"
				/>
			</div>
		</div>

		<div
			class="home-page__empty"
			v-else
		>
			Ничего не найдено
		</div>
  </div>
</template>

<script>
import { eventBus } from '@/main';
import GameCard from '@/components/GameCard.vue';
import ApiGames from '@/api/ApiGames';

export default {
	name: 'Home',
	components: {
		GameCard,
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
		fetchGames() {
			ApiGames.games()
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
}
</style>
