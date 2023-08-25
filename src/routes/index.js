import { createRouter, createWebHistory } from "vue-router";

// Middlewares
import middlewarePipeline from "./middlewares";
import auth from "./middlewares/auth";

// Pages
import HomePage from "../pages/HomePage.vue";
import DashboardPage from "../pages/DashboardPage.vue";
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
      path: "/dashboard",
      name: "DashboardPage",
      component: DashboardPage,
      meta: {
        layout: "auth",
        middleware: [auth],
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

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }

  const middleware = to.meta.middleware;

  const context = {
    to,
    from,
    next,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
