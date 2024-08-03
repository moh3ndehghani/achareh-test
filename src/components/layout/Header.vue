<template>
  <div class="header">
    <div class="max-w-[1280px] h-full mx-auto flex-between">
      <!-- <img src="@/assets/images/logo.svg" alt="logo" /> -->
      <ul class="flex items-center gap-6">
        <li v-for="(item, index) in menu" :key="index">
          <router-link :to="item.link" :class="{ 'active-menu': route.fullPath == item.link }">{{ item.title
            }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

////////

const route = useRoute();

const menu = [
  {
    title: "ثبت آدرس",
    link: "/add-address",
  },
  {
    title: "مشاهده آدرس‌ها",
    link: "/",
  },
];
</script>

<style lang="scss" scoped>
.header {
  @apply h-[70px] px-10 bg-white;
  box-shadow: 0px 0.5px 2px 0px #00000026;
}

.active-menu {
  @apply text-primary-color;
}
</style>
