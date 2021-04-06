<template>
  <div class="galleryComponent">
    <GalleryNav />
    <div class="slider">
      <splide :options="options">
        <splide-slide>
          <img src="../../assets/images/2k/events.jpg">
        </splide-slide>
        <splide-slide>
          <img src="../../assets/images/2k/events.jpg">
        </splide-slide>
        <splide-slide>
          <img src="../../assets/images/2k/events.jpg">
        </splide-slide>
        <splide-slide>
          <img src="../../assets/images/2k/events.jpg">
        </splide-slide>
      </splide>
    </div>
<!--    <div class="galleryComponent__block">
      <CoolLightBox
        :items="items"
        :index="index"
        :useZoomBar="true"
        @close="index = null">
      </CoolLightBox>
      <div class="galleryComponent__wrapper"
           v-for="(image, imageIndex) in items"
           :key="imageIndex"
           @click="index = imageIndex"
           :style="{ backgroundImage: 'url(' + image + ')' }"
      >
      </div>
    </div>-->
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
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg'),
        require('../../assets/images/2k/events.jpg')
      ],
      index: null,
      options: {
        autoHeight: true,
        perPage: 2,
        cover: true,
        autoplay: true,
        lazyload: 'nearby',
        gap: '1rem'
      }
    }
  }
}
</script>

<style scoped lang="scss">

.galleryComponent {
  background: rgba(#000, .9);
  height: 100vh;
  overflow-x: hidden;
  &__block {
    width: 93%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 11%;
  }
  &__wrapper {
    height: 500px;
    width: 750px;
    margin: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
}
.slider {
  height: 100vh;
  width: 100%;
}
</style>
