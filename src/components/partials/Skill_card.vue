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
      <img :src="urlImage" :alt="name">
    </div>
  
</template>

<style lang="scss" scoped>
.img_container{
  width: 150px;
  height: 150px;
  img{
    object-fit: contain;
    width: 150px;
    height: 100%;
  }
}

</style>