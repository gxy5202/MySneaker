<template>
  <div class="good-item">
    <!-- 返回 -->
    <nav-bar left-text="返回" left-arrow @click-left="onClickLeft"/>
    <!-- 轮播 -->
    <swipe :autoplay="3000" indicator-color="white">
      <swipe-item>
        <div class="swdiv">1</div>
      </swipe-item>
      <swipe-item>
        <div class="swdiv">2</div>
      </swipe-item>
      <swipe-item>
        <div class="swdiv">3</div>
      </swipe-item>
      <swipe-item>
        <div class="swdiv">4</div>
      </swipe-item>
    </swipe>
    <!-- 商品名称 -->
    <p
      class="good-name"
    >sajhsjakhfjasajhsjakhfjasajhsjakhfjasajhsjakhfjasajhsjakhfjasajhsjakhfjasajhsjakhfjasajhsjakhfjasajhsjakhfjasajhsjakhfja</p>
    <p class="good-price">￥ 998</p>
    <!-- 商品尺码 -->
    <div class="good-size">
      <span>选择尺码</span>
      <Icon name="arrow"></Icon>
    </div>
    <!-- 商品信息 -->
    <div class="good-message">
      <div class="message-item">
        <span>配色</span>
        <span>红/白</span>
      </div>
      <div class="message-item">
        <span>发行时间</span>
        <span>2019年春季</span>
      </div>
      <div class="message-item">
        <span>发售价格</span>
        <span>￥ 1099</span>
      </div>
      <div class="message-item">
        <span>分类</span>
        <span>球鞋</span>
      </div>
    </div>
    <!-- 底部购买 -->
    <div class="bottom-buy">
      <Icon name="star-o" size="44px"></Icon>
      <Button class="btn" type="primary">立即购买</Button>
    </div>
  </div>
</template>
<script>
import { NavBar, Icon, Swipe, SwipeItem, Button } from "vant";
export default {
  name: "goodItem",
  data() {
    return {
      good: {}
    };
  },
  components: {
    NavBar,
    Icon,
    Swipe,
    SwipeItem,
    Button
  },
  methods: {
    onClickLeft() {
      this.$router.back(-1);
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.state.tabShow = false;
    this.good = this.$route.query;
    console.log(this.$route.query);
  }
};
</script>
<style lang="scss" scoped>
// 轮播图
.swdiv {
  height: 180px;
  width: 99%;
  border: 1px solid black;
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
  margin-bottom: 60px;
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
// 底部购买
.bottom-buy {
  border-top: 1px solid rgb(194, 192, 192);
  background-color: rgb(235, 231, 231);
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .btn {
    width: 60%;
  }
}
</style>
