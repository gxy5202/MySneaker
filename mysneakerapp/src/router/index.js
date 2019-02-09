import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Shop from '@/page/Shop'
import Map from '@/page/Map'
import My from '@/page/My'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
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
  ]
})
