<template>
  <div class="wrapper">
    <Main />
    <Gallery />
    <About />
<!--    <Clients />-->
  </div>
</template>

<script>

import Main from './Main'
import Gallery from './Gallery'
import About from './About'

export default {
  name: 'Home',
  components: {
    Main,
    Gallery,
    About
    // Clients
  }
}
</script>

<style lang="scss" scoped>
</style>
