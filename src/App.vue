<template>
  <div id="app">
    <div class="backgroundwrapper">
      <Nav />
      <router-view/>
    </div>
  </div>
</template>
<script>
import Nav from '@/components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>
<style lang="scss">
@import "assets/style/style";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: black;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.backgroundwrapper {
  background: url("./assets/img/2k/mountains.jpg") center no-repeat;
  width: 100%;
  height: 100vh;
  background-size: cover;
}
</style>
