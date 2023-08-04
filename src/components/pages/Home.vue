<script>
export default {
  name: 'Home',

}
</script>

<template>
  <section class="section-home">
    <div class="container">
      <div class="row">
        <div class="col-6 px-5">
          <h1>Ciao, sono Niccolò</h1>
          <h4>Jr. Full Stack Web Developer</h4>
          <p>
            Mi sono sempre definito una persona creativa con una costante voglia di imparare e crescere, dopo aver svolto per anni un lavoro che non ho mai sentito 'mio', ho deciso di darmi una possibilità e di seguire la mia passione per la programmazione. A Febbraio 2023 mi sono iscritto al corso full-time di Boolean Careers per diventare Full Stack Web Developer.
          </p>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <div class="my-img">
            <img src="../../../public/img/foto_busto.jpg" alt="Immagine di profilo">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.section-home{
  margin-top: 120px;
  p{
    font-size: 18px;
    font-weight: 300;
  }
  .my-img{
    height: 250px;
    width: 250px;
    border: 2px solid black;
    overflow: hidden;
    img{
      width: 100%;
    }
  }
}

</style>