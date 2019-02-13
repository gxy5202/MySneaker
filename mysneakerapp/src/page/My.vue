<template>
  <div class="hello">
    <!-- 顶部导航栏 -->
    <Nav-bar title="个人中心" fixed></Nav-bar>
    <!-- 顶部导航栏 -->
    <!-- 用户信息栏 -->
    <div class="message">
      <p class="m-name">
        <img
          class="m-img"
          src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=ee9bedd9b8de9c82b268f1dd0de8eb6f/3ac79f3df8dcd100c662f1c1798b4710b8122f57.jpg"
          alt
        >天价腰花
      </p>
      <p class="m-user" @click="toUser">
        个人中心
        <img src="../../static/img/toRight.png" alt>
      </p>
      
      
    </div>
    <!-- 用户信息栏 -->
    <!-- 用户相关商品 -->
    <div class="good">
      <p class="deal-goods">
        <span class="d-g-left">
          <img src="../../static/img/buy.png" alt>购买
        </span>
        <span class="d-g-right">
          0
          <img src="../../static/img/toRight.png" alt>
        </span>
      </p>
      <p class="deal-goods">
        <span class="d-g-left">
          <img src="../../static/img/sell.png" alt>出售
        </span>
        <span class="d-g-right">
          0
          <img src="../../static/img/toRight.png" alt>
        </span>
      </p>
    </div>
    <router-view />
    <!-- 用户相关商品 -->
    <!-- 用户收藏 -->
    <div class="shoucang">
      <span class="s-left">
        <img src="../../static/img/shoucang.png" alt>收藏
      </span>
      <span class="s-right">
        <img class="s-r-shoe" src="../../static/img/shoe.png" alt>
        <img class="s-r-toRight" src="../../static/img/toRight.png" alt>
      </span>
    </div>
    <!-- 用户收藏 -->
    <!-- 其他功能列表 -->
    <Item></Item>
    <!-- 其他功能列表 -->
  </div>
</template>
<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon, List } from "vant";
import Item from "./my/Item";
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
    },
    toUser() {
      this.$router.push("/User");
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    NavBar,
    Uploader,
    Icon,
    List,
    Item
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 公共样式设置
.hello {
  background-color: rgb(241, 241, 241);
  margin-top: 60px;
  p {
    margin: 0;
  }
}
// 用户信息栏
.message {
  padding: 15px 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .m-name {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    .m-img {
      height: 65px;
      width: 65px;
      border-radius: 50px;
      margin-right: 20px;
    }
  }
  .m-user {
    img {
      height: 15px;
      margin-left: 10px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: gray;
  }
}

// 用户相关商品信息
.good {
  display: flex;
  margin-top: 1px;
  height: 60px;
  .deal-goods {
    background-color: #fff;
    width: 50%;
    height: 100%;
    display: flex;
    margin-right: 1px;
    align-items: center;
    justify-content: space-around;
    .d-g-left {
      height: 100%;
      display: flex;
      align-items: center;
      color: #000;
      font-weight: bold;
      font-size: 16px;
      img {
        height: 40%;
        margin-right: 10px;
      }
    }
    .d-g-right {
      height: 100%;
      display: flex;
      align-items: center;
      color: gray;
      font-size: 16px;
      img {
        height: 15px;
        margin-left: 10px;
      }
    }
    p {
      height: 100%;
      display: flex;
      align-items: center;
      color: #000;
      font-weight: bold;
      img {
        height: 40%;
        margin-right: 10px;
      }
    }
  }
}

//用户收藏
.shoucang {
  height: 60px;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  margin-top: 1px;
  .s-left {
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 16px;
    img {
      height: 40%;
      margin-right: 10px;
    }
  }
  .s-right {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .s-r-shoe {
      height: 90%;
      margin-right: 30px;
    }
    .s-r-toRight {
      height: 15px;
    }
  }
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