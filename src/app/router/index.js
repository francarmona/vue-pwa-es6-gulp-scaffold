import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/pages/Home.vue';
import Page1 from '../components/pages/Page1.vue';
import Page2 from '../components/pages/Page2.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/page1',
      name: 'Page 1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'Page 2',
      component: Page2
    }
  ]
});
