import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/subjects/:id",
      name: "subjects",
      component: () => import("../views/SubjectView.vue"),
    },
    {
      path: "/lessons/:id",
      name: "lessons",
      component: () => import("../views/LessonView.vue"),
    },
  ],
});

export default router;
