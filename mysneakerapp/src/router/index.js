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
import FollowUser from "@/page/FollowUser";
import Recommend from "@/page/Recommend";
import goodItem from "@/page/goodItem";
import SearchPage from "@/page/SearchPage";
import order from "@/page/order";
import userAddress from "@/page/userAddress";
import MapList from "@/components/MapList";
import mypostings from "@/page/mypostings";
import mypostings1 from "@/page/mypostings1";
Vue.use(Router);

export default new Router({
  mode: "history",
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
      component: Shop,
      children: []
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
      meta: { index: 10 },
      component: Comment
    },
    {
      path: "/FollowUser",
      name: "FollowUser",
      meta: { index: 1 },
      component: FollowUser
    },
    {
      path: "/goodItem",
      name: "goodItem",
      meta: { index: 2 },
      component: goodItem
    },
    {
      path: "/SearchPage",
      name: "SearchPage",
      meta: { index: 3 },
      component: SearchPage
    },
    {
      path: "/order",
      name: "order",
      meta: { index: 3 },
      component: order
    },
    {
      path: "/userAddress",
      name: "userAddress",
      meta: { index: 4 },
      component: userAddress
    },
    {
      path: "/MapList",
      name: "MapList",
      meta: { index: 4 },
      component: MapList
    },
    {
      path: "/mypostings",
      name: "mypostings",
      meta: { index: 3 },
      component: mypostings
    },
    {
      path: "/mypostings1",
      name: "mypostings1",
      meta: { index: 3 },
      component: mypostings1
    }
  ]
});
