<script>
export default {
  name: 'About',

}
</script>

<template>
  <section id="about">
    <div class="container">
      <h1 class="text-center pb-5 title">About me</h1>
      <div class="row">
        <div class="col-12 mb-5 mb-md-0 col-md-5 d-flex justify-content-center">
          <div class="my-img">
            <img src="/img/profilo/foto_about.png" alt="foto busto">
          </div>
        </div>
        <div class="col-12 col-md-7 px-3 px-md-5">
          <p class="pb-3">
            Dopo avere trascorso più di quattro anni svolgendo il lavoro di consulente immobiliare, duranti i quali ho imparato ad avere un'ottima capacità relazionale con i clienti, ho deciso di mollare la monotonia e la stabilità economica per seguire la mia passione per la programmazione e per il codice.
          </p>
          <p>
            Questo desiderio mi ha portato a frequentare un corso di programmazione immersivo sia lato Front-End che lato Back-End, della durata di 6 mesi, organizzato da <a class="link" href="https://boolean.careers/">Boolen SRL</a>. Il loro obbiettivo è quello di formare Full Stack Web Developers attraverso lezioni teoriche ed esercitazioni pratiche giornaliere, durante le quali, grazie alle nuove tecnologie e framework conosciuti, ho replicato diversi siti e layout web noti tra i quali Netflix, WhatsApp e Spotify.
          </p>
          <p>
            Come ultimo progetto abbiamo realizzato una web app "DeliveBoo" che permette di ordinare cibo a domicilio, utilizzando i framework Vue.js e Laravel. Creazione dashboard per gli utenti registrati (ristoranti), con diverse funzionalità di gestione del proprio profilo e visualizzazione delle statistiche sugli ordini ricevuti. Creazione della pagina pubblica che consente ai visitatori di filtrare i ristoranti inbase alla tipologia, di controllare il proprio carrello ed eseguire dei veri ordini tramite form di checkoutcon controllo del processo di pagamento grazie a <a class="link" href="https://www.braintreepayments.com/it?referrer=https%3A%2F%2Fwww.google.com%2F">Braintree</a>.
          </p>
        </div>
      </div>
      <div class="d-flex align-items-center flex-column">
        <div class="col-12 col-md-6">
          <h5 class="text-center title my-5">
            Sono alla ricerca di un'azienda che mi offra delle opportunità di crescita e la possibilità di ampliare le mie conoscenze, ma anche di dimostrare le mie capacità.
          </h5>
        </div>
      </div>
      <div class="cv d-flex justify-content-center">
        <a href="/niccolò-vaccina-cv.pdf" download="niccolò-vaccina-cv" class="cv-button">scarica CV</a>
      </div>
    </div>
  </section>
  
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
    &:hover{
      transform: scale(1.1);
    }
    img{
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
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