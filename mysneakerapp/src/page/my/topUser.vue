<template>
  <div class="box">
    <div class="box1" :style="bg"></div>
    <div class="box2">
      <p class="time">加入MySneaker {{createDate}} 天</p>
      <div class="message">
        <div @click="setup" class="user-img" :style="bg"></div>
        <p class="name">{{prop.u_nick_name}}</p>
        <!-- <p class="jianjie">这个人很懒，什么也没留下</p> -->
      </div>
      <ul class="guanzhu">
        <li @click="follow()">
          <span>{{prop.u_follow}}</span>
          <span>关注</span>
        </li>
        <li @click="fans()">
          <span>{{prop.u_fans}}</span>
          <span>粉丝</span>
        </li>
        <li>
          <span>{{prop.u_like}}</span>
          <span>喜欢</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "topUser",
  props: ["prop"],
  methods: {
    setup() {
      this.$router.push({ path: "/Setup", query: this.prop });
    },
    follow() {
      this.$emit("fol");
    },
    fans() {
      this.$emit("fan");
    },
    like() {
      this.$emit("like1");
    }
  },
  computed: {
    createDate() {
      let oldTime = new Date(this.prop.u_create_time),
        newTime = new Date();
      let time = newTime - oldTime;
      time = time / 1000 / 60 / 60 / 24;
      let day = parseInt(time);
      return day;
    },
    bg() {
      return `background-image: url(${this.prop.u_img})`;
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
    .guanzhu {
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
