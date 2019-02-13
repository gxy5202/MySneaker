<template>
  <div class="wrapper">
    <div class="text-area">
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    
  </div>
</template>

<script>
import { NavBar, Uploader, Icon , Button, Field, CellGroup ,Toast } from 'vant';
export default {
  name: 'Upload',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0,
      list: [],
      loading: false,
      finished: false,
      
      
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
    
    
  },
  components:{
    NavBar,
    Uploader,
    Icon,
    Button,
    Field,
    CellGroup,
    Toast
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>

</style>