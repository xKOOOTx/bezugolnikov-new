<template>
  <div class="clients">
    <div class="clients__block">
      <a href="#" class="clients__label">
        <div class="clients__label_img"></div>
        <div class="clients__label_text">Lorem ipsum dolor sit amet.</div>
      </a>
      <a href="#" class="clients__label">
        <div class="clients__label_img"></div>
        <div class="clients__label_text">Lorem ipsum dolor sit amet.</div>
      </a>
      <a href="#" class="clients__label">
        <div class="clients__label_img"></div>
        <div class="clients__label_text">Lorem ipsum dolor sit amet.</div>
      </a>
      <a href="#" class="clients__label">
        <div class="clients__label_img"></div>
        <div class="clients__label_text">Lorem ipsum dolor sit amet.</div>
      </a>
      <a href="#" class="clients__label">
        <div class="clients__label_img"></div>
        <div class="clients__label_text">Lorem ipsum dolor sit amet.</div>
      </a>
      <a href="#" class="clients__label">
        <div class="clients__label_img"></div>
        <div class="clients__label_text">Lorem ipsum dolor sit amet.</div>
      </a>
    </div>
<!--      <div class="clients__block_group">
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
        <div class="clients_item"><span>label</span></div>
      </div>-->
  </div>
</template>

<script>
export default {
  name: 'Clients'
}
</script>

<style scoped lang="scss">
.clients {
  padding: 150px 0;
  background-color: #fff;
  overflow: hidden;

  &__block {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    margin: 20px;
    border: 1px solid #ccc;
    background-color: rgba(#000, 0);

    /*&_group {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      flex-wrap: wrap;
      max-width: 550px;
      transform: rotate(45deg);
    }*/
  }

  &__label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 30px;
    margin: 60px 0;
    text-decoration: none;
    color: inherit;
    border-radius: 20px;
    border: 1px solid #ccc;
    transition: all .3s ease-in;
    transition-duration: .3s;

    &:hover {
      box-shadow: 0 0 7px 0 rgba(#000, .4);
      transform: scale(1.01);
    }
    &_img {
      width: 100px;
      height: 100px;
      margin-right: 20px;
      border-radius: 50%;
      background-color: #ccc;
    }
    &_text {
    }
  }

  /*&_item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    margin: 30px;
    background-color: #fff;

    box-shadow: 0 0 7px 0 rgba(#ccc, .7);

    transition: all .3s ease-in;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 7px 0 rgba(#ccc, .7);
      border-color: transparent;
    }

    & span {
      transform: rotate(-45deg);
    }
  }*/
}
</style>
