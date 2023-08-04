<script>

export default {
  name: 'Project_card',
  props:{
    title: String,
    image: String,
    link_website: String,
    link_github: String,
    technologies: Array
  },
  data() {
    return {
      urlimage:`/img/projects/${this.image}`
    };
  },

}
</script>

<template>
  <div class="nv-card">
    <img :src="urlimage" :alt="title">
    <div class="project-info">
        <h3>{{title}}</h3>
        <div>
          <p>Tecnologies</p>
          <div class="d-flex align-items-center technologies-container">
            <div 
              class="tecngology"
              v-for="(element, index) in technologies" 
              :key="index" 
            >
              <img :src="'/img/skills/' + element" alt="">
            </div>
          </div>
        </div>
        <div class="sito d-flex align-items-center mb-2">
            <a 
              class="site-button me-2 btn" 
              :class="{'disabled' : link_website == ''}"
              :href="link_website"
              >
              Vai al sito
            </a>
            <a class="git-button" :href="link_github">
              <i class="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/general/variables';
.nv-card{
  margin: 20px 30px;
  width: calc(100% / 2 - 60px);
  border: 1px solid black;
  min-height: 250px;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  &:hover {
      box-shadow: 0 0 10px #CCC9A1;
  }
  img{
    max-height: 100%;
  }
  .project-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    padding: 1rem;
    font-size: 1rem;
    .technologies-container{
      flex-wrap: wrap;
    }
    .tecngology{
      height: 30px;
      margin-right: 10px;
      margin-bottom: 10px;
      img{
        height: 100%;
      }
    }
    .sito{
      position: absolute;
      bottom: 10px;
      left: 20px;      
    }
  }
  &:hover .project-info {
    opacity: 1;
  }
}
</style>