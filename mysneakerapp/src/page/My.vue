<template>
  <div class="hello">
    <!-- 用户信息栏 -->
    <top-user @fol='fol()'></top-user>
    <!-- 用户相关商品 -->
    <good></good>
    <!-- 其他功能列表 -->
    <Item class="item"></Item>
    <!-- 关注页 -->
    <follow :prop='follow' @fol='fol()'></follow>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon, List } from "vant";
import Item from "./my/Item";
import topUser from "./my/topUser";
import good from "./my/good";
import follow from './my/follow';
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      active: 0,
      list: [],
      loading: false,
      finished: false,
      follow:false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
    },
    // 跳转关注页面
    fol(){
      this.follow=!this.follow;
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    NavBar,
    Uploader,
    Icon,
    List,
    Item,
    topUser,
    good,
    follow,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 公共样式设置
.hello {
  background-color: rgb(241, 241, 241);
}
// 功能板块
.item {
  margin-bottom: 50px;
}
h1,
h2 {
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