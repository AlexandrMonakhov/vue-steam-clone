<template>
  <div class="home-page">
		<div class="home-page__cards">
			<div
				class="home-page__game-card"
				v-for="game in games"
				:key="game.id"
			>
				<game-card
					:game="game"
					@click-card="goToGamePage(game.id)"
				/>
			</div>
		</div>
  </div>
</template>

<script>
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
		}
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
		}
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
