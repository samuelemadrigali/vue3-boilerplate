import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import SignUpPage from "../pages/SignUpPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
      meta: {
        layout: "auth",
      },
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
      meta: {
        layout: "auth",
      },
    },
    {
      path: "/signup",
      name: "SignUpPage",
      component: SignUpPage,
      meta: {
        layout: "auth",
      },
    },
  ],
});

export default router;
