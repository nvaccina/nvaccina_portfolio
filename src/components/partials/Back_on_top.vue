
<script>
export default {
  name:'Back_on_top'
}
</script>

<template>
  <div class="back-to-top">
    <a href="#" class="h-100 w-100" aria-label="Vai all'inizio">
      <i class="fa-solid fa-chevron-up"></i>
    </a>
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables';
.back-to-top{
  position: fixed;
  bottom: 0;
  right: 120px;
  
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 0.3s;
  a{
    color: variables.$secondary-color;
    i{
      padding: 8px 10px;
    }
  }
  &:hover{
    background-color: variables.$primary-color;
    a{
      color: variables.$secondary-color;
    }
  }
}

@media (max-width: 600px) {
  .back-to-top {
    right: 80px;
  }
}

</style>