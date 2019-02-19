<template>
  <div class="hello">
    <div class="search-input">
        <Search placeholder="请输入搜索关键词"  @focus="toSearch"/>
    </div>
    <Tabs @click="toShopList" animated swipeable sticky color="black">
      <Tab class='tab' v-for="(item,index) in tabs" :key="index" :title="item.title" >
         
         <div class="content" v-if="index==0">
             
             <Swipe :autoplay="3000" :height='200'>
              <Swipe-item v-for="(image, index) in banner" :key="index">
                <img v-lazy="image" />
              </Swipe-item>
            </Swipe>

            <!-- 显示列表 -->
            <Goods-Loading v-if="index==0" :tabIndex="0"></Goods-Loading>
            <!-- 显示列表 -->

         </div>
         <div class="content" v-if="index==1">
            <Goods-Loading v-if="index==1" :tabIndex="1"></Goods-Loading>
         </div>
         <div class="content" v-if="index==2">
          
            <Goods-Loading v-if="index==2" :tabIndex="2"></Goods-Loading>
         </div>
         <div class="content" v-if="index==3">
           
            <Goods-Loading v-if="index==3" :tabIndex="3"></Goods-Loading>
         </div>
         <div class="content" v-if="index==4">
           
            <Goods-Loading v-if="index==4" :tabIndex="4"></Goods-Loading>
         </div>
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import GoodsLoading from '../components/GoodsLoading';
import {  Tab, Tabs,NavBar, Uploader, Icon ,List ,Field ,Swipe, SwipeItem ,Lazyload,Search,Row, Col} from 'vant';
export default {
  name: 'Shop',
  data () {
    return {
      active:0,
      list: [],
      loading: false,
      finished: false,
      tabIndex:'',
      banner:[
        'http://img4.imgtn.bdimg.com/it/u=3766374770,2731064724&fm=26&gp=0.jpg',
        'http://img2.yonex.cn/image/2016/01/12/569479077d747.jpg',
        'http://img.zcool.cn/community/010b9d57ff7942a84a0e282b65e069.png@2o.png',
        'http://img.zcool.cn/community/01ddc3583fbc68a8012060c89be872.jpg@1280w_1l_2o_100sh.jpg'

      ],
      value:'',
      loadList:[],
      dataList:[],
      goods:[]
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
          title:'新品',
          index:1
        },
        {
          title:'球鞋',
          index:2
        },
        {
          title:'女子',
          index:3
        },
        {
          title:'童鞋',
          index:4
        },
      ]
    }
  },
  methods: {
    
      
    
    toShopList(index,title){
      this.tabIndex =index;
      
    },
    toSearch(){
      console.log(1)
      this.$router.push('/Search')
    }
  },
  created() {
    
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
    Search,
    Row,
    [Col.name]:Col,
    GoodsLoading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.content {
  margin-top:40px;
}
.tab {
  &:hover {
    font-size: 30px;
    font-weight: bold;
  }
}
.search-input {
  width: 100%;
  position: fixed;
  top:40px;
  border: none;
  z-index: 999;
}
      
</style>