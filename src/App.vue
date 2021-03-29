<template>
  <div id="app">
    <Home />
    <Gallery />
  </div>
</template>

<script>
import Home from './views/Home'
import Gallery from './views/Gallery'

export default {
  name: 'App',
  components: {
    Home,
    Gallery
  }
}
</script>

<style lang="scss">
@import "assets/style/style";
#app {
/*  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
}
</style>
