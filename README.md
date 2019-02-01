# mysneaker

> A Vue.js project

## 技术栈

- UI框架：[iView官网](https://www.iviewui.com/docs/guide/start)
- 数据请求：Axios
- css：Sass
- Vue + Vue cli + vuex + vue router + webpack
- 后端：Node.js + Express
- 数据库：MySQL

### iView使用实例
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    //使用UI组件
    <Button>123</Button>
  </div>
</template>

<script>
//引入组件
import { Button } from '@iview'
export default {
  name: 'App',
  //注册局部组件
  components:{
    Button
  }
}
</script>
```
