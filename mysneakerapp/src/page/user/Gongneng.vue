<template>
  <div>
    <ul>
      <li>
        <img src="../../../static/img/qiandao.png" alt>
        <span>每日签到</span>
      </li>
      <li>
        <img src="../../../static/img/zhaoxiangji.png" alt>
        <span>每日随手拍</span>
      </li>
      <li>
        <img src="../../../static/img/zaoshang.png" alt>
        <span>早起打卡</span>
      </li>
      <li>
        <img src="../../../static/img/jia.png" alt>
        <span>全部打卡</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
div {
    border-top:10px solid rgb(238, 236, 236);
  ul {
    display: flex;
    justify-content:space-around;
    padding: 20px 0;
    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 80px;
      width: 25%;
      font-size: 14px;
      border: 1px solid rgb(226, 224, 224);
      img{
          width: 40%;
      }
    }
  }
}
</style>

