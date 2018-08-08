<template>
  <i v-on:click.stop="toggleSideNav" class="material-icons menu-toggle">menu</i>
</template>

<script>

import { TOGGLE_SIDE_NAV } from '../store';

export default {
  name: 'MenuToggle',
  methods: {
    toggleSideNav() {
      this.$store.commit(TOGGLE_SIDE_NAV);
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  .menu-toggle {
    display: none;
  }
  @media screen and (max-width: 549px) {
    .menu-toggle {
      display: block;
      position: absolute;
      font-size: 2.1rem;
      top: $padding-vertical-base;
      left: $padding-horizontal-base;
    }
  }
</style>
