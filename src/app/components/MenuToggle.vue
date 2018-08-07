<template>
  <i v-on:click="toggleSideNav" class="material-icons menu-toggle">menu</i>
</template>

<script>
export default {
  name: 'MenuToggle',
  data () {
    return {
      sideNavOpened: false
    }
  },
  methods: {
    toggleSideNav() {
      this.$parent.$emit('toggle-side-nav');
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
