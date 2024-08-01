<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />
    <main class="max-w-[806px] mx-auto pt-6">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
</script>
