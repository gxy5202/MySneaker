<template>
  <div class="hello">
    <Tabbar v-model="active" active-color="#000">
      <TabbarItem icon="home-o" @click="toHome" >鞋圈</TabbarItem>
      <TabbarItem icon="search"  @click="toShop">购物</TabbarItem>
      <TabbarItem icon="friends-o"  @click="toMap">附近</TabbarItem>
      <TabbarItem icon="setting-o"  @click="toMy">我的</TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, icon } from 'vant';
export default {
  name: 'ComTab',
  data () {
    return {
      index:0
    }
  },
  computed:{
      loginState(){
          return this.$store.state.isLogin
      },
      tabState(){
          return this.$store.state.tabState
      },
      active:{
        get () {
          return this.$store.state.tabActive
        },
        set (index) {
          this.$store.commit('tabActive', index)
        }
          
      }
  },
  methods: {
    toHome(){
      this.$store.commit('tabActive',0);
      this.$router.push('/Home')
    },
    toShop(){
      this.$store.commit('tabActive',1);
      this.$router.push('/Shop')
    },
    toMap(){
      this.$store.commit('tabActive',2);
      this.$router.push('/Map')
    },
    toMy(){
      this.$store.commit('tabActive',3);
      if(this.loginState == false){
        this.$router.push('/Login');
        this.$store.commit('tabState',1)
      }else {
        this.$router.push('/My');
        this.$store.commit('tabState',0)
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


</style>
