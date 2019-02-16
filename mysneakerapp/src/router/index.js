import Vue from "vue";
import Router from "vue-router";

import Home from "@/page/Home";
import Shop from "@/page/Shop";
import Map from "@/page/Map";
import My from "@/page/My";
import Login from "@/page/Login";
import SignUp from "@/page/SignUp";
import SignIn from "@/page/SignIn";
import Upload from "@/page/Upload";
import Setup from "@/page/Setup";
import Comment from "@/page/Comment";
Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    console.log(savedPosition)
    if(savedPosition) {
        return savedPosition
    } else {
        return {
            x: 0,
            y: 0
        }
    }
},
  routes: [
    {
      path: "/",
      redirect: "/Home", //设置默认指向的路径
      name: "Home"
    },
    {
      path: "/Home",
      name: "Home",
      meta: { index: 0 },
      component: Home
    },
    {
      path: "/Shop",
      name: "Shop",
      meta: { index: 0 },
      component: Shop
    },
    {
      path: "/Map",
      name: "Map",
      meta: { index: 0 },
      component: Map
    },
    {
      path: "/My",
      name: "My",
      meta: { index: 0 },
      component: My
    },
    {
      path: "/Login",
      name: "Login",
      meta: { index: 0 },
      component: Login
    },
    {
      path: "/SignUp",
      name: "SignUp",
      meta: { index: 1 },
      component: SignUp
    },
    {
      path: "/SignIn",
      name: "SignIn",
      meta: { index: 1 },
      component: SignIn
    },
    {
      path: "/Upload",
      name: "Upload",
      meta: { index: 1 },
      component: Upload
    },
    {
      path: "/Setup",
      name: "Setup",
      meta: { index: 1 },
      component: Setup
    },
    {
      path: "/Comment/:id",
      name: "Comment",
      meta: { index: 1 },
      component: Comment,
      
    }
  ]
});
