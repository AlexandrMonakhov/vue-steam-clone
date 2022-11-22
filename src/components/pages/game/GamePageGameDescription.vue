<template>
	<div class="game-page-game-description">
		<div class="game-page-game-description__title">
			<span class="ui-title">Description</span>

			<div class="game-page-game-description__divider">
				<div class="divider-16 width_40"></div>
			</div>
		</div>

		<div class="game-page-game-description__content">
			<p
				v-for="(description, index) in description.split(/\n/)"
				class="game-page-game-description__text caption-1"
				:key="`description-${index}`"
				v-html="description"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'GamePageGameDescription',
	props: {
		description: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
.game-page-game-description {
	display: flex;
	gap: 64px;

	&__text:not(:last-child) {
		margin-bottom: 24px;
	}
}
</style>
