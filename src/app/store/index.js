
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';

export default new Vuex.Store({
  state: {
    navigation: {
      sideNav: {
        opened: false
      }
    }
  },
  mutations: {
    [TOGGLE_SIDE_NAV](state) {
      state.navigation.sideNav.opened = !state.navigation.sideNav.opened;
    }
  }
});
