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
  <section id="contacts" class="mt-100">
    <div class="container">
        <h1 class="pb-5 title">Contatti</h1>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8 pe-md-5 order-2 order-md-1">
          <div class="map-container">
            <div class="map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21376.486686414853!2d12.23362394867277!3d44.13992303310359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sit!2sit!4v1739990647495!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 newct ps-5 pt-3 order-1 order-md-2">
          <div class="text-start w-100">
            <h2>Niccolò Vaccina</h2>
            <h5>Full Stack Web Developer</h5>
          </div>
          <div class="contatti pt-2 pb-5 w-100">
            <div>
              <i class="fa-solid fa-envelope pe-2"></i>
              <a href="mailto:niccolovac@gmail.com">niccolovac@gmail.com</a>
            </div>
            <div>
              <i class="fa-solid fa-phone pe-2"></i>
              <a href="tel:00390123456789">+39 3891168261</a>
            </div>
            <div>
              <a href="https://goo.gl/maps/hWkhqvqYgG1v8eL9A" target="_blank" rel="noopener">
                <i class="fa-solid fa-location-dot pe-1"></i> Cesena (FC) - Italia
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Wabutton/>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';
#contacts{
  color: black;
  min-height: calc(100vh - 294px);
  .newct{
    // width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-left: 4px solid $tertiary-color;
    .contatti div{      
      padding: 5px 0 !important;      
    }
  }
  a{
    color: black;
    &:hover{
      color: $primary-color;
    }
  }
  .map-container{
    width: 100%;
    .map{
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      box-shadow:  5px 5px 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
      & iframe{
        width: 100%;
      }
    }
  }
}

@media (max-width: 768px) {
  .newct{
    border: 0px !important;
  }
}

@media (max-width: 414px) {
  h1{
    font-size: 40px;
  }
  .linea{
    width: 100% !important;
  }
}
</style>