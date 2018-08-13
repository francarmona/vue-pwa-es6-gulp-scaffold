import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MenuToggle from '@/app/components/MenuToggle.vue';
import {MUTATION_TYPES} from "@/app/store/types";
import store from '@/app/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MenuToggle', () => {
  let mockStore;
  let state;
  let mutations;

  beforeEach(() => {
    state = {
      navigation: {
        sideNav: {
          opened: false
        }
      }
    };
    mutations = {
      [MUTATION_TYPES.TOGGLE_SIDE_NAV]: jest.fn()
    };
    mockStore = new Vuex.Store({
      state,
      mutations
    });
  });

  it('call store mutation "TOGGLE_SIDE_NAV" when button is clicked', () => {
    const wrapper = shallowMount(MenuToggle, {
      localVue,
      store: mockStore
    });
    const toggleButton = wrapper.find('.menu-toggle');
    toggleButton.trigger('click');
    expect(mutations[MUTATION_TYPES.TOGGLE_SIDE_NAV]).toHaveBeenCalled();
  });

  it('toggle sidenav opened when button is clicked', () => {
    const wrapper = shallowMount(MenuToggle, {
      localVue,
      store
    });
    const toggleButton = wrapper.find('.menu-toggle');
    expect(store.state.navigation.sideNav.opened).toBe(false);
    toggleButton.trigger('click');
    expect(store.state.navigation.sideNav.opened).toBe(true);
  });
});
