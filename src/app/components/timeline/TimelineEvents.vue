<template>
  <div>
    <div class="row" v-for="(event, index) in events">
      <div class="col-md-12">
        <div class="row event" v-bind:class="[eventSelected == event ? 'active' : '', event.parity]">
          <article class="col-sm-12 col-md-3 event-header" v-bind:class="getHeaderClass(event)">
            <h2 class="text-center event-title">{{ event.title }}</h2>
            <div class="event-icon-wrapper">
              <a class="event-icon" v-on:click="selectEvent(event)" v-bind:style="{ backgroundImage: `url('${event.image}')`, color: event.borderColor }"></a>
              <i class="material-icons event-icon-arrow hidden-sm" v-bind:style="{ color: event.borderColor }">place</i>
            </div>
          </article>
          <article class="col-md-9 event-detail" v-bind:class="getDetailClass(event)" v-show="eventSelected == event">
            <h3>
              <em>"{{ event.subtitle }}"</em>
            </h3>
            <div class="event-detail-description" v-html="event.body"></div>
            <div class="event-detail-tags">
              <span class="label" v-for="tag in event.tags">
                <img v-bind:src="tag.image">
                {{ tag.title }}
              </span>
            </div>
          </article>
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
      if(this.$mq != 'lg'){
        return;
      }
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

  %event-icon-arrow {
    font-size: 90px;
    position: absolute;
    z-index: -1;
  }

  @media screen and (min-width: $md-breakpoint) {
    .event {
      overflow: hidden;
    }
  }

  .event {
    .event-header {
      padding-bottom: 2.5rem;
      transition: all .3s ease-in-out;
      .event-icon-wrapper {
        position: relative;
        .event-icon {
          transition: all .3s ease-in-out;
          display: block;
          margin: 0 auto;
          position: relative;
          border-radius: 50%;
          border: 2px solid;
          height: 150px;
          width: 150px;
          line-height: 150px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .event-icon-arrow {
          @extend %event-icon-arrow;
          transform: rotate(90deg);
          top: calc(150px/2 - 90px/2);
        }
      }

      .event-title {
        color: #333;
        font-weight: normal;
      }
    }

    .event-detail {
      h3 {
        font-weight: 100;
      }
    }

    &.even {
      .event-header {
        .event-icon-wrapper {
          .event-icon-arrow {
            transition: all .3s ease-in-out;
            transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            right: 35px;
          }
        }
      }
    }

    &.odd {
      .event-header {
        .event-icon-wrapper {
          .event-icon-arrow {
            transition: all .3s ease-in-out;
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            left: 35px;
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

      .event-icon-wrapper {
        .event-icon {
          transform: scale(2);
          opacity: .6;
        }
        .event-icon-arrow {
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
        .event-detail {
          padding: 1rem 5rem 1rem 0;
        }
      }

      &.odd {
        .event-icon {
          right: -80px;
        }
        .event-title {
          right: 3.5rem;
        }
        .event-detail {
          padding: 1rem 0 1rem 5rem;
        }
      }
    }

    .event-detail {
      .event-detail-tags {
        .label {
          background-color: color($colors, 'light');
          display: inline-block;
          border-radius: 3px;
          padding: 0.3em 0.9em;
          margin: 0 0.5em 0.5em 0;
          font-size: .95rem;
        }
        img {
          vertical-align: middle;
          width: 1.25rem;
        }
      }
    }

    @media screen and (min-width: $md-breakpoint) {
      .event-icon {
        cursor: pointer;
      }
    }

    @media screen and (max-width: $md-breakpoint - 1) {
      & {
        padding-top: 3rem;
      }
      .event-detail {
        display: block !important;
        clear: both;
        h3 {
          text-align: center;
        }
      }
    }
  }
</style>
