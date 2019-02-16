<template>
  <div class="box">
    <div class="box1" :style="bg"></div>
      <div class="top">
        <div class="fans">
          <span class="fans-num">{{prop.u_fans}}</span>
          <span class="fans-text" @click="la()">粉丝</span>
        </div>
        <div :style="bg" class="img"></div>
        <div class="follow">
          <img v-if="follow" src='../../../static/img/guanzhu1.png'>
          <img v-if="!follow" src='../../../static/img/guanzhu.png'>
          <span v-if="follow">已关注</span>
          <span v-if="!follow">未关注</span>
        </div>
    </div>
    <div class="bottom">
      <span class="name">{{prop.u_nick_name}}</span>
      <span class="like">已获得{{prop.u_like}}赞</span>
    </div>
  </div>
</template> 
<script>
export default {
  name: "top",
  props: ["prop"],
  data() {
    return {
      follow: true
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
    }
  }
};
</script>
<style scoped lang="scss">
.box {
  height: 180px;
  width: 100%;
  position: relative;
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
      display: flex;
      flex-direction: column;
      .fans-text{
        margin-top: 10px;
      }
    }
    .img {
      background-size: cover;
      height: 70px;
      width: 70px;
      border: 2px solid #fff;
      border-radius: 100px;
    }
    .follow{
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
