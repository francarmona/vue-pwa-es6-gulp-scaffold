<template>
  <header>
    <div class="container">
      <div class="brand">Vue PWA Scaffold</div>
      <i v-on:click="sideNavOpened = !sideNavOpened" class="material-icons menu-toggle">menu</i>
      <nav role="navigation" v-bind:class="{ open: sideNavOpened }">
        <ul class="nav-bar">
          <li v-for="page in pages" v-bind:class="{ selected: pageSelected == page.id }">
            <a v-on:click.stop="pageSelected = page.id">{{ page.text }}</a>
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
      pageSelected: undefined,
      sideNavOpened: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables.scss';
  .brand {
    text-align: center;
    padding: $padding-vertical-base 0 $padding-vertical-base 0;
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
