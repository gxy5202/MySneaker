<template>
  <div class="hello">
    123
  </div>
</template>

<script>
import {  Tab, Tabs,NavBar, Uploader, Icon ,List } from 'vant';
export default {
  name: 'Shop',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0,
      list: [],
      loading: false,
      finished: false
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
    List,
    Tab, 
    Tabs
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>