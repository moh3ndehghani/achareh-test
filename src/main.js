import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/scss/style.scss";
import router from "@/router";
import Input from "@/components/shared/Input.vue";
import RadioGroup from "@/components/shared/RadioGroup.vue";

const app = createApp(App);

app.use(router);
app.component("Input", Input);
app.component("RadioGroup", RadioGroup);

app.mount("#app");
