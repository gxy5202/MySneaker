<template>
  <div class="box">
    <div class="box1" :style="bg"></div>
      <div class="top">
        <div class="fans">
          <span class="fans-num">{{prop.u_fans}}</span>
          <span class="fans-text" >粉丝</span>
        </div>
        <div :style="bg" class="img"></div>
        <div class="follow" @click.stop="isFollow(prop.uid)">
          <img v-if="follow == true" src='../../../static/img/guanzhu1.png'>
          <img v-if="follow == false" src='../../../static/img/guanzhu.png'>
          <span v-if="follow == true">已关注</span>
          <span v-if="follow == false">未关注</span>
        </div>
    </div>
    <div class="bottom">
      <span class="name">{{prop.u_nick_name}}</span>
      <span class="like">已获得{{prop.u_like}}赞</span>
    </div>
  </div>
</template> 
<script>
import {Toast} from 'vant';
export default {
  name: "top",
  props: ["prop"],
  data() {
    return {
      follow: false
    };
  },
  computed: {
    bg() {
      return `background-image: url(${this.prop.u_img})`;
    }
  },
  methods: {
    la() {
      console.log(this.bg);
    },
    isFollow(item){
      let followId = {
          fid:this.$store.state.uid,
          tid:this.$store.state.tid
        }
      if(this.follow == false) {
        axios.post("https://www.gooomi.cn/follow_insert", followId).then(res => {
          if(res.data.status == 'success'){
            this.follow = true;
            Toast.success('关注成功')
          }else{
            this.follow = false;
            Toast.fail('关注失败，请稍后再试')
          }
        });
      }else{
        axios.post("https://www.gooomi.cn/follow_delete", followId).then(res => {
          if(res.data.status == 'success'){
            this.follow = true;
            Toast.success('关注成功')
          }else{
            this.follow = false;
            Toast.fail('关注失败，请稍后再试')
          }
        });
      }
    }
  },
  created() {
    
    
      console.log(this.prop.uid)
      let followId = {
        fid:this.$store.state.uid,
        tid:this.$store.state.tid
      }
      console.log(followId)
      axios.post("https://www.gooomi.cn/follow_query", followId).then(res => {
        console.log(res.data)
        if(res.data.status == '未关注'){
          this.follow = false
        }else{
          this.follow = true
        }
      });
    
    
  },
  components:{
    Toast
  }
};
</script>
<style scoped lang="scss">
.box {
  height: 180px;
  width: 100%;
  position: relative;
  margin-bottom: 30px;
  .box1 {
    height: 100%;
    width: 100%;
    background-size: cover;
    filter: blur(6px);
  }
  .top {
    height: 120px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .fans{
      width: 30%;
      display: flex;
      flex-direction: column;
      .fans-text{
        margin-top: 10px;
      }
    }
    .img {
      width: 40%;
      background-size: cover;
      height: 70px;
      width: 70px;
      border: 2px solid #fff;
      border-radius: 100px;
    }
    .follow{
      width: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      span{
        margin-top: 10px;
      }
      img{
        height: 20px;
        width: 20px;
      }
    }
  }
  .bottom{
    height: 60px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 120px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .name{
      margin-bottom: 5px;
    }
  }
}
</style>
