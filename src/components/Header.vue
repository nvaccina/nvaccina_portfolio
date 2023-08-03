<script>
import {mainMenu} from '../data/data.js';
export default {
  name: 'Header',
  data(){
    return{
      mainMenu,
    }
  }

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
          <li v-for="(link, index) in mainMenu" :key="index" class="nav-item">
            <a class="nav-link" :class="{active : link.isActive}" :href="link.href">{{link.text}}</a>
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
  .logo{
    position: absolute;
    top: 0;
    left: 200px;
    width: 110px;
  }
  .header-menu{
    a{
      color: $secondary_color;
      text-decoration: none;
      text-transform: capitalize;
      font-weight: bold;
      font-size: 18px;
      margin: 0 10px;
      &:active, &:hover{
        color: $primary-color !important;
        border-bottom: 2px solid $primary-color;
      }
    }
  }
}

</style>