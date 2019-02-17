<template>
  <div class="good-item">
    <van-nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"/>
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  name: "goodItem",
  components: {
    NavBar
  }
};
</script>
<style lang="scss" scoped>
</style>
