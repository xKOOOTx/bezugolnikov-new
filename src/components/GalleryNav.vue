<template>
  <div class="galleryNav">
    <div class="galleryNav__logo">
      <router-link to="/" class="galleryNav__logo_link">
        Micheal<span>Bezugolnikov</span>
      </router-link>
    </div>
    <div class="galleryNav__block">
      <router-link
        to="/Gallery"
        class="galleryNav__link">Gallery</router-link>
      <router-link
        to="/About"
        class="galleryNav__link">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryNav'
}
</script>

<style scoped lang="scss">
@import "/src/assets/style/mixins";
@import "/src/assets/style/style";
@import "/src/assets/style/variables";

.galleryNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  color: #fff;
  @include breakpoint($mobileL) {
    margin-top: 20px;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-left: 100px;
    font-size: 28px;
    @include breakpoint($laptop1600) {
      font-size: 22px;
    }
    @include breakpoint($laptop) {
      font-size: 18px;
    }
    @include breakpoint($tablet-bp) {
      font-size: 14px;
      margin-left: 50px;
    }
    @include breakpoint($mobileL) {
      font-size: 14px;
      margin-left: 25px;
    }
    @include breakpoint($micro-mobile) {
      font-size: 10px;
      margin-left: 15px;
    }
    & span {
      font-weight: 800;
      font-size: 38px;
      @include breakpoint($laptop1600) {
        font-size: 32px;
      }
      @include breakpoint($laptop) {
        font-size: 28px;
      }
      @include breakpoint($tablet-bp) {
        font-size: 24px;
      }
      @include breakpoint($mobileL) {
        font-size: 20px;
      }
      @include breakpoint($micro-mobile) {
        font-size: 10px;
      }
    }
    &_link {
      display: flex;
      flex-direction: column;
      text-align: left;
      transition: background-color .3s ease-in, color .3s ease-in;
    }
  }

  &__block {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
    @include breakpoint($laptop) {
      margin-right: 50px;
    }
    @include breakpoint($mobileL) {
      margin-right: 20px;
    }
  }

  &__link {
    font-size: 18px;
    letter-spacing: 3px;
    padding: 10px 20px;
    margin: 50px 30px;
    border-radius: 5px;
    transition: background-color .2s ease-in-out, color.2s ease-in-out;
    &:hover {
      background: rgba(#fff, .7);
      color: black;
    }
    @include breakpoint($forKResolution) {
      font-size: 32px;
    }
    @include breakpoint($laptop1600) {
      font-size: 28px;
    }
    @include breakpoint($laptop) {
      font-size: 24px;
      padding: 5px 10px;
      margin: 50px 15px;
    }
    @include breakpoint($mobileL) {
      font-size: 20px;
      padding: 0 5px;
      margin: 20px 5px;
    }
    @include breakpoint($micro-mobile) {
      font-size: 16px;
      padding: 0 5px;
      margin: 50px 5px;
    }
  }
}
</style>
