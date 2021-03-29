<template>
  <div class="home">
    <div class="label">
      <div class="label__logo">
        Michael
        <span class="label__logo_surname">Bezugolnikov</span>
        <span class="label__logo_photographer">photographer</span>
        <a href="#">by Alex Gusev</a>
      </div>
      <div class="label__socials">
        <a href="#" class="socials">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="#" class="socials">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="socials">
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
  name: 'Home',
  components: {
    Nav
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
@import "../assets/style/style";

.home {
  display: flex;
  width: 100%;
  height: 100vh;
  background: url('../assets/images/DSC_9409.jpg') center no-repeat;
  background-size: cover;
}
.label {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px;
  width: 300px;
  height: auto;
  margin-left: 100px;
  background: linear-gradient(#fff, transparent);

  &__logo {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-size: 36px;
    font-weight: 400;
    text-align: left;
    &_surname {
      font-weight: 800;
    }
    &_photographer {
      font-weight: 300;
      font-size: 20px;
      text-align: center;
    }
    & a {
      display: block;
      font-family: 'Tangerine', cursive;
      color: white;
      font-size: 24px;
      text-align: right;
      margin-top: 10px;
      text-decoration: none;
      transition: color .1s ease-in;
      &:hover {
        color: #2c3e50;
      }
    }
  }

  &__socials {
    display: flex;
    justify-content: center;
    padding-top: 200px;
  }
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
}
.arrow-7 {
  display: block;
  margin: 40px auto 10px auto;
  width: 38px;
  height: 100px;
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
    //background-color: #f3ec78;
    background-image: linear-gradient(45deg, #FFDC80,#FCAF45,#F77737,#F56040,#FD1D1D,#E1306C,#C13584,#833AB4,#5851DB,#405DE6);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
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
