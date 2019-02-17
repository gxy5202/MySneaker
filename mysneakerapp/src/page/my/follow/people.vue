<template>
  <div class="item">
    <div :style="bg" @click="followUser()" class="img"></div>
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
  data() {
    return {};
  },
  computed: {
    bg() {
      return `background-image: url(${this.prop.img})`;
    }
  },
  components: {
    Button
  },
  methods: {
    followUser() {
      this.$router.push({ path: '/FollowUser', query: {uid:1}});
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.2px solid rgb(196, 193, 193);
  > .img {
    height: 40px;
    width: 40px;
    background-size: cover;
    border-radius: 40px;
  }
  .name {
    margin-left: -100px;
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


