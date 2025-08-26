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
@use '../../scss/general/variables';
.img_container{
  width: 150px;
  height: 150px;
  padding: 20px;  
  position: relative;
  display: flex;
  justify-content: center;
  &:hover, &:focus{
    img{
      opacity: .7;
      transform: scale(1.1);
    }
    .name_image{
        opacity: 1;
      }
  }
  .name_image{
    position: absolute;
    z-index: 5;
    min-width: 140px;
    top: 50px;
    padding: 5px 5px;
    border-radius: 10px;
    border: 2px solid $primary-color;    
    background-color: rgba(255, 255, 255, 0.5);
    color: black;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    text-align: center;
  }
  img{
    object-fit: contain;
    width: 100px;
    height: 100%;
    transition: all 0.3s;
  }
}

@media (max-width: 768px) {
  .img_container{
    width: 100px;
    height: 100px;
    padding: 10px;
    .name_image{
      top: 30px;
      min-width: 90px;
    }
    img{
      width: 100%;
    }
  }
}

</style>