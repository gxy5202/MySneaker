<template>
  <div>
    <popup position="right" class="popup" v-model="prop">
      <!-- 标题 -->
      <nav-bar title="关注" left-arrow @click-left="onClickLeft"/>
      <!-- 关注列表 -->
      <people v-for="i in item" :key="i.index" :prop="i"></people>
    </popup>
  </div>
</template>
<script>
import { Popup, Icon, NavBar } from "vant";
import people from "./follow/people";
export default {
  name: "follow",
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
    people
  },
  methods: {
    onClickLeft() {
      this.$emit("fol");
    }
  },
  created() {
    console.log(123);
    let followId = {
      fid: this.$store.state.uid
    };
    axios.post("https://www.gooomi.cn/follow_data", followId).then(res => {
      console.log(res.data);
      this.item = res.data.results;
    });
  }
};
</script>
<style lang="scss" scoped>
.popup {
  height: 100%;
  width: 100%;
}
</style>


