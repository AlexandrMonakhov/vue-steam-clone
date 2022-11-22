import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../pages/HomePage.vue'),
  },
  {
    path: '/game/:id',
    name: 'GamePage',
    component: () => import('../pages/GamePage.vue'),
  },
];

const router = new VueRouter({
  routes
});

export default router;
