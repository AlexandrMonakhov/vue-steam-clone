<template>
  <div id="app">
		<div class="layout">
			<div class="layout__header">
				<the-header />
			</div>

			<div class="layout__body">
				<div class="layout__sidebar">
					<the-sidebar />
				</div>

				<div class="layout__content">
					<main class="main">
						<router-view />
					</main>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheSidebar from '@/components/TheSidebar.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
		TheSidebar,
	},
}
</script>

<style lang="scss">
.layout {
	&__body {
		display: flex;
	}

	&__content .main {
		max-height: calc(100vh - 112px);
	}

	&__content {
    overflow-y: scroll;
		width: 100%;
		padding: 32px 56px 0 32px;

		&::-webkit-scrollbar {
			width: 0;
			display: none;
		}
	}
}
</style>
