<template>
  <div class="time-line">
    <div class="time-line-bar"></div>
    <div v-for="group in groups" class="row group">
      <div class="col-sm-12">
        <div class="col-sm-12 events-group bottom-padded">{{ group.groupTitle }}</div>
        <div class="row" v-for="(event, index) in group.events">
          <article class="col-sm-12 col-md-3 event" v-bind:class="[index % 2 === 0 ? 'offset-md-3' : 'offset-md-6']">
            <h3 class="text-center">{{ event.title }}</h3>
            <div class="event-icon" v-bind:style="{ backgroundImage: `url('${event.image}')` }"></div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timeline',
  props: {
    groups: {
      type: Array,
      required: true
    }
  }
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
      min-height: 100%;
    }

    .group {
      > div {
        z-index: 9999;
      }
    }

    .events-group {
      z-index: 9999;
      text-align: center;
    }

    .event {
      padding-bottom: 3rem;
      .event-icon {
        margin: 0 auto;
        border-radius: 50%;
        border: 2px solid #16bac5;
        height: 180px;
        width: 180px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
</style>
