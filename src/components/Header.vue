<script>
export default {
  name: 'Header'

}
</script>

<template>
  <header>
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="logo">
        <img src="../../public/img/logo/nv2.png" alt="">
      </div>
      <div class="header-menu">
        <ul class="nav nav-underline">
          <li class="nav-item">
            <router-link :to="{name:'home'}">home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'about'}">about</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'skills'}">skills</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'portfolio'}">portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{name:'contacts'}">contacts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;

header{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: $tertiary-color;
  height: 80px;
  border-bottom: 4px solid $primary-color;
  .logo{
    position: absolute;
    top: 0;
    left: 200px;
    width: 110px;
  }
  .header-menu{
    li{
      color: $secondary_color;
      text-decoration: none;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 18px;
      &:active{
        color: $primary-color !important;
      }
    }
  }
}

</style>