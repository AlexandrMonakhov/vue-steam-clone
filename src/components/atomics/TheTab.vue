<template>
	<div
		class="tab noselect"
		:class="className"
		@click="$emit('click-tab')"
	>
		<div
			class="tab__title caption-1 text-truncated"
			:class="titleClassName"
		>
			{{ title }}
		</div>

		<div class="tab__underline" />
	</div>
</template>

<script>
export default {
	name: 'Tab',
	props: {
		title: {
			type: String,
			default: '',
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		className() {
			return [
				this.active && `tab_active`,
			];
		},
		titleClassName() {
			return [
				this.active ? 'caption-1_medium text-color_white' : 'caption-1 text-color_white-48',
			];
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.tab {
	max-width: fit-content;
	min-height: 24px;
	cursor: pointer;

	&_active {
		.tab__underline {
			width: 100%;
			height: 4px;
			background-color: $color_accent;
		}
	}
}
</style>
