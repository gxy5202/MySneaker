import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Shop from '@/page/Shop'
import Map from '@/page/Map'
import My from '@/page/My';
import Login from '@/page/Login';
import signUp from '@/page/signUp';
import signIn from '@/page/signIn'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      redirect: '/Home',//设置默认指向的路径
      name: 'Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Shop',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/Map',
      name: 'Map',
      component: Map,
    },
    {
      path: '/My',
      name: 'My',
      component: My,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: signUp,
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn,
    },
  ]
})
