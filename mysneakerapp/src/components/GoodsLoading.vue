<template>
  <div class="goodsList">

            <!-- 显示列表 -->
            <List class="list" v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="goods-list" v-for="(item,index) of loadList" :key="index">
                      <div class="goods-item" >
                        <img v-lazy='item.g_cover' :src="item.g_cover" alt="" >
                        <p>{{item.g_name}}</p>
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
  props:['tabIndex','goods'],
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
    loadingGet:function(loaddata,resdata,loadnum){
        
        if(loaddata.length + loadnum > resdata.length){
              loaddata = resdata.slice(0,resdata.length);
                
              if(loaddata.length == resdata.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                loaddata = resdata.slice(0,loaddata.length + loadnum)
                this.loading = false;
                console.log(this.loadList)
            }

    },
    onLoad(){
      console.log(this.tabIndex)
      this.loading = true;
      axios.get("https://www.gooomi.cn/sneaker_goods")
      .then(res=>{
        let goods = res.data;
        if(this.tabIndex == 0){
          goods.map((value,index,arr) => {
            value.g_size = value.g_size.split(" ");
            if(value.g_type == '推荐'){
               this.dataList.push(value);
            }
          });
          //this.$options.methods.loadingGet();
          //this.loadingGet(this.loadList,goods,6);
          if(this.loadList.length + 6 > this.dataList.length){
              this.loadList = this.dataList.slice(0,this.dataList.length);
                
              if(this.loadList.length == this.dataList.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                this.loadList = this.dataList.slice(0,this.loadList .length + 6)
                this.loading = false;
                
            }
          
        }else if(this.tabIndex == 1){
            goods.map((value,index,arr) => {
            value.g_size = value.g_size.split(" ");
            if(value.g_type == '新品'){
               this.dataList.push(value);
            }
          });
          //this.$options.methods.loadingGet();
          //this.loadingGet(this.loadList,goods,6);
          if(this.loadList.length + 6 > this.dataList.length){
              this.loadList = this.dataList.slice(0,this.dataList.length);
                
              if(this.loadList.length == this.dataList.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                this.loadList = this.dataList.slice(0,this.loadList .length + 6)
                this.loading = false;
                
            }
        }else if(this.tabIndex == 2){
            goods.map((value,index,arr) => {
            value.g_size = value.g_size.split(" ");
            if(value.g_type == '球鞋'){
               this.dataList.push(value);
            }
          });
          //this.$options.methods.loadingGet();
          //this.loadingGet(this.loadList,goods,6);
          if(this.loadList.length + 6 > this.dataList.length){
              this.loadList = this.dataList.slice(0,this.dataList.length);
                
              if(this.loadList.length == this.dataList.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                this.loadList = this.dataList.slice(0,this.loadList .length + 6)
                this.loading = false;
                
            }
        }else if(this.tabIndex == 3){
            goods.map((value,index,arr) => {
            value.g_size = value.g_size.split(" ");
            if(value.g_type == '女子'){
               this.dataList.push(value);
            }
          });
          //this.$options.methods.loadingGet();
          //this.loadingGet(this.loadList,goods,6);
          if(this.loadList.length + 6 > this.dataList.length){
              this.loadList = this.dataList.slice(0,this.dataList.length);
                
              if(this.loadList.length == this.dataList.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                this.loadList = this.dataList.slice(0,this.loadList .length + 6)
                this.loading = false;
                
            }
        }else{
            goods.map((value,index,arr) => {
            value.g_size = value.g_size.split(" ");
            if(value.g_type == '童鞋'){
               this.dataList.push(value);
            }
          });
          //this.$options.methods.loadingGet();
          //this.loadingGet(this.loadList,goods,6);
          if(this.loadList.length + 6 > this.dataList.length){
              this.loadList = this.dataList.slice(0,this.dataList.length);
                
              if(this.loadList.length == this.dataList.length){
                this.loading = false;
                this.finished = true;
              }else {

              }
            }else{
                this.loadList = this.dataList.slice(0,this.loadList .length + 6)
                this.loading = false;
                
            }
        }
      })
        
         
     
      
    },
    toShopList(index,title){
      this.tabIndex =index;
      
    }
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
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .goods-list {
    border: 1px solid rgba(0,0,0,0.03);
    width:49%;
    .goods-item {
      
      img {
        width: 100%;
      }
    }
  }
}

</style>