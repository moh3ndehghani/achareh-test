import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layout/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "addresses",
        component: () => import("@/views/addresses/Addresses.vue"),
      },
      {
        path: "/add-address",
        name: "add-address",
        component: () => import("@/views/add-address/AddAddress.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("@/views/errors/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
