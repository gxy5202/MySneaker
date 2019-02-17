<template>
  <div class="head" @click.stop="toUser(headData.uid)">
    <img class="user-img" v-lazy="headData.u_img" :src="headData.u_img">
          <div class="user-info">
            <div class="user-name">{{headData.u_nick_name}}</div>
            <div class="time">{{ headData.p_date | dateForm }}</div>
    </div>
  </div>
</template>

<script>

import moment from "moment";
import Vue from 'vue';
moment.locale("zh-cn");


import {
  Icon,
  Lazyload,
} from "vant";
Vue.use(Lazyload);
export default {
  name: "UserHead",
  props:['headData'],
  data() {
    return {
      
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
    toUser(item){
      console.log(item)
      this.$router.push({
          path: 'FollowUser',
          query: {
            uid: item
          }
        })
    }
    
    
  },
  filters: {
    dateForm(el) {
      //return moment(el).format('YYYY-MM-DD HH:mm:ss');
      return moment(el)
        .startOf("second")
        .fromNow();
    }
  },
  created() {
    
  },
  updated() {
    
  },
  components: {
    Icon,
    [Lazyload.name]:Lazyload,
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@mixin flex-al-center {
  display: flex;
  align-items: center;
}
@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head {
    @include flex-al-center;
    padding: 5px;
    height: 50px;
    
    background: red;
    .user-img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .user-info {
      display: flex;
      flex-wrap: wrap;
      margin-left: 5px;
      .user-name {
        width: 70%;
        font-weight: bold;
        display: flex;
      }
      .time {
        font-size: 10px;
      }
    }
  }
</style>