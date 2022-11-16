<template>
	<div
		class="game-card"
		@click="onClickGameCard(game.id)"
	>
		<div class="game-card__thumbnail">
			<img :src="game.thumbnail" :alt="game.title" />
		</div>

		<div class="game-card__title">
			<h2 class="text-truncate">{{ game.title }}</h2>
		</div>

		<div class="game-card__subtitle">
			<span class="text-truncate">{{ game.genre }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GameCard',
	props: {
		game: {
			type: Object,
			default: null,
		}
	},
	methods: {
		onClickGameCard(gameId) {
			this.$emit('click-card', gameId);
		}
	}
}
</script>

<style lang="scss" scoped>
.game-card {
	&__thumbnail {
		img {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
