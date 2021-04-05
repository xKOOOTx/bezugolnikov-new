<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="logo"></div>
      <p>Добро пожаловать!</p>
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Preloader',
  data () {
    return {
      show: true
    }
  },
  mounted () {
    this.showToggle()
  },
  methods: {
    showToggle () {
      setTimeout(() => {
        this.show = false
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">
.preloader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 9999;
  & .logo {
    width: 400px;
    height: 300px;
    background: url('../assets/logo/logo_transparent.png') center no-repeat;
    background-size: cover;
  }
  & p {
    font-weight: 800;
    font-size: 24px;
  }
}
.circles {
  display: flex;
  margin-top: 10px;
}
.circle {
  width: 20px;
  height: 20px;
  margin: 10px;
  background-color: cornflowerblue;
  border-radius: 50%;
  animation: scaleIn 1s;
  transform: scale(0);
  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: .1s;
  }
  &:nth-child(3) {
    animation-delay: .2s;
  }
  &:nth-child(4) {
    animation-delay: .3s;
  }
  &:nth-child(5) {
    animation-delay: .4s;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
  .logo {
    animation: scaleOut 1s;
  }
  p {
    animation: scaleOut 1s;
  }
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
