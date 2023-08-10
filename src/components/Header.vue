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
  <div class="tools pt-1">
    <i class="fa-solid fa-screwdriver-wrench pe-2"></i> SITO IN COSTRUZIONE <i class="fa-solid fa-screwdriver-wrench ps-2"></i>
  </div>
  <header>
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="logo">
        <router-link :to="{ name:'home' }"><img src="/img/logo/nv.png" alt="logo"></router-link>
      </div>
      <div class="header-menu">
        <ul class="nav nav-underline">
          <li v-for="(link, index) in mainMenu" :key="index" class="nav-item">
            <router-link :to="{ name:link.text }">{{link.text}}</router-link>
          </li>
        </ul>
      </div>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown d-none btn-menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-bars"></i></a>
        <ul class="dropdown-menu px-3">
          <li v-for="(link, index) in mainMenu" :key="index" class="nav-item pb-2">
            <router-link class="link-responsive" :to="{ name:link.text }">{{link.text}}</router-link>
          </li>
        </ul>
      </li>
      
    </div>
  </header>
  
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
.tools{
  height: 30px;
  color: $secondary-color;
  background-color: $primary-color;
  text-align: center;
}
header{
  position: absolute;
  top: 30px;
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
  .dropdown-menu{
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: rgb(253, 248, 248);
    .link-responsive{
      color: $quaternary-color;
      text-transform: uppercase;
      font-size: 18px;
    }
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