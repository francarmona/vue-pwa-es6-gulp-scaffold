<template>
  <div class="time-line">
    <div class="time-line-bar"></div>
    <div v-for="group in groups" class="row group">
      <div class="col-sm-12">
        <div class="col-sm-12 events-group bottom-padded">
          <span>{{ group.groupTitle }}</span>
        </div>
        <div class="row" v-for="(event, index) in group.events">
          <article class="col-sm-12 col-md-2 event" v-bind:class="[index % 2 === 0 ? 'offset-md-3' : 'offset-md-7']">
            <h3 class="text-center event-title">{{ event.title }}</h3>
            <a class="event-icon" v-bind:class="[index % 2 === 0 ? 'odd' : 'even']" v-bind:style="{ backgroundImage: `url('${event.image}')`, color: event.borderColor }"></a>
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
      > span {
        background-color: white;
        padding: 5px;
      }
      z-index: 9999;
      text-align: center;
    }

    %event-icon-before {
      font-family: 'Material Icons';
      font-size: 90px;
      z-index: -1;
      content:"\e55f";
      position: absolute;
    }

    .event {
      padding-bottom: 2.5rem;
      .event-icon {
        display: block;
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
        &.odd::before {
          @extend %event-icon-before;
          transform: rotate(-90deg);
          -webkit-transform: rotate(-90deg);
          -ms-transform: rotate(-90deg);
          right: -40px;
        }
        &.even::before {
          @extend %event-icon-before;
          transform: rotate(90deg);
          -webkit-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          left: -40px;
        }
      }
      .event-title {
        color: #333;
      }
    }
  }
</style>
