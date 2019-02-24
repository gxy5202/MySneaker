<template>
  <div class="item">
    <div :style="bg" @click="followUser()" class="img"></div>
    <span class="name">{{prop.u_nick_name}}</span>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "people",
  props: ["prop"],
  data() {
    return {};
  },
  computed: {
    bg() {
      return `background-image: url(${this.prop.u_img})`;
    }
  },
  components: {
    Button
  },
  methods: {
    followUser() {
      this.$router.push({ path: "/FollowUser", query: { uid: this.prop.uid } });
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  height: 60px;
  width: 90%;
  margin: 10px auto;
  display: flex;
  align-items: center;
  // justify-content: space-around;
  justify-content: flex-start;
  border-bottom: 0.2px solid rgb(196, 193, 193);
  > .img {
    height: 40px;
    width: 40px;
    background-size: cover;
    border-radius: 40px;
  }
  .name{
    margin-left: 30px;
  }
  .btn {
    height: 30px;
    width: 50px;
    padding: 0;
    font-size: 10px;
    text-align: center;
    line-height: 30px;
  }
}
</style>


