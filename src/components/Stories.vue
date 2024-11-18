<template>
    <section class="py-16 px-6">
        <h4 class="text-2xl text-center mb-6"><span class="font-semibold">Stories </span>  <span class="text-primary italic">with </span> <span class="text-3xl lg:text-4xl text-primary font-bold "> Mayekawa</span> <span class="italic  text-primary">Indonesia </span> </h4>
       <div class="max-w-screen-lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:gap-10">
                <div :class="index === 0 ? 'lg:col-span-2 lg:row-span-2 text-xl' : ''" v-for="(item, index) in Stories"
                    :key="index">
                    <div class="h-full w-full shadow-xl hover:text-primary duration-300">
                        <img :src="item.image" alt="" :class="index === 0 ? 'lg:h-[580px] object-cover' : ''">
                        <div class="p-4 lg:p-6 bg-white">
                            <p class="">
                                <a href="#"> {{ item.title }}</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center">
                <button
                    class="text-tertiary bg-secondary py-4 px-6  hover:bg-slate-700  duration-200 max-w-max inline-block mx-auto mt-10">
                    Learn More
                </button>
            </div>

        </div>
    </section>

</template>

<script setup>
import Stories from '@/assets/stories.json';
</script>

<style lang="scss" scoped></style>