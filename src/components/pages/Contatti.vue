<script>
import Wabutton from '../partials/Wabutton.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'Contatti',
  components:{
    Wabutton
  },
  setup(){
    useHead({
      title:'Contatta - Niccolò Vaccina',
      meta: [
        { name:'title', content:'Contatta - Niccolò Vaccina' },
        { name:'description', content:'Vuoi collaborare con me? Contattami per informazioni o proposte di lavoro.' },
        { rel:'canonical', content:'https://nvaccina-portfolio.netlify.app/contatti' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'Contatti, email, collaborazione, sviluppatore web' },
        { property:'article:author', content:'Niccolò Vaccina' },
        { property:'article:tag', content:'Contatti, Collaborazione, Sviluppo Web' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/contatti' },
        { property:'og:title', content:'Contattami - Niccolò Vaccina' },
        { property:'og:description', content:'Scrivimi per collaborazioni o informazioni.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/contact-preview.jpg' },
        { property:'twitter:card', content:'summary_large_image' },
        { property:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/contatti' },
        { property:'twitter:title', content:'Contattami - Niccolò Vaccina' },
        { property:'twitter:description', content:'Contattami per progetti e collaborazioni.' },
        { property:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/contact-preview.jpg' }
      ]
    });
    return{};
  }
}
</script>

<template>
  <!-- <div class="slideshow"  style="margin-top: 80px;">
    <img src="/img/contatti-telefono.jpg" alt="Contatti">
     <div class="container d-flex align-items-center h-100">
       <h1 class="new-title">Contatti</h1>
     </div>
  </div> -->
  <section id="contacts" class="mt-100">
    <div class="container">
        <h1 class="pb-5 title">Contatti</h1>
    </div>
    <div class="container d-flex align-items-center flex-column title">
      <div class="d-flex align-items-center flex-column">
        <h2>Niccolò Vaccina</h2>
        <h5>Full Stack Web Developer</h5>
        <div class="linea my-3"></div>
      </div>
      <div class="contatti d-flex align-items-center justify-content-center pb-5">
        <div class="pe-5 mail">
          <i class="fa-solid fa-envelope pe-2"></i>
          <a href="mailto:niccolovac@gmail.com">niccolovac@gmail.com</a>
        </div>
        <div class="cell">
          <i class="fa-solid fa-phone pe-2"></i>
          <a href="tel:00390123456789">+39 3891168261</a>
        </div>
      </div>
      <div>
          <a class="btn-mail" href="mailto:niccolovac@gmail.com">
            INVIA UNA MAIL
          </a>
      </div>
    </div>
    <div class="map-container">
      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21376.486686414853!2d12.23362394867277!3d44.13992303310359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1739990647495!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

  </section>
  <Wabutton/>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';
.slideshow{
  height: 350px;
  overflow: hidden;
  position: relative;
  background-image: url("/img/contatti-telefono.jpg");
  background-repeat: no-repeat;
  background-size: 100% ;
  img{
    object-fit: cover;
    height: 100%;
    z-index: 4;
  }
  h1{
    // position: absolute;
    top: 50px;
    left: 20%;
    z-index: 5;
    color: $secondary-color;
  }
}
#contacts{
  color: black;
  min-height: calc(100vh - 294px);
  .linea{
    height: 2px;
    width: 400px;
    background-color: $tertiary-color;
    box-shadow:  2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
  a{
    color: black;
    &:hover{
      color: $primary-color;
    }
  }
  .map-container{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
    .map{
      width: 80%;
      border-radius: 20px;
      overflow: hidden;
      box-shadow:  5px 5px 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
      & iframe{
        width: 100%;
      }
    }
  }
}

@media (max-width: 414px) {
  h1{
    font-size: 40px;
  }
  .linea{
    width: 100% !important;
  }
  .contatti{
    flex-direction: column;
    .mail, .cell{
      text-align: center;
      padding: 10px 0 !important;
    }
  }
}
</style>