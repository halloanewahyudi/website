<template>
  <div>
    <NavbarVue />
    <HeroVue />
    <Tabs />
    <div class="bg-neutral-100 py-16">
      <Myswiper />
    </div>
    <Stories />
    <FooterVue />
  </div>
</template>

<script setup>
import Brand from "./components/brand.vue";
import HeroVue from "./components/Hero.vue";
import NavbarVue from "./components/Navbar.vue";
import Tabs from "./components/Tabs.vue";
import Stories from "./components/Stories.vue";
import FooterVue from "./components/Footer.vue";
import Myswiper from "./components/myswiper.vue";



</script>
