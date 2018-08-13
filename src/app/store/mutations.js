import { MUTATION_TYPES } from './types';

export default {
  [MUTATION_TYPES.TOGGLE_SIDE_NAV](state) {
    state.navigation.sideNav.opened = !state.navigation.sideNav.opened;
  }
};
