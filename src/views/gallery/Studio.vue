<template>
 <div class="studio">
   <Preloader />
   STUDIO
 </div>
</template>

<script>
import Preloader from '../../components/Preloader'
export default {
  name: 'Studio',
  components: {
    Preloader
  }
}
</script>

<style scoped lang="scss">
  .studio {
    background: #fff;
  }
</style>
