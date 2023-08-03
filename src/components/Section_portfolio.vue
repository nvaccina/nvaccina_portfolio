<script>
import Project_card from './partials/Project_card.vue';
import { portfolio } from '../data/data';
export default {
  name: 'Section_portfolio',
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
  <section id="portfolio" class="my-5">
    <h1 class="pb-5 text-center">Portfolio</h1>
    <div class="container d-flex flex-wrap">

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
@import '../scss/general/variables';


</style>