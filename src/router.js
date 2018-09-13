import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Quantyst from '@/components/Quantyst.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/quantyst',
      name: 'Quantyst',
      component: Quantyst,
    },
  ],
});
