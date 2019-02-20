<template>
  <div class="order">
    <nav-bar title="商品订单" left-arrow @click-left="onClickLeft"/>
    <!-- 收货人信息 -->
    <div class="consignee" @click="address()">
      <Icon name="add-o" size="50px"></Icon>
      <span>设置地址</span>
    </div>
    <!-- 商品信息 -->
    <div class="good">
      <div class="good-message">
        <img :src="good.g_img" alt>
        <div>
          <span>{{good.g_name}}</span>
          <div>
            <span>{{good.g_size}}</span>
            <span>数量*1</span>
            <span>总金额：￥{{good.g_price}}</span>
          </div>
        </div>
      </div>
      <div class="good-2">
        <span>顺丰速运</span>
        <span>￥ 23</span>
      </div>
    </div>
    <!-- 保证信息展示 -->
    <div class="word">
      <p>1、若卖家未在36小时内发货，您将获得28元现金及170元优惠券补偿。</p>
      <p>2、每件交易商品均由平台针对实物进行鉴别，鉴于商品价格波动性，同时每个款式每个尺码的商品出售时仅有一件等情况，固不支持退还差价。</p>
      <p>3、本平台仅向买卖双方提供商品交易场所，并非货权所有人，固不支持向用户开具商品发票。</p>
    </div>
    <!-- 提交订单 -->
    <div class="over-order">
      <div>
        <span>总金额</span>
        <span>￥ {{good.g_price}}</span>
      </div>
      <Button type="primary">确认支付</Button>
    </div>
  </div>
</template>
<script>
import {
  SubmitBar,
  ContactCard,
  ContactList,
  ContactEdit,
  NavBar,
  Icon,
  Button
} from "vant";
export default {
  name: "order",
  data() {
    return {
      good: {}
    };
  },
  components: {
    SubmitBar,
    ContactCard,
    ContactList,
    ContactEdit,
    NavBar,
    Icon,
    Button
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    address() {
      this.$router.push({
        name: "userAddress"
      });
    }
  },
  created() {
    this.good = this.$route.query;
    console.log(this.$route.query);
  }
};
</script>
<style lang="scss" scoped>
.consignee {
  height: 80px;
  display: flex;
  color: gray;
  padding-left: 50px;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 5px solid rgb(231, 231, 231);
  span {
    margin-left: 20px;
    text-align: left;
  }
}
// 确认订单
.over-order {
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  > div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    :nth-child(2) {
      color: red;
      font-size: 16px;
    }
    :nth-child(1) {
      font-size: 14px;
    }
  }
  button {
    width: 50%;
    height: 100%;
    background-color: black;
    border: none;
  }
}
// 商品数据
.good {
  width: 100%;
  border-bottom: 5px solid rgb(231, 231, 231);
  .good-message {
    height: 80px;
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 0.3px solid rgb(219, 218, 218);
    > img {
      height: 60px;
      width: 60px;
      object-fit: cover;
    }
    > div {
      display: flex;
      flex-direction: column;
      height: 60px;
      width: calc(100% - 90px);
      font-size: 12px;
      justify-content: center;
      > div {
        display: flex;
        justify-content: space-between;
        height: 20px;
        align-items: center;
        font-weight: bold;
      }
    }
  }
  .good-2 {
    height: 30px;
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
// 保证信息
.word {
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  p {
    margin: 5px 0;
    font-size: 14px;
    text-align: left;
  }
}
</style>


