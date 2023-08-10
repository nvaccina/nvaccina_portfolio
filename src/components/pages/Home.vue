<script>
import Wabutton from '../partials/Wabutton.vue';
export default {
  name: 'Home',
  components:{
    Wabutton
  }
}
</script>

<template>
  <section class="section-home">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7 testo-home px-lg-5">
          <h1>Ciao, sono Niccolò</h1>
          <h4>Jr. Full Stack Web Developer</h4>
          <p>
            Mi sono sempre definito una persona creativa con una costante voglia di imparare e crescere, dopo aver svolto per anni un lavoro che non ho mai sentito 'mio', ho deciso di darmi una possibilità e di seguire la mia passione per la programmazione. A Febbraio 2023 mi sono iscritto al corso full-time di Boolean Careers per diventare Full Stack Web Developer e ora sono determinato a farne la mia professione.
          </p>
        </div>
        <div class="col-12 col-lg-5 mt-5 mt-lg-0 d-flex ps-4 justify-content-center justify-content-lg-start">
          <div class="my-img">
            <img src="/img/profilo/foto_busto.png" alt="Immagine di profilo">
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