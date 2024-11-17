<template>
    <!-- :autoplay="{ delay: 2500, disableOnInteraction: false}" -->
    <div class="flex flex-col gap-10 justify-center items-center overflow-hidden">
        <swiper :modules="modules" :slides-per-view="1" :space-between="10" 
         :speed="1500" @swiper="onSwiper" :centered-slides="true"
            @slideChange="onSlideChange" :thumbs="{ swiper: thumbsSwiper }" class="swiper-brand overflow-hidden">
            <swiper-slide v-for="slide in Brands" :key="slide" class="">
                <div class="flex flex-col lg:flex-row items-center p-6 lg:justify-between">
                    <div class="lg:flex lg:flex-col">
                        <div class="mb-5">
                            <img :src="slide.logo" alt="" :class="slide.logo" class="scale-75 mb-5">
                            <h3 class="text-2xl font-medium mb-5 break-words whitespace-normal">{{ slide.title }}</h3>
                            <p class="break-words whitespace-normal">{{ slide.description }}</p>
                        </div>
                        <div>
                            <button
                                class="text-tertiary bg-secondary py-4 px-6 hover:bg-slate-700  duration-200 max-w-max inline-block">
                                Learn More
                            </button>
                        </div>

                    </div>
                    <div class="max-w-[600px] shrink-0">
                        <img :src="slide.image" alt="" srcset="" class="w-[200px] lg:w-auto lg:h-[400px] mx-auto">
                    </div>
                </div>

            </swiper-slide>
        </swiper>

        <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="3" :centerdSlides="true"
           :watchSlidesProgress="true" :modules="modules"
            class="mySwiper ">
            <swiper-slide v-for="thumb in Brands" :key="thumb">
                <div class="w-full  h-max flex flex-col justify-center items-center bg-white p-6 text-center">
                    <img :src="thumb.logo" alt="" class="h-[90px] object-contain" >
                </div>

            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>

import Brands from '@/assets/brands.json'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay, Thumbs } from 'swiper/modules';


// Import Swiper styles
  import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import { ref } from 'vue';

const modules = ref([Pagination, Scrollbar, A11y, Autoplay, Thumbs])

const onSwiper = (swiper) => {
    console.log(swiper)
}
const onSlideChange = () => {
    console.log('slide change')
}

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

</script>

<style scoped>
.swiper-brand {
    @apply max-w-screen-lg mx-auto h-full flex flex-col justify-center items-center overflow-hidden relative;
}
.swiper-wrapper{
    @apply !flex w-max justify-center items-center ;
}
.swiper-brand .swiper-wrapper{
    @apply flex  justify-center items-center w-max !important;
}

.swiper-brand .swiper-slide {
    @apply shrink-0;
}

.swiper-brand .swiper-slide .logo {
    @apply w-auto h-[12] block object-left;
}

.mySwiper {
    @apply  max-w-xl w-full  mx-auto flex flex-col justify-center items-center text-center bg-white shadow-2xl;
}
.swiper-slide-thumb-active::before{
    content:'';
    animation-name:line-active ;
    animation-duration: 3s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    @apply w-full  block border-t-4 border-primary
}

@keyframes line-active {
  0%{
    width: 0;
  }
  100%{
      width: 100%;
  }
}
</style>