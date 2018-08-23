<template>
  <footer>
    <p class="text-center">Vue PWA Scaffold - Created by Francisco José Carmona</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  @import '../scss/functions.scss';
  footer {
    position: absolute;
    bottom: 0;
    height: $footer-height;
    width: 100%;
    padding: 30px 0;
    background-color: color($colors, 'light');
    p {
      font-size: .95rem;
    }
  }
</style>
