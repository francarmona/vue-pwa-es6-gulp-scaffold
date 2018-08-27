import { shallowMount } from '@vue/test-utils';
import Timeline from '@/app/components/timeline/Timeline.vue';

describe('Timeline', () => {
  it('renders a timeline', () => {
    const wrapper = shallowMount(Timeline, {
      propsData: {
        groups: [{id:1, events: []}]
      }
    });
    expect(wrapper.find('div').classes()).toContain('time-line');
  });

  it('add parity to groups', () => {
    const wrapper = shallowMount(Timeline, {
      propsData: {
        groups: [
          {id:1, events: [
            {title: '0'},
            {title: '1'}
          ]},
          {id:2, events: [
            {title: '2'},
            {title: '3'}]},
          {id:3, events: [
            {title: '4'},
            {title: '5'}
          ]}
        ]
      }
    });
    expect(wrapper.vm.groupsProcessed).toEqual([
      {id:1, events: [
        {title: '0', parity: 'even'},
        {title: '1', parity: 'odd'}
      ]},
      {id:2, events: [
        {title: '2', parity: 'even'},
        {title: '3', parity: 'odd'}
      ]},
      {id:3, events: [
        {title: '4', parity: 'even'},
        {title: '5', parity: 'odd'}
      ]}
    ]);
  });
});
