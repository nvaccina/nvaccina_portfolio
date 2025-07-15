<script>

export default {
  name: 'Project_card2',
  props:{
    title: String,
    descrizione: String,
    image: String,
    altrolink: String,
    link_website: String,
    link_github: String,
    technologies: Array
  },
  computed: {
    urlimage() {
      return `/img/projects/${this.image}`;
    }
  }
}
</script>

<template>
  <div class="nv-card">
    <div class="copertina">
      <img :src="urlimage" :alt="title">
    </div>
    <div class="info">
      <h3>{{title}}</h3>
      <div class="d-flex align-items-center technologies-container mb-3">
        <p class="technologies-title mb-0">Tecnologie</p>
        <div 
          class="technology"
          v-for="(element, index) in technologies" 
          :key="index" 
        >
          <img :src="'/img/skills/' + element" alt="">
        </div>
      </div>
      <p class="fw-300 descrizione">{{ descrizione }}</p>
      <span v-if="altrolink != ''" class="altrolink"><a target='_blank' :href="altrolink">Scopri di più</a></span>
      <div class="sito d-flex align-items-center justify-content-end">
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
@import '../../scss/general/variables';
.nv-card {
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
  transition: all 0.3s;
  &:hover .copertina img {
    box-shadow: 0 0 10px #CCC9A1;
    transform: scale(1.05);
  }
  .copertina {
    overflow: hidden;
    img {
      transition: all 0.3s;
      width: 100%;
    }
  }
  .info {
    padding: 1rem;
    font-size: 1rem;
    .technologies-container{
      flex-wrap: wrap;
      .technologies-title {
        padding-right: 10px;
      }
      .technology {
        height: 30px;
        margin-right: 10px;
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }
    }
    .altrolink a{
      color: $primary-color !important;
    }
  }
}

@media (max-width: 1400px) {
  .nv-card {
    margin: 20px 15px;
    width: calc(100% / 2 - 30px);
    min-height: auto;
  }
}

@media (max-width: 930px) {
  .nv-card {
    margin: 20px 50px;
    width: calc(100% - 100px);
  }
}

@media (max-width: 600px) {
  .nv-card {
    margin: 20px 15px;
    width: calc(100% - 30px);
  }
}
@media (max-width: 445px) {
  .nv-card {
    margin: 20px 5px;
    width: calc(100% - 10px);
    .technologies-title {
      margin-bottom: 3px;
    }
    .technology {
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