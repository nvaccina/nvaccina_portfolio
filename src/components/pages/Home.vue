<script>
export default {
  name: 'Home',

}
</script>

<template>
  <div class="container border">
    <div class="row">
      <div class="col-6">
        <h1>Ciao, sono Niccolò</h1>
        <h3>Jr. Full Stack Web Developer</h3>
        <p>
          Mi sono sempre definito una persona creativa con una costante voglia di imparare e crescere, dopo aver lavorato in ambiti che non ho mai sentito 'miei' ho deciso di darmi una possibilità e di cambiare completamente vita e professione, seguendo la mia passione per la tecnologia e l'informatica. A Giugno 2021 mi sono iscritto al corso full-time di Boolean Careers per diventare Web Developer, ora a distanza 2 anni ho lavorato per due aziende e appreso tanti nuovi concetti e skill.
        </p>
      </div>
      <div class="col-6 d-flex justify-content-center">
        <div class="my-img">
          <img src="../../../public/img/fotoprofilo.jpg" alt="Immagine di profilo">
        </div>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

.my-img{
  height: 300px;
  width: 300px;
  border: 2px solid black;
  overflow: hidden;
  img{
    width: 200px;
  }
}

</style>