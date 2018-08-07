
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const TOGGLE_SIDE_NAV = 'TOGGLE_SIDE_NAV';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export default new Vuex.Store({
  state: {
    navigation: {
      sideNav: {
        opened: false
      },
      currentPage: 'home'
    }
  },
  mutations: {
    [TOGGLE_SIDE_NAV](state) {
      state.navigation.sideNav.opened = !state.navigation.sideNav.opened;
    },
    [SET_CURRENT_PAGE](state, page) {
      state.navigation.currentPage = page;
    }
  }
});
