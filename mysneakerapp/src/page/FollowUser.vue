<template>
  <div>
    <nav-bar left-text="返回" left-arrow @click-left="onClickLeft"/>
    <top :prop="user.message"></top>
  </div>
</template>
<script>
import { Popup, NavBar } from "vant";
import top from "./FollowUser/top";
export default {
  name: "FollowUser",
  props: ["prop"],
  data() {
    return {
      user: {
          message:{},
          postings:{}
      },
    };
  },
  components: {
    Popup,
    NavBar,
    top
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  created: function() {
    let uid = { uid: 1 };
    axios.post("https://www.gooomi.cn/user_info", uid).then(res => {
      this.user.message = res.data.user[0];
      this.user.postings = res.data.postings;
    //   console.log(this.user.message);
    if(this.user!={}){

    }
    });
  }
};
</script>
<style lang="scss" scoped>
</style>


