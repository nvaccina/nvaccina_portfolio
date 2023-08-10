<script>
import {skills} from '../../data/data.js';
import Skill_card from '../partials/Skill_card.vue';
import Wabutton from '../partials/Wabutton.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

export default {
  name: 'Skills',
  components: {
    Swiper,
    SwiperSlide,
    Skill_card,
    Wabutton
  },
  setup() {
    return {
      modules: [Pagination, Mousewheel, Autoplay],
    };
  },
  data(){
    return{
      skills,
    }
  }
}
</script>

<template>
  <section id="skills">
    <div class="text-center">
      <h1 class="pb-5 title">Skills</h1>
      <swiper
        class="py-5 skill-swiper"
        :slidesPerView="6"
        :spaceBetween="0"
        :mousewheel="true"
        :grabCursor="true" 
        :mousewheelControl="true"
        :speed="3000"
        :loop="true"
        :a11y="false"
        :autoplay="{
          delay: 1,
          disableOnInteraction: false,
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
    </div>
  </section>
  <Wabutton/> 
</template>

<style lang="scss" scoped>

.title, .skill-swiper{
  position: relative;
  animation-duration: 2s;
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

@keyframes title {
  0%   {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes skills {
  0%   {opacity: 0;}
  100% {opacity: 1;}
}

</style>