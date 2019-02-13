<template>
  <div id="app">
    <Com-Tab ></Com-Tab>
    <router-view></router-view>
  </div>
</template>

<script>
import  ComTab  from './components/ComTab';
export default {
  name: 'App',
  components:{
    ComTab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
