<script>
import {allskills} from '../../data/data.js';
import Skill_card from '../partials/Skill_card.vue';
import Skill_card2 from '../partials/Skill_card2.vue';
import Wabutton from '../partials/Wabutton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import { useHead } from '@vueuse/head';

export default {
  name: 'Skills',
  components: {
    Swiper,
    SwiperSlide,
    Skill_card,
    Skill_card2,
    Wabutton
  },
  setup() {
    useHead({
      title:'Competenze Tecniche - Niccolò Vaccina',
      meta: [
        { name:'title', content:'Competenze Tecniche - Niccolò Vaccina' },
        { name:'description', content:'Scopri le mie competenze tecniche: .NET, C#, SQL Server, MVC, Angular, TypeScript, JavaScript, HTML, CSS e tante altre.' },
        { rel:'canonical', content:'https://niccolo-vaccina.netlify.app/competenze' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'full stack developer, competenze, .net, c#, sql server, javascript, html, css, web developerment, programmatore, sviluppatore web, niccolò vaccina, cesena, forlì' },
        { property:'og:type', content:'article' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://niccolo-vaccina.netlify.app/competenze' },
        { property:'og:title', content:'Competenze Tecniche - Niccolò Vaccina' },
        { property:'og:description', content:'Scopri le mie competenze tecniche: .NET, C#, SQL Server, MVC, Angular, TypeScript, JavaScript, HTML, CSS e tante altre.' },
        { property:'og:image', content:'https://niccolo-vaccina.netlify.app/assets/competenze.webp' },
        { name:'twitter:card', content:'summary_large_image' },
        { name:'twitter:url', content:'https://niccolo-vaccina.netlify.app/competenze' },
        { name:'twitter:title', content:'Competenze Tecniche - Niccolò Vaccina' },
        { name:'twitter:description', content:'Scopri le mie competenze tecniche: .NET, C#, SQL Server, MVC, Angular, TypeScript, JavaScript, HTML, CSS e tante altre.' },
        { name:'twitter:image', content:'https://niccolo-vaccina.netlify.app/assets/competenze.webp' }
      ]
    });
    return {
      modules: [Pagination, Mousewheel, Autoplay],
    };
  },
  data(){
    return{
      allskills
    }
  }
}
</script>

<template>
  <section id="skills" class="mt-50">
    <div>
      <div class="container">
        <h1 class="pb-3 title animation">Le mie competenze</h1>
        <p class="fs-20 fw-300 animation">
          Nel mio percorso da Full Stack Web Developer ho avuto l'opportunità di lavorare con un'ampia varietà di linguaggi, framework, librerie e strumenti. Qui sotto trovi alcune delle tecnologie che ho studiato e messo in pratica nello sviluppo di applicazioni web e software, sia lato Front-End che Back-End.
        </p>
      </div>
      <div class="mt-5 mb-2 d-flex flex-wrap justify-content-center">
        <div 
          v-for="(skill, index) in allskills" 
          :key="index"
          class="new-card-container animation m-1 m-md-2 d-flex justify-content-center"
        >  
        <Skill_card2
            :name="skill.name"
            :image="skill.image_skill"
          />
        </div>
      </div>
    </div>
  </section>
  <Wabutton/> 
</template>

<style lang="scss" scoped>

.animation{
  animation-duration: 2s;
}
.animation{
  animation-name: title;
}

.new-card-container{
  box-shadow:  5px 5px 5px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}

@keyframes title {
  0%   {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes skills {
  0%   {opacity: 0;}
  100% {opacity: 1;}
}

</style>