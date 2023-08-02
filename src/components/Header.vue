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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contacts</a>
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
  width: 100vw;
  border-bottom: 4px solid $primary-color;
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
      &:active{
        color: $primary-color !important;
      }
    }
  }
}

</style>