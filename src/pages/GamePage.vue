<template>
	<div
		class="game-page"
		v-if="game"
	>
		<div class="game-page__slider">
			<image-slider :slider-controller="sliderController" />
		</div>
	</div>

	<div
		class="game-page__loader"
		v-else
	>
		<loader />
	</div>
</template>

<script>
import ApiGames from '@/api/ApiGames';
import ImageSlider from '@/components/compounds/ImageSlider.vue';
import Loader from '@/components/Loader.vue';
import { SliderController } from '@/controllers/slider-controller';

export default {
	name: 'GamePage',
	components: {
		ImageSlider,
		Loader,
	},
	data() {
		return {
			sliderController: new SliderController(),
			game: null,
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

	&__loader {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 112px);
	}
}
</style>
