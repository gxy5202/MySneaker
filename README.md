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
`<template>
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
</script>`
