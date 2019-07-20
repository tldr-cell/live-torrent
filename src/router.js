import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Explorer from "./views/Explorer.vue";
import Player from "./views/Player.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/explorer",
      name: "explorer",
      component: Explorer
    },
    {
      path: "/player",
      name: "player",
      component: Player
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/docs",
      name: "docs",
      component: () => import("./views/Docs.vue")
    },
    {
      path: "*",
      component: () => import("./views/NotFound.vue")
    }
  ]
});
