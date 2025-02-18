<script>
import {skills, skills2, allskills} from '../../data/data.js';
import Skill_card from '../partials/Skill_card.vue';
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
    Wabutton
  },
  setup() {
    useHead({
      title:'Competenze - Niccolò Vaccina',
      meta: [
        { name:'title', content:'Competenze - Niccolò Vaccina' },
        { name:'description', content:'Esplora le mie competenze tecniche: .NET, C#, SQL Server, MVC, JavaScript, HTML, CSS e altro.' },
        { rel:'canonical', content:'https://nvaccina-portfolio.netlify.app/competenze' },
        { name:'author', content:'Niccolò Vaccina' },
        { name:'keywords', content:'Competenze, .NET, C#, SQL Server, JavaScript, HTML, CSS, Web Development' },
        { property:'article:author', content:'Niccolò Vaccina' },
        { property:'article:tag', content:'Competenze, Tecnologie, Full Stack, Programmazione' },
        { property:'og:type', content:'article' },
        { property:'og:site_name', content:'Niccolò Vaccina Portfolio' },
        { property:'og:url', content:'https://nvaccina-portfolio.netlify.app/competenze' },
        { property:'og:title', content:'Competenze Tecniche - Niccolò Vaccina' },
        { property:'og:description', content:'Tutte le tecnologie che conosco e utilizzo nello sviluppo web.' },
        { property:'og:image', content:'https://nvaccina-portfolio.netlify.app/assets/competenze-preview.jpg' },
        { property:'twitter:card', content:'summary_large_image' },
        { property:'twitter:url', content:'https://nvaccina-portfolio.netlify.app/competenze' },
        { property:'twitter:title', content:'Competenze Tecniche - Niccolò Vaccina' },
        { property:'twitter:description', content:'Le tecnologie che utilizzo per lo sviluppo full stack.' },
        { property:'twitter:image', content:'https://nvaccina-portfolio.netlify.app/assets/competenze-preview.jpg' }
      ]
    });
    return {
      modules: [Pagination, Mousewheel, Autoplay],
    };
  },
  data(){
    return{
      skills,
      skills2,
      allskills
    }
  }
}
</script>

<template>
  <section id="skills">
    <div>
      <div class="container">
        <h1 class="pb-5 title">Competenze</h1>
      </div>
      <!-- <div class="new-card-container container d-flex flex-wrap justify-content-center">
        <div 
          v-for="(skill, index) in allskills" 
          :key="index"
          class="my-5 d-flex justify-content-center"
        >  
        <Skill_card
            :name="skill.name"
            :image="skill.image_skill"
          />
        </div>
      </div> -->
      <swiper
        class="py-5 skill-swiper"
        :slidesPerView="6"
        :spaceBetween="0"
        :mousewheel="true"
        :grabCursor="true" 
        :mousewheelControl="true"
        :speed="3000"
        :loop="true"
        :autoplay="{
          delay: 2000
        }"
        :a11y="false"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '408': {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          '520': {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          '991': {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          '1400': {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }"
      >
        <swiper-slide 
          v-for="(skill, index) in skills" 
          :key="index"
          class="my-5 d-flex justify-content-center"
        >
          <Skill_card
            :name="skill.name"
            :image="skill.image_skill"
          />
        </swiper-slide>
      </swiper>

      <swiper
        class="py-5 skill-swiper"
        :slidesPerView="6"
        :spaceBetween="0"
        :mousewheel="true"
        :grabCursor="true" 
        :mousewheelControl="true"
        :speed="3000"
        :loop="true"
        :autoplay="{
          delay: 2000,
          reverseDirection: true,
        }"
        
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        :breakpoints="{
          '0': {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          '408': {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          '520': {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          '991': {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          '1200': {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          '1400': {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }"
      >
        <swiper-slide 
          v-for="(skill, index) in skills2" 
          :key="index"
          class="my-5 d-flex justify-content-center"
        >
          <Skill_card
            :name="skill.name"
            :image="skill.image_skill"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <Wabutton/> 
</template>

<style lang="scss" scoped>

.title, .skill-swiper{
  position: relative;
  animation-direction: reverse;
  transition-timing-function: linear !important;
}
.title{
  animation-name: title;
}
.skill-swiper{
  animation-name: skills;
}
.swiper-wrapper {
  transition-timing-function: linear;
}

.new-card-container{
  border: 1px solid black;
  min-height: 150px;
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