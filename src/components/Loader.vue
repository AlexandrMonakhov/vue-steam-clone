<template>
	<div class="loader">
		<div class="loader__ring"></div>
		<div class="loader__ring"></div>
		<div class="loader__ring"></div>
	</div>
</template>

<script>
export default {
	name: 'Loader',
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.loader {
	position: relative;
	width: 180px;
	height: 180px;
	display: flex;
	align-items: center;
	justify-content: center;
	transform-style: preserve-3d;
	transform: perspective(500px) rotateX(45deg);
}

.loader__ring {
	position: absolute;
	border: 15px solid $color_white;
	box-sizing: border-box;
	border-radius: 50%;
	box-shadow: 0 10px 0 #e0e0e0, inset 0 10px 0 #e0e0e0;
	animation: ring-animation 4.5s ease-in-out infinite;

	&:nth-child(1) {
		animation-delay: 0s;
	}

	&:nth-child(2) {
		animation-delay: 1.5s;
	}

	&:nth-child(3) {
		animation-delay: 3s;
	}
}

@keyframes ring-animation {
	0% {
		transform: translateZ(-100px);
		width: 100%;
		height: 100%;
	}
	25% {
		transform: translateZ(100px);
		width: 100%;
		height: 100%;
	}
	50% {
		transform: translateZ(100px);
		width: 35%;
		height: 35%;
	}
	75% {
		transform: translateZ(-100px);
		width: 35%;
		height: 35%;
	}
	100% {
		transform: translateZ(-100px);
		width: 100%;
		height: 100%;
	}
}
</style>
