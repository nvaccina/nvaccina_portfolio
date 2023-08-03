<script>
import Project_card from './partials/Project_card.vue';
export default {
  name: 'Section_portfolio',
  components:{
    Project_card
  }

}
</script>

<template>
  <section id="portfolio" class="my-5">
    <h1 class="pb-5 text-center">Portfolio</h1>
    <div class="container d-flex flex-wrap">

      <Project_card/>

    </div>
  </section>
  
</template>

<style lang="scss" scoped>
@import '../scss/general/variables';


</style>