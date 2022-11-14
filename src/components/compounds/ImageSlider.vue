<template>
	<div class="image-slider">
		<div
			class="image-slider__images"
			:style="sliderController.setTranslate()"
		>
			<div
				class="image-slider__image"
				v-for="(image, index) in sliderController.images"
				:key="index"
			>
				<img
					:src="require(`@/assets/images/${image}.jpg`)"
					alt="Изображение слайдера"
				/>
			</div>
		</div>

		<div class="image-slider__action">
			<div class="image-slider__prev-button">
				<button @click="sliderController.prev()">Назад</button>
			</div>
			<div class="image-slider__next-button">
				<button @click="sliderController.next()">Вперед</button>
			</div>
		</div>

		<div class="image-slider__pagination">
			<div
				class="image-slider__dot"
				:class="{ 'image-slider__dot_active': sliderController.isActiveSlide(index) }"
				v-for="(dot, index) in sliderController.images.length"
				:key="index"
				@click="sliderController.onDotClick(index)"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ImageSlider',
	props: {
		sliderController: {
			type: Object,
			default: null,
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.image-slider {
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;

	&__images {
		display: flex;
		width: 100%;
		transition: all 0.15s ease-out;
	}

	&__image {
		width: 100%;
		flex-shrink: 0;
	}

	&__prev-button {
		position: absolute;
		z-index: 10;
		top: 50%;
		transform: translateY(-50%);
		left: 32px;
	}

	&__next-button {
		position: absolute;
		z-index: 10;
		top: 50%;
		transform: translateY(-50%);
		right: 32px;
	}

	&__pagination {
		display: flex;
		position: absolute;
		z-index: 10;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
	}

	&__dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: $color_white;
		margin-right: 8px;
		cursor: pointer;

		&:last-child {
			margin-right: 0;
		}
	}

	&__dot_active {
		background-color: $color_accent;
	}
}
</style>
