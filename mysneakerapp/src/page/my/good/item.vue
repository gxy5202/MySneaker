<template>
  <div class="item">
    <div>
      <img :src="prop.o_cover" alt>
      <div>
        <span>{{prop.o_good_name}}</span>
        <div>
          <span>{{prop.o_size}}</span>
          <span>数量*{{prop.o_num}}</span>
          <span>{{prop.o_price}}</span>
        </div>
      </div>
    </div>
    <div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
import { Button } from "vant";
export default {
  name: "item",
  props: ["prop"],
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
</style>


