<template>
  <div class="item">
    <div :style="bg" class="img"></div>
    <span class="name">{{prop.name}}</span>
    <Button class="btn" v-if="prop.fol==0" type="primary">关注</Button>
    <Button class="btn" v-if="prop.fol==1" type="default">已关注</Button>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "people",
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
    height: 60px;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  > div {
    height: 40px;
    width: 40px;
  }
  .btn{
      height: 30px;
      width: 50px;
      padding: 0;
      font-size: 10px;
      text-align: center;
      line-height: 30px;
  }
}
</style>


