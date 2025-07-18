<script>
import {mainMenu} from '../data/data.js';
export default {
  name: 'Header',
  data(){
    return{
      mainMenu,
    }
  },
  methods:{
    toggleMenu() {
      const menuinner = document.getElementById('menu-inner');
      const bar1 = document.getElementById('bar1');
      const bar2 = document.getElementById('bar2');
      const bar3 = document.getElementById('bar3');
      const offcanvas = document.getElementById('mobileMenu');
      const isOpen = offcanvas.classList.contains('show');

      if (isOpen) {
        offcanvas.style.transform = 'translateX(100%)';
        document.body.style.overflow = '';

        const backdrop = document.querySelector('.custom-backdrop');
        if (backdrop) {
          backdrop.remove();
        }

        menuinner.classList.remove('menuinner-clicked');
        bar1.classList.remove('bar1-clicked');
        bar2.classList.remove('bar2-clicked');
        bar3.classList.remove('bar3-clicked');

        const handleTransitionEnd = () => {
          offcanvas.classList.remove('show');
          offcanvas.style.visibility = 'hidden';
          offcanvas.removeEventListener('transitionend', handleTransitionEnd);
        };

        offcanvas.addEventListener('transitionend', handleTransitionEnd);
      } else {
        menuinner.classList.add('menuinner-clicked');
        bar1.classList.add('bar1-clicked');
        bar2.classList.add('bar2-clicked');
        bar3.classList.add('bar3-clicked');

        const backdrop = document.createElement('div');
        backdrop.classList.add('custom-backdrop');
        backdrop.style.cssText = `
          position: fixed;
          top: 80px;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1040;
          cursor: pointer;
        `;

        backdrop.addEventListener('click', this.toggleMenu);
        document.body.appendChild(backdrop);

        offcanvas.classList.add('show');
        offcanvas.style.visibility = 'visible';

        requestAnimationFrame(() => {
          offcanvas.style.transform = 'translateX(0)';
        });

        document.body.style.overflow = 'hidden';
      }
    }
  }
}
</script>

<template>
  <header>
    <div class="container h-100 d-flex align-items-center justify-content-center">
      <div class="logo">
        <router-link :to="{ name:'home' }"><img src="/img/logo/logo.webp" alt="logo"></router-link>
      </div>
      
      <div class="header-menu">
        <ul class="nav nav-underline">
          <li v-for="(link, index) in mainMenu" :key="index" class="nav-item">
            <router-link :to="{ name:link.text }">{{link.text}}</router-link>
          </li>
        </ul>
      </div>

      <!-- <li class="nav-item dropdown menu d-none">
          <a id="menu-inner" class="nav-link dropdown menu-inner" @click="toggleMenu()" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="bar bar-1" id="bar1"></span>
            <span class="bar bar-2" id="bar2"></span>
            <span class="bar bar-3" id="bar3"></span>
          </a>
        <ul class="dropdown-menu px-3">
          <li v-for="(link, index) in mainMenu" :key="index" class="nav-item pb-2">
            <router-link class="link-responsive" @click="toggleMenu()" :to="{ name:link.text }">{{link.text}}</router-link>
          </li>
        </ul>
      </li> -->
      
      <!-- Pulsante hamburger per offcanvas -->
      <div class="menu d-none">
        <button class="btn p-0 border-0" type="button" @click="toggleMenu()">
          <div class="menu-inner" id="menu-inner">
            <span class="bar bar-1" id="bar1"></span>
            <span class="bar bar-2" id="bar2"></span>
            <span class="bar bar-3" id="bar3"></span>
          </div>
        </button>
      </div>
    </div>
  </header>

  <!-- Offcanvas menu -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel">
    <div class="offcanvas-header">
      <h2 class="offcanvas-title" id="mobileMenuLabel">Menu</h2>
    </div>
    <div class="offcanvas-body">
      <ul class="nav flex-column">
        <li v-for="(link, index) in mainMenu" :key="index" class="nav-item mb-2">
          <router-link class="nav-link text-uppercase fw-bold" :to="{ name:link.text }" @click="toggleMenu()">{{ link.text }}</router-link>
        </li>
        <li class="nav-item mb-2">
          <a href="https://www.iubenda.com/privacy-policy/70797940" class=" nav-link text-uppercase fw-bold iubenda-noiframe me-3" title="Privacy Policy" target="_blank">Privacy Policy</a>
        </li>
        <li class="nav-item mb-2">
          <a href="https://www.iubenda.com/privacy-policy/70797940/cookie-policy" class="nav-link text-uppercase fw-bold iubenda-noiframe" title="Cookie Policy" target="_blank">Cookie Policy</a>
        </li>
      </ul>
      <div class="logo-offcanvas d-flex justify-content-center">
        <img src="/img/logo/logo.webp" alt="Niccolò Vaccina logo">
      </div>
    </div>
  </div>
  
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000 !important;
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
      background-color: transparent !important;
      img{
        height: 100%;
        // &:hover{
        //   filter: brightness(10%) invert(150%);
        // }
    }
    }
  }
  .header-menu{
    a{
      color: white !important;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 20px;
      margin: 0 10px;
      transition: all 0.2s;
      padding: 5px 10px;
      transition: linear all 0.2s;
      &.active, &:hover{        
        border-bottom: 3px solid $primary-color !important;
      }
    }
  }

  .menu {    
    width: 50px;
    height: 36px;
    border-radius: 5px;
    padding: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .menu-inner .bar {
    width: 30px;
    background: $secondary-color;
    height: 2px;
    display: inline-block;
    border-radius: 50px;
    transition: all 0.4s;
    transform-origin: right;
  }
  .menu-inner .bar-2 {
    margin: 7px 0px;
  }
  .menuinner-clicked {
    cursor: pointer;
    position: relative;
  }
  //barre
  .bar2-clicked {
    width: 0px !important;
  }
  .bar1-clicked {
    position: absolute;
    top:  -2px;
    left:  -3px;
    width: 33px !important;
    transform: rotate(-45deg);
  }
  .bar3-clicked {
    position: absolute;
    left: -3px;
    bottom: -7px;
    width: 33px !important;
    transform: rotate(45deg);
  }
  .dropdown-menu{
    margin-top: 5px !important;
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.1);
    background-color: rgb(253, 248, 248);
    .link-responsive{
      color: $quaternary-color;
      text-transform: uppercase;
      font-size: 18px;
      padding: 2px 5px;
    }
  }

}
.offcanvas-end {
  top: 80px;
  height: calc(100% - 80px);
  transition: transform 0.3s ease-in-out; /* Transizione smooth */
  transform: translateX(100%);
  transition: transform 0.3s ease;
  transform: translateX(100%);
  visibility: hidden;
  background-color: white;
  z-index: 1050;
  position: fixed;
  right: 0;
  width: 300px;
  box-shadow: -2px 0 8px rgba(0,0,0,0.1);
  .offcanvas-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .logo-offcanvas{
      height: 60px;
      padding-top: 10px;
      border-top: 2px solid $primary-color;
      img {
        height: 100%;
        width: auto;
      }
    }
    .nav-item{
      font-size: 20px;    
      a{
        text-transform: capitalize !important;
      }
    }
  }
}
.offcanvas-end.show {
  transform: translateX(0);
  visibility: visible;
  z-index: 1050 !important;
}

.offcanvas-backdrop {
  backdrop-filter: blur(4px);
}

.custom-backdrop.show {
  opacity: 1;
}

@media (max-width: 1200px) {
    header {
      
      .logo {
        left: 20px;
      }
    }
}

@media (max-width: 900px) {
  header {
    .logo{
      top: 0px;
    }
    .container{
      justify-content: space-between  !important;
      padding: 0;
      width: 100%;
      margin: 0 !important;
      .logo {
        position: relative;
        left: 0;
        margin-left: 30px;
      }
      .header-menu{
        display: none;
      }
      .menu{
        display: block !important;
        margin-right: 30px;
      }
    }
  }
  
}

</style>

<style lang="scss" scoped>
.custom-backdrop {
  position: fixed !important;
  top: 80px !important;
  left: 0 !important;
  width: 100% !important;
  height: calc(100vh - 80px) !important;
  background-color: rgba(0, 0, 0, 0.5) !important;
  z-index: 1040 !important;
  cursor: pointer !important;
  opacity: 0; /* Stato iniziale: trasparente */
  transition: opacity 0.3s ease-in-out; 
}
</style>