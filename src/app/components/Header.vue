<template>
  <header>
    <div class="container">
      <div class="brand">Vue PWA Scaffold</div>
      <nav role="navigation">
        <ul class="nav-bar">
          <li v-for="page in pages" v-bind:class="{ selected: selected == page.id }">
            <a v-on:click.stop="selected = page.id">{{ page.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      pages: [
        { id: 'home', text: 'Home'},
        { id: 'page1', text: 'Page 1'},
        { id: 'page2', text: 'Page 2'}
      ],
      selected: undefined
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  .brand {
    text-align: center;
    padding: $padding-vertical-base 0 $padding-vertical-base 0;
    text-align: center;
    letter-spacing: 0.8px;
    color: color($colors, 'primary');
    font-size: 1.4rem;
  }

  nav {
    ul {
      &.nav-bar {
        text-align: center;
      }
    }
  }
</style>
