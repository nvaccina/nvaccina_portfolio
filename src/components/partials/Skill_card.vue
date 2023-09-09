<script>

export default {
  name: 'Skill_card',
  props:{
    name: String,
    image: String
  },
  data() {
    return {
      urlImage:`/img/skills/${this.image}`
    };
  },

}
</script>

<template>

  <div class="img_container">
    <div class="name_image d-flex align-items-center justify-content-center">
      <h5 class="mb-0">{{ name }}</h5>
    </div>
    <img :src="urlImage" :alt="name">
  </div>
  
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';
.img_container{
  width: 150px;
  height: 150px;
  position: relative;
  .name_image{
    position: absolute;
    z-index: 5;
    min-width: 150px;
    top: -50px;
    padding: 5px 5px;
    border-radius: 10px;
    border: 2px solid $primary-color;    
    color: black;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  img{
    object-fit: contain;
    width: 150px;
    height: 100%;
    transition: all 0.3s;
    &:hover{
      transform: scale(1.1);
    }
  }
  &:hover{
    .name_image{
        opacity: 1;
      }
  }
}

@media (max-width: 768px) {
  .img_container{
    width: 100px;
    height: 100px;
    img{
      width: 100px;
    }
  }
}

</style>