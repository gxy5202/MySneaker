<template>
  <div class="Search" >
    <div class="search-input">
        <Search placeholder="请输入搜索关键词" v-model="searchValue" >
            <!-- <div slot="action" @click="onSearch">搜索</div> -->
        </Search>
    </div>
  </div>
</template>

<script>


import Vue from 'vue';



import {
  Icon,
  
  Search
} from "vant";

export default {
  name: "SearchPage",
  //props:['headData'],
  data() {
    return {
      searchValue:''
    };
  },
  computed: {
    uid(){
      this.$store.state.uid
    },
    
  },
  methods: {
    onLoad() {
      // 异步更新数据
    },
    
    onSearch(){
    
    }
    
  },
  
  created() {
    
  },
  updated() {
    
  },
  components: {
    Icon,
    
    Search
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
@mixin flex-al-center {
  display: flex;
  align-items: center;
}
@mixin flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

  
</style>