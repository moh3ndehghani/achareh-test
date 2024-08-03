<template>
  <div class="p-4">
    <h1 class="md:pt-4">آدرس‌ها و مشخصات</h1>
    <template v-if="state.loading">
      <div v-for="(item, index) in 5" :key="index" role="status" class="animate-pulse w-full mt-4">
        <div class="h-[200px] bg-gray-300 rounded-[4px] w-full"></div>
      </div>
    </template>
    <div v-else class="mt-4 flex flex-col gap-5">
      <AddressItem v-for="(item, index) in state.addresses" :item="item" :key="index" />
    </div>
  </div>
</template>

<script setup>
import { AddressService } from "@/services";
import { onMounted, reactive } from "vue";
import AddressItem from "@/components/addresses/AddressItem.vue";

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
