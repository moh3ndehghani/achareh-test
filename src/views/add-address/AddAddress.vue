<template>
  <div class="md:p-4">
    <h1 class="p-4 md:p-0">{{ showTitle }}</h1>
    <component :is="state.selectedComponent.component" />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, markRaw, reactive } from "vue";

const AddAddress = defineAsyncComponent(() =>
  import("@/components/add-address/AddAddress.vue")
);
const SelectLocation = defineAsyncComponent(() =>
  import("@/components/add-address/SelectLocation.vue")
);

const state = reactive({
  selectedComponent: {
    name: "AddAddress",
    component: markRaw(AddAddress),
  },
});

console.log(state.selectedComponent);

const showTitle = computed(() => {
  if (state.selectedComponent.name == "SelectLocation") {
    return "انتخاب موقعیت";
  } else {
    return "ثبت آدرس";
  }
});

function changeComponent(component) {
  if (component == "AddAddress") {
    state.selectedComponent = {
      name: "AddAddress",
      component: markRaw(AddAddress),
    };
  } else {
    state.selectedComponent = {
      name: "SelectLocation",
      component: markRaw(SelectLocation),
    };
  }
}
</script>
