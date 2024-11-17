<template>
    <section class="py-16 px-6">
        <img src="https://www.mayekawa.com/with/images/logo_stories.svg" alt="" class="max-h-[60px] mx-auto pb-6">
        <div class="max-w-screen-lg mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-5 lg:gap-10">
                <div :class="index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''" v-for="(item, index) in Stories"
                    :key="index">
                    <div class="h-full w-full shadow-xl hover:text-primary duration-300">
                        <img :src="item.image" alt="">
                        <div class="p-4 lg:p-6 bg-white">
                            <h4 class="text-xl">
                                <a href="#"> {{ item.title }}</a>
                            </h4>
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