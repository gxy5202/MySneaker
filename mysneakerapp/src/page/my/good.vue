<template>
  <div>
    <p @click="buy()">
      <img src alt>
      <span>我的购买</span>
      <icon name="arrow"></icon>
    </p>
    <p @click="shoucang()">
      <img src alt>
      <span>我的收藏</span>
      <icon name="arrow"></icon>
    </p>
  </div>
</template>
<script>
import { Icon } from "vant";
export default {
  name: "good",
  components: {
    Icon
  },
  methods:{
    buy(){
      this.$emit('buy')
    },
    shoucang(x){
      this.$emit('shoucang')
    }
  }
};
</script>
<style scoped lang="scss">
div{
    display: flex;
    justify-content: space-around;
    height: 60px;
    margin: 15px 0;
    p{
        height: 100%;
        width: 49.5%;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0;
    }
}
</style>
