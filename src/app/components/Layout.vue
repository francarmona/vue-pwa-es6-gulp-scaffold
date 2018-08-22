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

export default {
  name: 'Layout',
  components: {
    Header,
    Footer
  },
  methods: {
    toggleSideNav() {
      if(this.$store.state.sideNav.opened) {
        this.$store.commit('sideNav/toggleSideNav');
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
