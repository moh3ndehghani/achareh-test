<template>
  <div class="w-full">
    <div class="flex-between">
      <label>{{ label }}</label>
      <span class="text-[10px] text-[#757575]">{{
        props.labelDescription
      }}</span>
    </div>
    <div class="input-container">
      <input
        :value="props.modelValue"
        @input="(event) => emit('update:modelValue', event.target.value)"
        type="text"
        class="input peer"
        :class="{ '!border-secondary-color': props.error }"
      />
      <TimesCircle
        class="remove-icon hidden peer-focus:block"
        @mousedown.prevent="removeHandler"
      />
    </div>
    <p class="error" v-if="props.error">{{ props.errorText }}</p>
  </div>
</template>

<script setup>
import TimesCircle from "@/components/icons/TimesCircle.vue";

////////

const props = defineProps([
  "modelValue",
  "label",
  "labelDescription",
  "error",
  "errorText",
]);
const emit = defineEmits(["update:modelValue"]);

////////

function removeHandler() {
  emit("update:modelValue", null);
}
</script>

<style scoped lang="scss">
.input-container {
  @apply h-[46px] relative mt-1.5;
  .input {
    @apply duration-300 transition-all outline-none w-full h-full px-2.5 py-3 border  border-gray-border rounded-md focus:border-primary-color;
  }
  .remove-icon {
    @apply absolute top-1/2 left-0 translate-x-1/2 -translate-y-1/2 cursor-pointer;
  }
}
label {
  @apply font-medium text-xs md:text-sm;
}
.error {
  @apply text-[10px] text-secondary-color;
}
</style>
