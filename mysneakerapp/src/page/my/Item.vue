<template>
  <div>
    <cell-group>
      <cell v-for="i in item" :key="i.id" :title='i' is-link/>
    </cell-group>
  </div>
</template>
<script>
import { Cell, CellGroup,Icon } from "vant";
export default {
  name: "my-user",
  data() {
    return {
      item: ["我的帖子", "我赞过的", "我的关注"]
    };
  },
  components: {
    Cell,
    CellGroup,
    Icon
  }
};
</script>
<style scoped lang="scss">
</style>

