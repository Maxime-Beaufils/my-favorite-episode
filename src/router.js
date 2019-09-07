import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import Profile from "@/components/Profile";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    }
  ]
});
