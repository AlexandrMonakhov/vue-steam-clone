<template>
	<div class="game-page-about">
		<div class="game-page-about__title">
			<h1 class="h1 text-truncated">
				{{ game.title }}
			</h1>
		</div>

		<div class="game-page-about__list">
			<div
				class="game-page-about__genre"
				v-if="game.genre"
				v-html="genreLabel"
			/>
			<div
				class="game-page-about__developer"
				v-if="game.developer"
				v-html="developerLabel"
			/>
			<div
				class="game-page-about__release-date"
				v-if="game.release_date"
				v-html="releaseDateLabel"
			/>
			<div
				class="game-page-about__platform"
				v-if="game.platform"
				v-html="platformLabel"
			/>
			<div
				class="game-page-about__status"
				v-if="game.status"
				v-html="statusLabel"
			/>
		</div>

		<div
			class="game-page-about__action"
			v-if="game.game_url"
		>
			<the-button
				color="accent"
				full-width
				@click="goToOfficialGamePage"
			>
				Check more
			</the-button>
		</div>
	</div>
</template>

<script>
import TheButton from '@/components/atomics/TheButton.vue';
export default {
	name: 'GamePageAbout',
	components: {
		TheButton,
	},
	props: {
		game: {
			type: Object,
			default: null,
		},
	},
	computed: {
		genreLabel() {
			return `<span class="ui-text text-color_white-48">Genre:</span> <span class="ui-text ui-text_medium text-color_white">${this.game?.genre}</span>`;
		},
		developerLabel() {
			return `<span class="ui-text text-color_white-48">Developer:</span> <span class="ui-text ui-text_medium text-color_white">${this.game?.developer}</span>`;
		},
		releaseDateLabel() {
			return `<span class="ui-text text-color_white-48">Release Date:</span> <span class="ui-text ui-text_medium text-color_white">${this.game?.release_date}</span>`;
		},
		platformLabel() {
			return `<span class="ui-text text-color_white-48">Platform:</span> <span class="ui-text ui-text_medium text-color_white">${this.game?.platform}</span>`;
		},
		statusLabel() {
			return `<span class="ui-text text-color_white-48">Status:</span> <span class="ui-text ui-text_medium text-color_white">${this.game?.status}</span>`;
		},
	},
	methods: {
		goToOfficialGamePage() {
			window.open(this.game.game_url);
		}
	},
}
</script>

<style lang="scss" scoped>
.game-page-about {
	&__title {
		margin-bottom: 24px;
	}

	&__list {
		margin-bottom: 10px;
	}
}
</style>
