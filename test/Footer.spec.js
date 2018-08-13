import { shallowMount } from '@vue/test-utils';
import Footer from '@/app/components/Footer.vue';

describe('Footer', () => {
  it('renders a footer tag', () => {
    const wrapper = shallowMount(Footer);
    expect(wrapper.contains('footer')).toBe(true);
  });
});
