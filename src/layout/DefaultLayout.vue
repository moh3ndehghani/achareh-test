<template>
  <div class="bg-[#f5f5f5] min-h-screen">
    <Header />
    <main class="max-w-[806px] mx-auto pt-[48px] md:pt-[70px]">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
</script>
