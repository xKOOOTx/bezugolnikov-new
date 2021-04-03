<template>
  <div class="galleryNav">
    <div class="galleryNav__logo">
      <router-link to="/" class="galleryNav__logo_link">
        Micheal<span>Bezugolnikov</span>
      </router-link>
    </div>
    <ul class="galleryNav__ul">
      <li class="galleryNav__li">
        <router-link to="/">Gallery</router-link>
      </li>
      <li class="galleryNav__li">
        <router-link to="/">About</router-link>
      </li>
    </ul>
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
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #000;
  color: #fff;

/*  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, .8);
  }*/

  &__logo {
    display: flex;
    flex-direction: column;
    & span {
      font-weight: 800;
      font-size: 18px;
    }
    &_link {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 10px;
      transition: background-color .3s ease-in, color .3s ease-in;

      &:hover {
        background: rgba(#fff, .4);
        /*background-color: #fff;*/
        color: black;
      }
    }
  }

  &__ul {
    list-style: none;
    display: flex;
  }
  &__li {
    margin: 5px 30px;
  }
}
</style>
