<template>
  <div class="container">
    <section>
      <h1>The Progressive JavaScript Framework</h1>
      <lazy-image src="img/vuejs.png" alt="Vuejs"></lazy-image>
      <div class="row top-marged">
        <div class="col-sm-12 col-md-4 text-center">
          <div class="bold">Approachable</div>
          <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
        </div>
        <div class="col-sm-12 col-md-4 text-center">
          <div class="bold">Versatile</div>
          <p>An incrementally adoptable ecosystem that scales between a library and a full-featured framework.</p>
        </div>
        <div class="col-sm-12 col-md-4 text-center">
          <div class="bold">Performant</div>
          <p>20KB min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import LazyImage from "../LazyImage.vue";
export default {
  name: 'VueJs',
  components: {LazyImage}
}
</script>

<style lang="scss" scoped>
  section {
    img {
      display: block;
      margin: 0 auto;
      width: 200px;
      height: auto;
    }
  }
</style>
