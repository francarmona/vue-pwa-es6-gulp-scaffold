<template>
  <nav role="navigation" v-bind:class="{ open: sideNavOpened }">
    <ul class="nav-bar">
      <li v-for="page in pages" v-bind:class="{ selected: pageSelected == page.id }">
        <a v-on:click.stop="pageSelected = page.id">{{ page.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
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
  },
  methods: {
    toggle() {
      this.sideNavOpened = !this.sideNavOpened;
    }
  },
  mounted () {
    this.$parent.$on('toggle-side-nav', () => {
      this.toggle();
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/theme/variables';
  @import '../scss/functions.scss';
  nav {
    padding: $padding-vertical-base 0;
    .nav-bar {
      margin: 0;
      padding: 0;
      text-align: center;
      li {
        display: inline;
        padding: 0 3rem 0;
        a {
          cursor: pointer;
        }
        &.selected {
          border-bottom: 3px solid color($colors, 'primary');
          padding-bottom: $padding-vertical-base;
          a {
            color: color($colors, 'primary');
          }
        }
      }
    }
    .nav-bar-right {
      @extend .nav-bar;
      float: right;
    }
  }

  @media screen and (max-width: 549px) {
    nav {
      width: 300px;
      background-color: white;
      margin-top: 1px;
      position: absolute;
      transform: translate(-300px, 0);
      -webkit-transform: translate(-300px, 0);
      transition: transform 0.3s ease;
      &.open {
        transform: translate(0, 0);
        -webkit-transform: translate(0, 0);
      }
      .nav-bar {
        margin: 0;
        padding: 0;
        li {
          padding: 0;
          text-align: left;
          a {
            display: block;
            padding: 10px 15px;
          }
          display: list-item;
          &.selected {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      }
    }
  }
</style>
