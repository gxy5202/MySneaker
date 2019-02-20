<template>
  <div class="map">
    <!-- 顶部导航栏 -->
    <Nav-bar title="附近" fixed>
      
    </Nav-bar>
    <!-- 顶部导航栏 -->
     <div class="amap-wrapper">
      <el-amap class="amap-box" vid="'amap-vue'" :center="center" :plugin="plugin"></el-amap>
      <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
        <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
    </div>
    <div class="add">

    </div>
  </div>
</template>

<script>
let amapManager = new VueAMap.AMapManager();
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
    let self = this;
    return {
      amapManager,
      mapStyle: 'amap://styles/a13ffb721a4fb7567b412d5b6e5e4ff6',
      center: [112,34],
            //lng: 0,
            //lat: 0,
            count: 1,
            slotStyle: {
              padding: '2px 8px',
              background: '#eee',
              color: '#333',
              border: '1px solid #aaa'
            },
            markers: [
            {
              position: [104.06139, 30.56903],
              events: {
                click: () => {
                  alert('click marker');
                },
                dragend: (e) => {
                  console.log('---event---: dragend')
                  this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
                }
              },
              visible: true,
              draggable: false,
              template: '<span>1</span>',
            }
          ],
          renderMarker: {
            position: [121.5273285, 31.21715058],
            contentRender: (h, instance) => {
              // if use jsx you can write in this
              // return <div style={{background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'}} onClick={() => ...}>marker inner text</div>
              return h(
                'div',
                {
                  style: {background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'},
                  on: {
                    click: () => {
                      const position = this.renderMarker.position;
                      this.renderMarker.position = [position[0] + 0.002, position[1] - 0.002];
                    }
                  }
                },
                ['marker inner text']
              )
            }
          },
          componentMarker: {
            position: [121.5273285, 31.21315058],
            contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: 'father is here'}}, ['xxxxxxx'])
          },
          slotMarker: {
            position: [121.5073285, 31.21715058]
          },
        
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
                  o.getCurrentPosition(function(status, result){
                    console.log(result);
                    if (result && result.position) {
                      // this.lng = result.position.lng;
                      // this.lat = result.position.lat;
                      self.center = [result.position.lng, result.position.lat];
                      
                      console.log(self.center)
                      self.loaded = true;
                      //self.$nextTick();
                    }
                  });
                },
                // init(x) {
                //   AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                //     const marker = new SimpleMarker({
                //       iconLabel: 'A',
                //       iconStyle: 'red',
                //       map: x,
                //       position: x.getCenter()
                //     });
                //   });
                // }
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
  .add{
    position: absolute;
    width: 50px;
    height: 50px;
    margin:auto;
    left: 0;
    right:0;
    border-radius: 50%;
    background: red;
    bottom:50px;
    z-index: 999;
  }
}

</style>