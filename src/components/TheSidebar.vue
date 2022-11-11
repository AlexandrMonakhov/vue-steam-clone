<template>
	<div class="sidebar">
		<div class="sidebar__action">

		</div>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/vars.scss';

.sidebar {
	width: 100px;
	background-color: $color_primary_alt;
	height: calc(100vh - 80px);
	mix-blend-mode: normal;
	box-shadow: 4px 0px 6px rgba($color_black, .12);
}
</style>
