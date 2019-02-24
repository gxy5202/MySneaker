<template>
  <div class="like">
    <Icon class="icon" size="20px" :name="likeData.likeState.style" @click.stop="like(likeData)"></Icon>
    <span>{{likeData.p_like}}</span>
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
  props:['likeData'],
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
    
    like(likeData) {
    
      let posting_like = {
        uid:this.$store.state.uid,
        pid:likeData.pid
      };
      if(posting_like.uid == ''){
        this.$router.push('/Login');
        this.$store.commit('tabState',1);
      }else{
        axios.post("https://www.gooomi.cn/postings_like",posting_like)
        .then(res=>{
            if(res.data == 'already_like'){
              likeData.likeState = {
                state: false,
                style: "like-o"
              };
              likeData.p_like -= 1;
            }else if(res.data == 'like_success'){
              likeData.likeState = {
                state: true,
                style: "like"
              };
              likeData.p_like += 1;
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
 .like{
   font-size: 10px;
  .icon{
    margin-right: 3px;
  }
 }
</style>