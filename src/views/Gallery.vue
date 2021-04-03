<template>
  <div class="gallery center">
    <router-link to="/events" class="gallery__block events">
      <span>events</span>
    </router-link>
    <router-link to="/official" class="gallery__block official">
      <span>official</span>
    </router-link>
    <router-link to="/portrait" class="gallery__block portrait">
      <span>portrait</span>
    </router-link>
    <router-link to="repo" class="gallery__block repo">
      <span>reports</span>
    </router-link>
    <router-link to="studio" class="gallery__block studio">
      <span>studio</span>
    </router-link>
    <router-link to="wedding" class="gallery__block wedding">
      <span>wedding</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>

<style lang="scss">
@import "../assets/style/style";
@import "../assets/style/variables";
@import "../assets/style/mixins";
.gallery {
  display: flex;
  height: 100vh;
  background-color: black;
  overflow: hidden;
  @include breakpoint($tablet-bp) {
    flex-wrap: wrap;
  }
  &__block {
    position: relative;
    height: 100%;
    width: 100%;
    transition: all .3s ease-in-out;
    transition-duration: .5s;
    background-size: cover!important;
    filter: grayscale(1);
    @include breakpoint($tablet-bp) {
      width: 50%;
      height: auto;
    }
    &:after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 0;
      background-color: rgba(#000, 0);
      @include breakpoint($tablet-bp) {
        display: none;
      }
    }
    &:hover {
      width: 1000%;
      filter: none;
      @include breakpoint($tablet-bp) {
        width: 50%;
      }

      &:after {
        height: 50px;
        background-color: rgba(#000, .7);
      }
    }

    & span {
      display: inline-block;
      position: absolute;
      bottom: 50%;
      left: 20%;
      transform: rotate(-90deg);
      margin: 0 auto;
      text-transform: uppercase;
      color: white;
      font-size: 36px;
      //z-index: 3;
      @include breakpoint($tablet-bp) {
        //width: 100%;
        top: 65%;
        bottom: 35%;
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 15%;
        transform: rotate(0);
        font-weight: 800;
        border: 1px solid rgba(#fff, .1);
        background: rgba(#fff, .1);
        box-shadow: 20px 20px 50px rgba(#000, .5);
        overflow: hidden;
      }
      @include breakpoint($mobile-bp) {
        left: 0;
        width: 100%;
        padding: 40px 0;
        bottom: 0;
        font-size: 18px;
      }
    }

    &:hover span {
      animation: left .3s ease-in-out;
      bottom: 0;
      left: 50%;
      transform: rotate(0);
      @include breakpoint($tablet-bp) {
        animation: none;
        //width: 100%;
        top: 65%;
        bottom: 35%;
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 15%;
        transform: rotate(0);
        border: 1px solid rgba(#fff, .1);
        background: rgba(#fff, .1);
        box-shadow: 20px 20px 50px rgba(#000, .5);
      }
      @include breakpoint($mobile-bp) {
        left: 0;
        width: 100%;
        padding: 40px 0;
        bottom: 0;
      }
    }
  }
}

.events {
  background: url('../assets/images/2k/events.jpg') center no-repeat;
}
.official {
  background: url('../assets/images/2k/official.jpg') center no-repeat;
}
.portrait {
  background: url('../assets/images/2k/portrait.jpg') center no-repeat;
}
.repo {
  background: url('../assets/images/2k/repo.jpg') center no-repeat;
  & span {
    @include breakpoint($mobile-bp) {
      left: 0;
    }
  }
}
.studio {
  background: url('../assets/images/2k/studio.jpg') center no-repeat;
}
.wedding {
  background: url('../assets/images/2k/wedding.jpg') center no-repeat;
}

@keyframes left {
  0% {
    bottom: 50%;
    transform: rotate(-90deg);
  }
  10% {
    bottom: 45%;
    transform: rotate(-80deg);
  }
  20% {
    bottom: 40%;
    transform: rotate(-70deg);
  }
  30% {
    bottom: 35%;
    transform: rotate(-60deg);
  }
  40% {
    bottom: 30%;
    transform: rotate(-50deg);
  }
  50% {
    bottom: 25%;
    transform: rotate(-40deg);
  }
  60% {
    bottom: 20%;
    transform: rotate(-30deg);
  }
  70% {
    bottom: 15%;
    transform: rotate(-20deg);
  }
  80% {
    bottom: 10%;
    transform: rotate(-10deg);
  }
  90% {
    bottom: 5%;
    transform: rotate(-5deg);
  }
  100% {
    bottom: 0%;
    transform: rotate(0);
  }
}
@keyframes background {
  0% {
    height: 0;
  }
  10% {
    height: 5px;
  }
  20% {
    height: 10px;
  }
  30% {
    height: 15px;
  }
  40% {
    height: 20px;
  }
  50% {
    height: 25px;
  }
  60% {
    height: 30px;
  }
  70% {
    height: 35px;
  }
  80% {
    height: 40px;
  }
  90% {
    height: 45px;
  }
  100% {
    height: 50px;
  }
}
</style>
