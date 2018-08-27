import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import TimelineEvents from '@/app/components/timeline/TimelineEvents.vue';
import store from '@/app/store';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('TimelineEvents', () => {
  let mockStore;
  let state;
  let mutations;
  let getters;

  beforeEach(() => {
    state = {
      eventSelected: undefined
    };
    mutations = {
      selectEvent: jest.fn(),
      deselectEvent: jest.fn(),
    };
    getters = {
      eventSelected: (state) => state.eventSelected,
      alreadySelected: (state) => (event) => {
        return state.eventSelected && state.eventSelected.id === event.id;
      }
    };
    mockStore = new Vuex.Store({
      modules: {
        timeline: {
          namespaced: true,
          state,
          mutations,
          getters
        }
      }
    });
  });

  it('call store mutation "selectEvent" when event is clicked', () => {
    const wrapper = shallowMount(TimelineEvents, {
      localVue,
      store: mockStore,
      mocks: {
        $mq: 'lg'
      },
      propsData: {
        events: [{id:1, title:'Event 1', image:'urlImage', subtitle: 'subtitle', body:'body', tags: []}]
      }
    });
    const eventIcon = wrapper.find('.event-icon');
    eventIcon.trigger('click');
    expect(mutations.selectEvent).toHaveBeenCalled();
  });

  it('select event when event is clicked', () => {
    const wrapper = shallowMount(TimelineEvents, {
      localVue,
      store: store,
      mocks: {
        $mq: 'lg'
      },
      propsData: {
        events: [{id:1, title:'Event 1', image:'urlImage', subtitle: 'subtitle', body:'body', tags: []}]
      }
    });
    const eventIcon = wrapper.find('.event-icon');
    eventIcon.trigger('click');
    expect(store.state.timeline.eventSelected).toEqual({id:1, title:'Event 1', image:'urlImage', subtitle: 'subtitle', body:'body', tags: []});
  });
});
