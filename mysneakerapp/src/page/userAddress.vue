<template>
  <div>
    <nav-bar title="地址设置" left-text="返回" left-arrow @click-left="onClickLeft"/>
    <address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
    />
  </div>
</template>
<script>
import { AddressEdit, NavBar } from "vant";
export default {
  name: "userAddress",
  components: {
    AddressEdit,
    NavBar
  },
  data() {
    return {
      areaList: [],
      searchResult: []
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
