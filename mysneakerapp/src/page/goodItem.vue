<template>
  <div class="good-item">
    <Nav-bar title="标题" left-text="返回" left-arrow @click-left="onClickLeft"/>
  </div>
</template>
<script>
import { NavBar } from "vant";
export default {
  name: "goodItem",
  components: {
    NavBar
  },
  methods: {
    onClickLeft(){
      this.$router.back(-1)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
