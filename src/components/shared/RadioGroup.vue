<template>
  <div>
    <div class="radio-group">
      <label v-if="props.label" :for="groupName">{{ props.label }}</label>
      <div class="radio-group-options">
        <div
          v-for="option in props.options"
          :key="option.value"
          class="radio-group-option"
        >
          <input
            type="radio"
            :id="`${props.groupName}-${option.value}`"
            :name="groupName"
            :value="option.value"
            :checked="props.modelValue === option.value"
            @change="emitUpdate(option.value)"
          />
          <label :for="`${props.groupName}-${option.value}`">{{
            option.label
          }}</label>
        </div>
      </div>
    </div>
    <p class="error" v-if="props.error">{{ props.errorText }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
  },
  options: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  groupName: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorText: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const emitUpdate = (value) => {
  emit("update:modelValue", value);
};
</script>

<style lang="scss" scoped>
.radio-group {
  @apply mb-4 flex items-center;
  label {
    @apply font-medium text-xs md:text-sm;
  }
  &-options {
    @apply flex items-center gap-8 ms-14;
    label {
      @apply px-1;
    }
  }
}

[type="radio"]:checked,
[type="radio"]:not(:checked) {
  display: none;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label {
  position: relative;
  padding-right: 28px;
  @apply cursor-pointer inline-block;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: "";
  @apply border border-primary-color absolute top-1/2 right-0 -translate-y-1/2 rounded-full size-[17px];
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: "";
  @apply size-[9px] absolute right-[4px] top-[5.8px]  duration-300 transition-all bg-primary-color rounded-full;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.error {
  @apply text-[10px] text-secondary-color;
}
</style>
