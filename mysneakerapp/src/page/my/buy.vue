<template>
  <div>
    <Popup position="right" class="popup" v-model="prop">
      <!-- 标题 -->
      <nav-bar title="我的购买" left-arrow @click-left="onClickLeft"/>
      <!-- 关注列表 -->
      <div class="item" v-for="i in item" :key="i.index">
        <item :prop="i" @del="del()" @get="get"></item>
      </div>
    </Popup>
  </div>
</template>
<script>
import { Popup, Icon, NavBar, Toast } from "vant";
import item from "./good/item";
export default {
  name: "buy",
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
    item,
    Toast
  },
  methods: {
    onClickLeft() {
      this.$emit("buy");
    },
    del() {
      axios
        .post("https://www.gomi.site/order_query", {
          uid: this.$store.state.uid
        })
        .then(res => {
          this.item = res.data;
          Toast("删除成功");
        });
    },
    get(oid) {
      console.log(oid);
      axios
        .post("https://www.gomi.site/order_get", {
          oid: oid
        })
        .then(res => {
          axios
            .post("https://www.gomi.site/order_query", {
              uid: this.$store.state.uid
            })
            .then(res => {
              this.item = res.data;
              Toast("已确认收货");
            });
        });
    }
  },
  created() {
    axios
      .post("https://www.gomi.site/order_query", { uid: this.$store.state.uid })
      .then(res => {
        this.item = res.data;
        // console.log(this.item);
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
</style>


