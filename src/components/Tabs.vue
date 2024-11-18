<template>
    <section class="flex flex-col items-end py-16 ">
        <div class="grid grid-cols-1 lg:grid-cols-6 w-full max-w-screen-xl">
            <div class="col-span-2">
                <div class="p-6">
                    <h4 class="text-4xl font-semibold"> Applications</h4>
                    We are involved in various industries, systems and products by contributing to facilitate
                    eco-friendly and energy-saving production.
                </div>
                <ul class="divide-y lg:divide-y-2 divide-slate-50">
                    <li v-for="(item, index) in tabs" :key="index">
                        <button @click="select(item)" :class="index === activeIndex ? '!bg-[#2a25314d] border-r-4 border-primary' : ''"
                            class="p-4 w-full inline-block text-left bg-[#4a495b1a]  active:border-r-4 active:border-primary focus:border-r-4 focus:border-primary  focus:bg-[#2a25314d]">
                            {{ item.name }}
                        </button>
                    </li>
                </ul>
            </div>
            <div class="col-span-4 ">

                <div v-if="selectTab"
                    class="flex flex-col justify-center items-center text-white bg-slate-700 relative">
                    <div class="layer"></div>
                    <div v-if="selectTab.bg_type == 'video'" class="w-full overflow-hidden flex justify-center items-center"   :style="{ backgroundImage: `url(${selectTab.cover})` }">
                        <YouTube :src="`https://www.youtube.com/watch?v=${selectTab.background}`" @ready="onReady"  ref="youtube" class=" min-h-[calc(100vh-60px)] flex flex-col justify-center items-center p-6  lg:scale-125"/>
                    </div>
                    <div v-else class=" w-full min-h-[calc(100vh-60px)] flex flex-col justify-center items-center p-6 "
                        :style="{ backgroundImage: `url(${selectTab.background})` }">
                        <div class="max-w-[600px] p-6 relative ">
                            <p class="text-xl lg:text-3xl">
                                {{ selectTab.description }}
                            </p>
                            <button
                                class="text-tertiary bg-secondary py-4 px-6 mt-5 hover:bg-slate-700  duration-200 max-w-max inline-block">
                                Learn More
                            </button>
                        </div>

                    </div>
                </div>
                <div v-else class="flex flex-col justify-center items-center text-white bg-slate-700 relative"   :style="{ backgroundImage: `url(${tabs[0].cover})` }" >
                    <div v-if="tabs[0].bg_type == 'video'">
                        <YouTube :src="`https://www.youtube.com/watch?v=${tabs[0].background}`" @ready="onReady"  ref="youtube" class=" min-h-[calc(100vh-60px)] flex flex-col justify-center items-center p-6  lg:scale-125"/>
                    </div>
                    <div v-else class="w-full min-h-[calc(100vh-60px)] flex flex-col justify-center items-center p-6 "
                    :style="{ backgroundImage: `url(${tabs[0].background})` }">
                    <div class="max-w-[600px] p-6 relative">
                        <p class="text-xl lg:text-3xl">
                            {{ tabs[0].description }}
                        </p>
                        <button
                            class="text-tertiary bg-secondary py-4 px-6 mt-5 hover:bg-slate-700  duration-200 max-w-max inline-block">
                            Learn More
                        </button>
                    </div>

                </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue';
import tabs from '@/assets/tabs.json';
import YouTube from 'vue3-youtube';


// Ref untuk tab yang dipilih
const selectTab = ref(null);
const active = ref('')
const youtube = ref(null)
// Fungsi untuk memilih tab
const activeIndex = ref(0);
function select(item,index) {
    selectTab.value = item; // Tetapkan item terpilih    
    activeIndex.value = index
    console.log('Selected tab:', selectTab.value);
}

const onReady = () =>{
    youtube.value.playVideo()
}

</script>

<style scoped>
.active {
    background-color: #007bff;
    /* Warna latar belakang saat aktif */
    color: #fff;
    /* Warna teks saat aktif */
}
</style>
