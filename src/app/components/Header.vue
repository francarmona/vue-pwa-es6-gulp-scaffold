<template>
  <header>
    <div class="container">
      <div class="brand">Vue PWA Scaffold</div>
      <MenuToggle></MenuToggle>
      <Menu></Menu>
    </div>
  </header>
</template>

<script>
import Menu from './Menu.vue';
import MenuToggle from './MenuToggle.vue';
export default {
  name: 'Header',
  components: {MenuToggle, Menu}
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  @import '../scss/functions.scss';
  .brand {
    text-align: center;
    padding: $padding-vertical-base 0 $padding-vertical-base 0;
    letter-spacing: 0.8px;
    color: color($colors, 'primary');
    font-size: 1.4rem;
  }

  @media screen and (max-width: $md-breakpoint - 1) {
    header {
      height: $header-height;
    }
    .brand {
      height: $header-height;
    }
  }
</style>
