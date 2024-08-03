<template>
  <div class="md:p-4">
    <h1 v-if="!succeed" class="header" :class="{ 'absolute-header': state.selectedComponent.name == 'SelectLocation' }">
      <BackIcon v-if="state.selectedComponent.name == 'SelectLocation'" class="cursor-pointer" @click="prevStep" />
      {{ showTitle }}
    </h1>
    <component :is="state.selectedComponent.component" ref="addAddressRef" @returnLocation="setLocation" />
  </div>
  <div v-if="!succeed" class="footer">
    <button class="btn-filled" @click="nextStep">ثبت و ادامه</button>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, markRaw, reactive, ref } from "vue";
import BackIcon from "@/components/icons/BackIcon.vue"
import { AddressService } from "@/services";
import { useToast } from "vue-toastification";

////////

const AddAddress = defineAsyncComponent(() =>
  import("@/components/add-address/AddAddress.vue")
);
const SelectLocation = defineAsyncComponent(() =>
  import("@/components/add-address/SelectLocation.vue")
);
const SuccessMessage = defineAsyncComponent(() =>
  import("@/components/add-address/SuccessMessage.vue")
);

const toast = useToast()

const state = reactive({
  selectedComponent: {
    name: "AddAddress",
    component: markRaw(AddAddress),
  },
  formData: null,
  location: null
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

const succeed = computed(() => {
  if (state.selectedComponent.name == "SuccessMessage") {
    return true
  }
  return false
})

////////

async function nextStep() {
  if (state.selectedComponent.name == "AddAddress") {
    addAddressRef.value.submit().then((response) => {
      state.formData = response
      state.selectedComponent = {
        name: "SelectLocation",
        component: markRaw(SelectLocation),
      };
    });
  } else if (state.selectedComponent.name == "SelectLocation") {
    if (!state.location) {
      toast.error("انتخاب موقعیت جغرافیایی الزامی است!")
      return
    }
    await addAddress()
    state.selectedComponent = {
      name: "SuccessMessage",
      component: markRaw(SuccessMessage),
    }

  }
}

function prevStep() {
  state.selectedComponent = {
    name: "AddAddress",
    component: markRaw(AddAddress),
  };
}

function setLocation(data) {
  state.location = data
}

async function addAddress() {
  const data = {
    "id": 660283,
    "address_id": "8b0d0681-62f5-4697-bfdb-ed5b2f7e3fab",
    "region": 1,
    "address": state.formData.address,
    "last_name": state.formData.last_name,
    "first_name": state.formData.first_name,
    "gender": state.formData.gender,
    "lat": state.location[0],
    "lng": state.location[1],
    "coordinate_mobile": state.formData.coordinate_mobile,
    "coordinate_phone_number": state.formData.coordinate_phone_number,
  }
  await AddressService.addAddress(data).then((response) => {
    console.log(response);
  })
}
</script>

<style scoped lang="scss">
.header {
  @apply p-4 md:px-0 flex items-center gap-2 w-full;
  z-index: 999;
}

.absolute-header {
  @apply md:static absolute top-[48px] bg-white/80 md:bg-transparent;
}

.footer {
  @apply sticky md:absolute bottom-0 right-0 flex-center w-screen h-[80px] md:h-[84px] bg-white;
  box-shadow: 0px -1px 6px 0px #00000026;
  z-index: 1;
}
</style>
