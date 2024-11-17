<script setup>
import menus from '@/assets/menu.json'
import { ref, onMounted, computed } from 'vue'
import SearchVue from './icons/Search.vue'
import MenuVue from './icons/Menu.vue'
import Close from './icons/Close.vue'
const Menus = ref(menus)
const search = ref(false)
const openMenu = ref(false)

onMounted(() => {
  const mm = document.querySelectorAll('.mega-menu')
  mm.forEach(el => {
    el.querySelector('.sub-menu').classList.add('mm')
  })

  const navbar = document.querySelector('.navbar');
  const navbarHeight = navbar.offsetHeight;

  const mmElements = document.querySelectorAll('.mm');
  mmElements.forEach(el => {
    el.style.top = navbarHeight + 'px';
  });

  

})

const toggleMenu = () => {
  openMenu.value = !openMenu.value 
}
const openSearch = () =>{
  search.value =! search.value
  openMenu.value = false
  console.log(search.value)
}
</script>
<template>
  <div class=" navbar z-[1000] ">
    <div class="container">
      <div class="flex flex-col lg:flex-row gap-3 justify-between items-center lg:items-center">
        <div class="logo">
          <img src="/logo-mayekawa.png" alt="">
        </div>
        <div class="flex justify-between border-t p-4 lg:hidden w-full">
          <button @click="toggleMenu"> <MenuVue /> </button>
          
          <button @click="openSearch">
            <div v-if="search" >
              <Close class="text-primary" />
            </div>
            <div v-else >
              <SearchVue class="text-primary" />
            </div>
          </button>
        </div>
        <div class="menu-wrap w-full lg:w-auto lg:flex flex-col gap-1" :class="openMenu ? '' : 'hidden'">
          <div class="menu-atas hidden lg:flex justify-end pt-2 ">
            <ul class="flex items-center divide-x divide-neutral-400 text-[12px]">
              <li><a href="#" class="px-2"> News</a></li>
              <li><a href="#" class="px-2"> event</a></li>
            </ul>
          </div>
          <div class="menu-bawah flex items-center  gap-4">
            <ul id="primary" class="menu lg:flex items-center gap-4 ">
              <li :class="item.class" v-for="(item, index) in Menus" :key="index">
                <a href="">{{ item.name }}</a>
                <ul :class="{
                  'sub-menu': true,
                  'mega-menu': item.class === 'mega-menu',
                  'mm': item.class === 'mega-menu' // Tambahkan class 'mm' jika parent memiliki class 'mega-menu'
                }" v-if="item.child">
                  <li v-for="(sub, subIndex) in item.child" :key="subIndex"
                    class="group p-4 hover:bg-slate-100 duration-300 ease-in-out">
                    <a href="#">{{ sub.name }}</a>
                    <p v-if="sub.description">
                      {{ sub.description }}
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <button @click="openSearch" class="hidden lg:inline-block mb-3  ">
              <div v-if="search" >
              <Close class="text-primary" />
            </div>
            <div v-else >
              <SearchVue class="text-primary" />
            </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="search">
  <div  class="animate-fade-down animate-duration-300 animate-delay-200 fixed top-0 left-0 w-full  min-h-[50vh]  flex flex-col justify-center items-center bg-secondary text-slate-400 z-[100]">
    <div class="max-w-2xl w-full mx-auto relative text-xl px-6">
      <input type="search" class="border-b border-slate-400 p-5  w-full bg-transparent focus:outline-none focus:bg-slate-700" placeholder="Type keyword">
      <SearchVue class="absolute right-10 top-1/2 -translate-y-1/2 text-xl" />
    </div>
  </div>
  </div>
</template>
<style scoped>
.navbar {
  @apply fixed top-0 left-0 w-full bg-white min-h-max h-[73px] border-b flex flex-col justify-center;
}

#primary li {
  @apply relative py-2;
}

#primary li.has-child a {
  @apply flex items-center justify-between;
}

#primary li.has-child>a::after {
  content: '▾ ';
}

#primary>li a {
  @apply inline-block pb-3 ;
}

#primary li ul a {
  @apply pb-0;
}

#primary .sub-menu {
  @apply opacity-0;
}

#primary li:hover .sub-menu {
  @apply max-md:hidden opacity-100 duration-300
}

.sub-menu {
  @apply lg:absolute top-full hidden p-4 bg-white border;
}

.has-child:hover .sub-menu {
  @apply block min-w-[220px];
}

.has-child:hover .mm {
  @apply grid grid-cols-1 lg:grid-cols-4 gap-4;
}

.mega-menu {
  @apply relative;
}

.mm {
  @apply lg:fixed left-1/2 lg:-translate-x-1/2 max-w-[1170px] w-full bg-white;
}

.mm li a {
  @apply uppercase text-red-500 font-medium pb-3 mb-4 border-b border-neutral-400 w-full block;
}
.search{
  animation: slide-top 1s cubic-bezier(0.075, 0.82, 0.165, 1) ;
}
</style>