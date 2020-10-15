import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/berita",
      name: "berita",
      component: () => import("./components/BeritaList"),
    },
    {
      path: "/berita/:id",
      name: "edit-berita",
      component: () => import("./components/Berita"),
    },
    {
      path: "/add",
      name: "add-berita",
      component: () => import("./components/AddBerita"),
    },
  ],
});
