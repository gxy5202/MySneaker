<template>
  <div>
    <Popup position="right" class="popup" v-model="prop">
      <!-- 标题 -->
      <nav-bar title="我的购买" left-arrow @click-left="onClickLeft"/>
      <!-- 关注列表 -->
      <div class="item" v-for="i in item" :key="i.index">
        <item :prop="i"></item>
      </div>
    </Popup>
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
      item: []
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
  },
  created() {
    console.log(1);
    axios
      .post("https://www.gooomi.cn/order_query", { uid: this.$store.state.uid })
      .then(res => {
        this.item = res.data;
        console.log(this.item);
      });
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
    p {
      margin: 0;
      display: flex;
      justify-content: flex-end;
      border-top: 0.5px solid rgb(207, 206, 206);
      span {
        border: 0.5px solid rgb(134, 134, 134);
        padding: 5px 10px;
        margin: 5px 20px;
        &:active {
          color: black;
          border: 0.5px solid black;
        }
      }
    }
  }
}
</style>


