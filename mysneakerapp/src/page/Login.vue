<template>
  <div class="wrapper">
    <div class="selectButton">
        <Button square type="primary" text="注册" @click="signUp"></Button>
        <Button plain type="primary" text="已有账号登录" @click="signIn"></Button>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon , List, Button } from 'vant';
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0,
      list: [],
      loading: false,
      finished: false
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
    login(){
        this.$store.commit('loginState');
        console.log(1)
    },
    signUp(){
        this.$router.push('/signUp')
    },
    signIn(){
        this.$router.push('/signIn')
    }
  },
  components:{
    Tabbar,
    TabbarItem,
    NavBar,
    Uploader,
    Icon,
    List,
    Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
html,body {
    height: 100%;
    @include flex-center();
}
.wrapper {
    @include flex-center();
    margin-top: 70%;
    .selectButton {
        width: 100%;
        
        Button {
            width:60%;
            margin: 10px;
        }
    }
    
}
</style>