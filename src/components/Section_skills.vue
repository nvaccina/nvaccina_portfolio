<script>
import {skills} from '../data/data.js';
import Skill_card from './partials/Skill_card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

export default {
  name: 'Section_skills',
  components: {
    Swiper,
    SwiperSlide,
    Skill_card
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
  <section id="skills" class="my-5">
    <div class="text-center">
      <h1 class="pb-5">Skills</h1>
      <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :mousewheel="true"
          :speed="5000"
          :loop="true"
          :a11y="false"
          :autoplay="{
            delay: 0.1,
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
            '768': {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            '991': {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            '1200': {
                slidesPerView: 4,
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