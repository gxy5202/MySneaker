<template>
  <div class="map">
    <!-- 顶部导航栏 -->
    <Nav-bar title="附近" fixed>
      
    </Nav-bar>
    <!-- 顶部导航栏 -->
     <div class="amap-wrapper">
      <el-amap class="amap-box" vid="'amap-vue'" :center="center" :plugin="plugin"></el-amap>
      
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue' ;
import VueAMap from 'vue-amap';
import { Tabbar, TabbarItem, NavBar, Uploader, Icon ,List } from 'vant';
Vue.use(VueAMap);
const exampleComponents = {
      props: ['text'],
      template: `<div>text from  parent: {{text}}</div>`
    }
export default {
  name: 'Map',
  data () {
    return {
      center: [121.59996, 31.197646],
            lng: 0,
            lat: 0,
            loaded: false,
            plugin: [{
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 100,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true,        //显示定位按钮，默认：true
              buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
              extensions:'all',
              pName: 'Geolocation',
              events: {
                init(o) {
                  // o 是高德地图定位插件实例
                  o.getCurrentPosition((status, result) => {
                    console.log(result)
                    if (result && result.position) {
                      self.lng = result.position.lng;
                      self.lat = result.position.lat;
                      self.center = [self.lng, self.lat];
                      self.loaded = true;
                      self.$nextTick();
                    }
                  });
                }
              }
            }],
      msg: 'Welcome to Your Vue.js App',
      active:0,
      list: [],
      loading: false,
      finished: false,
      zoom:16,
      
    }
  },
  methods: {
    
    onLoad() {
      // 异步更新数据
     
    }
  },
  components:{
    
    NavBar,
    Uploader,
    Icon,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

.map{
  height: 100%;
  .amap-wrapper {
    width: 100%;
    height: 600px;
  }
}

</style>