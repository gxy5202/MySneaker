<template>
  <div class="hello">
    <!-- 顶部导航栏 -->
    <Nav-bar title="鞋城" fixed>
     
    </Nav-bar>
    <!-- 顶部导航栏 -->
    <Tabs @click="toShopList" animated swipeable color="black">
      <Tab class='tab' v-for="(item,index) in tabs" :key="index" :title="item.title" >
         <div v-if="index==0">
             <div class="search-input">
               <Search placeholder="请输入搜索关键词" v-model="value" />
             </div>
             <Swipe :autoplay="3000" :height='200'>
              <Swipe-item v-for="(image, index) in banner" :key="index">
                <img v-lazy="image" />
              </Swipe-item>
            </Swipe>

            <!-- 显示列表 -->
            <List class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div v-for="(item,index) of loadList" :key="index">
                  
                </div>
            </List>
            <!-- 显示列表 -->

         </div>
         <div v-if="index==1">
            1sfdf
         </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import {  Tab, Tabs,NavBar, Uploader, Icon ,List ,Field ,Swipe, SwipeItem ,Lazyload,Search} from 'vant';
export default {
  name: 'Shop',
  data () {
    return {
      active:0,
      list: [],
      loading: false,
      finished: false,
      banner:[
        'http://img4.imgtn.bdimg.com/it/u=3766374770,2731064724&fm=26&gp=0.jpg',
        'http://img2.yonex.cn/image/2016/01/12/569479077d747.jpg',
        'http://img.zcool.cn/community/010b9d57ff7942a84a0e282b65e069.png@2o.png',
        'http://img.zcool.cn/community/01ddc3583fbc68a8012060c89be872.jpg@1280w_1l_2o_100sh.jpg'

      ],
      value:'',
      loadList:[]
    }
  },
  computed: {
    tabs(){
      return [
        {
          title:'推荐',
          index:0
        },
        {
          title:'推荐',
          index:1
        },
        {
          title:'推荐',
          index:2
        },
        {
          title:'推荐',
          index:3
        },
        {
          title:'推荐',
          index:4
        },
      ]
    }
  },
  methods: {
    onLoad(){
      axios.get("https://www.gooomi.cn/goods")
      .then(res => {
        console.log(res.data);
        let goods = res.data.list;
        goods.map((value,index,arr) => {
          value.g_size = value.g_size.split(" ");
          
        });
        
        if(this.loadList.length + 5 > postings.length){
          this.loadList = postings.slice(0,postings.length);
          
          if(this.loadList.length == postings.length){
            this.loading = false;
            this.finished = true;
          }else {

          }
        }else{
          this.loadList = postings.slice(0,this.loadList.length + 5)
          this.loading = false;
          
        }
        
        console.log(postings)
        //this.dataList = postings;
        
      });
    },
    toShopList(index,title){
      console.log(index)
      
    }
  },
  components:{
   
    NavBar,
    Uploader,
    Icon,
    List,
    Tab, 
    Tabs,
    Field,
    Swipe, 
    SwipeItem,
    Lazyload,
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.tab {
  &:hover {
    font-size: 30px;
    font-weight: bold;
  }
}
.search-input {
  width: 100%;
  background: red;
}

  
    


</style>