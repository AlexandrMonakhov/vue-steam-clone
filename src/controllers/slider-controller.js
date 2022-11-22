class SliderController {
	sliderElement = null;
	currentSlideIndex = 0;
	images = [];

	isActiveSlide(index) {
		return this.currentSlideIndex === index;
	}

	setSliderElement(element) {
		this.sliderElement = element;
	}

	setTranslateStyle() {
		return {
			transform: `translateX(-${this.getSliderWidth() * this.currentSlideIndex}px)`
		};
	}

	getSliderWidth() {
		return this.sliderElement?.offsetWidth ?? 0;
	}

	setImages(images) {
		this.images = images;
	}

	getImagesLength() {
		return this.images.length;
	}

	prev() {
		this.currentSlideIndex--;

		if (this.currentSlideIndex < 0) {
			this.currentSlideIndex = this.getImagesLength() - 1;
		}
	}

	next() {
		this.currentSlideIndex++;

		if (this.currentSlideIndex >= this.getImagesLength()) {
			this.currentSlideIndex = 0;
		}
	}

	onDotClick(index) {
		this.currentSlideIndex = index;
	}
}

export {
	SliderController,
}
