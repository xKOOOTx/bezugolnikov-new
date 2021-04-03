<template>
  <div class="events">
    <GalleryNav />
    <CoolLightBox
      :items="items"
      :index="index"
      :useZoomBar="true"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: image }"
      ></div>
    </div>
  </div>
</template>

<script>
import GalleryNav from '../../components/GalleryNav'

export default {
  name: 'Events',
  components: {
    GalleryNav
  },
  data () {
    return {
      items: [
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/portrait.jpg'),
        require('../../assets/images/2k/repo.jpg'),
        require('../../assets/images/2k/studio.jpg'),
        require('../../assets/images/2k/wedding.jpg')
      ],
      index: null
    }
  }
}
</script>

<style scoped lang="scss">
</style>
