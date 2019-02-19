<template>
  <div class="goodsList">

            <!-- 显示列表 -->
            <List class="list" :offset='30' v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="goods-list" v-for="(item,index) of loadList" :key="index" @click.stop="toItem(item)">
                      <div class="goods-item" >
                        <img v-lazy='item.g_cover' :src="item.g_cover" alt="" >
                        <p>{{item.g_name}}</p>
                        <span>￥{{item.g_newPrice}}</span>
                      </div>
                </div>
            </List>
            <!-- 显示列表 -->

  </div>
</template>

<script>
import {   Icon ,List  ,Lazyload} from 'vant';
export default {
  name: 'GoodsLoading',
  props:['tabIndex'],
  data () {
    return {
      active:0,
      list: [],
      loading: false,
      finished: false,
      value:'',
      loadList:[],
      dataList:[]
    }
  },
  computed: {
    
    
  },
  methods: {
    loadingGet:function(loaddata,resdata,type,loadnum){
        resdata.map((value,index,arr) => {
                value.g_size = value.g_size.split(" ");
                value.g_message = value.g_message.split(",");
              });
        let selectData = resdata;
        selectData = selectData.filter(value=>value.g_type == type);
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
                console.log(this.loadList)
                //return loaddata
                
            }

    },
    onLoad(){
      
      this.loading = true;
      console.log(this.loading);
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
    }
  },
  created() {
      
  },
  components:{

    Icon,
    List,
    Lazyload,
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

.list{
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .goods-list {
    border: 1px solid rgba(0,0,0,0.03);
    width:49%;
    .goods-item {
      p{
        font-size: 10px;
        text-align: left;
      }
      span {
        font-weight: bold;
        text-align: left;
      }
      img {
        width: 100%;
      }
    }
  }
}

</style>