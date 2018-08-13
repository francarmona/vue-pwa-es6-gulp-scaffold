import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import Menu from '@/app/components/Menu.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter();

describe('Menu', () => {

  let store;
  let state;

  beforeEach(() => {
    state = {
      navigation: {
        sideNav: {
          opened: false
        }
      }
    };
    store = new Vuex.Store({
      state
    });
  });


  it('will open the Menu', () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      store,
      router
    });
    state.navigation.sideNav.opened = true;
    expect(wrapper.vm.sideNavOpened).toBe(true);
    expect(wrapper.find('nav').classes()).toContain('open');
  });

  it('will close the Menu', () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      store,
      router
    });
    state.navigation.sideNav.opened = false;
    expect(wrapper.vm.sideNavOpened).toBe(false);
    expect(wrapper.find('nav').classes()).not.toContain('open');
  });

});
