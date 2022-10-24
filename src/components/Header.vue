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

		<div class="header__trailing"></div>
	</header>
</template>

<script>
import Logo from '@/components/atomics/Logo.vue';
import TextInput from '@/components/compounds/TextInput.vue';

export default {
	name: 'Header',
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
.header {
	display: flex;
	align-items: center;
	min-height: 80px;

	&__leading {
		margin-right: 32px;
	}
}
</style>
