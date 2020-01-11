import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue"
import novoPedido from "@/views/novoPedido.vue";
import UserBackOffice from "@/views/BackOffice/User.vue"
import RequestsBackOffice from "@/views/BackOffice/Requests.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path: "/novoPedido",
    name: "novo-pedido",
    component: novoPedido
  },
  {
   path: "/userbackoffices",
   name: "user-backoffice",
   component: UserBackOffice
  },
  {
    path: "/requestbackoffices",
    name: "request-backoffice",
    component: RequestsBackOffice
   }
];

const router = new VueRouter({
  routes
});

export default router;
