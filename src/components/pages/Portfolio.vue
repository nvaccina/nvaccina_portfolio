<script>
import Project_card from '../partials/Project_card.vue';
import { portfolio } from '../../data/data';
export default {
  name: 'Portfolio',
  components:{
    Project_card
  },
  data(){
    return{
      portfolio
    }
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