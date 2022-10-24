<template>
  <div id="app">
	<header />

    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
	name: 'App',
	components: {
		Header,
	},
}
</script>

<style lang="scss">

</style>
