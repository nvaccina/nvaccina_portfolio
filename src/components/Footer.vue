<script>
export default {
  name: 'Footer',

}
</script>

<template>
  <footer>
    <div class="container h-100 text-start">
      <div class="row h-100">
        <div class="col-4">
          <div class="info">
            <h4>Niccolò Vaccina</h4>
            <ul class="px-0">
              <li>
                <a href="mailto:niccolovac@gmail.com">
                  <i class="fa-solid fa-envelope"></i> niccolovac@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:00390123456789"><i class="fa-solid fa-phone"></i> +39 3891168261</a>
              </li>
              <li>
                <a href="https://goo.gl/maps/rEEeLo5VjbSSjJaV7" target="_blank" rel="noopener">
                  <i class="fa-solid fa-location-dot"></i> Via delle Margherite n.68, 47522 - Cesena (FC)
                </a>
              </li>
            </ul>  
          </div>  
        </div>
        <div class="col-4 d-flex align-items-center justify-content-center">
          <div class="logo-footer">
            <a href="#">
              <img src="/img/logo/nv3.png" alt="">
            </a>
          </div>    
        </div>
        <div class="col-4">
          <div class="social">
            <nav class="h-100 w-100">
              <ul class="d-flex align-items-center justify-content-end w-100 h-100 mb-0">
                <li>
                  <a href="https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/nvaccina">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/niccolo.vaccina">
                    <i class="fa-brands fa-square-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa-brands fa-instagram"></i>
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
  height: 150px;
  background-color: $tertiary-color;
  color: $secondary-color;
  .col-4{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    .info{
      a{
        font-weight: 300;
        &:hover{
          color: $primary-color;
        }
        i{
          margin-right: 5px;
        }
      }
    }
    .logo-footer{
      width: 200px;
    }
    .social{
      a{
        font-size: 30px;
        margin: 0 10px;
        &:hover{
          color: $primary-color;
        }
      }
    }
  }
}

</style>