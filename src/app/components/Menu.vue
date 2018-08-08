<template>
  <nav role="navigation" v-bind:class="{ open: sideNavOpened }">
    <ul class="nav-bar">
      <router-link v-for="route in this.$router.options.routes" tag="li" v-bind:to="route.path">
        <a>{{ route.name }}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'Menu',
  computed: {
    sideNavOpened() {
      return this.$store.state.navigation.sideNav.opened;
    }
  },
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
        &.router-link-exact-active {
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
      background-color: #fbfbfb;
      border: 1px solid #eee;
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
          &.router-link-exact-active {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      }
    }
  }
</style>
