<template>
	<div class="game-page-minimum-system-requirements">
		<div class="game-page-minimum-system-requirements__title">
			<span class="ui-title">Minimum System Requirements</span>

			<div class="game-page-minimum-system-requirements__divider">
				<div class="divider-16 width_40"></div>
			</div>
		</div>

		<div class="game-page-minimum-system-requirements__content">
			<div
				class="game-page-minimum-system-requirements__graphics"
				v-if="requirements.graphics"
				v-html="graphicsLabel"
			/>
			<div
				class="game-page-minimum-system-requirements__memory"
				v-if="requirements.memory"
				v-html="memoryLabel"
			/>
			<div
				class="game-page-minimum-system-requirements__os"
				v-if="requirements.os"
				v-html="osLabel"
			/>
			<div
				class="game-page-minimum-system-requirements__processor"
				v-if="requirements.processor"
				v-html="processorLabel"
			/>
			<div
				class="game-page-minimum-system-requirements__storage"
				v-if="requirements.storage"
				v-html="storageLabel"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GamePageMinimumSystemRequirements',
	props: {
		requirements: {
			type: Object,
			default: null,
		},
	},
	computed: {
		graphicsLabel() {
			return `<span class="caption-1 text-color_white-48">Graphics:</span> <span class="caption-1 caption-1_medium text-color_white">${this.requirements?.graphics}</span>`;
		},
		memoryLabel() {
			return `<span class="caption-1 text-color_white-48">Memory:</span> <span class="caption-1 caption-1_medium text-color_white">${this.requirements?.memory}</span>`;
		},
		osLabel() {
			return `<span class="caption-1 text-color_white-48">OS:</span> <span class="caption-1 caption-1_medium text-color_white">${this.requirements?.os}</span>`;
		},
		processorLabel() {
			return `<span class="caption-1 text-color_white-48">Processor:</span> <span class="caption-1 caption-1_medium text-color_white">${this.requirements?.processor}</span>`;
		},
		storageLabel() {
			return `<span class="caption-1 text-color_white-48">Storage:</span> <span class="caption-1 caption-1_medium text-color_white">${this.requirements?.storage}</span>`;
		},
	},
}
</script>

<style lang="scss" scoped>
.game-page-minimum-system-requirements {
	display: flex;
	gap: 64px;

}
</style>
