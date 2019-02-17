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
            <img  :src="item" alt="">
        </div>
        <Uploader  class="uploader" :after-read="onRead" :disabled="isUp" accept="image/gif, image/jpeg" multiple @oversize="oversize">
            <img class="upIcon" src="../assets/imgloader.png" alt="upload" ref="upimg">
        </Uploader>
    </div>

    <img :src="download" alt="">
  </div>
</template>

<script>
import { NavBar, Uploader, Icon , Button, Field, CellGroup ,Toast,Dialog } from 'vant';
export default {
  name: 'Upload',
  data () {
    return {

      text:'',
      isUp:false,
      upImgList:[],
      Postings:{},
      download:""
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
            uid:this.$store.state.uid
        }
        if(this.upImgList.length == 0){
            Dialog.alert({
                message: '请至少添加一张图片哦'
                }).then(() => {
                // on close
                });
        }else{
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
        }
        
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
    Dialog
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
        .up-review {
            overflow: hidden;
            text-align: center;
            width: 60px;
            height: 60px;
            
            img {
                width:100%;
                height:100%;
                margin:3px;
                object-fit:cover;
            }
        }
        .uploader {
            margin:3px;
            .upIcon {
                
                width: 60px;
                height: 60px;
                
            }
        }
        
    }
    
</style>