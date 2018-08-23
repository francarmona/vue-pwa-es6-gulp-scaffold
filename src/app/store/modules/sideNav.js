
const state = {
  opened: false
};

const mutations = {
  toggleSideNav(state) {
    state.opened = !state.opened;
  }
};

const getters = {
  sideNavOpened(state) {
    return state.opened;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
