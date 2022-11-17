<template>
	<header class="header">
		<div class="header__leading">
			<logo
				with-pointer
				@click="goToHomePage"
			/>
		</div>

		<div class="header__center">
			<text-input
				leading-icon="search"
				placeholder="Search anything"
				v-model="searchString"
				@input.native="onInputSearch"
				@cancel="onClickCancel"
			/>
		</div>

		<div class="header__trailing">
		</div>
	</header>
</template>

<script>
import { eventBus } from '@/main';
import Logo from '@/components/atomics/Logo.vue';
import TextInput from '@/components/compounds/TextInput.vue';

export default {
	name: 'TheHeader',
	components: {
		Logo,
		TextInput,
	},
	data() {
		return {
			searchString: '',
		}
	},
	methods: {
		onInputSearch() {
			eventBus.$emit('search', this.searchString);
		},
		onClickCancel() {
			eventBus.$emit('cancel', this.searchString = '');
		},
		goToHomePage() {
			this.$router.push('/');
		}
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.header {
	display: flex;
	align-items: center;
	min-height: 80px;
	background-color: $color_primary_alt;
	box-shadow: 0px 4px 8px rgba($color_black, .12);

	&__leading {
		margin-right: 32px;
	}
}
</style>
