<template>
  <div class="official">
    <Preloader />
    OFFICIAL
  </div>
</template>

<script>
import Preloader from '../../components/Preloader'
export default {
  name: 'Official',
  components: {
    Preloader
  }
}
</script>

<style scoped lang="scss">
.official {
  background: #fff;
}
</style>
