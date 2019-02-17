<template>
  <div class="follow-box">
    <nav-bar left-text="返回" left-arrow @click-left="onClickLeft"/>
    <top :prop="user.message"></top>
    <postings v-for="i in user.postings" :key="i.id" :prop="i"></postings>
  </div>
</template>
<script>
import { Popup, NavBar } from "vant";
import top from "./FollowUser/top";
import postings from "./FollowUser/postings";
export default {
  name: "FollowUser",
  props: ["prop"],
  data() {
    return {
      user: {
        message: {},
        postings: {}
      },
    };
  },
  components: {
    Popup,
    NavBar,
    top,
    postings
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created: function() {
    let uId=this.prop
    let uid = { uid:uId}
    axios.post("https://www.gooomi.cn/user_info", uid).then(res => {
      this.user.message = res.data.user[0];
      this.user.postings = res.data.postings;
      console.log(this.user.postings);
    });
  }
};
</script>
<style lang="scss" scoped>
.follow-box {
  padding-bottom: 40px;
  background-color: rgb(248, 248, 248);
}
</style>


