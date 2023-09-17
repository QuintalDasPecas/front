<template>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <img src="https://http2.mlstatic.com/D_NQ_739831-MLA70113726243_062023-OO.webp">
      </swiper-slide>
      <swiper-slide>
        <img src="https://http2.mlstatic.com/D_NQ_818614-MLA70172625662_062023-OO.webp">
      </swiper-slide>
    </swiper>
  </template>
<script>
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';  
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default {
  components: {
  Swiper,
  SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],

    };
  },
};
</script>
  