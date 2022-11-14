<template>
	<header class="header">
		<div class="header__leading">
			<logo with-pointer />
		</div>

		<div class="header__center">
			<text-input
				leading-icon="search"
				placeholder="Search anything"
				v-model="searchStr"
			/>
		</div>

		<div class="header__trailing">
		</div>
	</header>
</template>

<script>
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
			searchStr: '',
		}
	}
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
