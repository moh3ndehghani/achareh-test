<template>
  <div class="add-address-container">
    <div class="add-address">
      <p class="title">لطفا مشخصات و آدرس خود را وارد کنید</p>
      <Input></Input>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.add-address-container {
  @apply mt-4 p-4 md:p-0;
  .add-address {
    @apply box p-4 md:px-12 md:py-5;
    .title {
      @apply font-bold text-xs md:text-base;
    }
  }
}
</style>
