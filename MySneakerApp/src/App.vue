<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <i-button>123</i-button>
    <i-switch />
  </div>
</template>

<script>

import { Button,Switch } from 'iview';
export default {
  name: 'App',
  components:{
    Button,
    Switch
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
  margin-top: 60px;
}
</style>
