<template>
  <div class="wrapper">
    <div>
      <Cell-group>
        <Field type="tel" v-model="username" placeholder="请输入手机号码" label="+86"/>
        <Field center type="text" v-model="password" label="密码" placeholder="请输入密码"/>
      </Cell-group>
      <div class="sign-btn">
        <Button type="primary" @click="signUp()">注册</Button>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Button, Field, CellGroup, Popup } from "vant";
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
    login() {
      this.$store.commit("loginState");
      console.log(1);
    },
    signUp(){
        axios.post('https://www.gooomi.cn/signUp',this.user)
        .then((res)=>{
            
            console.log(res);
            if(res.data.status == 0){
                this.$toast({
                    message: "登陆失败，用户名或密码错误",
                })
            }else{
                this.$store.commit('tabState',0);
                this.$router.push('/My');
                sessionStorage.setItem('aid',JSON.stringify(res.data.results[0].aid));
                this.$store.commit('loginState',true);
            }
            
            
        })
      
    }
  },
  components: {
    Icon,
    Button,
    Field,
    CellGroup,
    Popup
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
  Cell-group {
  }
  .sign-btn {
    width: 100%;
    margin-top: 10px;
    button {
      width: 90%;
    }
  }
}
</style>