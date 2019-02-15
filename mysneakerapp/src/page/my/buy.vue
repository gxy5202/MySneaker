<template>
  <div>
    <popup position="right" class="popup" v-model="prop">
      <!-- 标题 -->
      <nav-bar title="我的购买" left-arrow @click-left="onClickLeft"/>
      <!-- 关注列表 -->
      <div class="item" v-for="i in item" :key="i.index">
        <item :prop="i"></item>
        <p>
          <span>删除订单</span>
        </p>
      </div>
    </popup>
  </div>
</template>
<script>
import { Popup, Icon, NavBar } from "vant";
import item from "./good/item";
export default {
  name: "buy",
  props: ["prop"],
  data() {
    return {
      item: [
        {
          img:
            "http://img1.imgtn.bdimg.com/it/u=1694747816,2275605357&fm=214&gp=0.jpg",
          name: "Nike Blazer Mid 911 没有勾",
          price: 998,
          size: 35.5
        },
        {
          img:
            "http://img1.imgtn.bdimg.com/it/u=1694747816,2275605357&fm=214&gp=0.jpg",
          name: "Nike Blazer Mid 911 没有勾",
          price: 998,
          size: 35.5
        }
      ]
    };
  },
  components: {
    Popup,
    Icon,
    NavBar,
    item
  },
  methods: {
    onClickLeft() {
      this.$emit("buy");
    }
  }
};
</script>
<style lang="scss" scoped>
.popup {
  background-color: rgb(245, 245, 245);
  height: 100%;
  width: 100%;
  .item {
    background-color: rgb(255, 253, 253);
    p{
      margin: 0;
      display: flex;
      justify-content: flex-end;
      border-top: 0.5px solid rgb(207, 206, 206);
      span{
        border: 0.5px solid rgb(134, 134, 134);
        padding: 5px 10px;
        margin: 5px 20px;
        &:active{
          color: black;
          border: 0.5px solid black;
        }
      }
    }
  }
}
</style>


