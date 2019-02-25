<template>
  <div id="app">
    <Com-Tab v-show="tabState"></Com-Tab>
    <transition  :name="transitionName">   
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import  ComTab  from './components/ComTab';
export default {
  name: 'App',
  data() {
    return {
        transitionName:''
    }
  },
  computed: {
    tabState(){
          return this.$store.state.tabShow
      },
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
	    //设置动画名称
        this.transitionName = 'slide-left';
      }else if(to.meta.index < from.meta.index){
        this.transitionName = 'slide-right';
      }else{
         this.transitionName = ''
      }
    }
  },

  created() {
    
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
        if( !this.$store.state.uid){
            this.$router.push('/Login')
        }
    } 
 
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
    
    axios.get("https://restapi.amap.com/v3/ip?key=e5cff84db8037d2b62a8f0f82a9b1ec7")
      .then(res=>{
          this.$store.commit('setCity',res.data.city)
          // console.log(res.data)
      })
  },
  components:{
    ComTab
  }
}
</script>

<style lang='scss'>
html,body,#app{
 
 height: 100%;
 
}
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* margin-top: 60px; */
}
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
        will-change: transform;
        transition: all .3s;
        position: absolute;
        width:100%;
        left:0;
    }
    .slide-right-enter {
        transform: translateX(-100%);
    }
    .slide-right-leave-active {
        transform: translateX(100%);
    }
    .slide-left-enter {
        transform: translateX(100%);
    }
    .slide-left-leave-active {
        transform: translateX(-100%);
    }

router-view {
  width:100%;
  height:100%;
 overflow-y: auto;
 overflow-x: hidden;
}

</style>
