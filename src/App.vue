<template>
  <div id="app">
		<the-header />

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
	name: 'App',
	components: {
		TheHeader,
	},
}
</script>

<style lang="scss">

</style>
