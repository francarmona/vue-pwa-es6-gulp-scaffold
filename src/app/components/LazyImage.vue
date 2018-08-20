<template>
  <img :src="imgSrc" :srcset="imgSrcSet" :alt="alt">
</template>

<script>
export default {
  name: 'LazyImage',
  props: {
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: String
    },
    alt: {
      type: String
    },
    intersectionOptions: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      intersected: false,
      observer: null
    };
  },
  computed: {
    imgSrc() {
      return this.intersected ? this.src : '';
    },
    imgSrcSet() {
      return this.intersected && this.srcset ? this.srcset : '';
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const image = entries[0];
      if(image.isIntersecting) {
        this.intersected = true;
        this.observer.disconnect();
      }
    }, this.intersectionOptions);
    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  }
}
</script>

<style lang="scss" scoped>

</style>
