<template>
  <div class="wrapper">
    <!-- 顶部导航栏 -->
    <Nav-bar title="标题" fixed>
      <Icon slot="right" name="photograph" size="20px" color="black" @click="toUpload"/>
    </Nav-bar>
    <!-- 顶部导航栏 -->
    <!-- 显示列表 -->
    <List v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="dynamic" v-for="(item,index) of dataList" :key="index">
        <div class="user-head">
          <img class="user-img" :src="item.u_img">
          <div class="user-info">
            <div class="user-name">{{item.u_name}}</div>
            <div class="time">{{ item.p_date | dateForm }}</div>
          </div>
        </div>
        <div class="content-img">
          <img v-for="(imgUrl,ind) of item.p_imgList" :key="ind" :src="imgUrl" @click="preview(item.p_imgList,ind)">
        </div>
        <div class="content-text">
          <div>{{item.p_text}}</div>
        </div>
        <div class="bottom-action">
          <div class="bottom-action-left">
            <Icon size="25px" name="chat-o"></Icon>
            <span>{{item.p_comment}}</span>
          </div>
          <div class="bottom-action-right">
            <Icon size="25px" :name="item.likeState.style" @click="like(item)"></Icon>
            <span>{{item.p_like}}</span>
          </div>
        </div>
      </div>
    </List>
    <!-- 显示列表 -->
  </div>
</template>

<script>
import moment from "moment";
moment.locale("zh-cn");
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Uploader,
  Icon,
  List,
  Lazyload,
  ImagePreview
} from "vant";
export default {
  name: "Home",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      likeStyle: ["like-o", "like"],
      dataList: [],
      imgList: [],
      already_like:''
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
    like(item) {
      let posting_like = {
        uid:this.$store.state.uid,
        pid:item.pid
      };
      axios.post("https://www.gooomi.cn/postings_like",posting_like)
      .then(res=>{
          if(res.data == 'already_like'){
            item.likeState = {
              state: false,
              style: "like-o"
            };
            item.p_like -= 1;
          }else if(res.data == 'like_success'){
            item.likeState = {
              state: true,
              style: "like"
            };
            item.p_like += 1;
        }
        
      })
      // if (item.likeState.state == true) {
      //   item.likeState = {
      //     state: false,
      //     style: "like-o"
      //   };
      //   item.p_like -= 1;
      // } else {
      //   item.likeState = {
      //     state: true,
      //     style: "like"
      //   };
      //   item.p_like += 1;
      // }
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
    List
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
  margin-top: 45px;
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
    background: red;
    overflow: hidden;
    width: 100%;
    height: 300px;
    img {
      width: 50%;
      height: 50%;
      margin: 3px;
      object-fit: cover;
      display: inline-block;
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