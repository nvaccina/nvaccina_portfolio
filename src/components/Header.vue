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
        <router-link :to="{ name:'home' }"><img src="../../public/img/logo/nv3.png" alt="logo"></router-link>
      </div>
      <div class="header-menu">
        <ul class="nav nav-underline">
          <li v-for="(link, index) in mainMenu" :key="index" class="nav-item">
            <router-link :to="{ name:link.text }">{{link.text}}</router-link>
          </li>
        </ul>
      </div>

      <button class="btn d-none btn-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul>
            <li v-for="(link, index) in mainMenu" :key="index" class="nav-item py-2">
              <router-link class="link-responsive" :to="{ name:link.text }">{{link.text}}</router-link>
            </li>
          </ul>
        </div>
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
  box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.1);
  .logo{
    position: absolute;
    top: 10px;
    left: 200px;
    height: 60px;
    a{
      border: 0 !important;
      img{
        height: 100%;
        &:hover{
          filter: brightness(10%) invert(150%);
        }
    }
    }
  }
  .header-menu{
    a{
      color: $secondary_color;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      margin: 0 10px;
      &:active, &:hover{
        color: $primary-color !important;
        border-bottom: 2px solid $primary-color;
      }
    }
  }
  .link-responsive{
    color: black;
    text-transform: uppercase;
    font-size: 18px;
  }
}

@media (max-width: 1200px) {
    header {
      height: 60px;
      .logo {
        top: 0px;
        left: 20px;
      }
    }
}

@media (max-width: 900px) {
  section{
    width: 100%;
  }
    header {
      height: 60px;
      .container{
        justify-content: space-between  !important;
        .logo {
          position: relative;
        }
        .header-menu{
          display: none;
        }
        .btn-menu{
          display: block !important;
          color: $secondary-color;
          font-size: 24px;
        }
      }
    }
}

</style>