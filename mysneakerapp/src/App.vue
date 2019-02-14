<template>
  <div id="app">
    <Com-Tab v-show="tabState"></Com-Tab>
    <router-view/>
    
  </div>
</template>

<script>
import  ComTab  from './components/ComTab';
export default {
  name: 'App',
  data() {
    return {
        
    }
  },
  computed: {
    tabState(){
          return this.$store.state.tabShow
      },
  },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })

  },
  components:{
    ComTab
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* margin-top: 60px; */
}

</style>
