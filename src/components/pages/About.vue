<script>
import Wabutton from '../partials/Wabutton.vue';
import Orizontalline from '../partials/Orizontalline.vue';
import { timelines } from '../../data/data.js';
import { useHead } from '@vueuse/head';

export default {
  name: 'About',
  components:{
    Wabutton,
    Orizontalline
  },
  data(){
    return{
      timelines
    }
  },
  setup(){
    useHead({
      title: 'Chi sono - Niccolò Vaccina | Full Stack Developer',
      link:[{ rel:'canonical', href:'https://niccolovaccina.it/chi-sono' }],
      meta: [
        { name: 'title', content: 'Chi sono - Niccolò Vaccina | Full Stack Developer' },
        { name: 'description', content: 'Scopri il mio percorso formativo e professionale come sviluppatore full stack specializzato in .NET, C# e Angular.' },
        { name: 'author', content: 'Niccolò Vaccina' },
        { name:'keywords', content:'niccolò vaccina, vaccina, esperienza, studi, carriera, sviluppatore web, full stack developer, sviluppatore, sviluppatore .net, c#, angular, sql server, mvc, cesena, forlì, portfolio sviluppatore, web developer italy' },        
        { property:'og:type', content:'article' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://niccolovaccina.it/chi-sono' },
        { property:'og:title', content:'Chi sono - Niccolò Vaccina' },
        { property:'og:description', content: 'Approfondisci il mio background formativo e professionale nel mondo dello sviluppo software e web.' },
        { property:'og:image', content:'https://niccolovaccina.it/assets/chi-sono.jpg' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://niccolovaccina.it/chi-sono' },
        { name:'twitter:title', content:'Chi sono - Niccolò Vaccina' },
        { name:'twitter:description', content: 'Scopri il mio percorso nel mondo dello sviluppo: formazione, esperienze e competenze tecniche.' },
        { name:'twitter:image', content:'https://niccolovaccina.it/assets/chi-sono.webp' }
      ]
    });
    return{};
  },
  computed: {
    cvLink() {
      return `/niccolo-vaccina-cv-${this.$i18n.locale}.pdf`;
    },
    cvFilename() {
      return `niccolo-vaccina-cv-${this.$i18n.locale}`;
    }
  }

}
</script>

<template>
  <section id="about" class="mt-50">
    <div class="container">
      <h1 class="pb-5">{{ $t('about.title') }}</h1>
      <div class="row">
        <div class="col-12 mb-5 mt-md-5 mt-md-0 col-md-5 d-flex justify-content-center">
          <div class="my-img">
            <a href="https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/" target="_blank">
              <img src="/img/profilo/foto_about.webp" alt="Niccolò Vaccina">
            </a>
          </div>
        </div>
        <div class="col-12 col-md-7 px-3 px-md-5">
          <p class="pb-3">{{$t('about.paragraph_1')}}</p>
          <p>
            {{ $t('about.paragraph_2') }}
            <a class="link" href="https://boolean.careers/">Boolen SRL</a>
            {{ $t('about.paragraph_3') }}
          </p>
        </div>
        <p>
          {{ $t('about.paragraph_4') }}
          <a class="link" href="https://inputitalia.com/">Input S.r.l.</a> {{ $t('about.paragraph_5') }}
        </p>
        <p>
          {{ $t('about.paragraph_6') }}
          <a class="link" href="https://www.bsdsoftware.it/" target="_blank">BSD Software Srl.</a> {{ $t('about.join_paragraph') }} <a class="link" href="https://www.maggioli.com/it-it" target="_blank">{{ $t('about.link_1') }}</a>.<br>
          {{ $t('about.paragraph_7') }}        
        </p>
      </div>
    </div>

    <Orizontalline/>

    <div class="container mt-5">    
      <div class="cv d-flex justify-content-center">
        <a :href="cvLink" :download="cvFilename" class="cv-button">{{ $t('about.download_cv') }}</a>
      </div>
    </div>
  </section>
  <Wabutton/>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';

  .my-img, p, .cv{
    position: relative;
  }
  #about{
    position: relative;
    animation-duration: 2s;
    animation-name: about;
  }
  .my-img{
    height: 250px;
    width: 250px;
    background-color: $tertiary-color;
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: all 0.3s;
    img{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &:hover{
      transform: scale(1.1);
    }
  }
  p{
    font-size: 20px;
    animation-name: testoabout;
    font-weight: 300;
    .link{
      color: $tertiary-color;
      font-weight: bold;
      &:hover{
        color: $primary-color;
        text-decoration: underline !important;
      }
    }
  }

  @keyframes about {
    0%   {opacity: 0;}
    100% {opacity: 1;}
  }

</style>