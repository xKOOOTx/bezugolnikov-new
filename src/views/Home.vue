<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      background: {
        black: '000',
        white: 'fff',
        grey: 'ccc',
        fireBrick: 'B22222'
      }
    }
  },
  methods: {
    changeBackground () {
      for (let i = 0; i < this.background.length; i++) {
        const backgroundColour = this.background[i][i]
        console.log(backgroundColour)
      }
    }
  }
}
</script>
