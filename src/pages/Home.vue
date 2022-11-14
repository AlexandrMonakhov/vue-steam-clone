<template>
  <div class="home-page">
    <div class="home-page__slider">
			<image-slider :slider-controller="sliderController" />
		</div>
  </div>
</template>

<script>
import ImageSlider from '@/components/compounds/ImageSlider.vue';
import { SliderController } from '@/controllers/slider-controller';

export default {
	name: 'Home',
	components: {
		ImageSlider,
	},
	data() {
		return {
			sliderController: new SliderController(),
			images: ['slider-image', 'slider-image-2', 'slider-image', 'slider-image-2', 'slider-image', 'slider-image-2'],
		}
	},
	mounted() {
		this.sliderController.setImages(this.images);
	},
}
</script>

<style lang="scss" scoped>
.home-page {
	&__slider {
		width: 856px;
		height: 483px;
	}
}
</style>
