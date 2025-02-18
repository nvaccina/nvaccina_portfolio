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
            <h4>Niccolò Vaccina</h4>
            <ul class="px-0 mb-0">
              <li>
                <a href="mailto:niccolovac@gmail.com">
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
            <router-link :to="{ name:'home' }"><img src="/img/logo/nv-l.png" alt="logo"></router-link>
          </div>    
        </div>
        <div class="col-12 col-md-4 nv-col">
          <div class="social">
            <nav class="h-100 w-100">
              <ul class="d-flex align-items-center justify-content-end w-100 h-100 mb-0 ps-0">
                <li v-for="(icon, index) in social" :key="index">
                  <a :href="icon.href">
                    <i :class="icon.icon"></i>
                  </a>
                </li>
              </ul>
            </nav>
    
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
    .social{
      a{
        font-size: 30px;
        margin: 0 10px;
        transition: all 0.3s;
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