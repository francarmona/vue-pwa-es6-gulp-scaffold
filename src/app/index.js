import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import VueMq from 'vue-mq';

router.afterEach(() => {
  if(store.state.sideNav.opened) {
    store.commit('sideNav/toggleSideNav');
  }
});

Vue.use(VueMq, {
  breakpoints: {
    sm: 549,
    md: 800,
    lg: Infinity,
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(() => {
    console.log('Service Worker registered');
  })
    .catch((error) => {
      console.log('Registration failed with ' + error);
    });
}
