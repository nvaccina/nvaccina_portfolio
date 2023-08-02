<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/pages/Home.vue';
import About from './components/pages/About.vue';
import Contacts from './components/pages/Contacts.vue';
import Skills from './components/pages/Skills.vue';
import Portfolio from './components/pages/Portfolio.vue';

export default {
  components:{
    Header,
    Footer,
    Home,
    About,
    Contacts,
    Skills,
    Portfolio
  }

}
</script>

<template>
  <Header/>
  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
  <Footer/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>