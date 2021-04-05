<template>
  <div class="events">
    <GalleryNav />
    <waterfall :line-gap="200" :watch="items">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot
        v-for="(item, index) in items"
        :width="item.width"
        :height="item.height"
        :order="index"
        :key="item.id"
      >
        <img :src=item alt="photo">
        <!--
          your component
        -->
      </waterfall-slot>
    </waterfall>
<!--    <div class="events__block">
      <div class="events__gallery" v-for="(item, idx) in items" :key="idx">
        <img :src="item" class="events__image">
      </div>
    </div>-->
  </div>
</template>

<script>
import GalleryNav from '../../components/GalleryNav'
import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

export default {
  name: 'Events',
  components: {
    GalleryNav,
    Waterfall,
    WaterfallSlot
  },
  data () {
    return {
      items: [
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/portrait.jpg'),
        require('../../assets/images/2k/repo.jpg'),
        require('../../assets/images/2k/studio.jpg'),
        require('../../assets/images/2k/wedding.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/portrait.jpg'),
        require('../../assets/images/2k/repo.jpg'),
        require('../../assets/images/2k/studio.jpg'),
        require('../../assets/images/2k/wedding.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/portrait.jpg'),
        require('../../assets/images/2k/repo.jpg'),
        require('../../assets/images/2k/studio.jpg'),
        require('../../assets/images/2k/wedding.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/portrait.jpg'),
        require('../../assets/images/2k/repo.jpg'),
        require('../../assets/images/2k/studio.jpg'),
        require('../../assets/images/2k/wedding.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/portrait.jpg'),
        require('../../assets/images/2k/repo.jpg'),
        require('../../assets/images/2k/studio.jpg'),
        require('../../assets/images/2k/wedding.jpg')
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.events {
  background: none;
  height: 100vh;
  overflow-x: hidden;
  &__block {
    margin-left: 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100% - 7%;
  }
  &__gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px;
    overflow: hidden;
  }
  &__image {
    width: 300px;
    height: 200px;
  }
}
</style>
