<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/pages/Home.vue';

export default {
  components:{
    Header,
    Footer,
    Home
  }

}
</script>

<template>
  <Header/>
  <main>
    <Home/>
  </main>
  <Footer/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>