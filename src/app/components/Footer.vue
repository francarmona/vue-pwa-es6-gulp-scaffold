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
    padding: 30px 0;
    background-color: color($colors, 'light');
    p {
      color: lighten($text-color, 25%);
      font-size: .95rem;
    }
  }
</style>
