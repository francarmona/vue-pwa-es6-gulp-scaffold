import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import store from '@/app/store';
import { MUTATION_TYPES } from "../src/app/store/types";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Store', () => {
  it('toggle sidenav opened', () => {
    expect(store.state.navigation.sideNav.opened).toBe(false);
    store.commit(MUTATION_TYPES.TOGGLE_SIDE_NAV);
    expect(store.state.navigation.sideNav.opened).toBe(true);
  });
});
