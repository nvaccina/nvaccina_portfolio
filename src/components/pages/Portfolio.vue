<script>
import Project_card2 from '../partials/Project_card2.vue';
import Wabutton from '../partials/Wabutton.vue';
import { portfolio } from '../../data/data';
import { useHead } from '@vueuse/head';

export default {
  name: 'Portfolio',
  components:{
    Project_card2,
    Wabutton
  },
  data(){
    return{
      portfolio
    }
  },
  setup(){
    useHead({
      title:'Portfolio - Niccolò Vaccina',
      link:[{ rel:'canonical', href:'https://niccolo-vaccina.netlify.app/portfolio' }],
      meta: [
        { name: 'title', content: 'Portfolio - Niccolò Vaccina | Full Stack Developer' },
        { name: 'description', content: 'Scopri alcuni dei progetti web e software che ho realizzato come sviluppatore full stack: applicazioni responsive, gestionali personalizzati e piattaforme online.' },
        { name: 'author', content: 'Niccolò Vaccina' },
        { name: 'keywords', content: 'niccolò vaccina, portfolio, progetti, web app, applicazioni, sviluppo software, .net, mvc, c#, sql server, angular, sviluppatore full stack, cesena, forlì' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://niccolo-vaccina.netlify.app/portfolio' },
        { property: 'og:title', content: 'Portfolio - Niccolò Vaccina | Progetti Full Stack' },
        { property: 'og:description', content: 'Scopri alcuni dei progetti web e software che ho realizzato come sviluppatore full stack: applicazioni responsive, gestionali personalizzati e piattaforme online.' },
        { property:'og:image', content:'https://niccolo-vaccina.netlify.app/assets/portfolio.webp' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://niccolo-vaccina.netlify.app/portfolio' },
        { name: 'twitter:title', content: 'Portfolio - Niccolò Vaccina | Progetti Full Stack' },
        { name: 'twitter:description', content: 'Scopri alcuni dei progetti web e software che ho realizzato come sviluppatore full stack: applicazioni responsive, gestionali personalizzati e piattaforme online.' },
        { name:'twitter:image', content:'https://niccolo-vaccina.netlify.app/assets/portfolio.webp' }
      ]
    });
    return{};
  }

}
</script>

<template>
  <section id="portfolio" class="mt-50">
    <div class="container">
      <h1 class="pb-3 title">Portfolio</h1>
      <p class="fs-20 fw-300">In questa pagina trovi alcuni dei progetti a cui ho contribuito come sviluppatore web full stack, su misura per le esigenze dei clienti: da piattaforme e-commerce a gestionali complessi.</p>
    </div>
    <div class="container-fluid container-lg d-flex flex-wrap portfolio mt-1 mt-md-2">

      <Project_card2
        v-for="(project, index) in portfolio"
        :key="index"
        :project="project"
        :title="project.title"
        :descrizione="project.descrizione"
        :image= "project.image"
        :altrolink= "project.altrolink"
        :link_website="project.link_website"
        :link_github="project.link_github"
        :technologies="project.technologies"
      />

    </div>
  </section>
  <Wabutton/>
  
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';

.portfolio{
  position: relative;
  animation-duration: 2s;
  animation-name: portfolio;
}

@keyframes portfolio {
  0%   {opacity: 0;}
  100% {opacity: 1;}
}


</style>