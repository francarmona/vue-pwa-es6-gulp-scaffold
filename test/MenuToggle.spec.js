import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import MenuToggle from '@/app/components/MenuToggle.vue';
import store from '@/app/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MenuToggle', () => {
  let mockStore;
  let state;
  let mutations;
  let getters;

  beforeEach(() => {
    state = {
      opened: false
    };
    mutations = {
      toggleSideNav: jest.fn()
    };
    getters = {
      sideNavOpened: jest.fn()
    };
    mockStore = new Vuex.Store({
      modules: {
        sideNav: {
          namespaced: true,
          state,
          mutations,
          getters
        }
      }
    });
  });

  it('call store mutation "toggleSideNav" when button is clicked', () => {
    const wrapper = shallowMount(MenuToggle, {
      localVue,
      store: mockStore
    });
    const toggleButton = wrapper.find('.menu-toggle');
    toggleButton.trigger('click');
    expect(mutations.toggleSideNav).toHaveBeenCalled();
  });

  it('toggle sidenav opened when button is clicked', () => {
    const wrapper = shallowMount(MenuToggle, {
      localVue,
      store
    });
    const toggleButton = wrapper.find('.menu-toggle');
    expect(store.state.sideNav.opened).toBe(false);
    toggleButton.trigger('click');
    expect(store.state.sideNav.opened).toBe(true);
  });
});
