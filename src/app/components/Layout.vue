<template>
  <div id="app" v-on:click="toggleSideNav">
    <Header></Header>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header.vue';
import Footer from './Footer.vue';
import { MUTATION_TYPES } from '../store/types';

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  methods: {
    toggleSideNav() {
      if(this.$store.state.navigation.sideNav.opened) {
        this.$store.commit(MUTATION_TYPES.TOGGLE_SIDE_NAV);
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
