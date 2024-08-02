import { createApp } from "vue";
import App from "@/App.vue";
import "@/assets/scss/style.scss";
import router from "@/router";
import Input from "@/components/shared/Input.vue";

const app = createApp(App);

app.use(router);
app.component("Input", Input);

app.mount("#app");
