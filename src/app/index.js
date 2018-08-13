import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { MUTATION_TYPES } from './store/types';

router.afterEach(() => {
  if(store.state.navigation.sideNav.opened) {
    store.commit(MUTATION_TYPES.TOGGLE_SIDE_NAV);
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
