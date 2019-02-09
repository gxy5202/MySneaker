<template>
  <div class="hello">
    <!-- 顶部导航栏 -->
    <Nav-bar title="标题" fixed>
      <Uploader slot="right">
        <Icon name="photograph" />
      </Uploader>
    </Nav-bar>
    <!-- 顶部导航栏 -->
    
    <!-- 显示列表 -->
    <List  v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">


    </List>
    <!-- 显示列表 -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon ,List } from 'vant';
export default {
  name: 'Home',
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
    Tabbar,
    TabbarItem,
    NavBar,
    Uploader,
    Icon,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>