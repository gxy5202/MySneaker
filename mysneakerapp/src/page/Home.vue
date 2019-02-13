<template>
  <div class="wrapper">
    <!-- 顶部导航栏 -->
    <Nav-bar title="标题" fixed>
      <Uploader slot="right">
        <Icon name="photograph" />
      </Uploader>
    </Nav-bar>
    <!-- 顶部导航栏 -->
    
    <!-- 显示列表 -->
    <List  v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      
         <div class="dynamic" v-for="(item,index) of imgList" :key="index">
           <div class="user-head">
              <img class="user-img" :src='item.user_img'>
              <div class="user-info">
                <div class="user-name">{{item.user_name}}</div>
                <div class="time">{{item.time}}</div>
              </div>
           </div>
           <div class="content-img">
             <img :src="item.content[0]" alt="">
           </div>
           <div class="content-text">
             <div>
               123
             </div>
           </div>
           <div class="bottom-action">
             <div class="bottom-action-left">
               <Icon size="25px" name="share"></Icon>
               <Icon size="25px" name="chat-o"></Icon>
               <span>12</span>
             </div>
             <div class="bottom-action-right">
               <Icon size="25px" :name="item.likeState.style" @click="like(item)"></Icon>
               <span>12</span>
             </div>
           </div>
         </div>
      
    </List>
    <!-- 显示列表 -->
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon ,List, Lazyload } from 'vant';
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0,
      list: [],
      loading: false,
      finished: false,
      likeStyle:['like-o','like'],
      imgList:[
        {
          user_name:'123',
          user_img:'http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg',
          time:'1天',
          content:['http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg'],
          text:'123',
          likeState:{
            state:false,
            style:'like-o'
          }

        },
        {
          user_name:'123',
          user_img:'http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg',
          time:'1天',
          content:['http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg'],
          text:'123',
          likeState:{
            state:false,
            style:'like-o'
          }
        },
        {
          user_name:'123',
          user_img:'http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg',
          time:'1天',
          content:['http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg'],
          text:'123',
          likeState:{
            state:false,
            style:'like-o'
          }
        },
        {
          user_name:'123',
          user_img:'http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg',
          time:'1天',
          content:['http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg'],
          text:'123',
          likeState:{
            state:false,
            style:'like-o'
          }
        },
        {
          user_name:'123',
          user_img:'http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg',
          time:'1天',
          content:['http://www.scncgz.net/include/ueditor/php/upload/20180709/15311279996581.jpg'],
          text:'123',
          likeState:{
            state:false,
            style:'like-o'
          },
        }
      ]
    }
  },
  methods: {
    
    onLoad() {
      // 异步更新数据
      
    },
    like(item){
      
      if(item.likeState.state == true) {
          item.likeState = {
            state:false,
            style:'like-o'
          }
      }else {
        item.likeState = {
            state:true,
            style:'like'
          }
      }
      
    }
  },
  components:{
    Tabbar,
    TabbarItem,
    NavBar,
    Uploader,
    Icon,
    List
  },
  created() {
    axios.get('https://www.gooomi.cn/sneaker_goods')
      .then((res)=>{
        console.log(res)
      })
  },
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
  margin-top: 50px;
  .dynamic {
    margin: 10px auto;
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
  .user-name {
    font-weight: bold;
  }
}
  .content-text {
    @include flex-al-center();
    padding:5px;
  }
  .bottom-action {
    @include flex-between();
    padding:5px;
    
    .bottom-action-left {
      
    }
    .bottom-action-left,.bottom-action-right {
      @include flex-between();
    }
    
  }
  img {
    width:100%;
  }
}


</style>