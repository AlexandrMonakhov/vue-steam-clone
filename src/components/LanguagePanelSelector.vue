<template>
	<div class="language-panel-selector">
		<div class="language-panel-selector__button">
			<the-button
				type="ghost"
				:icon="currentLanguage"
				hide-label
				@click="toggleLanguagePanel"
			/>
		</div>

		<div
			class="language-panel-selector__language-panel"
			v-if="isLanguagePanelVisible"
		>
			<language-panel
				:languages="languages"
				@click-language="changeLanguage"
			/>
		</div>
	</div>
</template>

<script>
import languages from '@/config/languages';
import LanguagePanel from '@/components/LanguagePanel.vue';
import SvgIcon from '@/components/atomics/SvgIcon.vue';
import TheButton from '@/components/atomics/TheButton.vue';

export default {
	name: 'LanguagePanelSelector',
	components: {
		LanguagePanel,
		SvgIcon,
		TheButton,
	},
	data() {
		return {
			languages: languages,
			isLanguagePanelVisible: false,
			currentLanguage: 'russian',
		}
	},
	methods: {
		changeLanguage(language) {
			this.currentLanguage = language;

			this.hideLanguagePanel();
		},
		showLanguagePanel() {
			this.isLanguagePanelVisible = true;
		},
		hideLanguagePanel() {
			this.isLanguagePanelVisible = false;
		},
		toggleLanguagePanel() {
			this.isLanguagePanelVisible = !this.isLanguagePanelVisible;
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.language-panel-selector {
	position: relative;

	&__language-panel {
		position: absolute;
		top: 55px;
		right: 6px;
		z-index: 11;
		width: 160px;
		padding: 10px 16px;
		background-color: $color_secondary;
		border-radius: 5px;
		box-shadow: 10px 5px 40px rgba($color_black, .2);

		&::before {
			content: '';
			position: absolute;
			top: -15px;
			right: 8px;
			border: 8px solid transparent;
			border-bottom-color: $color_secondary;
			border-radius: 4px;
		}
	}
}
</style>
