<template>
  <div class="time-line">
    <div class="time-line-bar"></div>
    <div v-for="(group, index) in groupsProcessed" class="row group">
      <div class="col-sm-12">
        <div class="col-sm-12 events-group" v-bind:style="{ padding: index === 0 ? '0 0 2.5rem 0' : ''}">
          <span>{{ group.groupTitle }}</span>
        </div>
        <TimelineEvents v-bind:events="group.events"></TimelineEvents>
      </div>
    </div>
  </div>
</template>

<script>
import TimelineEvents from './TimelineEvents.vue';
export default {
  name: 'Timeline',
  props: {
    groups: {
      type: Array,
      required: true
    }
  },
  computed: {
    groupsProcessed() {
      let eventCounter = 0;
      return this.groups.map((group) => {
        const events = group.events.map((event) => {
          const parity = eventCounter % 2 === 0 ? 'even' : 'odd';
          eventCounter++;
          return Object.assign({}, event, { parity });
        });
        return Object.assign({}, group, { events: events});
      });
    }
  },
  components: {TimelineEvents}
}
</script>

<style lang="scss" scoped>
  .time-line {
    position: relative;
    .time-line-bar {
      width: 4px;
      margin-left: -2px;
      position: absolute;
      left: 50%;
      background-color: #ddd;
      opacity: .5;
      min-height: 100%;
    }

    .group {
      > div {
        z-index: 9999;
      }
    }

    .events-group {
      > span {
        background-color: white;
        padding: 5px;
      }
      z-index: 9999;
      text-align: center;
      padding: 2.5rem 0;
    }
  }
</style>
