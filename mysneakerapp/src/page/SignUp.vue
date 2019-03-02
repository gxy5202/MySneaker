<template>
  <div class="wrapper">
    <div class="back">
        <Icon size="20px" name="cross" @click="back"></Icon>
    </div> 
    <div>
      <Cell-group>
        <Field type="tel" v-model="user.username" placeholder="请输入手机号码" label="+86"/>
        <Field center type="password" v-model="user.password" label="密码" placeholder="请输入密码"/>
      </Cell-group>
      <div class="sign-btn">
        <Button type="primary" @click="signUp()">注册</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Button, Field, CellGroup, Popup,Toast } from "vant";
export default {
  name: "Login",
  data() {
    return {
      show: true,
      user:{
        username:"",
        password:""
      }
    };
  },
  computed: {
    loginState() {
      return this.$store.state.isLogin;
    }
    //   signUp_show(){
    //       return this.$store.state.signUp_show
    //   }
  },
  methods: {
    onLoad() {
      // 异步更新数据
    },
    back(){
        this.$router.back(-1);
        //this.$store.commit('tabState',0);
    },
    login() {
      this.$store.commit("loginState");
      console.log(1);
    },
    signUp(){
        if(this.user.password.trim() == ''){
          Toast('密码不能为空')
        }else{
          axios.post('https://www.gomi.site/signUp',this.user)
          .then((res)=>{
              
              console.log(res.data);
              if(res.data.status == 'already'){
                  this.$toast({
                      message: "用户名已存在",
                  })
                
              }else{
                  this.$store.commit('tabState',0);
                  this.$router.push('/My');
                  sessionStorage.setItem('uid',JSON.stringify(res.data.results.insertId));
                  this.$store.state.uid = res.data.results.insertId;
                  this.$store.commit('loginState',true);
              }
              
              
          })
        }
        
      
    }
  },
  components: {
    Icon,
    Button,
    Field,
    CellGroup,
    Popup,
    Toast
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
html,
body {
  height: 100%;
  @include flex-center();
}
.wrapper {
  margin-top: 70%;
  .back {
        position: absolute;
        top:30px;
        left:30px;

    }
  Cell-group {
  }
  .sign-btn {
    width: 100%;
    margin-top: 10px;
    button {
      width: 90%;
      background: black;
      border: none;
    }
  }
}
</style>