<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';

export default {
  name: 'Section_skills',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Mousewheel, Autoplay],
    };
  },

}
</script>

<template>
  <section class="my-5">
    <div class="container text-center">
      <h1 class="pb-5">Skills</h1>
      <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :mousewheel="true"
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
          <swiper-slide>
            <div class="img_container">
              <img src="../../public/img/skills/html.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img_container">
              <img src="../../public/img/skills/css.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img_container">
              <img src="../../public/img/skills/sass.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img_container">
              <img src="../../public/img/skills/php.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img_container">
              <img src="../../public/img/skills/vue.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="img_container">
              <img src="../../public/img/skills/laravel.png" alt="">
            </div>
          </swiper-slide>
          <swiper-slide>
            <img src="../../public/img/skills/sass.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../public/img/skills/sass.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../public/img/skills/sass.png" alt="">
          </swiper-slide>
          <swiper-slide>
            <img src="../../public/img/skills/sass.png" alt="">
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