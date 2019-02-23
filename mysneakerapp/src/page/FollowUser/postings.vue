<template>
  <div class="box" @click="toPosting()">
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
  props: ["prop","user"],
  methods: {
    la() {
      console.log(x);
    },
    toPosting(){
      let uid_query = {
        uid:this.$store.state.uid
      };
      let userInfo = {};
      axios.post("https://www.gooomi.cn/postings",uid_query)
      .then(res => {
        console.log(res.data);
        let postings = res.data.list;
        let icon = res.data.icon;
        postings.map((value,index,arr) => {
          if(this.prop.pid == value.pid){
            if(icon.find(v=>v==value.pid)){
              userInfo.likeState = {
                    state: true,
                    style: "like"
                }
            }else{
                  userInfo.likeState = {
                    state: false,
                    style: "like-o"
                } 
              }
          }
          
        })
      })
      .then(res=>{
          
          this.user.postings.map(value=>{
            if(value.pid == this.prop.pid){
              value.p_imgList = value.p_imgList.split(',');
              userInfo = Object.assign(userInfo,value,this.user.message)
            }
          })
          console.log(userInfo);
          this.$router.push({
            name: 'Comment',
            params: {
              id: JSON.stringify(userInfo)
            }
          })
          this.$store.commit("tabState", 1);
      })
      
      //console.log(this.user.message)
      //console.log(this.user.postings)
      //this.user.postings =  Object.assign(this.user.message,this.user.postings);
      
      
      
      //console.log(this.prop)
      //console.log(this.user.postings)
      //let userInfo = Object.assign(this.user.message,this.user.postings);
      
      
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
