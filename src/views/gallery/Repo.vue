<template>
  <div class="repo">
    <Preloader />
    REPO
  </div>
</template>

<script>
import Preloader from '../../components/Preloader'
export default {
  name: 'Repo',
  components: {
    Preloader
  }
}
</script>

<style scoped lang="scss">
.repo {
  background: #fff;
}
</style>
