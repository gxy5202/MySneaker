<template>
  <div class="good-item">
    <!-- 返回 -->
    <nav-bar left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- 轮播 -->
    <swipe :autoplay="3000" indicator-color="white">
      <swipe-item>
        <div class="swdiv">
          <img :src="good.g_img1" alt>
        </div>
      </swipe-item>
      <swipe-item>
        <div class="swdiv">
          <img :src="good.g_img2" alt>
        </div>
      </swipe-item>
      <swipe-item>
        <div class="swdiv">
          <img :src="good.g_img3" alt>
        </div>
      </swipe-item>
      <swipe-item>
        <div class="swdiv">
          <img :src="good.g_img4" alt>
        </div>
      </swipe-item>
    </swipe>
    <!-- 商品名称 -->
    <p class="good-name">{{good.g_name}}</p>
    <p class="good-price">￥ {{good.g_newPrice}}</p>
    <!-- 商品尺码 -->
    <div class="good-size" @click="goodsize()">
      <span>选择尺码</span>
      <Icon name="arrow"></Icon>
    </div>
    <popup class="good-size1" v-model="goodSize">内容</popup>
    <!-- 商品信息 -->
    <div class="good-message">
      <div class="message-item">
        <span>配色</span>
        <span>{{good.g_color}}</span>
      </div>
      <div class="message-item">
        <span>发行时间</span>
        <span>{{good.g_date}}</span>
      </div>
      <div class="message-item">
        <span>发售价格</span>
        <span>￥ {{good.g_newPrice}}</span>
      </div>
      <div class="message-item">
        <span>分类</span>
        <span>{{good.g_type}}</span>
      </div>
    </div>
    <!-- 商品信息图片 -->
    <div class="good-message-bottom">
      <img v-for="i in good.g_message" :key="i.index" :src="i" alt>
    </div>
    <!-- 下单 -->
    <goods-action>
      <goods-action-mini-btn icon="cart-o" text="我的购买" @click="order"/>
      <goods-action-mini-btn icon="star-o" text="收藏" @click="shoucang"/>
      <goods-action-big-btn primary text="立即购买" @click="buy"/>
    </goods-action>
  </div>
</template>
<script>
import {
  NavBar,
  Icon,
  Swipe,
  SwipeItem,
  Button,
  Popup,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn
} from "vant";
export default {
  name: "goodItem",
  data() {
    return {
      good: {},
      message: [],
      goodSize: false
    };
  },
  components: {
    NavBar,
    Icon,
    Swipe,
    SwipeItem,
    Button,
    Popup,
    GoodsAction,
    GoodsActionBigBtn,
    GoodsActionMiniBtn
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
      this.$store.state.tabShow = true;
    },
    goodsize() {
      this.goodSize = !this.goodSize;
    },
    order() {
      this.$router.push({
        path: "/buy",
        query: { gid: this.$store.state.uid }
      });
    },
    buy() {},
    shoucang() {}
  },
  created() {
    this.$store.state.tabShow = false;
    this.good = this.$route.query;
    console.log(this.good);
  }
};
</script>
<style lang="scss" scoped>
// 轮播图
.swdiv {
  height: 180px;
  width: 99%;
  img {
    height: 100%;
  }
}
// 商品名
.good-name {
  word-wrap: break-word;
  padding: 0 40px;
}
.good-price {
  font-weight: bold;
  font-size: 20px;
}
// 商品尺码
.good-size {
  height: 30px;
  border-top: 0.5px solid rgb(235, 232, 232);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  color: rgb(168, 167, 167);
  font-size: 14px;
}
// 商品信息
.good-message {
  border-top: 10px solid rgb(235, 232, 232);
  .message-item {
    padding: 0 10px;
    margin: 5px 0;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(168, 167, 167);
    font-size: 14px;
  }
}
// 商品信息图片
.good-message-bottom {
  border-top: 10px solid rgb(235, 232, 232);
  margin-bottom: 60px;
  img {
    width: 100%;
  }
}
</style>
