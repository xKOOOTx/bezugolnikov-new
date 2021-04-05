<template>
  <div class="portrait">
    <Preloader />
    PORTRAIT
  </div>
</template>

<script>
import Preloader from '../../components/Preloader'
export default {
  name: 'Portrait',
  components: {
    Preloader
  }
}
</script>

<style scoped lang="scss">
.portrait {
  background: #fff;
}
</style>
