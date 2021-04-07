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
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  color: #fff;

  &__logo {
    display: flex;
    flex-direction: column;
    color: #fff;
    & span {
      font-weight: 800;
      font-size: 18px;
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
  }

  &__link {
    font-size: 18px;
    letter-spacing: 3px;
    padding: 10px 10px;
    margin: 50px 0;
    border-radius: 5px;
    transition: background-color .2s ease-in-out, color.2s ease-in-out;
    &:hover {
      background: rgba(#fff, .7);
      color: black;
    }
    @include breakpoint($forKResolution) {
      font-size: 32px;
    }
  }
}
</style>
