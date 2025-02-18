<script>
import Wabutton from '../partials/Wabutton.vue';
import { useHead } from '@vueuse/head';

export default {
  name: 'Home',
  components:{
    Wabutton
  },
  setup(){
    useHead({
      title:'Home - Niccolò Vaccina',
      meta: [
        { name:'title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { name:'description', content:'Sono Niccolò Vaccina, uno sviluppatore full stack specializzato in .NET, C#, MVC e SQL Server. Scopri il mio portfolio e le mie competenze.' },
        { rel:'canonical', content:'https://nvaccina-portfolio.netlify.app/' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'Niccolò Vaccina, full stack developer, .NET, C#, SQL Server, sviluppo web' },
        { property:'article:author', content:'Niccolò Vaccina' },
        { property:'article:tag', content:'Full Stack Developer, .NET, C#, SQL Server, Web Development' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/' },
        { property:'og:title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { property:'og:description', content:'Scopri il mio portfolio e le mie competenze come sviluppatore full stack.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/home-preview.jpg' },
        { property:'twitter:card', content:'summary_large_image' },
        { property:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/' },
        { property:'twitter:title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { property:'twitter:description', content:'Sviluppatore full stack specializzato in .NET, C#, MVC e SQL Server.' },
        { property:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/home-preview.jpg' }
      ]
    });
    return{};
  }
}

</script>

<template>
  <section class="section-home">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 testo-home px-lg-5">
          <h1>Ciao, sono Niccolò</h1>
          <h3>Full Stack Web Developer</h3>
          <p>
            Mi sono sempre definito una persona creativa con una costante voglia di imparare e crescere, dopo aver svolto per anni un lavoro che non ho mai sentito "mio", ho deciso di darmi una possibilità e di seguire la mia passione per la programmazione.             
          </p>
          <p>
            Amo mettermi in gioco, approfondire nuovi argomenti e aggiornarmi costantemente sulle novità legate alle mie passioni, perché credo che l'apprendimento continuo sia la chiave per migliorarsi ogni giorno.
          </p>
        </div>
        <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-start">
          <div class="my-img">
            <a href="https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/">
              <img src="/img/profilo/foto_busto.png" alt="Niccolò Vaccina">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Wabutton/>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';
.section-home{
  min-height: calc(100vh - 294px);
  .testo-home{
    position: relative;
    animation-name: testohome;
    animation-duration: 2s;
    p{
      font-size: 18px;
      font-weight: 300;
    }
  }
  .my-img{
    height: 250px;
    width: 250px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: $primary-color;
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
    animation-name: myimg;
    animation-duration: 2s;
    &:hover{
      transform: scale(1.1);
    }
    img{
      width: 100%;
    }
  }
}

@keyframes testohome {
  0%   {left:-500px; top:0px;}
  100% {left:0px; top:0px;}
}
@keyframes myimg {
  0%   {left:500px; top:0px;}
  100% {left:0px; top:0px;}
}
</style>