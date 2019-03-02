<template>
  <div class="item">
    <p>订单号:{{prop.oid}}</p>
    <div class="good">
      <img :src="prop.o_cover" alt>
      <div>
        <span>{{prop.o_good_name}}</span>
        <div>
          <span>{{prop.o_size}}</span>
          <span>数量*{{prop.o_num}}</span>
          <span>￥ {{prop.o_price}}</span>
        </div>
      </div>
    </div>
    <div class="message">
      <div>
        <span v-if="prop.o_pay==1">已付款</span>
        <span v-if="prop.o_pay==0">未付款</span>
        <span v-if="prop.o_send==1">已发货</span>
        <span v-if="prop.o_send==0">未发货</span>
      </div>
      <div>
        <span v-if="prop.o_get==0" class="get" @click="getGood()">确认收货</span>
        <span v-if="prop.o_get==1">已收货</span>
        <span @click="del()">删除订单</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "item",
  props: ["prop"],
  components: {
    Button
  },
  methods: {
    del() {
      axios
        .post("https://www.gomi.site/order_delete", { oid: this.prop.oid })
        .then(res => {
          res.data;
        });
      this.$emit("del");
    },
    getGood() {
      this.$emit("get", this.prop.oid);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  background-color: #fff;
  margin: 15px 0;
  height: 120px;
  p {
    margin: 0;
    padding: 0 10px;
    font-size: 12px;
    text-align: left;
    height: 20px;
  }
  .good {
    font-size: 14px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 60px;
      width: calc(100% - 100px);
      > div {
        display: flex;
        justify-content: space-around;
      }
    }
    img {
      height: 60px;
      width: 60px;
    }
  }
  .message {
    font-size: 14px;
    height: 40px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    > div:nth-child(1) {
      span {
        border: 0.2px solid gray;
        padding: 2px;
        color: gray;
      }
    }
    .get {
      color: red;
    }
  }
}
</style>


