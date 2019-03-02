<template>
  <div class="good-item">
    <!-- 返回 -->
    <nav-bar left-text="返回" left-arrow @click-left="onClickLeft" fixed/>
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
      <span>{{size}}</span>
      <Icon name="arrow"></Icon>
    </div>
    <popup class="good-size1" :overlay="false" position="bottom" v-model="goodSize">
      <Icon @click="goodsize()" class="size-icon" name="cross" size="20px"></Icon>
      <div class="good-size1-good">
        <img :src="good.g_cover" alt>
        <div>
          <span>￥ {{good.g_newPrice}}</span>
          <span>选择尺码</span>
        </div>
      </div>
      <div class="size-item">
        <span
          :class="{active:sizeItem==i}"
          @click="goodsize1(i)"
          v-for="i in good.g_size"
          :key="i.index"
        >{{i}} 码</span>
      </div>
    </popup>
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
      <goods-action-mini-btn :icon="star" text="收藏" @click="shoucang"/>
      <goods-action-big-btn class="buy" primary text="立即购买" @click="buy"/>
    </goods-action>
    <buy :prop="buyState" @buy="order()"></buy>
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
  GoodsActionMiniBtn,
  Dialog,
  Toast
} from "vant";
import buy from "./my/buy";
export default {
  name: "goodItem",
  data() {
    return {
      good: {},
      message: [],
      size: "",
      sizeItem: "",
      goodSize: false,
      buyState: false,
      star: "star-o"
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
    GoodsActionMiniBtn,
    buy,
    Dialog,
    Toast
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
      this.buyState = !this.buyState;
    },
    goodsize1(i) {
      this.size = i + " 码";
      this.sizeItem = i;
    },
    buy() {
      if (!this.$store.state.isLogin) {
        Dialog.confirm({
          title: "未登录，是否跳转登录页面？"
        })
          .then(() => {
            // on confirm
            this.$router.push({ name: "SignUp" });
          })
          .catch(() => {
            // on cancel
          });
      } else if (this.size == "") {
        this.goodSize = !this.goodSize;
      } else {
        this.$router.push({
          name: "order",
          query: {
            g_id: this.good.g_id,
            g_name: this.good.g_name,
            g_img: this.good.g_cover,
            g_size: this.size,
            g_price: this.good.g_newPrice
          }
        });
      }
    },
    shoucang() {
      let data = {
        uid: this.$store.state.uid,
        gid: this.good.g_id
      };
      axios.post("https://www.gomi.site/collection", data).then(res => {
        console.log(res.data);
        if (res.data == "like_success") {
          Toast("收藏成功");
          this.star = "star";
        } else {
          Toast("取消收藏");
          this.star = "star-o";
        }
      });
    }
  },
  created() {
    this.$store.state.tabShow = false;
    this.good = this.$route.query;
    let data = {
      uid: this.$store.state.uid,
      gid: this.good.g_id
    };
    axios.post("https://www.gomi.site/collection_query", data).then(res => {
      console.log(res.data);
      if (res.data.icon == "yes") {
        this.star = "star-o";
      } else if (res.data.icon == "no") {
        this.star = "star";
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.good-item {
  padding-top: 50px;
}
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
// 选择商品尺码
.good-size1 {
  height: 70%;
  background-color: rgb(247, 247, 247);
  .size-icon {
    align-items: flex-end;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .good-size1-good {
    height: 100px;
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      height: 80px;
      margin-left: 20px;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 40%;
      span {
        margin: 5px 0;
      }
    }
  }
  .size-item {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    span {
      background-color: #fff;
      margin: 5px 2.5%;
      height: 50px;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      font-size: 14px;
    }
    .active {
      border: 1px solid black;
      font-weight: bold;
    }
  }
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
.buy {
  background-color: rgb(0, 0, 0);
  border: none;
}
</style>
