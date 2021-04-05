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
.galleryNav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 7%;
  background: linear-gradient(#fff, transparent);
  color: #fff;

  &__logo {
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    color: #000;
    & span {
      font-weight: 800;
      font-size: 18px;
    }
    &_link {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 10px;transform: rotate(-90deg);
      transition: background-color .3s ease-in, color .3s ease-in;
    }
  }

  &__block {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
  }

  &__link {
    font-size: 18px;
    letter-spacing: 3px;
    padding: 10px 10px;
    margin: 50px 0;
    border-radius: 5px;
    transform: rotateZ(-90deg);
    transition: background-color .2s ease-in-out, color.2s ease-in-out;
    &:hover {
      background: rgba(#fff, .7);
      color: black;
    }
  }
}
</style>
