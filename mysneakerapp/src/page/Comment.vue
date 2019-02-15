<template>
  <div class="wrapper">
    <!-- 顶部导航栏 -->
    <Nav-bar title="" fixed >
      <Icon slot="left" name="arrow-left" size="20px" color="black" @click="back"/>
      
    </Nav-bar>
    <!-- 顶部导航栏 -->
    
    <!-- 动态详情 -->
    <div class="dynamic">
        <div class="user-head" slot="left">
          <img class="user-img" v-lazy="posting.u_img" :src="posting.u_img">
          <div class="user-info">
            <div class="user-name">{{posting.u_name}}</div>
            <div class="time">{{ posting.p_date | dateForm }}</div>
          </div>
        </div>
        <lazy-component>
          <div class="content-img" type="flex" justify="space-between">
            <img v-lazy="imgUrl" :class="posting.p_imgList.length == 1 ? 'one':posting.p_imgList.length == 2 ? 'two': posting.p_imgList.length == 3 ? 'three':'four'" v-for="(imgUrl,ind) of posting.p_imgList" :key="ind" :src="imgUrl" @click.stop="preview(posting.p_imgList,ind)">
          </div>
        </lazy-component>
        <div class="content-text">
          <div>{{posting.p_text}}</div>
        </div>
        <div class="bottom-action">
          <div class="bottom-action-left">
            <Icon size="25px" name="chat-o"></Icon>
            <span>{{posting.p_comment}}</span>
          </div>
          <div class="bottom-action-right">
            <Icon size="25px" :name="posting.likeState.style" @click.stop="like(posting)"></Icon>
            <span>{{posting.p_like}}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import moment from "moment";
import Vue from 'vue';
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component';
import Comment from './Comment';
moment.locale("zh-cn");
import {
  NavBar,
  Uploader,
  Icon,
  List,
  Lazyload,
  ImagePreview,
  Row,
  Col,
  Popup
} from "vant";
Vue.use(Lazyload);
export default {
  name: 'Comment',
  data () {
    return {
      text:'',
      isUp:false,
      upImgList:[],
      Postings:{},
      download:"",
      
    }
  },
  computed:{
      loginState(){
          return this.$store.state.isLogin
      },
      posting(){
          return JSON.parse(this.$route.params.id)
      }

  },
  methods: {
    
    onLoad() {
      // 异步更新数据
     
    },
    back(){
        this.$router.back(-1);
        this.$store.commit('tabState',0);
    },
    oversize(){
        alert('oversize')
    },
    preview(value,index){
      ImagePreview({
        images: value,
        startPosition: index,
        onClose() {
          // do something
        }
      });
    }
    
  },
  filters: {
    dateForm(el) {
      //return moment(el).format('YYYY-MM-DD HH:mm:ss');
      return moment(el)
        .startOf("hour")
        .fromNow();
    }
  },
  created() {
    console.log(this.posting)
    
  },
  components:{
    NavBar,
    Uploader,
    Icon,
    List,
    [Lazyload.name]:Lazyload,
    Row,
    [Col.name]:Col,
    'lazy-component': VueLazyComponent,
    Popup,
    Comment
  }
}
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

.wrapper {
  padding-top: 35px;
  background: rgba(0, 0, 0, 0.01);
  .dynamic {
    margin: 10px auto;
    background: rgb(255, 255, 255);
  }
  .user-head {
    @include flex-al-center;
    padding: 5px;
    height: 50px;
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
  .content-img {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    height: 300px;
    .two {
      width: 49%;
      height: 100%;
      
    }
    .one {
      width: 100%;
      height: 100%;
    }

    .three {
      &:nth-child(1){
        width:100%;
        height: 50%;
        margin-bottom:3px;
      }
      &:nth-child(2){
        width:49%;
        height: 50%;
      }
      &:nth-child(3){
        width:49%;
        height: 50%;
      }
    }
      .four {
        &:nth-child(1){
          width:49%;
          height: 50%;
          margin-bottom:3px;
        }
        &:nth-child(2){
          width:49%;
          height: 50%;
          margin-bottom:3px;
        }
        &:nth-child(3){
          width:49%;
          height: 50%;
        }
        &:nth-child(4){
          width:49%;
          height: 50%;
        }
    }
    img {
      // width: 50%;
      // height: 50%;
      // margin: 3px;
      object-fit: cover;
      // display: inline-block;
    }
  }
  .content-text {
    @include flex-al-center();
    padding: 5px;
  }
  .bottom-action {
    @include flex-between();
    padding: 5px;

    .bottom-action-left {
    }
    .bottom-action-left,
    .bottom-action-right {
      @include flex-between();
    }
  }
  img {
    width: 100%;
  }
}
    
</style>