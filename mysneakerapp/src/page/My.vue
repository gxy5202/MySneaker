<template>
  <div class="hello">
    <!-- 用户信息栏 -->
    <top-user @fol="fol()" @fan="fan()" @like1="like1()"></top-user>
    <!-- 用户相关商品 -->
    <good @buy="buy1()" @shoucang="shoucang1()"></good>
    <!-- 其他功能列表 -->
    <Item class="item"></Item>
    <!-- 二级内容页 -->
    <follow :prop="follow" @fol="fol()"></follow>
    <fans :prop="fans" @fan="fan()"></fans>
    <like :prop="like" @like1="like1()"></like>
    <buy :prop="buy" @buy="buy1()"></buy>
    <shoucang :prop="shoucang" @shoucang="shoucang1()"></shoucang>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon, List } from "vant";
import Item from "./my/Item";
import topUser from "./my/topUser";
import good from "./my/good";
import follow from "./my/follow";
import fans from "./my/fans";
import like from "./my/like";
import buy from "./my/buy";
import shoucang from "./my/shoucang";
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      active: 0,
      list: [],
      loading: false,
      finished: false,
      follow: false,
      fans: false,
      like: false,
      buy: false,
      shoucang: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
    },
    // 跳转关注页面
    fol() {
      this.follow = !this.follow;
    },
    //跳转粉丝页面
    fan() {
      this.fans = !this.fans;
    },
    like1() {
      this.like = !this.like;
    },
    buy1() {
      this.buy = !this.buy;
    },
    shoucang1(x) {
      this.shoucang = !this.shoucang;
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
    fans,
    like,
    buy,
    shoucang
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