<template>
  <div class="box">
    <div class="text">
      <span class="content">{{prop.p_text}}</span>
      <span class="date">{{date}}</span>
    </div>
    <div class="img" :style="bg"></div>
  </div>
</template>
<script>
export default {
  name: "postings",
  props: ["prop"],
  methods: {
    la() {
      console.log(x);
    }
  },
  computed: {
    bg() {
      return `background-image: url(${this.prop.p_imgList.split(",")[0]})`;
    },
    date() {
      return this.prop.p_date.split("T")[0];
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  height: 220px;
  width: 95%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px auto;
  border: 1px solid rgb(247, 245, 245);
  .text {
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    span{
        margin-left: 20px;
    }
    .content{
        color: rgb(43, 43, 44);
        white-space: nowrap;
        overflow: hidden;
    }
    .date {
      font-size: 10px;
      color: rgb(187, 183, 183);
      margin-top: 10px;
    }
  }
  .img {
    height: 160px;
    width: 100%;
    background-size: cover;
  }
}
</style>
