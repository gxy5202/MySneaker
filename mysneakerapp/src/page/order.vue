<template>
  <div class="order">
    <nav-bar title="商品订单" left-arrow @click-left="onClickLeft"/>
    <!-- 收货人信息 -->
    <div class="consignee">
      <Icon name="add-o" size='50px'></Icon>
      <span>设置地址</span>
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
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
</style>


