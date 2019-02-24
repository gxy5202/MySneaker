<template>
  <div>
    <popup position="right" class="popup" v-model="prop">
      <!-- 标题 -->
      <nav-bar title="我的收藏" left-arrow @click-left="onClickLeft"/>
      <item v-for="i in item" :key="i.index" :prop="i"></item>
    </popup>
  </div>
</template>
<script>
import { Popup, Icon, NavBar } from "vant";
import item from "./good/item";
export default {
  name: "shoucang",
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
      this.$emit("shoucang");
    }
  }
};
</script>
<style lang="scss" scoped>
.popup {
  background-color: rgb(245, 245, 245);
  height: 100%;
  width: 100%;
}
</style>


