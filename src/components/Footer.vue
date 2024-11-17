<template>
    <div class="footer bg-secondary text-slate-200 pt-20">
        <div class="container">
            <img src="/mayekawa-mycom.png" alt="" class="h-20 grayscale brightness-100 invert">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-10">
                <div>
                        PT. Mayekawa Indonesia <br>
                        Synthesis Square, Tower II, 7th Floor <br>
                        Jl. Jendral Gatot Subroto Kav. 64 No. 177A <br>
                        Jakarta 12870 <br>
                        Indonesia <br>
                        
                </div>
                <div>
                    <h4 class="font-medium text-tertiary text-lg mb-2"> Contact</h4>
                    Phone : (62-21) 8312 360 <br>
                    Faximile : (62-21) 8357 007 <br>
                </div>
                <div>
                    <h4 class="font-medium text-tertiary text-lg mb-2"> Company</h4>
                    <ul>
                        <li v-for="item in menu[0].child" :key="item">
                            <a href="#" class="">{{ item.name }}</a>
                        </li>
                    </ul>

                </div>
                <div>
                    <h4 class="font-medium text-tertiary text-lg mb-2"> Company</h4>
                    <ul>
                        <li v-for="item in menu[1].child" :key="item">
                            <a href="#" class="">{{ item.name }}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="p-4 mt-10 border-t border-slate-500 text-center text-sm">
            Copyright © 2024 PT. Mayekawa Indonesia. All Rights Reserved.
        </div>
    </div>
</template>

<script setup>
import menu from '@/assets/menu.json';
</script>

<style lang="scss" scoped></style>