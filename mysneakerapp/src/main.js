// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vant/lib/index.css';
import store from './store/base-store';
import moment from 'moment';
import VueAMap from 'vue-amap';
Vue.config.productionTip = false

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'fe0874d03093a00ef0e0cc570efa48f6',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  moment,
  components: { App },
  template: '<App/>'
})
