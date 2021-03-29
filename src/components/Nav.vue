<template>
  <div class="nav">
    <ul class="nav__ul">
      <li class="nav__li">
        <a href="#" class="nav__li_link">
          Gallery
        </a>
      </li>
      <li class="nav__li">
        <a href="#" class="nav__li_link">
          About
        </a>
      </li>
      <li class="nav__li">
        <a href="#" class="nav__li_link">
          Clients
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="scss" scoped>
.nav {
  color: #fff;
  &__ul {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    text-align: center;
  }
  &__li {
    margin-right: 100px;
    &_link {
      position: relative;
      display: block;
      margin: 0 2px;
      padding: 0.625rem 1.25rem;
      text-transform: uppercase;
      overflow: hidden;
      color: #fff;
      text-decoration: none;

      font-size: 24px;
      font-weight: 400;

      transition: background-color .2s ease-in, color .2s ease-in;
      &:before {
        box-sizing: border-box;
        transform: translateX(100%);
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 99.5%;
        height: 2px;
        border-bottom: 2px solid transparent;
        border-left: 2px solid transparent;
      }
      &:after {
        box-sizing: border-box;
        transform: translateX(-100%);
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 99.5%;
        height: 2px;
        border-top: 2px solid transparent;
        border-right: 2px solid transparent;
      }

      &:hover {
        color: rgba(#fff, .4);
        text-decoration: none;
        background-color: rgba(#fff, .09);
        &:before {
          transition: 0.1s transform linear, 0.1s height linear 0.1s;
          transform: translateX(0);
          height: 100%;
          border-color: #1fbfac;
        }
        &:after {
          transition: 0.1s transform linear 0.2s, 0.1s height linear 0.3s;
          transform: translateX(0);
          height: 100%;
          border-color: #1fbfac;
        }
      }
    }
  }
}
</style>
