<template>
  <div class="wrapper">
    <!-- 顶部导航栏 -->
    <Nav-bar class="nav" title="发布动态" fixed >
      <Icon slot="left" name="arrow-left" size="20px" color="black" @click="back"/>
      <span slot="right"  @click="onClickRight">发布</span>
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
        <Uploader  class="uploader" :after-read="onRead" :before-read="beforeRead" :disabled="isUp" accept="image/gif, image/jpeg" multiple @oversize="oversize">
            <Icon class="upIcon" name="photo" size="40px"/>
        </Uploader>
        
    </div>
    <div class="position">
        <div class="po-left" >
            <Icon name="location-o" size="25px" v-if="checked==true"/>
            <span>
                <span v-if="checked==true">{{position}}</span>
                <span v-if="checked==false">不发布定位</span>
                <Loading v-if="position == '' && checked==true" color="black" size="20px"/>
            </span>
        </div>
        <van-switch class="po-right" v-model="checked" active-color="rgba(0,0,0,0.8)"/>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue' ;

import { NavBar, Uploader, Icon , Button, Field, CellGroup ,Toast,Dialog,Loading,Switch } from 'vant';

export default {
  name: 'Upload',
  data () {
    
    return {
       
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
    beforeRead(file){
        console.log(typeof file)
        if(typeof file.length == 'undefined'){
            if(this.upImgList.length == 3){
                this.isUp = true;
                Toast.loading({
                    mask: false,
                    message: '正在加载图片'
                });
                return true;
                
            }else if(this.upImgList.length == 4){
                Dialog.alert({
                message: '最多添加四张图片'
                }).then(() => {
                    return false
                });
            }else if(this.upImgList.length < 3){
                Toast.loading({
                    mask: false,
                    message: '正在加载图片'
                });
                return true
            }
        }
        else if(file.length < 5){
            
            
            if(this.upImgList.length + file.length > 4){
                Dialog.alert({
                message: '最多添加四张图片'
                }).then(() => {
                    return false
                });
            }else if(this.upImgList.length + file.length < 4){
                Toast.loading({
                    mask: false,
                    message: '正在加载图片'
                });
                return true
            }
            else if(this.upImgList.length + file.length == 4){
                Toast.loading({
                    mask: false,
                    message: '正在加载图片'
                });
                return true
                this.isUp = true
            }
        }
        else if(file.length > 4){
            Dialog.alert({
                message: '最多添加四张图片'
            }).then(() => {
                
            });
            return false
        }
        
        
        Toast.clear();
    },
    onRead(file) {
        
        if(file.length > 0 ){
                file.map((value,index)=>{
                    this.upImgList.push(value.content)
                })
            
        }else{
            this.upImgList.push(file.content);
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
            Toast.loading({
                    mask: false,
                    message: '正在发布...'
            });
            axios.post('https://www.gooomi.cn/upload',this.Postings)
            .then((res)=>{
                console.log(res);
                
                if(res.data){
                    Toast.clear();
                    Toast('发布成功');
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
        this.upImgList.splice(index,1);
        if(this.upImgList.length < 4){
            this.isUp = false;
        }
    }
    
  },
  created() {
      axios.get("https://restapi.amap.com/v3/ip?key=e5cff84db8037d2b62a8f0f82a9b1ec7")
      .then(res=>{
          this.position = res.data.city;
          console.log(res.data)
      })
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
    .nav {
        color:black;
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