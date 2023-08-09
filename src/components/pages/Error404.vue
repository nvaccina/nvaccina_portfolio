<script>
export default {
  name: 'Error404',

}
</script>

<template>
  <section>
    <div class="container error text-center">
      <h1 class="mb-5 title">Error 404</h1>
      <div>
        <router-link class="back-home" :to="{name:'home'}">Torna alla Home</router-link>
      </div>
    </div>

  </section>

</template>


<style lang="scss" scoped>
@import '../../scss/general/variables';
.error{
  height: calc(100vh - 500px);
  .back-home{
    text-transform: capitalize;
    padding: 5px 10px;
    background-color: $primary-color;
    color: $secondary-color;
    border-radius: 10px;
    border: 2px solid $primary-color;
    font-weight: 500;
    font-size: 18px;
    transition: all 0.4s;
    position: relative;
    animation-duration: 2s;
    animation-name: backhome;
    cursor: pointer;
    &:hover{
      color: $primary-color;
      background-color:  $secondary-color;
      border: 2px solid $primary-color;
    }
  }
}
@keyframes backhome {
    0%   {opacity: 0;}
    100% {opacity: 1;}
  }

</style>
