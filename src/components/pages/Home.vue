<script>
export default {
  name: 'Home',

}
</script>

<template>
  <section class="section-home">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 px-5 testo-home">
          <h1>Ciao, sono Niccolò</h1>
          <h4>Jr. Full Stack Web Developer</h4>
          <p>
            Mi sono sempre definito una persona creativa con una costante voglia di imparare e crescere, dopo aver svolto per anni un lavoro che non ho mai sentito 'mio', ho deciso di darmi una possibilità e di seguire la mia passione per la programmazione. A Febbraio 2023 mi sono iscritto al corso full-time di Boolean Careers per diventare Full Stack Web Developer.
          </p>
        </div>
        <div class="col-12 col-lg-6 mt-5 mt-lg-0 d-flex justify-content-center">
          <div class="my-img">
            <img src="../../../public/img/foto_busto.jpg" alt="Immagine di profilo">
          </div>
        </div>
      </div>
    </div>
  </section>
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
    border: 2px solid black;
    overflow: hidden;
    position: relative;
    animation-name: myimg;
    animation-duration: 2s;
    background-color: $primary-color;
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