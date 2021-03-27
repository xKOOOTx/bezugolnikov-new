<template>
  <div class="home">
    <div class="home__logo">
      <h1 class="home__logo_text">
        Michael
        <span>
          Bezugolnikov
        </span>
      </h1>
      <div class="home__socials">
        <a href="#" class="home__socials_link">
          <v-icon
            class="whatsApp__icon"
          >
            mdi-whatsapp
          </v-icon>
        </a>
        <a href="#" class="home__socials_link">
          <v-icon
            class="instagram__icon"
          >
            mdi-instagram
          </v-icon>
        </a>
        <a href="#" class="home__socials_link">
          <v-icon
            class="vk__icon"
          >
            mdi-vk
          </v-icon>
        </a>
      </div>
    </div>
    <main class="main">
      <Nav />
      <div class="main__wrapper">
        <h1 class="main__text">some text</h1>
      </div>
    </main>
  </div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  name: 'Home',
  components: {
    Nav
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
.home {
  height: 100vh;
  padding-left: 100px;
  background: url("../assets/img/6k/main_background_new.jpg") center no-repeat;
  background-size: cover;
  display: flex;
  &__logo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background:  linear-gradient(to top, transparent, #fff);

    &_text {
      flex-wrap: wrap;
      display: flex;
      width: 275px;
      align-items: center;

      padding: 50px 30px;

      background-color: transparent;
    }
  }
  &__socials {
    display: flex;
    justify-content: center;
    &_link {
      margin: 15px;
      & > .v-icon {
        font-size: 32px!important;
      }
    }
  }
}

.main {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
  }
  &__text {
    color: white;
  }
}

.whatsApp__icon {
  color: black!important;
  transition: all .1ms ease-in;
  &:hover {
    color: #25D366!important;
  }
}
.instagram__icon {
  color: black!important;
  &:hover {
    background: linear-gradient(45deg,#405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.vk__icon {
  color: black!important;
  transition: all .1ms ease-in;
  &:hover {
    color: #4c75a3!important;
  }
}
</style>
