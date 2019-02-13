<template>
  <div class="wrapper">
    <div class="signIn">
        <div class="user-name">
            <input type="text" placeholder="请输入用户名" v-model="user.username">
        </div>
        <div class="user-pwd">
            <input type="password" placeholder="请输入密码" v-model="user.password">
        </div>
        <div class="sign-btn">
            <Button type="primary" @click="signIn()">登录</Button>
        </div>
    </div>
    
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon , Button, Field, CellGroup ,Toast } from 'vant';
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0,
      list: [],
      loading: false,
      finished: false,
      user:{
        username:"",
        password:""
      }
      
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
    signIn(){
        axios.post('https://www.gooomi.cn/signIn',this.user)
        .then((res)=>{
            Toast.loading({
                duration: 0,
                mask: false,
                message: '登录中...'
            });
            
            console.log(res.data);
            this.$router.push('/My');
            this.$store.commit('loginState');
            Toast.clear()
        })
        // axios({
        //     method: 'post',
        //     url: 'https://www.gooomi.cn/signIn',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //         'Accept': 'text/json'
        //     },
        //     data: this.user
        //     }).then((res) => {
        //     console.log(res)
        // })
    }
  },
  components:{
    Tabbar,
    TabbarItem,
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
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

.wrapper {
    margin-top: 70%;
    @include flex-center;
    .signIn {
        width: 90%;
        text-align: center;
        div {
            width: 100%;
        }
        input {
            height: 40px;
            width: 100%;
            border:none;
            border-bottom: 1px solid rgba(0,0,0,0.3)
        }
        .sign-btn {
            width: 100%;
            margin-top: 10px;
            Button {
                width: 100%;
            }
        }
    }

    
}
</style>