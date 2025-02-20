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
      title:'About - Niccolò Vaccina',
      meta: [
        { name:'title', content:'About - Niccolò Vaccina' },
        { name:'description', content:'Scopri il mio percorso di studi e professionale come sviluppatore full stack.' },
        { rel:'canonical', content:'https://nvaccina-portfolio.netlify.app/about' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'Niccolò Vaccina, esperienza, studi, carriera, sviluppatore full stack' },
        { property:'article:author', content:'Niccolò Vaccina' },
        { property:'article:tag', content:'Esperienza, Carriera, Formazione, Sviluppatore Web' },
        { property:'og:type', content:'article' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/about' },
        { property:'og:title', content:'About - Niccolò Vaccina' },
        { property:'og:description', content:'Leggi il mio percorso professionale e accademico nel mondo dello sviluppo web.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/about-preview.jpg' },
        { property:'twitter:card', content:'summary_large_image' },
        { property:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/about' },
        { property:'twitter:title', content:'About - Niccolò Vaccina' },
        { property:'twitter:description', content:'Scopri il mio percorso di studi e professionale.' },
        { property:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/about-preview.jpg' }
      ]
    });
    return{};
  }
}
</script>

<template>
  <section id="about" class="mt-100">
    <div class="container">
      <h1 class="pb-5 title">About me</h1>
      <div class="row">
        <div class="col-12 mb-5 mt-md-5 mt-md-0 col-md-5 d-flex justify-content-center">
          <div class="my-img">
            <a href="https://www.linkedin.com/in/niccol%C3%B2-vaccina-566351198/">
              <img src="/img/profilo/foto_about.png" alt="Niccolò Vaccina">
            </a>
          </div>
        </div>
        <div class="col-12 col-md-7 px-3 px-md-5">
          <p class="pb-3">
            Dopo aver trascorso più di quattro anni svolgendo il lavoro di consulente immobiliare, duranti i quali ho imparato ad avere un'ottima capacità relazionale con i clienti, ho deciso di mollare la monotonia e la stabilità economica per seguire la mia passione per la programmazione e per il codice.
          </p>
          <p>
            Questo desiderio mi ha portato a frequentare un corso di programmazione immersivo sia lato Front-End che lato Back-End, della durata di 6 mesi, organizzato da <a class="link" href="https://boolean.careers/">Boolen SRL</a>. Il loro obbiettivo è quello di formare Full Stack Web Developers attraverso lezioni teoriche ed esercitazioni pratiche giornaliere, durante le quali, grazie alle nuove tecnologie e framework conosciuti sono riuscito insieme al mio team a realizzare una web app "DeliveBoo" che permette di ordinare cibo a domicilio, utilizzando i framework Vue.js e Laravel. 
          </p>
          <p>
            Creazione dashboard per gli utenti registrati (ristoranti), con diverse funzionalità di gestione del proprio profilo e visualizzazione delle statistiche sugli ordini ricevuti. Creazione della pagina pubblica che consente ai visitatori di filtrare i ristoranti inbase alla tipologia, di controllare il proprio carrello ed eseguire dei veri ordini tramite form di checkoutcon controllo del processo di pagamento grazie a <a class="link" href="https://www.braintreepayments.com/it?referrer=https%3A%2F%2Fwww.google.com%2F">Braintree</a>.
          </p>
        </div>
        <p>
          Subito dopo aver terminato il corso, ho iniziato la mia prima esperienza come Web Developer presso Input S.r.l., dove mi sono ritrovato, come unico sviluppatore, ad occuparmi dell'implementazione di tre software per il controllo e il rilevamento della sosta nei parcheggi pubblici e privati, nei quali ho anche apportato l'integrazione della piattaforma di pagamento XPay di Nexi. Gestione database tramite DBeaver e collegamenti al server OVHcloud.            
        </p>
        <p>
          Dopo qualche mese però ho avuto l'opportunità di entrare in un progetto più grande e            
        </p>
      </div>
      
      <Orizontalline/>

      <div class="cv d-flex justify-content-center">
        <a href="/niccolò-vaccina-cv-it.pdf" download="niccolò-vaccina-cv" class="cv-button">scarica CV</a>
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