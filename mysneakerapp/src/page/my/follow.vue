<template>
  <div>
    <popup position="right" class="popup" v-model="prop">
      <!-- 标题 -->
      <nav-bar title="关注" left-arrow @click-left="onClickLeft"/>
      <!-- 关注列表 -->
      <people v-for='i in item' :key='i.index' :prop='i'></people>
    </popup>
  </div>
</template>
<script>
import { Popup, Icon, NavBar } from "vant";
import people from "./follow/people";
export default {
  name: "follow",
  props: ["prop"],
  data () {
    return {
      item:[
        // {
        //   img:'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=8816325c4036acaf4ded9eae1db0e675/fcfaaf51f3deb48fcfadd0bbfb1f3a292cf5788a.jpg',
        //   name:'二勾子',
        //   fol:'1'
        // },
        // {
        //   img:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=6561f325943df8dcb23087c3ac7819ee/9f510fb30f2442a7cc9d0077da43ad4bd0130254.jpg',
        //   name:'二狗子',
        //   fol:'1'
        // },
        // {
        //   img:'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=e31d7a55dba20cf4529df68d17602053/91ef76c6a7efce1b27893518a451f3deb58f6546.jpg',
        //   name:'小勾勾',
        //   fol:'0'
        // },
      ]
    }
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
    console.log(123)
    let followId = {
      fid:this.$store.state.uid
    }
    axios.post("https://www.gooomi.cn/follow_data", followId).then(res => {
          console.log(res.data)
          this.item = res.data.results
      });
  },
};
</script>
<style lang="scss" scoped>
.popup {
  height: 100%;
  width: 100%;
}
</style>


