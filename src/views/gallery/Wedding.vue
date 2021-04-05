<template>
  <div class="wedding">
    <Preloader />
    WEDDING
  </div>
</template>

<script>
import Preloader from '../../components/Preloader'
export default {
  name: 'Wedding',
  components: {
    Preloader
  }
}
</script>

<style scoped lang="scss">
.wedding {
  background: #fff;
}
</style>
