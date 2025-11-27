<script>
import Wabutton from '../partials/Wabutton.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'Home',
  components:{
    Wabutton
  },
  setup(){
    useHead({
      title: 'Niccolò Vaccina | Full Stack Developer specializzato in .NET e C#',
      link:[{ rel:'canonical', href:'https://niccolovaccina.it/' }],
      meta: [
        { name:'title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { name:'description', content:'Sono Niccolò Vaccina, uno sviluppatore full stack specializzato in .NET, C#, MVC, Angular e SQL Server. Scopri il mio portfolio e le mie competenze.' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'niccolò vaccina, vaccina, sviluppatore web, full stack developer, sviluppatore, sviluppatore .net, c#, sql server, mvc, agular, cesena, forlì, portfolio sviluppatore, web developer italy' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://niccolovaccina.it/' },
        { property:'og:title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { property:'og:description', content:'Scopri il mio portfolio e le mie competenze come sviluppatore full stack.' },
        { property:'og:image', content:'https://niccolovaccina.it/assets/home-preview.jpg' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://niccolovaccina.it/' },
        { name:'twitter:title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { name:'twitter:description', content:'Sviluppatore full stack specializzato in .NET, C#, MVC, Angular e SQL Server.' },
        { name:'twitter:image', content:'https://niccolovaccina.it/assets/home-preview.jpg' }
      ]
    });
    return{};
  }
}

</script>

<template> 
  <div id="home">
    <section class="section-home mt-50">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7 testo-home px-lg-5">
            <h1>{{ $t('home.greeting') }}
              <span class="small-text">{{ $t('home.role') }}</span>
            </h1>
            <p>{{ $t('home.paragraph_1') }}</p>
            <p>{{ $t('home.paragraph_2') }}</p>
          </div>
          <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-start">
            <div class="my-img circle">
              <a target="_blank" href="https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/">
                <img
                  src="/img/profilo/foto_busto.webp"
                  alt="Niccolò Vaccina"
                  width="250"
                  height="250"
                  fetchpriority="high"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-end order-2 order-lg-1">
            <div class="my-img square">            
              <img src="/img/chi-sono.webp" alt="Chi sono - Niccolò Vaccina">            
            </div>
          </div>
          <div class="col-12 col-lg-7 testo-home px-lg-5 order-1 order-lg-2">
            <h2>{{ $t('home.about_title') }}</h2>
            <p>
              {{ $t('home.about_text') }}<br>
              <strong>{{ $t('home.about_cta') }}</strong>
            </p>
            <div class="cv d-flex justify-content-center mt-4">
              <span class="cv-button"><router-link :to="{ name:'chi-sono' }">{{ $t('home.cta_discover_more') }}</router-link></span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-7 testo-home px-lg-5">
            <h2>{{ $t('home.portfolio_title') }}</h2>
            <p>{{ $t('home.portfolio_text') }}</p>
            <div class="cv d-flex justify-content-center mt-4">
              <span class="cv-button"><router-link :to="{ name:'portfolio' }">{{ $t('home.cta_discover_more') }}</router-link></span>
            </div>
          </div>
          <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-start">
            <div class="my-img square">            
                <img src="/img/portfolio.webp" alt="Portfolio - Niccolò Vaccina">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-end order-2 order-lg-1">  
            <div class="my-img square">           
                <img src="/img/competenze.webp" alt="Competenze - Niccolò Vaccina">
            </div>
          </div>
          <div class="col-12 col-lg-7 testo-home px-lg-5 order-1 order-lg-2">
            <h2>{{ $t('home.skills_title') }}</h2>
            <p>{{ $t('home.skills_text') }}</p>
            <div class="cv d-flex justify-content-center mt-4">            
              <span class="cv-button"><router-link :to="{ name:'competenze' }">{{ $t('home.cta_discover_more') }}</router-link></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-5">
        <div class="row">
          <div class="col-12 col-lg-7 testo-home px-lg-5">
            <h2>{{ $t('home.contact_title') }}</h2>
            <p>{{ $t('home.contact_text') }}</p>
            <div class="cv d-flex justify-content-center mt-4">
              <span class="cv-button"><router-link :to="{ name:'contatti' }">{{ $t('home.cta_discover_more') }}</router-link></span>
            </div>
          </div>
          <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-start">   
            <div class="my-img square">           
                <img src="/img/contatti.webp" alt="Contatti - Niccolò Vaccina">
            </div>
          </div>
        </div>
      </div>
    </section>

    <Wabutton/>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables';
#home{
    animation-name: home;
    animation-duration: 2s;
}
.my-img{
  height: 250px;
  width: 250px;
  overflow: hidden;
  background-color: variables.$primary-color;
  box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  animation-name: myimg;
  animation-duration: 2s;
  &.circle{
    border-radius: 50%;
  }
  &.square{
    border-radius: 0;
  }
  &.triagle{
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  &.X{
    clip-path: polygon(
    10% 0%, 50% 40%, 90% 0%, 
    100% 10%, 60% 50%, 100% 90%, 
    90% 100%, 50% 60%, 10% 100%, 
    0% 90%, 40% 50%, 0% 10%
  );
  }
  &:hover{
    transform: scale(1.1);
  }
  img{
    width: 100%;
  }
}
p{
  font-size: 18px;
  font-weight: 300;
}
h1 .small-text {
  font-size: 0.7em;
  // font-weight: 400;
  display: block;
}

@keyframes home {
  0%   {opacity: 0;}
  100% {opacity: 1;}
}
</style>