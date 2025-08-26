<script>
export default {
  name: 'Error404',
  setup() {
    useHead({
      title: 'Pagina non trovata | Niccolò Vaccina',
      link: [{ rel: 'canonical', href: 'https://niccolovaccina.it/404' }],
      meta: [
        { name: 'robots', content: 'noindex' }, 
        { name: 'description', content: 'La pagina che stai cercando non esiste. Torna alla homepage.' }
      ]
    });
  }

}
</script>

<template>
  <section>
    <div class="container error text-center">
      <h1 class="title mt-100">Error 404</h1>
      <div>
        <router-link class="back-home" :to="{name:'home'}">Torna alla Home</router-link>
      </div>
    </div>

  </section>

</template>


<style lang="scss" scoped>
@use '../../scss/general/variables';
.error{
  height: calc(100vh - 394px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .back-home{
    text-transform: capitalize;
    padding: 5px 10px;
    background-color: variables.$primary-color;
    color: variables.$secondary-color;
    border-radius: 10px;
    border: 2px solid variables.$primary-color;
    font-weight: 500;
    font-size: 18px;
    transition: all 0.4s;
    position: relative;
    animation-duration: 2s;
    animation-name: backhome;
    cursor: pointer;
    &:hover{
      color: variables.$primary-color;
      background-color:  variables.$secondary-color;
      border: 2px solid variables.$primary-color;
    }
  }
}
@keyframes backhome {
    0%   {opacity: 0;}
    100% {opacity: 1;}
  }

</style>
