
const state = {
  eventSelected: undefined
};

const mutations = {
  selectEvent(state, event) {
    state.eventSelected = event;
  },
  deselectEvent(state) {
    state.eventSelected = undefined;
  }
};

const getters = {
  eventSelected: state => {
    return state.eventSelected;
  },
  alreadySelected: (state) => (event) => {
    return state.eventSelected && state.eventSelected.id === event.id;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
