<template>
	<div class="language-panel">
		<div
			class="language-panel__item clickable"
			v-for="language in languages"
			:key="language.label"
			@click="$emit('click-language', language.icon)"
		>
			<div class="language-panel__icon">
				<svg-icon :name="language.icon"/>
			</div>

			<div class="language-panel__label">
				{{ language.label }}
			</div>
		</div>
	</div>
</template>

<script>
import SvgIcon from '@/components/atomics/SvgIcon.vue';

export default {
	name: 'LanguagePanel',
	components: {
		SvgIcon,
	},
	props: {
		languages: {
			type: Array,
			default: () => [],
		},
	},
}
</script>

<style lang="scss" scoped>
.language-panel {
	&__item {
		display: flex;
		align-items: center;
		padding: 13px 0;
	}

	&__icon {
		margin-right: 16px;
	}
}
</style>
