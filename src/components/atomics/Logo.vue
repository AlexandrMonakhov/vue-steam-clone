<template>
	<div
		class="logo"
		:class="className"
	>
		<svg-icon
			name="logo"
			@click="$emit('click')"
		/>
	</div>
</template>

<script>
import SvgIcon from '@/components/atomics/SvgIcon.vue';

export default {
	name: 'Logo',
	components: {
		SvgIcon,
	},
	props: {
		withPointer: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		className() {
			return [
				this.withPointer && `logo_with-pointer`,
			]
		},
	}
}
</script>

<style lang="scss" scoped>
.logo {
	display: flex;

	&_with-pointer {
		cursor: pointer;
	}
}
</style>
