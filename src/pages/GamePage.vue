<template>
	<div
		class="game-page"
		v-if="game"
	>
		<div class="game-page__slider-about">
			<div class="game-page__slider">
				<image-slider :slider-controller="sliderController" />
			</div>
			<div class="game-page__about">
				<game-page-about :game="game" />
			</div>
		</div>

		<div class="game-page__tabs-content">
			<div class="game-page__tabs">
				<div
					class="game-page__tab"
					v-if="isGameDescriptionExists"
				>
					<the-tab
						title="Description"
						:active="activeTab === 0"
						@click-tab="activeTab = 0"
					/>
				</div>
				<div
					class="game-page__tab"
					v-if="isGameMinimumSystemRequirementsExists"
				>
					<the-tab
						title="Minimum System Requirements"
						:active="activeTab === 1"
						@click-tab="activeTab = 1"
					/>
				</div>
			</div>
			<div class="game-page__content">
				<div
					class="game-page__game-description"
					v-if="isTabDesriptionActive"
				>
					<game-page-game-description
						:description="gameDescription"
					/>
				</div>
				<div
					class="game-page__game-minimum-system-requirements"
					v-if="isTabMinimumSystemRequirementsActive"
				>
					<game-page-minimum-system-requirements
						:requirements="gameMinimumSystemRequirements"
					/>
				</div>
			</div>
		</div>
	</div>

	<div
		class="game-page__loader"
		v-else
	>
		<loader />
	</div>
</template>

<script>
import ApiGames from '@/api/ApiGames';
import ImageSlider from '@/components/compounds/ImageSlider.vue';
import Loader from '@/components/Loader.vue';
import GamePageAbout from '@/components/pages/game/GamePageAbout.vue';
import TheTab from '@/components/atomics/TheTab.vue';
import GamePageGameDescription from '@/components/pages/game/GamePageGameDescription.vue';
import GamePageMinimumSystemRequirements from '@/components/pages/game/GamePageMinimumSystemRequirements.vue';
import { SliderController } from '@/controllers/slider-controller';

export default {
	name: 'GamePage',
	components: {
		ImageSlider,
		Loader,
		GamePageAbout,
		TheTab,
		GamePageGameDescription,
		GamePageMinimumSystemRequirements,
	},
	data() {
		return {
			sliderController: new SliderController(),
			game: null,
			activeTab: 0,
		}
	},
	computed: {
		isGameDescriptionExists() {
			return this.game.description && this.game.short_description;
		},
		isGameMinimumSystemRequirementsExists() {
			return this.game.minimum_system_requirements;
		},
		gameDescription() {
			return (this.game.description || this.game.short_description) ?? '';
		},
		gameMinimumSystemRequirements() {
			if (!this.isGameMinimumSystemRequirementsExists) {
				return;
			}

			return this.game.minimum_system_requirements;
		},
		isTabMinimumSystemRequirementsActive() {
			return this.activeTab === 1;
		},
		isTabDesriptionActive() {
			return this.activeTab === 0;
		},
	},
	mounted() {
		this.fetchGame();
	},
	methods: {
		async fetchGame() {
			const gameId = this.$route.params.id;

			await ApiGames.game(gameId)
				.then(response => {
					this.game = response.data;

					this.sliderController.setImages(this.game.screenshots);
				});
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';
@import '@/assets/style/mixins.scss';

.game-page {
	padding-bottom: 32px;

	&__slider-about {
		display: flex;
		background-color: $color_primary_alt;
		margin-bottom: 32px;
		@include border-radius(8px);
		overflow: hidden;
	}

	&__slider {
		max-width: 856px;
		max-height: 483px;
	}

	&__about {
		width: 100%;
		padding: 16px 32px;
	}

	&__tabs {
		display: flex;
		padding: 10px 30px;
		background-color: $color_primary_alt;
		border-radius: 8px;
		margin-bottom: 32px;
	}

	&__tab {
		margin-right: 32px;

		&:last-child {
			margin-right: 0;
		}
	}

	&__loader {
		display: flex;
		align-items: center;
		justify-content: center;
		height: calc(100vh - 112px);
	}
}
</style>
