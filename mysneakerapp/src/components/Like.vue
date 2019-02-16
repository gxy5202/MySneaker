<template>
  <div class="wrapper">
    <Icon size="25px" name="like" ></Icon>
    <span>123</span>
            <!-- <span>{{item.p_like}}</span> -->
  </div>
</template>

<script>

import Vue from 'vue';

import {
  Icon,
} from "vant";

export default {
  name: "Like",
  data() {
    return {
      likeStyle: ["like-o", "like"],
      dataList: [],
      imgList: [],
      already_like:'',
      show:false
    };
  },
  computed: {
    uid(){
      this.$store.state.uid
    },
    
  },
  methods: {
    onLoad() {
      // 异步更新数据
    },
    
    like(item) {
      let posting_like = {
        uid:this.$store.state.uid,
        pid:item.pid
      };
      if(posting_like.uid == ''){
        this.$router.push('/Login');
        this.$store.commit('tabState',1);
      }else{
        axios.post("https://www.gooomi.cn/postings_like",posting_like)
        .then(res=>{
            if(res.data == 'already_like'){
              item.likeState = {
                state: false,
                style: "like-o"
              };
              item.p_like -= 1;
            }else if(res.data == 'like_success'){
              item.likeState = {
                state: true,
                style: "like"
              };
              item.p_like += 1;
          }
          
        })
      }
      
    },
    
  },
  created() {
    

   
  },
  updated() {
    
  },
  components: {
    Icon,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>