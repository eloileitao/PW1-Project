import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import register from "@/views/Register.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue"
import services from "@/views/Catalog.vue";
import Menu from "@/views/Menu.vue";
import MyRequests from "@/views/MyRequests.vue";
import Galery from "@/views/Galeria.vue";
import Profile from "@/views/Profile.vue";
import novoPedido from "@/views/novoPedido.vue";
import UserBackOffice from "@/views/BackOffice/User.vue"
import RequestsBackOffice from "@/views/BackOffice/Requests.vue"
import CatalogBackOffice from "@/views/BackOffice/CatalogManager.vue"
import MenusBackOffice from "@/views/BackOffice/Menus.vue"
//import LogIn from "@/components/buttonModalLogin.vue"
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Login",
    name: "login",
    component: Login
  },
  {
    path: "/Register",
    name: "register",
    component: register
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
    component: novoPedido,
    beforeEnter: (to, from, next) => {
      if(store.state.loggedUser.id==-1){
        next("/logIn")
      }else{
        next();
      }
    }
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
   },
   {
    path: "/catalogbackoffices",
    name: "catalog-backoffice",
    component: CatalogBackOffice
   },
   {
    path: "/menusbackoffices",
    name: "menus-backoffice",
    component: MenusBackOffice
   },
   {
    path: "/services",
    name: "services",
    component: services
   },
   {
    path: "/myrequests",
    name: "myrequests",
    component: MyRequests
   },
   {
    path: "/galery",
    name: "galery",
    component: Galery
   },
   {
    path: "/profile",
    name: "profile",
    component: Profile
   },
   {
    path: "/menu/:serviceId",
    name: "menu",
    component: Menu,
   /* children: [
      { path: '', component: UserHome },
    ]*/
   }
];

const router = new VueRouter({
  routes
});

export default router;
