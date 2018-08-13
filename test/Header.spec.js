import { shallowMount } from '@vue/test-utils';
import Header from '@/app/components/Header.vue';

describe('Header', () => {
  it('renders a header tag', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.contains('header')).toBe(true);
  });
});
