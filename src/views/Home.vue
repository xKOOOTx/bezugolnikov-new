<template>
  <div class="home">
    <Nav />
    <h1>some text</h1>
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
  background: url("../assets/img/2k/mountains-river.jpg") center no-repeat;
  background-size: cover;
}
</style>
