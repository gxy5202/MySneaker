<template>
  <div>
    <ul>
      <li>
        <img src="../../../static/img/tupian.png" alt>
        <span class="text">动态</span>
        <span class="num">0</span>
      </li>
      <li>
        <img src="../../../static/img/gouxuan.png" alt>
        <span class="text">打卡</span>
        <span class="num">0</span>
      </li>
      <li>
        <img src="../../../static/img/liaotian.png" alt>
        <span class="text">话题</span>
        <span class="num">0</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
div {
  ul {
      height:100px ;
      width: 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            width: 20px;
        }
        .text{
            margin: 5px 0;
            font-size: 14px;
        }
        .num{
            font-size: 10px;
        }
    }
  }
}
</style>

