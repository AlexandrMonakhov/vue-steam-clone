<template>
	<div class="card">
		<div class="card__body">
			<div class="card__image">
				<img :src="require(`@/assets/img/${name}.jpg`)" :alt="title" />
			</div>

			<div class="card__title">
				<p>{{ title }}</p>
			</div>

			<div class="card__subtitle">
				<p>{{ subtitle }}</p>
			</div>
		</div>

		<div class="card__footer">
			<div class="card__price">
				<p>${{ price }}</p>
			</div>

			<div
				class="card__platforms"
				v-if="icons.length > 0"
			>
				<svg-icon
					name="playstation"
					v-if="icons.includes('playstation')"
				/>
				<svg-icon
					name="windows"
					v-if="icons.includes('windows')"
				/>
				<svg-icon
					name="xbox"
					v-if="icons.includes('xbox')"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import SvgIcon from './atomics/SvgIcon.vue';

export default {
	name: 'Card',
  components: {
		SvgIcon
	},
	props: {
		title: {
			type: String,
			default: '',
		},
		subtitle: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		price: {
			type: Number,
			default: 0,
		},
		icons: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style lang="scss" scoped>
.card {

}
</style>
