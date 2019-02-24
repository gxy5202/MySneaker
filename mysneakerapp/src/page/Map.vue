<template>
  <div class="map">
    <!-- 顶部导航栏 -->
    <Nav-bar title="附近" fixed>
      
    </Nav-bar>
    <!-- 顶部导航栏 -->
    <div class="rock" ></div>
    <div class="select">
      <div class="attend" >
        <Icon class="shape" name="medel" size="20px" color="white" />
        <div class="intro">签到</div>
      </div>
      <div class="attend" @click="toList(1)">
        <Icon class="shape" name="new" size="20px"  color="white"/>
        <div class="intro" >最新</div>
      </div>
      <div class="attend" @click="toList(2)">
        <Icon class="shape" name="hot" size="20px"  color="white"/>
        <div class="intro">最热</div>
      </div>
      <div class="attend" @click="toList(3)">
        <Icon class="shape" name="chat" size="20px" color="white" />
        <div class="intro">讨论最多</div>
      </div>
    </div>
    <!-- 显示列表 -->
    <div class="my-position">
      您的位置：{{this.$store.state.city}}
    </div>

    <map-list :index="index"></map-list>
    <!-- 显示列表 -->
    <div class="amap-wrapper">
      
    </div>
    
  </div>
</template>

<script>
;
import Vue from 'vue' ;
import VueAMap from 'vue-amap';
import MapList from '../components/MapList';
import { Tabbar, TabbarItem, NavBar, Uploader, Icon ,List } from 'vant';
Vue.use(VueAMap);

export default {
  name: 'Map',
  data () {
    
    return {
      city:'',
      list: [],
      loading: false,
      finished: false,
      zoom:16,
      index:''
      
    }
  },
  methods: {
    toList(item){
     
      this.index = item
      
      this.$router.push('/MapList');
      this.$store.commit('tabState',1);
    }
    
  },
  created() {
    
  },
  components:{
    
    NavBar,
    Uploader,
    Icon,
    List,
    MapList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.map {
  .rock {
    height: 50px;
    width: 100%;
    
  }
  .select {
    margin:auto;
    z-index: 999;
    width:95%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .shape {
      line-height: 50px;
      flex-wrap: wrap;
      border-radius: 50%;
      background: rgba(0,0,0,0.8);
      height: 50px;
      width: 50px;
      color:white;
      font-size: 8px;
    }
    .intro {
      font-size: 6px;
    }
  }
}
.my-position {
  
}

  


</style>