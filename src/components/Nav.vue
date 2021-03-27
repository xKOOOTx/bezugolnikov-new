<template>
  <nav class="nav">
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
  margin: 120px 100px 100px 500px;
  //position: fixed;

  &__ul {
    display: flex;
    list-style: none;
    padding-left: 0;
  }

  &__li {
    padding-left: 150px;

    &_link {
      position: relative;
      display: block;
      margin: 0 2px;
      padding: 0.625rem 1.25rem;
      text-transform: uppercase;
      overflow: hidden;
      color: white;
      transition: background-color .2s ease-in, color .2s ease-in;

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
        color: black;
        background-color: rgba(#fff, .35);
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
