<script>
import Project_card from '../partials/Project_card.vue';
import Wabutton from '../partials/Wabutton.vue';
import { portfolio } from '../../data/data';
import { useHead } from '@vueuse/head';

export default {
  name: 'Portfolio',
  components:{
    Project_card,
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
      link:[{ rel:'canonical', href:'https://nvaccina-portfolio.netlify.app/portfolio' }],
      meta: [
        { name: 'title', content: 'Portfolio - Niccolò Vaccina | Full Stack Developer' },
        { name: 'description', content: 'Esplora i progetti a cui ho lavorato come sviluppatore full stack specializzato in .NET, C#, SQL Server, MVC e Angular.' },
        { name: 'author', content: 'Niccolò Vaccina' },
        { name: 'keywords', content: 'niccolò vaccina, portfolio, progetti, web app, applicazioni, sviluppo software, .net, mvc, c#, sql server, angular, sviluppatore full stack, cesena, forlì' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/portfolio' },
        { property: 'og:title', content: 'Portfolio - Niccolò Vaccina | Progetti Full Stack' },
        { property: 'og:description', content: 'Dai un’occhiata ai siti web e software che ho realizzato come sviluppatore full stack.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/portfolio-preview.jpg' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/portfolio' },
        { name: 'twitter:title', content: 'Portfolio - Niccolò Vaccina | Progetti Full Stack' },
        { name: 'twitter:description', content: 'Dai un’occhiata ai siti web e software che ho realizzato come sviluppatore full stack.' },
        { name:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/portfolio-preview.jpg' }
      ]
    });
    return{};
  }

}
</script>

<template>
  <section id="portfolio" class="mt-100">
    <div class="container">
      <h1 class="pb-5 title">Portfolio</h1>
    </div>
    <div class="container-fluid container-lg d-flex flex-wrap portfolio">

      <Project_card
        v-for="(project, index) in portfolio"
        :key="index"
        :project="project"
        :title="project.title"
        :image= "project.image"
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