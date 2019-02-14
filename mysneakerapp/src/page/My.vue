<template>
  <div class="hello">
    <!-- 顶部导航栏 -->
    <!-- <Nav-bar title="个人中心" fixed></Nav-bar> -->
    <!-- 顶部导航栏 -->
    <!-- 用户信息栏 -->
    <top-user></top-user>
    <!-- 用户信息栏 -->
    <!-- 用户相关商品 -->
    <good></good>
    <!-- 用户相关商品 -->
    <!-- 其他功能列表 -->
    <Item class="item"></Item>
    <!-- 其他功能列表 -->
  </div>
</template>
<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon, List } from "vant";
import Item from "./my/Item";
import topUser from "./my/topUser";
import good from "./my/good";
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      active: 0,
      list: [],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
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
    good
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