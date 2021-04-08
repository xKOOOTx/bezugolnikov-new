<template>
  <div class="galleryComponent">
    <GalleryNav />
    <CoolLightBox
      :items="items"
      :index="index"
      :useZoomBar="true"
      @close="index = null">
    </CoolLightBox>
    <splide :options="options">
      <splide-slide v-for="(item, idx) in items" :key="idx">
        <div class="images-wrapper">
          <div
            class="image"
            @click="index = idx"
            :style="{ backgroundImage: 'url(' + item + ')' }"
          ></div>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import GalleryNav from '../../components/GalleryNav'

export default {
  name: 'Repo',
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
      index: null,
      options: {
        type: 'loop',
        autoHeight: true,
        perPage: 1,
        autoplay: true,
        interval: 7000,
        cover: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "/src/assets/style/mixins";
@import "/src/assets/style/style";
@import "/src/assets/style/variables";

.galleryComponent {
  background: #000;
  height: 100vh;
  overflow: hidden;
  &__image {
    width: 100%;
    height: auto;
  }
}
.image {
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
}
</style>
