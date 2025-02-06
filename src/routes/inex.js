import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import payment from '../components/PayMent.vue';

const routes = [
  {
    path: '/payment',
    name: 'payment',
    component: payment,

  },
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
