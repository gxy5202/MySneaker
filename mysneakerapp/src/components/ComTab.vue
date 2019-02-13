<template>
  <div class="hello">
    <Tabbar v-model="active">
      <TabbarItem icon="home-o" @click="toHome" >鞋圈</TabbarItem>
      <TabbarItem icon="search" dot @click="toShop">购物</TabbarItem>
      <TabbarItem icon="friends-o" info="5" @click="toMap">附近</TabbarItem>
      <TabbarItem icon="setting-o" info="20" @click="toMy">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, icon } from 'vant';
export default {
  name: 'ComTab',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active:0
    }
  },
  computed:{
      loginState(){
          return this.$store.state.isLogin
      },
      tabState(){
          return this.$store.state.tabState
      }
  },
  methods: {
    toHome(){
      this.$router.push('/Home')
    },
    toShop(){
      this.$router.push('/Shop')
    },
    toMap(){
      this.$router.push('/Map')
    },
    toMy(){
      if(this.loginState == false){
        this.$router.push('/Login');
        this.$store.commit('tabState')
      }else {
        this.$router.push('/My')
      };
      

      
    },
  },
  components:{
    Tabbar, 
    TabbarItem,
    icon
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
