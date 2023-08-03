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
            <a class="nav-link active" href="#">home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">about</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">contacts</a>
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
  border-bottom: 4px solid $quaternary-color;
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