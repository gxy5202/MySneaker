<template>
  <div class="wrapper">
    <!-- 顶部导航栏 -->
    <Nav-bar title="" fixed >
      <Icon slot="left" name="arrow-left" size="20px" color="black" @click="back"/>
      
    </Nav-bar>
    <!-- 顶部导航栏 -->
    
    <!-- 动态详情 -->
    <div class="dynamic">
            <User-Head class="user-head" :headData="posting"></User-Head>
            
            <div  justify="space-between" :class="posting.p_imgList.length == 2?'two-img':'content-img'">
                <img v-lazy="imgUrl" :class="posting.p_imgList.length == 1 ? 'one':posting.p_imgList.length == 2 ? 'two': posting.p_imgList.length == 3 ? 'three':'four'" v-for="(imgUrl,ind) of posting.p_imgList" :key="ind" :src="imgUrl" @click.stop="preview(posting.p_imgList,ind)">
            </div>
            
            <div class="content-text">
                <div>{{posting.p_text}}</div>
            </div>
            <div class="bottom-action">
              <div class="bottom-action-left">
                <div class="left-icon" v-if="posting.p_city != null">
                  <Icon size="20px" name="location-o"></Icon>
                  <span>{{posting.p_city}}</span>
                </div>
                
                
              </div>
              <Like class="bottom-action-right" :likeData="posting"></Like>
            </div>
        </div>
        <p class="title">全部评论({{posting.p_comment}})</p>
        <div class="comment-list">
            
            
              <div class="comment-view" v-for='(item,index) of commentList' :key="index" >
                <div class="head-img" @click="toUser(item.uid)">
                  <img class="user-img" v-lazy="item.u_img" :src="item.u_img">
                      <div class="user-info">
                        <div class="user-name">{{item.u_nick_name}}</div>
                        <div class="content">
                          {{item.c_text}}
                        </div>
                      </div>
                </div>
                <div class="time">{{ item.c_date | dateForm }}</div>
                
              
            </div>
        </div> 

        <!-- 评论框 -->
        <div class="comment-input">
            <input type="text" placeholder="添加评论..." :class="{'commentHeight':isShow}" v-model="comment_text" @focus="moreHeight" @blur="lowHeight"/>
            <Button @click="commentConfirm">发送</Button>
        </div>
    </div>
</template>

<script>
import Like from '../components/Like';
import UserHead from '../components/UserHead';
import moment from "moment";
import Vue from 'vue';
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component';

moment.locale("zh-cn");
import {
  NavBar,
  Uploader,
  Icon,
  Button,
  List,
  Lazyload,
  ImagePreview,
  Row,
  Col,
  Popup,
  Cell, 
  CellGroup,
  Toast
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
      isShow:false,
      posting:JSON.parse(this.$route.params.id),
      comment_text:"",
      commentList:[]
    }
  },
  computed:{
      loginState(){
          return this.$store.state.isLogin
      },
      // posting(){
      //     return JSON.parse(this.$route.params.id)
      // }
      
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
    },
    moreHeight(){
      let uid = this.$store.state.uid;
      if(uid){
        this.isShow = true;
      }else{
        this.$router.push('/Login')
      }
      
    },
    lowHeight(){
      this.isShow = false;
    },
    toUser(uid){
      if(uid == this.$store.state.uid){
        this.$router.push('/My');
        this.$store.commit('tabState',0);
        this.$store.commit('tabActive',3);
      }else{

        this.$router.push({
          name: 'FollowUser',
          query: {
            uid: uid
          }
        })
        this.$store.commit('tabState',1);
        this.$store.commit('followUser',uid);
      }
    },
    commentConfirm(){
      let uid = this.$store.state.uid;
      let content = {
        uid:uid,
        pid:this.posting.pid,
        text:this.comment_text,
      }
      //判断用户是否登陆
      if(uid){
        if(this.comment_text == ''){
          alert('请输入内容')
        }else{
          //获取评论数据
          axios.post('https://www.gomi.site/comment',content)
          .then(res=>{
            if(res.data.state == 'success'){
              console.log(res.data)
              Toast('评论成功');
              this.commentList = res.data.list;
            }else{
              Toast('评论失败');
            }
            
          });
          this.comment_text = '';
          this.isShow = false;
          
        }
      }else{
        this.$router.push('/Login')
      }
      
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
    let pid = {
      pid:this.posting.pid
    }
    axios.post('https://www.gomi.site/comment_query',pid)
    .then(res=>{
      console.log(res.data);
      this.commentList = res.data
    })
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
    Cell, 
    CellGroup,
    Like,
    Toast,
    UserHead
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
  .head-img {
    @include flex-al-center;
    padding: 5px;
    height: 50px;
    .user-img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .user-info {
      display: flex;
      flex-wrap: wrap;
      margin-left: 5px;
      .user-name {
        width: 70%;
        font-size: 14px;
        color:rgba(0, 0, 0, 0.5);
        display: flex;
      }
      .content {
        
      }
      .time {
        font-size: 10px;
      }
    }
  }
  .two-img{
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 150px;
    .two {
      width: 49%;
      height: 100%;
      object-fit: cover;
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
      .left-icon {
        display: flex;
        align-items: center;
        margin-right: 5px;
        font-size: 10px;
      }
    }
    .bottom-action-left,
    .bottom-action-right {
      @include flex-between();
    }
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  .comment-input {
      position: fixed;
      display: flex;
      justify-content: space-around;
      background: white;
      bottom: 0;
      width: 100%;
      border-top: 1px solid rgba(0, 0, 0, 0.2);
      .commentHeight {
          height: 60px;
      }
      .commentHeight {
            height: 100px;
            border: none;
      }

      input {
          width: 80%;
          height: 40px;
          border: none;
      }
      Button {
          background: none;
          border: none;
          @include flex-al-center();
          font-weight: bold;
          color:black;
      }
  }
  .title {
          text-align: left;
          margin-left: 5px;
          font-size: 10px;
      }
  .comment-list {
      margin-bottom:60px;
      background: white;
      
      .comment-view {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        width: 95%;
        margin:auto;
        .time {
          font-size: 10px;
          color:rgba(0, 0, 0, 0.5);
        }
      }
  }
}
    
</style>