import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "welcome",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/ProjectsView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/ServicesView.vue"),
    },
    {
      path: "/blog",
      name: "PostList",
      component: () => import("@/views/blog/ListView.vue"),
    },
    {
      path: "/blog/post/:year/:month/:day/:slug",
      name: "PostDetail",
      component: () => import("@/views/blog/DetailView.vue"),
    },
  ],
});

export default router;
