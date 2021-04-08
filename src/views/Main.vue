<template>
  <div class="home">
    <div class="label">
      <div class="label__logo">
        Michael
        <span class="label__logo_surname">Bezugolnikov</span>
        <span class="label__logo_photographer">photographer</span>
        <a href="#">by Alex Gusev</a>
        <span class="label__logo_copy">
          &copy;
          <span class="label__logo_date">2020</span>
        </span>
      </div>
      <Nav class="label__nav" />
      <div class="label__socials">
        <a href="https://wa.me/+79998198079" target="_blank" class="socials">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="#" target="_blank" class="socials">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" class="socials">
          <i class="fab fa-vk"></i>
        </a>
      </div>
      <div class="label__arrow">
        <a href="#" class="arrow-7">
          <span></span>
          <span></span>
        </a>
      </div>
    </div>
    <div class="main">
      <Nav />
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav'

export default {
  name: 'Main',
  components: {
    Nav
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import "../assets/style/style";
@import "../assets/style/mixins";
@import "../assets/style/variables";

.home {
  display: flex;
  width: 100%;
  height: 100vh;
  background: url('../assets/images/DSC_9409.jpg') center no-repeat;
  background-size: cover;
  overflow: hidden;
  @include breakpoint($mobileL) {
    position: relative;
    justify-content: center;
    align-items: center;
  }
}
.label {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  width: 300px;
  height: 100vh;
  margin-left: 100px;
  background: linear-gradient(#fff, transparent);

  @include breakpoint($mobileL) {
    margin: 0;
    padding: 0;
    width: 100%;
    position: absolute;
    left: 0;
  }

  &__logo {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-size: 36px;
    font-weight: 400;
    text-align: left;
    @include breakpoint($small-mobile-bp) {
      margin-top: 20px;
    }
    &_surname {
      font-weight: 800;
    }
    &_photographer {
      font-weight: 300;
      font-size: 16px;
      text-align: left;
    }
    & a {
      display: block;
      font-family: 'Tangerine', cursive;
      color: white;
      font-size: 24px;
      text-align: right;
      margin-top: 20px;
      text-decoration: none;
      transition: color .1s ease-in;
      &:hover {
        color: #2c3e50;
      }
    }
    & a, .label__logo_copy {
      @include breakpoint($small-mobile-bp) {
        margin-right: 10px;
      }
    }
    &_copy {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 16px;
      color: #ffffff;
      text-align: right;
    }
    &_date {
      font-family: 'Tangerine', cursive;
      font-size: 24px;
      color: #ffffff;
    }
  }
  &__nav {
    display: none;
    @include breakpoint($tablet-bp) {
      display: block;
    }
  }
  &__socials {
    display: flex;
    justify-content: center;
    padding-top: 200px;
    @include breakpoint($tablet-bp) {
      padding-top: 0;
    }
  }
  &__arrow {
    @include breakpoint($mobileL) {
      margin-top: 60px;
    }
    @include breakpoint($small-mobile-bp) {
      margin-top: 20px;
    }
  }
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  @include breakpoint($mobileL) {
    width: 0;
  }
}
.arrow-7 {
  display: block;
  margin: 40px auto 10px auto;
  width: 38px;
  height: 100px;
  @include breakpoint($mobileL) {
    margin: 0 auto;
  }
}
.arrow-7 span {
  display: block;
  width: 30px;
  height: 30px;
  border-bottom: 5px solid rgba(#fff, .4);
  border-right: 5px solid rgba(#fff, .4);
  transform: rotate(45deg);
  margin: -16px 0;
  animation: arrow-7 2s infinite;

  transition: border-color .2s ease-in;
}
.arrow-7 span:nth-child(2){
  animation-delay: -0.2s;
}
.arrow-7 span:nth-child(3){
  animation-delay: -0.4s;
}

.arrow-7:hover span {
  border-color: #2c3e50;
}
@keyframes arrow-7 {
  0%{
    opacity: 0;
    transform: translate(0,-20px) rotate(45deg);
  }
  50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: translate(0,20px) rotate(45deg);
  }
}

.socials {
  margin: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  font-size: 36px;
  text-decoration: none;
  @include breakpoint($tablet-bp) {
    font-size: 42px;
  }
  @include breakpoint($small-mobile-bp) {
    font-size: 42px;
  }
}

.fa-whatsapp {
  &:hover {
    color: #25d366;
  }
}

.fa-vk {
  &:hover {
    color: #2787F5;
  }
}

.fa-instagram {
  &:hover {
    background-image: linear-gradient(45deg, #FFDC80,#FCAF45,#F77737,#F56040,#FD1D1D,#E1306C,#C13584,#833AB4,#5851DB,#405DE6);
    background-size: 100%;
    -webkit-background-clip: text;
    //-moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
}

.fa-whatsapp,
.fa-vk,
.fa-instagram {
  transition: color .1s ease-in;
}

</style>
