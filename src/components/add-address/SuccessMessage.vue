<template>
  <div class="flex-center flex-col" style="height: calc(100vh - 110px)">
    <SuccessIcon />
    <p class="text-sm font-bold mt-2">اطلاعات شما با موفقیت ثبت شد</p>
    <button class="btn-outline mt-10">
      <router-link to="/">مشاهده اطلاعات</router-link>
    </button>
  </div>
</template>

<script setup>
import SuccessIcon from "@/components/icons/SuccessIcon.vue"
</script>
