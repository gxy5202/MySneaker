<template>
  <div class="item">
    <div :style="bg" class="img"></div>
    <div class="message">
      <span class="name">{{prop.name}}</span>
      <div class="price">
        <span>￥{{prop.price}}</span>
        <span>{{prop.size}}码</span>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "item",
  props: ["prop"],
  computed: {
    bg() {
      return `background-image: url(${this.prop.img})`;
    }
  },
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.item {
  height: 80px;
  width: 100%;
  margin: 5px 0;
  display: flex;
  align-items: center;
  background-color: rgb(255, 253, 253);
  .img {
    height: 45px;
    width: 45px;
    margin: 15px;
    background-size: cover;
  }
  .message {
    height: 100%;
    width: calc(100% - 95px);
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .price{
        display: flex;
        justify-content: space-around;
    }
  }
}
</style>


