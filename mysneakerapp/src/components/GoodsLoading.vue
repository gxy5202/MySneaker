<template>
  <div class="goodsList">
  <form action="/">
      <Search v-if="tabIndex == -1" class="search-input"
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
            <!-- 显示列表 -->
            <List class="list" v-if="resultShow==true" :offset='30' v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="goods-list" v-for="(item,index) of loadList" :key="index" @click.stop="toItem(item)">
                      <div class="goods-item" >
                        <img v-lazy='item.g_cover' :src="item.g_cover" alt="" >
                        <p>{{item.g_name}}</p>
                        <div class='goods-price'>
                          <span>￥{{item.g_newPrice}}</span>
                          <span>{{item.g_collection}}人收藏</span>
                        </div>
                        
                      </div>
                </div>
            </List>
            <!-- 显示列表 -->

  </div>
</template>

<script>
import {   Icon ,List  ,Lazyload,Search} from 'vant';
export default {
  name: 'GoodsLoading',
  props:['tabIndex','dataShow'],
  data () {
    return {
      active:0,
      list: [],
      loading: false,
      finished: false,
      searchValue:'',
      loadList:[],
      dataList:[],
      goods:[],
      resultShow:this.dataShow
    }
  },
  computed: {
    
  },
  methods: {
    //按需加载
    loadingGet:function(loaddata,resdata,type,loadnum){
        resdata.map((value,index,arr) => {
                value.g_size = value.g_size.split(" ");
                value.g_message = value.g_message.split(",");
              });
        let selectData = resdata.filter(val=>val.g_type==type);
        
        if(loaddata.length + loadnum > selectData.length){
              
              loaddata = selectData.slice(0,selectData.length);
              this.loadList = loaddata;
              if(loaddata.length == selectData.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                loaddata = selectData.slice(0,loaddata.length + loadnum)
                this.loading = false;
                this.loadList = loaddata;
                
                //return loaddata
                
            }

    },
    loadingGetSearch:function(loaddata,resdata,loadnum){
        resdata.map((value,index,arr) => {
                value.g_size = value.g_size.split(" ");
                value.g_message = value.g_message.split(",");
              });
        let selectData = resdata
        
        if(loaddata.length + loadnum > selectData.length){
              
              loaddata = selectData.slice(0,selectData.length);
              this.loadList = loaddata;
              if(loaddata.length == selectData.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                loaddata = selectData.slice(0,loaddata.length + loadnum)
                this.loading = false;
                this.loadList = loaddata;
                
                //return loaddata
                
            }

    },
    onLoad(){
      
      if(this.tabIndex == -1 && this.show == true){
        let search = {
          value:this.searchValue
        };
        axios.post('https://www.gooomi.cn/goods_search',search)
        .then(res=>{
            let goods = res.data;
            console.log(goods);
            this.loadingGetSearch(this.loadList,goods,6)
        }) 
        
      }else if(this.tabIndex != -1){
        this.loading = true;
        //console.log(this.loading);
        axios.get("https://www.gooomi.cn/sneaker_goods")
        .then(res=>{
          
          let goods = res.data;
    
          if(this.tabIndex == 0){
            console.log(this.tabIndex)
            this.loadingGet(this.loadList,goods,'球鞋',6);
          }else if(this.tabIndex == 1){
            //this.$options.methods.loadingGet();
            //this.loadingGet(this.loadList,goods,6);
            this.loadingGet(this.loadList,goods,'新品',6);
          
          }else if(this.tabIndex == 2){
            this.loadingGet(this.loadList,goods,'球鞋',6);
          }else if(this.tabIndex == 3){
            this.loadingGet(this.loadList,goods,'女子',6);
          }else{
            this.loadingGet(this.loadList,goods,'童鞋',6);
          
          }
        })
      }
      
        
         
     
      
    },
    toShopList(index,title){
      this.tabIndex =index;
      
    },
    toItem(item){
        console.log(item)
        this.$router.push({
          name: 'goodItem',
          query: item
        })
    },
    onSearch(){
      this.$store.commit('searchVal',this.searchValue);
      let search = {
          value:this.searchValue
      };
      axios.post('https://www.gooomi.cn/goods_search',search)
      .then(res=>{
          this.goods = res.data;
          this.$store.commit('searchList',this.goods);
          console.log(this.goods);
          this.loadingGetSearch(this.loadList,this.goods,6)
      })
      this.resultShow =true; 
    },
    onCancel(){
      this.$store.commit('searchList','');
      this.$router.back(-1);
      this.$store.commit('tabState',0);
    }
  },
  created() {
    console.log(this.$store.state.searchList)
      if(this.$store.state.searchList.length > 0){
        this.resultShow =true;
        this.loadList = this.$store.state.searchList
      }
      
  },
  components:{

    Icon,
    List,
    Lazyload,
    Search
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.search-input {
      position: fixed;
      width: 100%;       
      top:0;     
                                                                                       
    }
.list{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .goods-list {
    border: 1px solid rgba(0,0,0,0.03);
    width:49%;
    margin-bottom: 3px;
    
    .goods-item {
      p{
        font-size: 10px;
        text-align: left;
      }
      span {
        font-weight: bold;
        text-align: left;
      }
      .goods-price{
         display: flex;
         justify-content: space-between;
         font-size: 10px;
         width: 95%;
      }
      img {
        width: 100%;
      }
    }
  }
}

</style>