<script>

export default {
  name: 'Project_card2',
  props: {
    project: Object
  },
  computed: {
    title() {
      return this.$t(this.project.title);
    },
    descrizione() {
      return this.$t(this.project.descrizione);
    },
    altrolink() {
      return this.project.altrolink ? this.$t(this.project.altrolink) : '';
    },
    linkWebsite() {
      return this.project.link_website ? this.$t(this.project.link_website) : '';
    },
    linkGithub() {
      return this.project.link_github ? this.$t(this.project.link_github) : '';
    },
    technologies() {
      return this.project.technologies.map((tech) => {
        return tech.startsWith('projects.') ? this.$t(tech) : tech;
      });
    },
    urlimage() {
      return `/img/projects/` + this.$t(this.project.image);
    }
  }
}
</script>

<template>
  <div class="nv-card">
    <div>
      <div class="copertina">
        <img :src="urlimage" :alt="title">
      </div>
      <div class="info">
        <h3>{{title}}</h3>
        <div class="d-flex align-items-center technologies-container mb-3">
          <p class="technologies-title mb-0">{{ $t('portfolio.tecnologieTitle') }}</p>
          <div 
            class="technology"
            v-for="(element, index) in technologies" 
            :key="index" 
          >
            <img :src="'/img/skills/' + element" alt="">
          </div>
        </div>
        <p class="fw-300 descrizione">{{ descrizione }}</p>
        <span v-if="altrolink" class="altrolink">
          <a target="_blank" :href="altrolink">{{ $t('portfolio.btnAltro') }}</a>
        </span>
      </div>
    </div>
    <div class="info">
      <div class="sito d-flex align-items-center justify-content-end">
            <a 
              v-if="linkWebsite"
              class="site-button me-2 btn"
              :href="linkWebsite"
              target="_blank"
              >
              {{ $t('portfolio.btnSite') }}
            </a>
            <a 
              v-if="linkGithub"
              class="git-button h-100"
              :href="linkGithub"
              :style="{ border: 'none' }"
            >
              <i class="fa-brands fa-github"></i>
            </a>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/general/variables';
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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