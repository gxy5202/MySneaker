<template>
  <div class="wrapper">
    <!-- 顶部导航栏 -->
    <Nav-bar title="标题" fixed>
      <Icon slot="right" name="photograph" size="20px" color="black" @click="toUpload"/>
    </Nav-bar>
    <!-- 顶部导航栏 -->

    <!-- 显示列表 -->
    <List v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      
      <div class="dynamic" v-for="(item,index) of dataList" :key="index" @click.stop="toComment(item)">
        <div class="user-head">
          <img class="user-img" v-lazy="item.u_img" :src="item.u_img">
          <div class="user-info">
            <div class="user-name">{{item.u_name}}</div>
            <div class="time">{{ item.p_date | dateForm }}</div>
          </div>
        </div>
        
          <div class="content-img" type="flex" justify="space-between">
            <img v-lazy="imgUrl" :class="item.p_imgList.length == 1 ? 'one':item.p_imgList.length == 2 ? 'two': item.p_imgList.length == 3 ? 'three':'four'" v-for="(imgUrl,ind) of item.p_imgList" :key="ind" :src="imgUrl" @click.stop="preview(item.p_imgList,ind)">
          </div>
        
        <div class="content-text">
          <div>{{item.p_text}}</div>
        </div>
        <div class="bottom-action">
          <div class="bottom-action-left">
            <Icon size="25px" name="chat-o"></Icon>
            <span>{{item.p_comment}}</span>
          </div>
          <Like class="bottom-action-right" :likeData="item"></Like>
        </div>
      </div>
    </List>
    <!-- 显示列表 -->
  </div>
</template>

<script>
import Like from '../components/Like';
import moment from "moment";
import Vue from 'vue';
import { component as VueLazyComponent } from '@xunlei/vue-lazy-component';
import Comment from './Comment';
moment.locale("zh-cn");
import {
  Tabbar,
  TabbarItem,
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
  name: "Home",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      dataList: [],
      imgList: [],
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
    toComment(item){
      //this.$router.push('/Comment');
      this.$router.push({
          name: 'Comment',
          params: {
            id: JSON.stringify(item)
          }
        })
      this.$store.commit("tabState", 1);
      this.show = true;
    },
   
    toUpload() {
      this.$router.push("/Upload");
      this.$store.commit("tabState", 1);
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
    let uid_query = {
      uid:this.$store.state.uid
    };
    
    axios.post("https://www.gooomi.cn/postings",uid_query)
    .then(res => {
      console.log(res.data);
      let postings = res.data.list;
      let icon = res.data.icon;
      // var iconArr = postings.filter(val=>{
      //   return icon.includes(val.pid) 
      // })
      postings.map((value,index,arr) => {
        value.p_imgList = value.p_imgList.split(",");
        if(icon.find(v=>v==value.pid)){
          value.likeState = {
                state: true,
                style: "like"
            }
        }else{
              value.likeState = {
                state: false,
                style: "like-o"
            } 
          }
      });
      console.log(postings)
      this.dataList = postings;

    });
  },
  updated() {
    
  },
  components: {
    Tabbar,
    TabbarItem,
    NavBar,
    Uploader,
    Icon,
    List,
    [Lazyload.name]:Lazyload,
    Row,
    [Col.name]:Col,
    'lazy-component': VueLazyComponent,
    Popup,
    Comment,
    Like
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