<template>
	<div
		class="game-card"
		:class="className"
		@click="onClickGameCard(game.id)"
	>
		<div class="game-card__thumbnail">
			<img
				:src="game.thumbnail"
				:alt="game.title"
			/>
		</div>

		<div class="game-card__title">
			<h3 class="h3 text-truncate">
				{{ game.title }}
			</h3>
		</div>

		<div class="game-card__subtitle">
			<span class="caption-2 text-color_white-64 text-truncate">
				{{ game.genre }}
			</span>
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
		},
		clickable: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		className() {
			return [
				this.clickable && `clickable`,
			]
		},
	},
	methods: {
		onClickGameCard(gameId) {
			this.$emit('click-card', gameId);
		}
	}
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixins.scss';

.game-card {
	&__thumbnail {
		display: flex;
		@include border-radius(4px);
		overflow: hidden;
		margin-bottom: 20px;

		img {
			width: 100%;
			height: 100%;
		}
	}

	&__title {
		margin-bottom: 8px;
	}
}
</style>
