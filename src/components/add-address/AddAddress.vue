<template>
  <div class="add-address-container">
    <div class="add-address">
      <p class="title">لطفا مشخصات و آدرس خود را وارد کنید</p>

      <div class="md:mt-8 mt-4 grid grid-cols-3 gap-5">
        <div class="col-span-1">
          <Input
            label="نام"
            v-model="first_name"
            name="first_name"
            :error="!!errors.first_name"
            :error-text="errors.first_name"
          />
        </div>
        <div class="col-span-1">
          <Input
            label="نام خانوادگی"
            v-model="last_name"
            name="last_name"
            :error="!!errors.last_name"
            :error-text="errors.last_name"
          />
        </div>
        <div class="col-span-1">
          <Input
            label="شماره تلفن همراه"
            type="number"
            v-model="coordinate_mobile"
            name="coordinate_mobile"
            :error="!!errors.coordinate_mobile"
            :error-text="errors.coordinate_mobile"
          />
        </div>
        <div class="col-span-1">
          <Input
            type="number"
            label="شماره تلفن ثابت(اختیاری)"
            labelDescription="*با پیش شماره"
            v-model="coordinate_phone_number"
            name="coordinate_phone_number"
            :error="!!errors.coordinate_phone_number"
            :error-text="errors.coordinate_phone_number"
          />
        </div>
        <div class="col-span-2">
          <Input
            label="آدرس"
            v-model="address"
            name="address"
            :error="!!errors.address"
            :error-text="errors.address"
          />
        </div>
        <div class="col-span-2 mt-5">
          <RadioGroup
            v-model="gender"
            name="gender"
            :options="radioOptions"
            label="جنسیت"
            group-name="gender"
            :error="!!errors.gender"
            :error-text="errors.gender"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import * as Yup from "yup";
import { useField, useForm } from "vee-validate";

////////

defineExpose({ submit });

const state = reactive({
  schema: Yup.object({
    first_name: Yup.string()
      .nullable("وارد کردن نام الزامی است!")
      .required("وارد کردن نام الزامی است!")
      .min(3, "نام حدافل 3 کاراکتر است!"),
    last_name: Yup.string()
      .nullable("وارد کردن نام خانوادگی الزامی است!")
      .required("وارد کردن نام خانوادگی الزامی است!")
      .min(3, "نام خانوادگی حدافل 3 کاراکتر است!"),
    coordinate_mobile: Yup.number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .nullable("وارد کردن شماره تلفن همراه الزامی است!")
      .required("وارد کردن شماره تلفن همراه الزامی است!")
      .test("validate-mobile-number", "شماره تلفن معتبر نیست", (value) => {
        return /^(\+98|0)?9\d{9}$/.test(value);
      }),
    coordinate_phone_number: Yup.number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .nullable("وارد کردن شماره تلفن ثابت الزامی است!")
      .required("وارد کردن شماره تلفن ثابت الزامی است!")
      .test("validate-number", "شماره تلفن  ثابت معتبر نیست", (value) => {
        return /^[0-9]{2,}[0-9]{7,}$/.test(value);
      }),
    address: Yup.string()
      .nullable("وارد کردن آدرس الزامی است!")
      .required("وارد کردن آدرس الزامی است!")
      .min(10, "آدرس حدافل 10 کاراکتر است!"),
    gender: Yup.string()
      .nullable("انتخاب جنسیت الزامی است!")
      .required("انتخاب جنسیت الزامی است!"),
  }),
});
const radioOptions = [
  { label: "خانم", value: "male" },
  { label: "آقا", value: "female" },
];

const { handleSubmit, errors } = useForm({
  validationSchema: state.schema,
});

const { value: first_name } = useField("first_name");
const { value: last_name } = useField("last_name");
const { value: coordinate_mobile } = useField("coordinate_mobile");
const { value: coordinate_phone_number } = useField("coordinate_phone_number");
const { value: address } = useField("address");
const { value: gender } = useField("gender");

////////

function submit() {
  return new Promise((resolve, reject) => {
    handleSubmit((data) => {
      resolve(data);
    })();
  });
}
</script>

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
