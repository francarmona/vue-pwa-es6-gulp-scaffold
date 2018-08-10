import Vue from 'vue';
import Router from 'vue-router';
import Pwa from '../components/pages/Pwa.vue';
import VueJs from '../components/pages/VueJs.vue';
import Page3 from '../components/pages/Page3.vue';
import Page4 from '../components/pages/Page4.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PWA',
      component: Pwa
    },
    {
      path: '/vuejs',
      name: 'Vue.js',
      component: VueJs
    },
    {
      path: '/page3',
      name: 'Page 3',
      component: Page3
    },
    {
      path: '/page4',
      name: 'Page 4',
      component: Page4
    }
  ]
});
