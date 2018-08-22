
import Vue from 'vue';
import Vuex from 'vuex';
import sideNav from './modules/sideNav';
import timeline from './modules/timeline';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sideNav,
    timeline
  }
});
