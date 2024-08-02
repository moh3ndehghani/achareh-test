<template>
  <div class="address-container">
    <div class="name address-item">
      <span class="title hidden md:block">نام</span>
      <span class="title md:hidden">نام و نام خانوادگی</span>
      <div class="value">
        <span>{{ props.item.first_name }}</span>
        <span class="md:hidden">{{ props.item.last_name }}</span>
      </div>
    </div>
    <div class="last-name address-item !hidden md:!flex">
      <span class="title">نام خانوادگی</span>
      <span class="value">{{ props.item.last_name }}</span>
    </div>
    <div class="mobile address-item">
      <span class="title">شماره تلفن همراه</span>
      <span class="value">{{ props.item.coordinate_mobile }}</span>
    </div>
    <div class="phone address-item">
      <span class="title">شماره تلفن ثابت</span>
      <span class="value">{{ props.item.coordinate_phone_number }}</span>
    </div>
    <div class="gender address-item">
      <span class="title">جنسیت</span>
      <span class="value">{{
        props.item.gender ? props.item.gender : "-"
      }}</span>
    </div>
    <div class="address address-item">
      <span class="title">آدرس</span>
      <span class="value">{{ props.item.address }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["item"]);
</script>

<style scoped lang="scss">
.address-container {
  @apply box p-4 md:py-8 md:px-10 flex flex-col md:grid grid-cols-7 grid-rows-4 gap-4 md:gap-8;
}
.address-item {
  @apply flex-between md:flex md:flex-col md:items-start;
  .title {
    @apply text-sm text-gray-1;
  }
  .value {
    @apply md:mt-3.5 flex items-center gap-1;
  }
}
.name {
  @apply md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 order-1;
}
.last-name {
  @apply md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-3;
}
.mobile {
  @apply md:col-start-5 md:col-end-8 md:row-start-1 md:row-end-3 order-3;
}
.phone {
  @apply md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-5 pb-3 md:pb-0 order-5;
}
.gender {
  @apply md:col-start-3 md:col-end-5 md:row-start-3 md:row-end-5 order-2;
}
.address {
  @apply md:col-start-5 md:col-end-8 md:row-start-3 md:row-end-5 order-last;
  @apply md:border-none border-t border-gray-border pt-3;
}
</style>
