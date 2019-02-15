<template>
  <div class="box">
    <div class="box1"></div>
    <div class="box2">
      <p class="time">加入毒5天</p>
      <div class="message">
        <div @click="setup" class="user-img"></div>
        <p class="name">天价腰花</p>
        <p class="jianjie">这个人很懒，什么也没留下</p>
      </div>
      <ul class="guanzhu">
        <li @click="follow()" @fanhui='follow()'>
          <span>0</span>
          <span>关注</span>
        </li>
        <li>
          <span>0</span>
          <span>粉丝</span>
        </li>
        <li>
          <span>0</span>
          <span>喜欢</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name:'topUser',
  methods:{
    setup(){
      this.$router.push('./Setup')
    },
    follow(){
      this.$emit('fol')
    }
  }
};
</script>
<style scoped lang="scss">
.box {
  height: 200px;
  width: 100%;
  position: relative;
  p {
    margin: 0;
  }
  .box1 {
    height: 100%;
    width: 100%;
    background-image: url(https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=ee9bedd9b8de9c82b268f1dd0de8eb6f/3ac79f3df8dcd100c662f1c1798b4710b8122f57.jpg);
    background-size: cover;
    filter: blur(10px);
  }
  .box2 {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(229, 226, 226);
    .time {
      display: flex;
      justify-content: flex-end;
      font-size: 12px;
      padding: 10px 20px 0 0;
      height: 26px;
    }
    .message {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 112px;
    }
    .user-img {
      background-image: url(https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=ee9bedd9b8de9c82b268f1dd0de8eb6f/3ac79f3df8dcd100c662f1c1798b4710b8122f57.jpg);
      background-size: cover;
      height: 60px;
      width: 60px;
      border-radius: 100px;
    }
    .name {
      font-size: 18px;
      margin: 6px 0;
    }
    .jianjie {
      font-size: 12px;
    }
    .guanzhu{
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
            display: flex;
            flex-direction: column;
        }
    }
  }
}
</style>
