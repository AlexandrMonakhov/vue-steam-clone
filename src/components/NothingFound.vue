<template>
	<div class="nothing-found">
		<div class="nothing-found__icon">
			😔
		</div>
		<div class="nothing-found__label">
			<h2 class="h2">
				Ничего не найдено
			</h2>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NothingFound',
}
</script>

<style lang="scss" scoped>
.nothing-found {
	text-align: center;

	&__icon {
		font-size: 70px;
	}
}
</style>
