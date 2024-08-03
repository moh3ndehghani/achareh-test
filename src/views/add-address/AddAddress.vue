<template>
  <div class="md:p-4">
    <h1 class="p-4 md:p-0 flex items-center gap-2">
      <BackIcon v-if="state.selectedComponent.name == 'SelectLocation'" class="cursor-pointer" @click="prevStep" />{{
        showTitle }}
    </h1>
    <component :is="state.selectedComponent.component" ref="addAddressRef" />
  </div>
  <div class="footer">
    <button class="btn" @click="nextStep">ثبت و ادامه</button>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, markRaw, reactive, ref } from "vue";
import BackIcon from "@/components/icons/BackIcon.vue"
////////

const AddAddress = defineAsyncComponent(() =>
  import("@/components/add-address/AddAddress.vue")
);
const SelectLocation = defineAsyncComponent(() =>
  import("@/components/add-address/SelectLocation.vue")
);

const state = reactive({
  selectedComponent: {
    name: "SelectLocation",
    component: markRaw(SelectLocation),
  },
});

const addAddressRef = ref(null);

////////

const showTitle = computed(() => {
  if (state.selectedComponent.name == "SelectLocation") {
    return "انتخاب موقعیت";
  } else {
    return "ثبت آدرس";
  }
});

////////

function nextStep() {
  if (state.selectedComponent.name == "AddAddress") {
    addAddressRef.value.submit().then((response) => {
      state.selectedComponent = {
        name: "SelectLocation",
        component: markRaw(SelectLocation),
      };
    });
  } else if (state.selectedComponent.name == "SelectLocation") {
    // state.selectedComponent = {
    //   name: "SelectLocation",
    //   component: markRaw(SelectLocation),
    // };
  }
}

function prevStep() {
  state.selectedComponent = {
    name: "AddAddress",
    component: markRaw(AddAddress),
  };
}
</script>

<style scoped lang="scss">
.footer {
  @apply absolute bottom-0 right-0 flex-center w-screen h-[80px] md:h-[84px] bg-white;
  box-shadow: 0px -1px 6px 0px #00000026;
}
</style>
