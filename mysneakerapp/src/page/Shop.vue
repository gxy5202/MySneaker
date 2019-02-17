<template>
  <div class="hello">
    <!-- 顶部导航栏 -->
    <Nav-bar title="鞋城" fixed>
     
    </Nav-bar>
    <!-- 顶部导航栏 -->
    <Tabs @click="toShopList">
      <Tab v-for="(item,index) in tabs" :key="index" :title="item.title" >
         <router-view></router-view>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import {  Tab, Tabs,NavBar, Uploader, Icon ,List } from 'vant';
export default {
  name: 'Shop',
  data () {
    return {
      active:0,
      list: [],
      loading: false,
      finished: false
    }
  },
  computed: {
    tabs(){
      return [
        {
          title:'推荐',
          index:0
        },
        {
          title:'推荐',
          index:1
        },
        {
          title:'推荐',
          index:2
        },
        {
          title:'推荐',
          index:3
        },
        {
          title:'推荐',
          index:4
        },
      ]
    }
  },
  methods: {
    
    toShopList(index,title){
      console.log(index)
      if(index == 1){
        this.$router.push('/Recommend')
      }
    }
  },
  components:{
   
    NavBar,
    Uploader,
    Icon,
    List,
    Tab, 
    Tabs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>