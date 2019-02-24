<template>
  <div class="map">
    <!-- 顶部导航栏 -->
    
    <!-- 顶部导航栏 -->
    
    <!-- 显示列表 -->
    
    <List class="list" v-model="loading" :finished="finished" finished-text="没有更多了"  immediate-check @load="onLoad">
      <div class="dynamic" v-for="(item,index) of loadList" :key="index" >
           <img :src="item.p_imgList[0]" alt="">
         
      </div>
      
    </List>
    <!-- 显示列表 -->
    
  </div>
</template>

<script>

import Vue from 'vue' ;

import { Tabbar, TabbarItem, NavBar, Uploader, Icon ,List } from 'vant';


export default {
  name: 'MapList',
  props:['city'],
  data () {
    return {
      
      
      list: [],
      loading: false,
      finished: false,
      zoom:16,
      loadList:[],
      nearPostings:[]
    }
  },
  methods: {
    loadingGet:function(loaddata,resdata,icon,loadnum){
        resdata.map((value,index,arr) => {
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
        
        let selectData = resdata.filter(val=>val.p_city==this.city);
        
        if(loaddata.length + loadnum > selectData.length){
              this.loading = true;
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

    
    onLoad() {
      // 异步更新数据

      //this.loading = true;
      let uid_query = {
        uid:this.$store.state.uid
      };
      //this.loading = true;
      axios.post("https://www.gooomi.cn/postings",uid_query)
      .then(res => {
        console.log(res.data);
        let icon = res.data.icon;
        let postings = res.data.list;
        
        
        
        // postings.map((value,index,arr) => {
        //   if(this.city == value.p_city){
        //     value.p_imgList = value.p_imgList.split(",");
        //     if(icon.find(v=>v==value.pid)){
        //         value.likeState = {
        //             state: true,
        //             style: "like"
        //         }
        //     }else{
        //             value.likeState = {
        //             state: false,
        //             style: "like-o"
        //         } 
        //     }
        //     this.nearPostings.push(value)
        //     console.log(2)
        //   }
          
        // });
        //this.loadList = postings;
        this.loadingGet(this.loadList,postings,icon,4);
         
      })
      // .then(res=>{
      //   //console.log(this.nearPostings);
      //   this.loadingGetSearch(this.loadList,this.nearPostings,6)
      // })
    }
  },
  created() {
    
    if(this.prop.to_user_id == this.$store.state.uid){
        this.$store.commit('followUser',this.prop.from_user_id);
      }else if(this.prop.from_user_id == this.$store.state.uid){
        this.$store.commit('followUser',this.prop.to_user_id);
      }
      
  },
  mounted() {
    
  },
  updated() {
    
  },
  components:{
    
    NavBar,
    Uploader,
    Icon,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

.list {
  width: 95%;
  margin:auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .dynamic {
    width: 33%;
    height: 110px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit:cover;
    }
  }

}


</style>