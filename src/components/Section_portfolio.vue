<script>
export default {
  name: 'Section_portfolio',

}
</script>

<template>
  <section class="my-5">
    <h1 class="pb-5 text-center">Portfolio</h1>
    <div class="container d-flex flex-wrap">
      <div class="nv-card">
        <img class="project-image" src="../../public/img/screen progetti/Dashboard Admin + Sito web Guest.png" alt="">
        <div class="project-info">
            <h3>Dashboard</h3>
            <div>
              <p>Tecnologie</p>
              <div class="d-flex">
                <div class="tecngology">
                  <img src="../../public/img/skills/laravel.png" alt="">
                </div>
                <div class="tecngology">
                  <img src="../../public/img/skills/vue.png" alt="">
                </div>
              </div>
            </div>
            <div class="sito mb-2">
                <a class="site-button me-2" href="">
                  Vai al sito
                </a>
                <a class="git-button" href="#">
                  <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>

      </div>
      <div class="nv-card">

      </div>
      <div class="nv-card">

      </div>
      <div class="nv-card">

      </div>
      <div class="nv-card">

      </div>
      <div class="nv-card">

      </div>
    </div>
  </section>
  
</template>

<style lang="scss" scoped>
@import '../scss/general/variables';

.nv-card{
  margin: 20px;
  width: calc(100% / 3 - 40px);
  border: 1px solid black;
  height: 250px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  &:hover {
      box-shadow: 0 0 10px #CCC9A1;
  }
  .sito{
    position: absolute;
    bottom: 10px;
    left: 20px;
    a{
        color: $secondary-color;
    }
    i{
        font-size: 30px;
    }
  }
  .project-image {
      width: 100%;
      height: 100%;
      img{
        //object-fit: contain;
        width: 100%;
        height: 100%;
      }
  }
  .project-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    padding: 1rem;
    font-size: 1rem;
    .tecngology{
      width: 30px;
      margin-right: 5px;
    }
  }
  &:hover .project-info {
    opacity: 1;
    i{
        color: $tertiary_color;
    }
  }
}

</style>