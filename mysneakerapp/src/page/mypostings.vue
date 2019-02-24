<template>
  <div>
    <nav-bar :title="title" left-arrow @click-left="onClickLeft" fixed/>
    <div class="posting">
      <postings v-for="i in postings" :key="i.id" :prop="i" :user='user'></postings>
    </div>
  </div>
</template>
<script>
import { NavBar } from "vant";
import postings from "./FollowUser/postings";
export default {
  name: "mypostings",
  data() {
    return {
      postings: [],
      title: "",
      user: {
        message: {},
        postings: {}
      },
    };
  },
  
  created() {
    let uid = {
      uid:this.$store.state.uid
    }
    axios.post("https://www.gooomi.cn/user_info", uid).then(res => {
      console.log(res.data)
      this.user = {
        message:res.data.user[0],
        postings:res.data.postings
      }
      
      console.log(this.user);
    });
    if (this.$route.query == "my") {
      this.title = "我的帖子";
      axios
        .post("https://www.gooomi.cn/postings_info", {
          uid: this.$store.state.uid
        })
        .then(res => {
          console.log(res.data);
          this.postings = res.data;
          console.log(this.postings);
        });
    } else {
      this.title = "我赞过的";
      axios
        .post("https://www.gooomi.cn/postings", {
          uid: this.$store.state.uid
        })
        .then(res => {
          console.log(res.data);
          this.postings = res.data.list;
        });
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    
  },
  components: {
    NavBar,
    postings
  }
};
</script>
<style lang="scss" scoped>
.posting {
  margin-top: 50px;
}
</style>

