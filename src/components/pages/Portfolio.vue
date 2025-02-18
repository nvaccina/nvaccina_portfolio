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
      meta: [
        { name:'title', content:'Portfolio - Progetti di Niccolò Vaccina' },
        { name:'description', content:'Scopri i progetti a cui ho lavorato come sviluppatore full stack.' },
        { rel:'canonical', content:'https://nvaccina-portfolio.netlify.app/portfolio' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'Portfolio, progetti, sviluppo web, .NET, C#, SQL Server' },
        { property:'article:author', content:'Niccolò Vaccina' },
        { property:'article:tag', content:'Progetti, Portfolio, Sviluppo Web, Full Stack' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/portfolio' },
        { property:'og:title', content:'Portfolio - Progetti di Niccolò Vaccina' },
        { property:'og:description', content:'Visualizza i miei lavori come sviluppatore full stack.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/portfolio-preview.jpg' },
        { property:'twitter:card', content:'summary_large_image' },
        { property:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/portfolio' },
        { property:'twitter:title', content:'Portfolio - Progetti di Niccolò Vaccina' },
        { property:'twitter:description', content:'Dai un’occhiata ai miei progetti e collaborazioni.' },
        { property:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/portfolio-preview.jpg' }
      ]
    });
    return{};
  }

}
</script>

<template>
  <section id="portfolio">
    <h1 class="pb-5 text-center title">Portfolio</h1>
    
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