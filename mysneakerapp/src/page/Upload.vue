<template>
  <div class="wrapper">
    <!-- 顶部导航栏 -->
    <Nav-bar title="发布动态" fixed right-text="发布" @click-right="onClickRight">
      <Icon slot="left" name="arrow-left" size="20px" color="black" @click="back"/>
    </Nav-bar>
    <!-- 顶部导航栏 -->

    <div class="text-area">
        <textarea name="" id="" cols="30" rows="10" placeholder="在这里输入文字..." v-model="text"></textarea>
    </div>

    <!-- 图片上传 -->
    <div class="upload">
        <div class="up-review" v-for="(item,index) in upImgList" :key="index" >
            <div class="overflow">
                <img  :src="item" alt="">
            </div>
            <Icon class="clear" name="clear" @click="clear(index)"/>
        </div>
        <Uploader  class="uploader" :after-read="onRead" :disabled="isUp" accept="image/gif, image/jpeg" multiple @oversize="oversize">
            <Icon class="upIcon" name="photo" size="40px"/>
        </Uploader>
        
    </div>
    <div class="position">
        <div class="po-left" >
            <Icon name="location-o" size="25px" v-if="checked==true"/>
            <span>
                <span v-if="checked==true">{{position}}</span>
                <span v-if="checked==false">不发布定位</span>
                <Loading v-if="position == ''" color="black" size="20px"/>
            </span>
        </div>
        <van-switch class="po-right" v-model="checked" active-color="rgba(0,0,0,0.8)"/>
    </div>
    <el-amap class="amap-box" vid="'amap-vue'" :center="center" :plugin="plugin"></el-amap>
  </div>
</template>

<script>
import Vue from 'vue' ;
import VueAMap from 'vue-amap';
import { NavBar, Uploader, Icon , Button, Field, CellGroup ,Toast,Dialog,Loading,Switch } from 'vant';
Vue.use(VueAMap);
export default {
  name: 'Upload',
  data () {
    let self = this;
    return {
        center: [112,34],
            //lng: 0,
            //lat: 0,
            
            loaded: false,
            plugin: [{
              enableHighAccuracy: true,//是否使用高精度定位，默认:true
              timeout: 100,          //超过10秒后停止定位，默认：无穷大
              maximumAge: 0,           //定位结果缓存0毫秒，默认：0
              convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
              showButton: true,        //显示定位按钮，默认：true
              buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
              showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
              showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
              panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
              zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
              extensions:'all',
              pName: 'Geolocation',
              events: {
                init(o) {
                  // o 是高德地图定位插件实例
                  o.getCurrentPosition(function(status, result){
                    console.log(result.addressComponent.city);
                    if (result && result.position) {
                      // this.lng = result.position.lng;
                      // this.lat = result.position.lat;
                      //self.center = result.addressComponent.city;
                      self.position =result.addressComponent.city
                      console.log(self.center)
                      self.loaded = true;
                      //self.$nextTick();
                    }
                  });
                },
                
              }
            }],
      text:'',
      isUp:false,
      upImgList:[],
      Postings:{},
      download:"",
      position:'',
      checked:true
    }
  },
  computed:{
      loginState(){
          return this.$store.state.isLogin
      },

  },
  methods: {
    
    onLoad() {
      // 异步更新数据
     
    },
    back(){
        this.$router.back(-1);
        this.$store.commit('tabState',0);
    },
    onRead(file) {
        
        if(file.length > 1 ){
            file.map((value,index)=>{
                this.upImgList.push(value.content)
            })
        }else{
            this.upImgList.push(file.content)
        }
        console.log(this.upImgList);
        //将原图片显示为选择的图片
        //this.$refs.upimg.src = file.content;
        
    },
    oversize(){
        alert('oversize')
    },
    onClickRight(){
        this.Postings = {
            img:this.upImgList,
            text:this.text,
            city:this.position,
            uid:this.$store.state.uid
        }
        if(this.upImgList.length == 0){
            Dialog.alert({
                message: '请至少添加一张图片哦'
                }).then(() => {
                // on close
                });
        }else if(this.text.trim() == ''){
             Dialog.alert({
                message: '请输入文字内容'
                }).then(() => {
                // on close
                });
        }
        else{
            axios.post('https://www.gooomi.cn/upload',this.Postings)
            .then((res)=>{
                console.log(res);
                Toast.loading({
                    mask: false,
                    message: '正在发布...'
                });
                if(res.data){
                    Toast.clear();
                    this.$router.back(-1);
                    this.$store.commit('tabState',0);
                }
            })
            .catch(error=>{
                console.log(error.response)
            })
        }
        
    },
    clear(index){
        this.upImgList.splice(index,1)
    }
    
  },
  components:{
    NavBar,
    Uploader,
    Icon,
    Button,
    Field,
    CellGroup,
    Toast,
    Dialog,
    Loading,
    Switch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    @mixin flex-left {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .wrapper {
        overflow: hidden;
        box-sizing: border-box;
    }
    .text-area {
        margin: 50px auto 0 auto;
        width: 95%;
        textarea {
            border:none;
            width: 100%;
        }
    }
    .upload {
        @include flex-left();
        margin: 50px auto 0 auto;
        width: 95%;
        max-width:95%;
        padding-bottom: 5px;
        border-bottom: 1px solid rgba(0,0,0,0.06);
        
        .up-review {
            position: relative;
            
            text-align: center;
            margin: 5px;
            width: 60px;
            height: 60px;
            border: 1px solid rgba(0,0,0,0.5);
            
            .overflow {
                width: 100%;
                height:100%;
                overflow: hidden;
                img {
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
            }
            .clear {
                position: absolute;
                top:-10px;
                right:-10px;
                z-index: 999;
            }
        }
        .uploader {
            border: 1px solid rgba(0,0,0,0.2);
            margin:3px;
            width: 60px;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        
        
    };
    .position {
         
            width:100%;
            height: 50px;
            margin-top: 5px;
            padding:5px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .po-left {
                display: flex;
                align-items: center;
            }
            .po-right{
                margin-right: 5px;
            }
        }
    
</style>