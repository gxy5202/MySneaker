<template>
  <div class="follow-box">
    <nav-bar left-text="返回" left-arrow @click-left="onClickLeft"/>
    <top :prop2="user.message2"></top> 
    <postings v-for="i in user.postings" :key="i.id" :prop="i" :user='user'></postings>
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
        message2:'',
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
      this.$store.commit('tabState',0);
    }
  },
  created: function() {
    let uid=this.$route.query
    axios.post("https://www.gomi.site/user_info", uid).then(res => {
      console.log(res.data)
      this.user = {
        message2:res.data.user[0],
        message:{
          id:0,
          info:res.data.user[0]
        },
        postings:res.data.postings
      }
      
      console.log(this.user);
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


