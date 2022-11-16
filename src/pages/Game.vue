<template>
	<div class="game-page">
		<div class="game-page__slider">
			<image-slider :slider-controller="sliderController" />
		</div>
	</div>
</template>

<script>
import ApiGames from '@/api/ApiGames';
import ImageSlider from '../components/compounds/ImageSlider.vue';
import { SliderController } from '@/controllers/slider-controller';

export default {
	name: 'Game',
	components: {
		ImageSlider
	},
	data() {
		return {
			sliderController: new SliderController(),
			game: [],
		}
	},
	mounted() {
		this.fetchGame();
	},
	methods: {
		async fetchGame() {
			const gameId = this.$route.params.id;

			await ApiGames.game(gameId)
				.then(response => {
					this.game = response.data;

					this.sliderController.setImages(this.game.screenshots);
				});
		},
	},
}
</script>

<style lang="scss" scoped>
.game-page {
	&__slider {
		width: 856px;
		height: 483px;
	}
}
</style>
