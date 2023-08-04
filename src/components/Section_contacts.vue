<script>
export default {
  name: 'Section_contacts',

}
</script>

<template>
  <section id="contacts">
    <div class="container d-flex align-items-center flex-column">
      <h1>Contacts</h1>
      <h5 class="mt-5">Chiamami al <a href="tel:00390123456789">+39 3891168261</a></h5>
      <div class="row pt-2">
        <div class="col-6">
          <a href="mailto:niccolovac@gmail.com">
            <i class="fa-solid fa-envelope"></i> niccolovac@gmail.com
          </a>
        </div>
        <div class="col-6">
          <li>
            
          </li>
        </div>
      </div>

    </div>

  </section>
  
</template>

<style lang="scss" scoped>
@import '../scss/general/variables';
#contacts{
  color: black;
  a{
    color: black;
  }
}



</style>