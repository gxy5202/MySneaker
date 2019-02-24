<template>
  <div class="Search" >
    <!-- <form action="/">
      <Search class="search-input"
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        
      />
    </form> -->
    <div class="searchHistory">

    </div>
    <div class="rock"></div>
    <div class="search-content" >
       <Goods-Loading :tabIndex="-1" :dataShow="false"></Goods-Loading>
    </div>
  </div>
</template>

<script>

import GoodsLoading from '../components/GoodsLoading';
import Vue from 'vue';

import {
  Icon,
  Search,
  NavBar,
} from "vant";

export default {
  name: "SearchPage",
  //props:['headData'],
  data() {
    return {
      searchHistory:[],
      loadList:[],
      reload:false,
      
    };
  },
  computed: {
    uid(){
      this.$store.state.uid
    },
    
  },
  methods: {
    
    
    
  },
  
  created() {
    
  },
  updated() {
    
  },
  components: {
    Icon,
    NavBar,
    Search,
    GoodsLoading
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
.search-input {
  input{
    background: red;
  }
  
}
.rock {
  height: 40px;
}
</style>