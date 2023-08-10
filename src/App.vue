<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Back_on_top from './components/partials/Back_on_top.vue';
import Wabutton from './components/partials/Wabutton.vue';

export default {
  components:{
    Header,
    Footer,
    Back_on_top,
    Wabutton
  }

}
</script>

<template>
  
  <Header/>

  <router-view></router-view>

  <Footer/>

  <Back_on_top/>

  <Wabutton/>
  
</template>

<style lang="scss">
@use './scss/main.scss';

</style>