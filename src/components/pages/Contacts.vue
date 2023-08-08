<script>
export default {
  name: 'Contacts',

}
</script>

<template>
  <section id="contacts">
    <div class="container d-flex align-items-center flex-column title">
      <h1 class="pb-5">Contacts</h1>
      <div class="d-flex align-items-center flex-column">
        <h2>Niccolò Vaccina</h2>
        <h5>Jr. Full Stack Web Developer</h5>
        <div class="linea my-3"></div>
      </div>
      <div class="contatti d-flex align-items-center justify-content-center pb-5">
        <div class="pe-5 mail">
          <i class="fa-solid fa-envelope pe-2"></i>
          <a href="mailto:niccolovac@gmail.com">niccolovac@gmail.com</a>
        </div>
        <div class="cell">
          <i class="fa-solid fa-phone pe-2"></i>
          <a href="tel:00390123456789">+39 3891168261</a>
        </div>
      </div>
      <div>
          <a class="btn-mail" href="mailto:niccolovac@gmail.com">
            INVIA UNA MAIL
          </a>
      </div>
    </div>

  </section>
  
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';
#contacts{
  color: black;
  .linea{
    height: 2px;
    width: 400px;
    background-color: $tertiary-color;
  }
  a{
    color: black;
    &:hover{
      color: $primary-color;
    }
  }
}

@media (max-width: 414px) {
  h1{
    font-size: 40px;
  }
  .linea{
    width: 100% !important;
  }
  .contatti{
    flex-direction: column;
    .mail, .cell{
      text-align: center;
      padding: 10px 0 !important;
    }
  }
}


</style>