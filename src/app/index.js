import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import { TOGGLE_SIDE_NAV } from './store';

router.afterEach(() => {
  if(store.state.navigation.sideNav.opened) {
    store.commit(TOGGLE_SIDE_NAV);
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
