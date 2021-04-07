<template>
  <div class="galleryComponent">
    <GalleryNav />
    <splide :options="options">
      <splide-slide v-for="(item, idx) in items" :key="idx">
        <div :style={background:item}></div>
<!--        <img :src=item alt="photo" class="galleryComponent__image">-->
      </splide-slide>
    </splide>
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
      index: null,
      options: {
        type: 'fade',
        width: '100%',
        autoHeight: true,
        perPage: 1,
        autoplay: true,
        interval: 7000
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
  &__wrapper {
    /*display: flex;
    justify-content: center;
    align-items: center;*/
  }
  &__image {
    @include breakpoint($forKResolution) {
      min-width: 3840px;
      height: auto;
    }
  }
}
</style>
