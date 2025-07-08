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
      title: 'Niccolò Vaccina | Full Stack Developer specializzato in .NET e C#',
      link:[{ rel:'canonical', href:'https://nvaccina-portfolio.netlify.app/' }],
      meta: [
        { name:'title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { name:'description', content:'Sono Niccolò Vaccina, uno sviluppatore full stack specializzato in .NET, C#, MVC e SQL Server. Scopri il mio portfolio e le mie competenze.' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'niccolò vaccina, vaccina, sviluppatore web, full stack developer, sviluppatore, sviluppatore .net, c#, sql server, mvc, cesena, forlì, portfolio sviluppatore, web developer italy' },
        { property:'og:type', content:'website' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/' },
        { property:'og:title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { property:'og:description', content:'Scopri il mio portfolio e le mie competenze come sviluppatore full stack.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/home-preview.jpg' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/' },
        { name:'twitter:title', content:'Niccolò Vaccina - Full Stack Web Developer' },
        { name:'twitter:description', content:'Sviluppatore full stack specializzato in .NET, C#, MVC e SQL Server.' },
        { name:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/home-preview.jpg' }
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
            Mi considero sempre una persona creativa, con una continua voglia di imparare e crescere. Dopo aver trascorso anni in un lavoro che non sentivo mio, ho deciso di dare una svolta alla mia vita e seguire la mia passione per la programmazione.             
          </p>
          <p>
            Mi piace mettermi alla prova, esplorare nuovi argomenti e rimanere aggiornato sulle ultime novità legate ai miei interessi, perché sono convinto che l'apprendimento continuo sia fondamentale per migliorarsi ogni giorno.
          </p>
        </div>
        <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-start">
          <div class="my-img circle">
            <a target="_blank" href="https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/">
              <img src="/img/profilo/foto_busto.png" alt="Niccolò Vaccina">
            </a>
          </div>
        </div>
      </div>     
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-center order-2 order-lg-1">
          <div class="my-img square">            
            <img src="/img/about-me.webp" alt="About me - Niccolò Vaccina">            
          </div>
        </div>
        <div class="col-12 col-lg-7 testo-home px-lg-5 order-1 order-lg-2">
          <h2>About Me</h2>
          <p><strong>Chi sono?</strong><br> Sono una persona creativa, curiosa e intraprendente, con una grande passione per la programmazione. Dopo anni in un lavoro che non mi rappresentava, ho scelto di seguire ciò che mi entusiasma davvero: creare, imparare e risolvere problemi attraverso il codice. Ogni giorno è un'opportunità per crescere e migliorare, ed è questo che mi motiva a proseguire.<br>
          <strong>Vuoi saperne di più sul mio percorso?</strong></p>
          <div class="cv d-flex justify-content-center mt-4">
            <span class="cv-button"><router-link :to="{ name:'about' }">Scopri di più</router-link></span>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 testo-home px-lg-5">
          <h2>Portfolio</h2>
          <p>Adoro trasformare idee in realtà attraverso il codice. Nel mio portfolio troverai progetti che mostrano la mia creatività, il mio impegno e la mia voglia di sperimentare. Dallo sviluppo web alle applicazioni interattive, ogni progetto è il frutto della mia continua ricerca di nuove sfide e soluzioni innovative. Se desideri vedere cosa ho realizzato e scoprire come affronto ogni sfida, dai un’occhiata ai miei lavori!</p>
          <div class="cv d-flex justify-content-center mt-4">
            <span class="cv-button"><router-link :to="{ name:'portfolio' }">Scopri di più</router-link></span>
          </div>
        </div>
        <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-start">
          <div class="my-img square">            
              <img src="/img/portfolio.webp" alt="Portfolio - Niccolò Vaccina">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-center order-2 order-lg-1">  
          <div class="my-img square">           
              <img src="/img/skills.webp" alt="Competenze - Niccolò Vaccina">
          </div>
        </div>
        <div class="col-12 col-lg-7 testo-home px-lg-5 order-1 order-lg-2">
          <h2>Competenze</h2>
          <p>Durante il mio percorso professionale, ho avuto l'opportunità di approfondire diverse tecnologie e strumenti che mi consentono di realizzare progetti web moderni, performanti e scalabili. Dallo sviluppo front-end interattivo con framework come Angular, Vue.js e React, fino al back-end con .Net, Node.js e Laravel. Inoltre spazio su differenti sistemi di gestione database tra cui Sql Server, MySQL e PostreSQL.
          Scopri tutte le tecnologie che utilizzo e come possono dare valore ai tuoi progetti!</p>
          <div class="cv d-flex justify-content-center mt-4">            
            <span class="cv-button"><router-link :to="{ name:'competenze' }">Scopri di più</router-link></span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container mb-5">
      <div class="row">
        <div class="col-12 col-lg-7 testo-home px-lg-5">
          <h2>Contatti</h2>
          <p>Sei alla ricerca di un collaboratore appassionato e intraprendente? Oppure hai un'idea che desideri sviluppare e hai bisogno di supporto? Sono sempre aperto a nuove opportunità e mi piace confrontarmi con persone che condividono la mia stessa voglia di innovare e creare. Non esitare a contattarmi per qualsiasi domanda o proposta!</p>
          <div class="cv d-flex justify-content-center mt-4">
            <span class="cv-button"><router-link :to="{ name:'contatti' }">Scopri di più</router-link></span>
          </div>
        </div>
        <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-center">   
          <div class="my-img square">           
              <img src="/img/contattami.png" alt="Contatti - Niccolò Vaccina">
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
  // min-height: calc(100vh - 294px);
  margin-top: 100px;
  .testo-home{
    // position: relative;
    animation-name: testohome;
    animation-duration: 2s;
  }
}
.my-img{
  height: 250px;
  width: 250px;
  // border-radius: 50%;
  overflow: hidden;
  // position: relative;
  background-color: $primary-color;
  box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  transition: all 0.3s;
  animation-name: myimg;
  animation-duration: 2s;
  &.circle{
    border-radius: 50%;
  }
  &.square{
    border-radius: 0;
  }
  &.triagle{
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
  &.X{
    clip-path: polygon(
    10% 0%, 50% 40%, 90% 0%, 
    100% 10%, 60% 50%, 100% 90%, 
    90% 100%, 50% 60%, 10% 100%, 
    0% 90%, 40% 50%, 0% 10%
  );
  }
  &:hover{
    transform: scale(1.1);
  }
  img{
    width: 100%;
  }
}
p{
      font-size: 18px;
      font-weight: 300;
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