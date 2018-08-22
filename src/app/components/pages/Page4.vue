<template>
  <div class="container">
    <section>
      <h1>Augue pharetra cubilia</h1>
      <p>Augue pharetra cubilia magnis vivamus ac est eros nunc sapien dictum mattis suscipit at magna volutpat, tincidunt ligula lacinia tempus viverra interdum feugiat eleifend euismod elementum curae donec praesent velit. Dignissim nec libero leo tristique pretium quisque hendrerit inceptos sed, pulvinar sociosqu aenean taciti mollis a eget odio. Nec curabitur tellus purus hac penatibus iaculis venenatis fringilla, cursus donec ridiculus per augue ante molestie.</p>
    </section>
    <section>
      <Timeline v-bind:groups="[
      {groupTitle: '2012 - 2013', events: [{id: 1, title:'Título 1', image: 'img/pwa-fast.png', borderColor: '#16bac5'},{id: 2, title:'Título 2', image: 'img/pwa-fast.png', borderColor: '#5bc0de'}, {id: 11, title:'Título 11', image: 'img/pwa-fast.png', borderColor: '#5bc0de'}]},
      {groupTitle: '2013 - 2014', events: [{id: 3, title:'Título 3', image: 'img/pwa-fast.png', borderColor: '#16bac5'},{id: 4, title:'Título 4', image: 'img/pwa-fast.png', borderColor: '#5bc0de'}]},
      {groupTitle: '2014 - 2015', events: [{id: 5, title:'Título 5', image: 'img/pwa-fast.png', borderColor: '#16bac5'},{id: 6, title:'Título 6', image: 'img/pwa-fast.png', borderColor: '#16bac5'}]},
      {groupTitle: '2015 - 2016', events: [{id: 7, title:'Título 7', image: 'img/pwa-fast.png', borderColor: '#16bac5'},{id: 8, title:'Título 8', image: 'img/pwa-fast.png', borderColor: '#16bac5'}]},
      {groupTitle: '2016 - 2017', events: [{id: 9, title:'Título 9', image: 'img/pwa-fast.png', borderColor: '#16bac5'},{id: 10, title:'Título 10', image: 'img/pwa-fast.png', borderColor: '#16bac5'}]}
      ]"></Timeline>
    </section>
  </div>
</template>

<script>
import Timeline from '../timeline/Timeline.vue';
export default {
  name: 'Page4',
  components: {Timeline}
}
</script>

<style lang="scss" scoped>

</style>
