<template>
  <div class="container">
    <section>
      <h1>Augue pharetra cubilia</h1>
      <p>Augue pharetra cubilia magnis vivamus ac est eros nunc sapien dictum mattis suscipit at magna volutpat, tincidunt ligula lacinia tempus viverra interdum feugiat eleifend euismod elementum curae donec praesent velit. Dignissim nec libero leo tristique pretium quisque hendrerit inceptos sed, pulvinar sociosqu aenean taciti mollis a eget odio. Nec curabitur tellus purus hac penatibus iaculis venenatis fringilla, cursus donec ridiculus per augue ante molestie.</p>
    </section>
    <section>
      <Timeline v-bind:groups="[
      {groupTitle: '2010 - 2011', events: [
      {id: 1, title:'AngularJs', subtitle: 'Superheroic JavaScript MVW Framework', body: `
        <p>
          HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications.
        </p>
        <p>
          AngularJS lets you extend HTML vocabulary for your application.
          The resulting environment is extraordinarily expressive, readable, and quick to develop.
        </p>
        `, tags: [{title: 'Angularjs', image: 'img/brands/angularjs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#3BB273'},
      {id: 2, title:'Knockout', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Knockout is a standalone JavaScript implementation of the Model-View-ViewModel pattern with templates.
        </p>
        <p>
          The underlying principles are therefore: <br>
          &nbsp- a clear separation between domain data, view components and data to be displayed. <br>
          &nbsp- the presence of a clearly defined layer of specialized code to manage the relationships between the view components.
        </p>
      `, tags: [{title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#4D9DE0'},
      {id: 3, title:'Backbone.JS', subtitle: 'Lorem ipsum dolor sit amet', body: `
        <p>
          Backbone.js gives structure to web applications by providing models with key-value binding and custom events,
          collections with a rich API of enumerable functions, views with declarative event handling, and connects it all to your existing API over a RESTful JSON interface.
        </p>
      `, tags: [{title: 'Backbone.js', image: 'img/brands/backbonejs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#E1BC29'},
      {id: 4, title:'Ember', subtitle: 'A framework for ambitious web developers', body: `
        <p>
          Developers write dramatically less code with integrated templates that update automatically when the underlying data changes.
        </p>
        <p>
          No need to waste time on trivial choices. Ember's abstractions allow developers to focus on what makes your app unique.
        </p>
        <p>
          Ember.js is built for productivity. Designed with developer ergonomics in mind, its friendly APIs help developers efficiently get the job done.
        </p>
      `, tags: [{title: 'Ember', image: 'img/brands/ember.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#E1BC29'},

      ]},
      {groupTitle: '2012 - 2013', events: [
      {id: 5, title:'Meteor', subtitle: 'The faster way to build Javscript apps', body: `
        <p>
          Meteor, or MeteorJS, is a free and open-source isomorphic JavaScript web framework written using Node.js.
          Meteor allows for rapid prototyping and produces cross-platform (Android, iOS, Web) code.
          It integrates with MongoDB and uses the Distributed Data Protocol and a publish–subscribe pattern to automatically propagate
          data changes to clients without requiring the developer to write any synchronization code.
          On the client, Meteor can be used with its own Blaze templating engine, as well as with the Angular or React frameworks.
        </p>
      `, tags: [{title: 'Meteor', image: 'img/brands/meteor.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}],image: 'img/pwa-fast.png', borderColor: '#A4D4B4'},
      {id: 6, title:'React', subtitle: 'A JavaScript library for building user interfaces', body: `
        <p>
          React makes it painless to create interactive UIs. Design simple views for each state in your application,
          and React will efficiently update and render just the right components when your data changes.
        </p>
        <p>
          Build encapsulated components that manage their own state, then compose them to make complex UIs.
        </p>
      `, tags: [{title: 'Meteor', image: 'img/brands/react.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#1C5253'},
      {id: 7, title:'Polymer', subtitle: 'Extend the HTML', body: `
        <p>
          The Polymer library provides a set of features for creating custom elements.
          These features are designed to make it easier and faster to make custom elements that work like standard DOM elements.
        </p>
      `, tags: [{title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#1C5253'}
      ]},
      {groupTitle: '2014 - 2015', events: [
      {id: 8, title:'Vue.js', subtitle: 'The Progressive JavaScript Framework', body: `
        <p>
          Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!
        </p>
        <p>
          An incrementally adoptable ecosystem that scales between a library and a full-featured framework.
        </p>
        <p>
          20KB min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts
        </p>
      `, tags: [{title: 'VueJs', image: 'img/brands/vuejs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#565656'}
      ]},
      {groupTitle: '2015 - 2016', events: [
      {id: 9, title:'Angular', subtitle: 'One framework. Mobile & desktop', body: `
        <p>
          Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components.
          Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.
        </p>
        <p>
          From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
        </p>
      `, tags: [{title: 'Angular', image: 'img/brands/angularjs.svg'}, {title: 'Javascript', image: 'img/brands/javascript.svg'}], image: 'img/pwa-fast.png', borderColor: '#94A89A'}]}]"></Timeline>
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
