<template>
  <div class="galleryComponent">
    <GalleryNav />
    <div class="galleryComponent__block">
      <div class="galleryComponent__wrapper"
           v-for="(item, index) in items"
           :key="index"
      >
        <img
          :src=item
          alt="photo"
          class="galleryComponent__img"
        >
      </div>
    </div>
  </div>
</template>

<script>
import GalleryNav from '../../components/GalleryNav'

export default {
  name: 'Official',
  components: {
    GalleryNav
  },
  data () {
    return {
      items: [
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg'),
        require('../../assets/images/2k/official.jpg')
      ]
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
    margin: 0 15% 100px;
  }
  &__wrapper {
    height: 300px;
    width: 600px;
    margin: 70px 50px;
  }
  &__img {
    height: auto;
    width: 100%;
  }
}
</style>
