<script>
import Wabutton from '../partials/Wabutton.vue';
import Orizontalline from '../partials/Orizontalline.vue';
import { timelines } from '../../data/data.js';
import { useHead } from '@vueuse/head';

export default {
  name: 'About',
  components:{
    Wabutton,
    Orizontalline
  },
  data(){
    return{
      timelines
    }
  },
  setup(){
    useHead({
      title: 'Chi sono - Niccolò Vaccina | Full Stack Developer',
      link:[{ rel:'canonical', href:'https://nvaccina-portfolio.netlify.app/about' }],
      meta: [
        { name: 'title', content: 'Chi sono - Niccolò Vaccina | Full Stack Developer' },
        { name: 'description', content: 'Scopri il mio percorso formativo e professionale come sviluppatore full stack specializzato in .NET, C# e Angular.' },
        { name: 'author', content: 'Niccolò Vaccina' },
        { name:'keywords', content:'niccolò vaccina, vaccina, esperienza, studi, carriera, sviluppatore web, full stack developer, sviluppatore, sviluppatore .net, c#, angular, sql server, mvc, cesena, forlì, portfolio sviluppatore, web developer italy' },        
        { property:'og:type', content:'article' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/about' },
        { property:'og:title', content:'About - Niccolò Vaccina' },
        { property:'og:description', content: 'Approfondisci il mio background formativo e professionale nel mondo dello sviluppo software e web.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/about-preview.jpg' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/about' },
        { name:'twitter:title', content:'About - Niccolò Vaccina' },
        { name:'twitter:description', content: 'Scopri il mio percorso nel mondo dello sviluppo: formazione, esperienze e competenze tecniche.' },
        { name:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/about-preview.jpg' }
      ]
    });
    return{};
  }
}
</script>

<template>
  <section id="about" class="mt-50">
    <div class="container">
      <h1 class="pb-5 title">About me</h1>
      <div class="row">
        <div class="col-12 mb-5 mt-md-5 mt-md-0 col-md-5 d-flex justify-content-center">
          <div class="my-img">
            <a href="https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/" target="_blank">
              <img src="/img/profilo/foto_about.png" alt="Niccolò Vaccina">
            </a>
          </div>
        </div>
        <div class="col-12 col-md-7 px-3 px-md-5">
          <p class="pb-3">
            Dopo aver trascorso più di quattro anni svolgendo il lavoro di consulente immobiliare, duranti i quali ho imparato ad avere un'ottima capacità relazionale con i clienti, ho deciso di mollare la monotonia e la stabilità economica per seguire la mia passione per la programmazione e per il codice.
          </p>
          <p>
            Questo desiderio mi ha portato a frequentare un corso di programmazione immersivo sia lato Front-End che lato Back-End, della durata di 6 mesi, organizzato da <a class="link" href="https://boolean.careers/">Boolen SRL</a>. Il loro obbiettivo è quello di formare Full Stack Web Developers attraverso lezioni teoriche ed esercitazioni pratiche giornaliere, durante le quali, grazie alle nuove tecnologie e framework conosciuti sono riuscito insieme al mio team a realizzare una web app che permette di ordinare cibo a domicilio, utilizzando tecnologie come Vue.js, Laravel e MySQL e integrata con il sistema di pagamento Braintree.
          </p>
        </div>
        <p>
          Dopo aver completato il corso di formazione, ho iniziato la mia prima esperienza lavorativa come Web Developer presso <a class="link" href="https://inputitalia.com/">Input S.r.l.</a> In questa realtà, ho ricoperto il ruolo di unico sviluppatore, occupandomi interamente dello sviluppo di tre software dedicati al controllo e al monitoraggio della sosta in parcheggi pubblici e privati. Tra le principali attività, ho curato l'integrazione della piattaforma di pagamento XPay di Nexi, la gestione dei database tramite DBeaver e la configurazione dei collegamenti al server OVHcloud.
        </p>
        <p>
          Dopo qualche mese, ho avuto l'opportunità di entrare in una realtà più strutturata: <a class="link" href="https://www.bsdsoftware.it/" target="_blank">BSD Software Srl.</a> che fa parte del <a class="link" href="https://www.maggioli.com/it-it" target="_blank">Gruppo Maggioli</a>.<br>
          Qui mi occupo dello sviluppo di applicazioni web responsive, lavorando sia sul Front-End che sul Back-End, con tecnologie come .NET Framework, ASP.NET Core MVC e Angular.
          
          Mi occupo della progettazione, dello sviluppo e della manutenzione di siti web, piattaforme e-commerce e software gestionali, realizzati su misura in base alle esigenze dei clienti, sia in ambito B2B che B2C. Inoltre, gestisco database su SQL Server, Oracle, PostgreSQL e Microsoft Azure, integrando anche, soluzioni esterne come Iubenda (privacy e consent management), Brevo (email marketing e live chat), servizi Google e sistemi di pagamento come PayPal.
        </p>
      </div>
    </div>

    <Orizontalline/>

    <div class="container mt-5">    
      <div class="cv d-flex justify-content-center">
        <a href="/niccolò-vaccina-cv-it.pdf" download="niccolò-vaccina-cv" class="cv-button">Scarica CV</a>
      </div>
    </div>
  </section>
  <Wabutton/>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';

  .title, .my-img, p, .cv{
    position: relative;
    animation-duration: 2s;
  }
  .title{
    animation-name: title;
  }
  .my-img{
    height: 250px;
    width: 250px;
    background-color: $tertiary-color;
    box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    animation-name: myimg;
    transition: all 0.3s;
    img{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
    }
    &:hover{
      transform: scale(1.1);
    }
  }
  p{
    font-size: 20px;
    animation-name: testoabout;
    font-weight: 300;
    .link{
      color: $tertiary-color;
      font-weight: bold;
      &:hover{
        color: $primary-color;
        text-decoration: underline !important;
      }
    }
  }
  .cv{
    animation-name: cv;
  }
  @keyframes title {
    0%   {opacity: 0;}
    100% {opacity: 1;}
  }
  @keyframes myimg {
    0%   {left:-500px; top:0px;}
    100% {left:0px; top:0px;}
  }
  @keyframes testoabout {
    0%   {left:500px; top:0px;}
    100% {left:0px; top:0px;}
  }
  @keyframes cv {
    0%   {opacity: 0;}
    100% {opacity: 1;}
  }

</style>