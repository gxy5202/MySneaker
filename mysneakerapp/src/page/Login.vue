<template>
  <div class="wrapper">
    <div class="back">
        <Icon size="20px" name="cross" @click="back"></Icon>
    </div> 
    <div class="selectButton">
        <Button square type="primary" text="注册" @click="signUp"></Button>
        <Button plain type="primary" text="已有账号登录" @click="signIn"></Button>
    </div>
  </div>
</template>

<script>
import {  Icon , Button } from 'vant';
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
    back(){
        this.$router.back(-1);
        this.$store.commit('tabState',0);
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
    Icon,
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
@mixin absolute {
    position: absolute;
    margin: auto;
    left:0;
    right:0;
    bottom: 0;
    top:0;
}
.wrapper {
    @include flex-center();
    @include absolute();
    .back {
        position: absolute;
        top:30px;
        left:30px;

    }
    .selectButton {
        width: 100%;
        Button {
            width:60%;
            margin: 10px;
            &:nth-child(1){
                background: black;
                border:black 1px solid;
            }
            &:nth-child(2){
                border:black 1px solid;
                color:black;
            }
        }
    }
    
}
</style>