import { shallowMount, createLocalVue } from '@vue/test-utils';
import Layout from '@/app/components/Layout.vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';


const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

const router = new VueRouter();

describe('Layout', () => {
  it('renders a header tag', () => {
    const wrapper = shallowMount(Layout, {
      localVue,
      router
    });
    expect(wrapper.contains('header-stub')).toBe(true);
  });

  it('renders a main tag', () => {
    const wrapper = shallowMount(Layout, {
      localVue,
      router
    });
    expect(wrapper.contains('main')).toBe(true);
  });

  it('renders a footer tag', () => {
    const wrapper = shallowMount(Layout, {
      localVue,
      router
    });
    expect(wrapper.contains('footer-stub')).toBe(true);
  });
});
