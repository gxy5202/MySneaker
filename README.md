# MySneaker
打造年轻人的鞋文化社区
---
## 技术栈
- UI：[iView官网使用教程](http://v1.iviewui.com/docs/guide/install)
- 数据请求：Axios
- CSS：Sass
---

### iView使用实例
**在某个vue文件下**
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- 使用UI组件时可以加i也可不加 -->
    <i-button>123</i-button>
    <i-switch />
  </div>
</template>

<script>
//先引入相关插件，具体需要哪些上官网查看
import { Button,Switch } from 'iview';
export default {
  name: 'App',
  //然后注册局部组件
  components:{
    Button,
    Switch
  }
}
</script>
```
