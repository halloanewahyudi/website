<template>
    <section class="flex flex-col items-end py-16 ">
        <div class="grid grid-cols-1 lg:grid-cols-6 w-full max-w-screen-xl">
            <div class="col-span-2">
                <div class="p-6">
                    <h4 class="text-4xl font-semibold"> Applications</h4>
                    We are involved in various industries, systems and products by contributing to facilitate
                    eco-friendly and energy-saving production.
                </div>
                <ul class="divide-y lg:divide-y-2 divide-slate-500">
                    <li v-for="(item, index) in tabs" :key="index"  >
                        <button @click="select(item)"  
                            class="p-4 w-full inline-block text-left bg-secondary text-white active:border-r-4 active:border-primary focus:border-r-4 focus:border-primary  focus:bg-slate-700" >
                            {{ item.name }}
                        </button>
                    </li>
                </ul>
            </div>
            <div class="col-span-4 flex flex-col justify-center items-center text-white bg-slate-700 relative">
                <div class="layer"></div>
                <div v-if="selectTab"
                    class=" w-full min-h-[calc(100vh-60px)] flex flex-col justify-center items-center p-6 "
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
    </section>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue';
import tabs from '@/assets/tabs.json';

// Ref aktif dan tab terpilih

// Ref untuk tab yang dipilih
const selectTab = ref(null);
const active  =  ref('')
// Fungsi untuk memilih tab
function select(item) {
    selectTab.value = item; // Tetapkan item terpilih    
    console.log('Selected tab:', selectTab.value);
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
