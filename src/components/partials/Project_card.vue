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
          <p class="tecngologies-title">Tecnologie</p>
          <div class="d-flex align-items-center technologies-container">
            <div 
              class="technology"
              v-for="(element, index) in technologies" 
              :key="index" 
            >
              <img :src="'/img/skills/' + element" alt="">
            </div>
          </div>
        </div>
        <div class="sito d-flex align-items-center">
            <a 
              class="site-button me-2 btn" 
              :class="{'d-none' : link_website == ''}"
              :href="link_website"
              >
              Vai al sito
            </a>
            <a 
              class="git-button h-100" 
              :href="link_github"
              :class="{'d-none btn' : link_github == ''}"
              :style="{border:'none'}"
            >
              <i class="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables';
.nv-card{
  margin: 20px 30px;
  width: calc(100% / 2 - 60px);
  border: 1px solid $quaternary-color;
  min-height: 240px;
  position: relative;
  border-radius: 15px;
  border: 0;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  background-color: #282828;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0 10px #CCC9A1;
    transform: scale(1.05);
  }
  img{
    transition: all 0.3s;
    width: 100%;
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
    .technology{
      height: 30px;
      margin-right: 10px;
      margin-bottom: 10px;
      img{
        max-height: 100%;
        max-width: 100%;
      }
    }
    .sito{
      position: absolute;
      bottom: 1rem;
      left: 1rem;      
    }
  }
  &:hover .project-info {
    opacity: 1;
  }
}
@media (max-width: 1400px) {
  .nv-card{
    margin: 20px 15px;
    width: calc(100% / 2 - 30px);
    min-height: auto;
  }
}
@media (max-width: 930px) {
  .nv-card{
    margin: 20px 50px;
    width: calc(100% - 100px);
  }
}

@media (max-width: 600px) {
  .nv-card{
    margin: 20px 15px;
    width: calc(100% - 30px);
  }
}
@media (max-width: 445px) {
  .nv-card{
    margin: 20px 5px;
    width: calc(100% - 10px);
    .tecngologies-title{
      margin-bottom: 3px;
    }
    .technology{
      height: 25px !important;
    }
  }
}
@media (max-width: 392px) {
  .technology{
    height: 20px !important;
    margin-bottom: 5px !important;
  }
  .sito{
    top: 0px !important;
    right: 0px !important;
    bottom: auto !important;
    left: auto !important;
    padding: 1rem !important;
    flex-wrap: wrap !important;
  }
}

</style>