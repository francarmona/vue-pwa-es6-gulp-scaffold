import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/app/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Store - SideNav module', () => {
  it('toggle sidenav opened', () => {
    expect(store.state.sideNav.opened).toBe(false);
    store.commit('sideNav/toggleSideNav');
    expect(store.state.sideNav.opened).toBe(true);
  });
});
