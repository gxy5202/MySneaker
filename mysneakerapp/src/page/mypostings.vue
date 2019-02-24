<template>
  <div>
    <nav-bar :title="title" left-arrow @click-left="onClickLeft" fixed/>
    <div class="posting">
      <postings v-for="i in user.postings" :key="i.id" :prop="i" :user='user'></postings>
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
    
    if (this.$route.query == "my") {
      let uid = {
        uid:this.$store.state.uid
      }
      axios.post("https://www.gooomi.cn/user_info", uid).then(res => {
        console.log(res.data)
        this.user = {
          message:{
            id:0,
            info:res.data.user[0]
          },
          postings:res.data.postings
        }
        
        console.log(this.user.message);
      });
      this.title = "我的帖子";
      
    } else{
      
      
      this.title = "我赞过的";
      axios
        .post("https://www.gooomi.cn/postings", {
          uid: this.$store.state.uid
        })
        .then(res => {
          
          console.log(res.data);
          this.user = {
            message:{
              id:1,
              icon:res.data.icon
            },
            postings:res.data.likeList
          }
          console.log(this.user.message);
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

