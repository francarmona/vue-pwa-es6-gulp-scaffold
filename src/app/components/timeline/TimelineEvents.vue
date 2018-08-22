<template>
  <div>
    <div class="row" v-for="(event, index) in events">
      <div class="col-md-12">
        <div class="row event" v-bind:class="[eventSelected == event ? 'active' : '', event.parity]">
          <article class="col-sm-12 col-md-3 event-header" v-bind:class="getHeaderClass(event)">
            <h3 class="text-center event-title">{{ event.title }}</h3>
            <a class="event-icon" v-on:click="selectEvent(event)" v-bind:style="{ backgroundImage: `url('${event.image}')`, color: event.borderColor }"></a>
          </article>
          <article class="col-md-9 event-detail" v-bind:class="getDetailClass(event)" v-show="eventSelected == event">test</article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'TimelineEvents',
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters('timeline', {
      eventSelected: 'eventSelected',
      alreadySelected: 'alreadySelected'
    })
  },
  methods: {
    selectEvent(event) {
      if(this.alreadySelected(event)){
        this.$store.commit('timeline/deselectEvent');
        return;
      }
      this.$store.commit('timeline/selectEvent', event);
    },
    getHeaderClass(event) {
      if(this.alreadySelected(event)){
        return [event.parity === 'even' ? 'col-md-push-0' : 'col-md-push-9'];
      }
      return [event.parity === 'even' ? 'col-md-push-3' : 'col-md-push-6'];
    },
    getDetailClass(event) {
      if(this.alreadySelected(event)){
        return [event.parity === 'even' ? 'col-md-push-0' : 'col-md-pull-3'];
      }
      return [event.parity === 'even' ? 'col-md-push-3' : 'col-md-pull-3'];
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/theme/variables';
  @import '../../scss/functions';
  %event-icon-before {
    font-family: 'Material Icons';
    font-size: 90px;
    z-index: -1;
    content:"\e55f";
    position: absolute;
  }

  .event {
    overflow: hidden;
    .event-header {
      padding-bottom: 2.5rem;
      transition: all .3s ease-in-out;
      .event-icon {
        transition: all .3s ease-in-out;
        display: block;
        cursor: pointer;
        margin: 0 auto;
        position: relative;
        border-radius: 50%;
        border: 2px solid;
        height: 160px;
        width: 160px;
        line-height: 160px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      .event-title {
        color: #333;
      }
    }

    &.even {
      .event-header {
        .event-icon {
          &::before {
            @extend %event-icon-before;
            transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            right: -40px;
          }
        }
      }
    }

    &.odd {
      .event-header {
        .event-icon {
          &::before {
            @extend %event-icon-before;
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            left: -40px;
          }
        }
      }
    }

    &.active {
      background-color: white;
      border-radius: 8px;
      border: 1px solid #ddd;
      .event-title {
        position: absolute;
        z-index: 9999;
      }

      .event-icon {
        transform: scale(1.7);
        opacity: .6;
        &::before {
          display: none;
        }
      }

      &.even {
        .event-icon {
          left: -80px;
        }
        .event-title {
          left: 3.5rem;
        }
      }

      &.odd {
        .event-icon {
          right: -80px;
        }
        .event-title {
          right: 3.5rem;
        }
      }
    }

  }
</style>
