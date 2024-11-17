<template>
    <div>
        <swiper :modules="modules" :slides-per-view="1" :thumbs="{ swiper: thumbsSwiper }" :speed="1500" :autoplay="{ delay: 2500, disableOnInteraction: false}" class="brand-swiper">
            <swiper-slide v-for="item in brands" :key="item">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6  items-center lg:justify-between ">
                    <div
                        class="flex flex-col  gap-4 justify-center items-center  text-center lg:text-left lg:justify-start lg:items-start">
                        <img :src="item.logo" alt="" class="scale-75 mb-5 inline-block w-max">
                        <h4 class="text-xl lg:text-3xl font-semibold">{{ item.title }}</h4>
                        <p>{{ item.description }}</p>
                        <button
                            class="text-tertiary bg-secondary py-4 px-6 hover:bg-slate-700  duration-200 max-w-max inline-block">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img :src="item.image" alt="" class="w-auto lg:h-[400px] object-contain text-center mx-auto">
                    </div>
                </div>
            </swiper-slide>
        </swiper>

        <!-- swiper- thumbail -->
         <div class="container">
            <swiper @swiper="setThumbsSwiper" :loop="true" :spaceBetween="10" :slidesPerView="3" :centerdSlides="true"
           :watchSlidesProgress="true" :modules="modules"
            class="mySwiper ">
            <swiper-slide v-for="thumb in brands" :key="thumb">
                <div class="w-full  h-max flex flex-col justify-center items-center bg-white p-6 text-center">
                    <img :src="thumb.logo" alt="" class="h-[90px] object-contain" >
                </div>
            </swiper-slide>
        </swiper>
         </div>

    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Thumbs } from 'swiper/modules';
import brands from '@/assets/brands.json'
import { ref } from "vue";
const modules = ref([Autoplay, Thumbs])

const thumbsSwiper = ref(null);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

</script>

<style scoped>
.brand-swiper {
    @apply relative overflow-hidden container;
}

.brand-swiper .swiper-wrap {
    @apply flex justify-center items-center
}

.brand-swiper .swiper-slide {
    @apply container;
}


.mySwiper {
    @apply  max-w-xl w-full  mx-auto flex flex-col justify-center items-center text-center bg-white shadow-2xl mt-10 ;
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