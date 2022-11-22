import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './assets/style/global.scss';

Vue.config.productionTip = false;

export const eventBus = new Vue();

const app = new Vue({
  router,
  render: h => h(App)
});

app.$mount('#app');
