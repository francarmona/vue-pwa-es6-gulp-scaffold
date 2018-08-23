<template>
  <div class="container">
    <section>
      <h1>Augue pharetra cubilia</h1>
      <p>Augue pharetra cubilia magnis vivamus ac est eros nunc sapien dictum mattis suscipit at magna volutpat, tincidunt ligula lacinia tempus viverra interdum feugiat eleifend euismod elementum curae donec praesent velit. Dignissim nec libero leo tristique pretium quisque hendrerit inceptos sed, pulvinar sociosqu aenean taciti mollis a eget odio. Nec curabitur tellus purus hac penatibus iaculis venenatis fringilla, cursus donec ridiculus per augue ante molestie.</p>
    </section>
    <section>
      <Timeline v-bind:groups="[
      {groupTitle: '2012 - 2013', events: [
      {id: 1, title:'Título 1', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
        `, tags: [{title: 'PHP', image: 'img/brands/php.svg'}, {title: 'Docker', image: 'img/brands/docker.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#3BB273'},
      {id: 2, title:'Título 2', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, tags: [{title: 'Angularjs', image: 'img/brands/angularjs.svg'}, {title: 'React', image: 'img/brands/react.svg'}], image: 'img/pwa-fast.png', borderColor: '#4D9DE0'},
      {id: 11, title:'Título 11', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, tags: [{title: 'Ionic', image: 'img/brands/ionic.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#E1BC29'}
      ]},
      {groupTitle: '2013 - 2014', events: [
      {id: 3, title:'Título 3', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, tags: [{title: 'Docker', image: 'img/brands/docker.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}],image: 'img/pwa-fast.png', borderColor: '#A4D4B4'},
      {id: 4, title:'Título 4', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, image: 'img/pwa-fast.png', borderColor: '#1C5253'}
      ]},
      {groupTitle: '2014 - 2015', events: [
      {id: 5, title:'Título 5', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, image: 'img/pwa-fast.png', borderColor: '#565656'},
      {id: 6, title:'Título 6', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, image: 'img/pwa-fast.png', borderColor: '#0CBABA'}
      ]},
      {groupTitle: '2015 - 2016', events: [
      {id: 7, title:'Título 7', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, image: 'img/pwa-fast.png', borderColor: '#94A89A'},
      {id: 8, title:'Título 8', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, image: 'img/pwa-fast.png', borderColor: '#3AB795'}
      ]},
      {groupTitle: '2016 - 2017', events: [
      {id: 9, title:'Título 9', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, image: 'img/pwa-fast.png', borderColor: '#FFCF56'},
      {id: 10, title:'Título 10', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue vitae convallis fermentum.
          Praesent fringilla elit non dolor hendrerit lacinia.
        </p>
        <p>
          Fusce ultrices pharetra dui eget pretium. Donec eget nisl turpis.
          Nunc a commodo sem. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque nunc mauris, tristique nec mattis non, consectetur eget neque.
        </p>
      `, image: 'img/pwa-fast.png', borderColor: '#D7D9D7'}
      ]}
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
