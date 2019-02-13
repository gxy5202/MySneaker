<template>
  <div class="wrapper">
    <Popup v-model="show" position="right" overlay="true">
        <Cell-group>
            <Field
                type="tel"
                placeholder="请输入手机号码"
                label="+86"
            />
            <Field
                center
                type="text"
                label="密码"
                placeholder="请输入密码"
            />
            <Field
                center
                type="text"
                label="密码"
                placeholder="请输入密码"
            />
    </Cell-group>
    </Popup>
    
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar, Uploader, Icon , Button, Field, CellGroup,Popup } from 'vant';
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0,
      list: [],
      loading: false,
      finished: false,
      show:true
    }
  },
  computed:{
      loginState(){
          return this.$store.state.isLogin
      },
    //   signUp_show(){
    //       return this.$store.state.signUp_show
    //   }
  },
  methods: {
    
    onLoad() {
      // 异步更新数据
     
    },
    login(){
        this.$store.commit('loginState');
        console.log(1)
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
    Popup
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
    margin-top: 70%;
    Cell-group  {

    }

    
}
</style>