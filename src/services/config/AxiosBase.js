import axios from "axios";
// import router from "@/router";
import { useToast } from "vue-toastification";

const HttpClient = axios.create({
  baseURL: "https://stage.achareh.ir/api",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
  },
});

HttpClient.interceptors.request.use(
  (config) => {
    // config.headers["X-Response-Delay-In-Seconds"] = "0";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

HttpClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    const toast = useToast();
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          //Bad request (wrong axios method)
          for (const [key, value] of Object.entries(error.response.data)) {
            toast.error(`${key}: ${value}`);
          }
          console.log("400 error ===>", error);
          break;
        case 401:
          //not authorization
          console.log("401 error ===>", error);
          break;
        case 405:
          //Method Not Allowed (wrong api)
          console.log("405 error ===>", error);
          break;
        case 500:
          toast.error("ارور سمت سرور");
          // Internal Server Error
          console.log("500 error ===>", error);
          break;
        default:
          console.log("Another error ===>", error);
          break;
      }

      return Promise.reject(error);
    }
  }
);

export default HttpClient;
