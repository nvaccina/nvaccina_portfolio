<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Section_home from './components/Section_home.vue';
import Section_about from './components/Section_about.vue';
import Section_skills from './components/Section_skills.vue';
import Section_portfolio from './components/Section_portfolio.vue';
import Section_contacts from './components/Section_contacts.vue';

export default {
  components:{
    Header,
    Footer,
    Section_home,
    Section_about,
    Section_skills,
    Section_portfolio,
    Section_contacts,
  }

}
</script>

<template>
  <Header/>

  <Section_home/>

  <Section_about/>

  <Section_skills/>

  <Section_portfolio/>

  <Section_contacts/>

  <Footer/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>