<script>
import { social } from '../data/data.js';
export default {
  name: 'Footer',
  data(){
    return{
      social
    }
  }
}
</script>

<template>
  <footer>
    <div class="container h-100 text-start">
      <div class="row d-flex align-items-center h-100">
        <div class="col-12 col-md-4 nv-col">
          <div class="info">
            <span style="font-size: 1.5rem;">Niccolò Vaccina</span>
            <ul class="px-0 mb-0">
              <li>
                <a href="mailto:niccolovac@gmail.com" target="_blank">
                  <i class="fa-solid fa-envelope"></i> niccolovac@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:00390123456789"><i class="fa-solid fa-phone"></i> +39 3891168261</a>
              </li>
              <li>
                <a href="https://goo.gl/maps/hWkhqvqYgG1v8eL9A" target="_blank" rel="noopener">
                  <i class="fa-solid fa-location-dot pe-1"></i> Cesena (FC) - Italia
                </a>
              </li>            
            </ul>  
          </div>  
        </div>
        <div class="col-12 col-md-4 nv-col">
          <div class="logo-footer">
            <router-link :to="{ name:'home' }"><img src="/img/logo/logo.webp" alt="logo"></router-link>
          </div>    
        </div>
        <div class="col-12 col-md-4 col-social">
          <div class="social w-100 h-100">
            <nav class="h-100 w-100">
              <ul class="d-flex align-items-center justify-content-center w-100 h-100 mb-0 ps-0">
                <li v-for="(icon, index) in social" :key="index">
                  <a :href="icon.href" :aria-label="icon.name" target="_blank">
                    <i :class="icon.icon"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="privacy mt-3">
            <a href="https://www.iubenda.com/privacy-policy/70797940" class="iubenda-noiframe me-3" title="Privacy Policy" target="_blank">Privacy Policy</a>
            <a href="https://www.iubenda.com/privacy-policy/70797940/cookie-policy" class="iubenda-noiframe" title="Cookie Policy" target="_blank">Cookie Policy</a>              
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../scss/general/variables' as *;
@import '../scss/general/utils';

footer{
  width: 100%;
  padding: 20px 0;
  background-color: $tertiary-color;
  color: $secondary-color;
  margin-top: 150px;
  .nv-col{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .info{
      li{
        margin-bottom: 5px;
        a{
          font-weight: 200;
          transition: all 0.3s;
          &:hover{
            color: $primary-color;
          }
          i{
            margin-right: 5px;
          }
        }
      }
    }
    .logo-footer{
      width: 200px;
      a{
        border: 0 !important;
        background-color: transparent !important;
      }
      &:hover{
        img{
          filter: brightness(10%) invert(150%);
        }
      }
    }   
  }
  .col-social{
    .social{
      display: flex;      
      align-items: center;
      justify-content: center;
      height: 100%;
      a{
        font-size: 30px;
        margin: 0 10px;
        transition: all 0.3s;
        &:hover{
          color: $primary-color;
        }
      }
    }
    .privacy{
        display: flex;
        align-items: center;
        justify-content: center;      
      a{
        transition: all 0.3s;
        font-weight: 200;
        &:hover{
          color: $primary-color;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .nv-col:nth-child(2){
    margin: 20px 0;
    padding: 20px 0 !important;
    border-top: 1px solid $secondary-color;
    border-bottom: 1px solid $secondary-color;
  }
  .nv-col{
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
}

</style>