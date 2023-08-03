<script>
export default {
  name: 'Section_home',

}
</script>

<template>
  <section class="section-Section_home">
    <div class="container">
      <div class="row">
        <div class="col-6 px-5">
          <h1>Ciao, sono Niccolò</h1>
          <h4>Jr. Full Stack Web Developer</h4>
          <p>
            Mi sono sempre definito una persona creativa con una costante voglia di imparare e crescere, dopo aver lavorato in ambiti che non ho mai sentito 'miei' ho deciso di darmi una possibilità e di cambiare completamente vita e professione, seguendo la mia passione per la tecnologia e l'informatica. A Febbraio 2023 mi sono iscritto al corso full-time di Boolean Careers per diventare Ful Stack Web Developer.
          </p>
        </div>
        <div class="col-6 d-flex justify-content-center">
          <div class="my-img">
            <img src="../../../public/img/fotoprofilo.jpg" alt="Immagine di profilo">
          </div>
        </div>
      </div>
    </div>

  </section>
  
</template>

<style lang="scss" scoped>

.section-Section_home{
  margin-top: 120px;
  padding: 50px 0;
  .my-img{
    height: 300px;
    width: 300px;
    border: 2px solid black;
    overflow: hidden;
    img{
      width: 200px;
    }
  }
}

</style>