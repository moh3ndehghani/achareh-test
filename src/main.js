import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/scss/style.scss";
import router from "@/router";
import Input from "@/components/shared/Input.vue";
import RadioGroup from "@/components/shared/RadioGroup.vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(Toast, {
  timeout: 5000,
  position: "top-center",
  rtl: true,
});

app.component("Input", Input);
app.component("RadioGroup", RadioGroup);
app.mount("#app");
