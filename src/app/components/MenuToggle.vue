<template>
  <i v-on:click.stop="toggleSideNav" class="material-icons menu-toggle">menu</i>
</template>

<script>

import { MUTATION_TYPES } from '../store/types';

export default {
  name: 'MenuToggle',
  methods: {
    toggleSideNav() {
      this.$store.commit(MUTATION_TYPES.TOGGLE_SIDE_NAV);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  .menu-toggle {
    display: none;
  }
  @media screen and (max-width: $sm-breakpoint) {
    .menu-toggle {
      display: block;
      position: absolute;
      font-size: 2.1rem;
      top: $padding-vertical-base;
      left: $padding-horizontal-base;
    }
  }
</style>
