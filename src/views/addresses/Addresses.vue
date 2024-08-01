<template>
  <div>
    <h1>آدرس‌ها و مشخصات</h1>
    <div v-if="state.loading" role="status" class="animate-pulse w-full mt-4">
      <div class="h-[200px] bg-gray-300 rounded-[4px] w-full"></div>
    </div>
    <div v-else class="mt-4 flex flex-col gap-5">
      <div
        class="box py-8 px-10 grid grid-cols-7"
        v-for="(item, index) in state.addresses"
        :key="index"
      >
        <div class="col-span-2 flex flex-col gap-8">
          <div class="flex flex-col">
            <span class="title">نام</span>
            <span class="value">{{ item.first_name }}</span>
          </div>
          <div class="flex flex-col">
            <span class="title">شماره تلفن ثابت</span>
            <span class="value">{{ item.coordinate_phone_number }}</span>
          </div>
        </div>
        <div class="col-span-2 flex flex-col gap-8">
          <div class="flex flex-col">
            <span class="title">نام خانوادگی</span>
            <span class="value">{{ item.last_name }}</span>
          </div>
          <div class="flex flex-col">
            <span class="title">جنسیت</span>
            <span class="value">{{ item.gender ? item.gender : "-" }}</span>
          </div>
        </div>
        <div class="col-span-3 flex flex-col gap-8">
          <div class="flex flex-col">
            <span class="title">شماره تلفن همراه</span>
            <span class="value">{{ item.coordinate_mobile }}</span>
          </div>
          <div class="flex flex-col">
            <span class="title">آدرس</span>
            <span class="value">{{ item.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AddressService } from "@/services";
import { onMounted, reactive } from "vue";

const state = reactive({
  addresses: [],
  loading: true,
});

onMounted(() => {
  getAddresses();
});

function getAddresses() {
  AddressService.getAddresses()
    .then((res) => {
      state.addresses = res;
      console.log(res);
    })
    .finally(() => {
      state.loading = false;
    });
}
</script>

<style scoped lang="scss">
.title {
  @apply text-sm text-gray-1;
}
.value {
  @apply mt-4;
}
</style>
