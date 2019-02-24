<template>
  <div>
    <popup position="right" class="popup" v-model="prop">
      <!-- 标题 -->
      <nav-bar title="我的收藏" left-arrow @click-left="onClickLeft"/>
      <div class="item" v-for="(i,index) in item" :key="index">
        <img :src="i.g_cover" alt>
        <div>
          <span>{{i.g_name}}</span>
          <div>
            <span>￥{{i.g_newPrice}}</span>
            <img @click="del(index)" src="../../../static/img/delete.png" alt>
          </div>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import { Popup, Icon, NavBar } from "vant";
import item from "./good/item";
export default {
  name: "shoucang",
  props: ["prop"],
  data() {
    return {
      item: []
    };
  },
  components: {
    Popup,
    Icon,
    NavBar,
    item
  },
  methods: {
    onClickLeft() {
      this.$emit("shoucang");
    },
    del(index) {
      axios
        .post("https://www.gooomi.cn/collection", {
          uid: this.$store.state.uid,
          gid: this.item[index].g_id
        })
        .then(res => {
          axios
            .post("https://www.gooomi.cn/collection_info", {
              uid: this.$store.state.uid
            })
            .then(res => {
              this.item = res.data;
            });
        });
    }
  },
  created() {
    axios
      .post("https://www.gooomi.cn/collection_info", {
        uid: this.$store.state.uid
      })
      .then(res => {
        this.item = res.data;
        console.log(this.item);
      });
  }
};
</script>
<style lang="scss" scoped>
.popup {
  background-color: rgb(245, 245, 245);
  height: 100%;
  width: 100%;
}
.item {
  height: 100px;
  background-color: #fff;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  > img {
    height: 80px;
    width: 80px;
  }
  > div {
    height: 100%;
    width: calc(100% - 120px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    > div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      img {
        height: 30px;
        width: 30px;
      }
    }
  }
}
</style>


