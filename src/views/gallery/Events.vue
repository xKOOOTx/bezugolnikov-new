<template>
  <div class="events">
    <GalleryNav />
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
<!--    <div class="events__block">
      <div class="events__wrapper"
           v-for="(item, index) in items"
           :key="index"
      >
        <img
          :src=item
          alt="photo"
          class="events__img"
        >
      </div>
    </div>-->
  </div>
</template>

<script>
import GalleryNav from '../../components/GalleryNav'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Events',
  components: {
    GalleryNav,
    swiper,
    swiperSlide
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
        require('../../assets/images/2k/events.jpg')
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">

.events {
  background: rgba(#000, .9);
  height: 100vh;
  overflow-x: hidden;
  &__block {
    width: 93%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 15%;
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
