<template>
  <div class="home">
    <div class="wrapper"
    >
      <img src="../assets/img/2k/flower.jpg">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      homeImages: [
        {
          url: '/wedding',
          path: '../assets/img/2k/flower.jpg',
        },
        {
          url: '/portrait',
          path: '../assets/img/2k/beach.jpg',
        },
        {
          url: '/event',
          path: '../assets/img/2k/lake.jpg',
        },
        {
          url: '/club',
          path: '../assets/img/2k/leaves-river.jpg',
        },
        {
          url: '/food',
          path: '../assets/img/2k/mountains.jpg',
        },
        {
          url: '/studio',
          path: 'mountains-river.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
}

.wrapper {
  display: contents;
  width: 100%;
  height: 100vh;
}

.block {
}
</style>
