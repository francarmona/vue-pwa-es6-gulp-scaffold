import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import sideNav from '@/app/store/modules/sideNav';
import Menu from '@/app/components/Menu.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter();

describe('Menu', () => {

  let store;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        sideNav
      }
    });
  });

  it('will open the Menu', () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      store,
      router
    });
    store.state.sideNav.opened = true;
    expect(wrapper.vm.sideNavOpened).toBe(true);
    expect(wrapper.find('nav').classes()).toContain('open');
  });

  it('will close the Menu', () => {
    const wrapper = shallowMount(Menu, {
      localVue,
      store,
      router
    });
    store.state.sideNav.opened = false;
    expect(wrapper.vm.sideNavOpened).toBe(false);
    expect(wrapper.find('nav').classes()).not.toContain('open');
  });

});
