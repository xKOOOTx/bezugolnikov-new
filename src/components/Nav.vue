<template>
  <nav class="nav center">
    <a href="#" class="nav__link">
<!--      <img src="../assets/img/logo/two-squares/logo_transparent.png" alt="logo">-->
      <v-img
        class="nav__logo"
        src="../assets/img/logo/two-squares/logo_transparent.png" />
    </a>
    <div class="nav__block">
      <ul class="nav__ul">
        <li class="nav__li">
          <router-link to="#" class="nav__li_link">
            link
          </router-link>
        </li>
        <li class="nav__li">
          <router-link to="#" class="nav__li_link">
            link
          </router-link>
        </li>
        <li class="nav__li">
          <router-link to="#" class="nav__li_link"> link </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
<style scoped lang="scss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  //position: fixed;
  &__link {
    position: relative;
    width: 300px;
    background-color: rgba(#fff, .3);
    &:after {
      display: block;
      content: '';
      position: absolute;
      bottom: -150px;
      left: 0;
      border-top: 150px solid rgba(#fff, .3);;
      border-left: 0 solid transparent;
      border-right: 150px solid transparent;
    }
    &:before {
      display: block;
      content: '';
      position: absolute;
      bottom: -150px;
      right: 0;
      border-top: 150px solid rgba(#fff, .3);;
      border-left: 150px solid transparent;
      border-right: 0 solid transparent;
    }
  }

  &__logo {
    width: 100%;
    height: auto;
  }

  &__ul {
    display: flex;
    list-style: none;
  }

  &__li {
    margin: 0 20px;
    &_link {
      position: relative;
      display: block;
      margin: 0 2px;
      padding: 0.625rem 1.25rem;
      text-transform: uppercase;
      overflow: hidden;

      &:before {
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
        color: inherit;
        text-decoration: none;

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
