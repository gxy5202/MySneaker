<template>
  <div class="setup">
    <!-- 返回上一页 -->
    <Icon @click="fanhui()" class="icon1 fanhui" size="30px" name="arrow-left"></Icon>
    <!-- 顶部 -->
    <Nav-bar title="个人信息" fixed></Nav-bar>
    <!-- 顶部 -->
    <!-- 信息修改 -->
    <!-- 头像 -->
    <div class="img">
      <span class="text1">我的头像</span>
      <div @click="userImg()">
        <p :style="bg"></p>
        <icon class="icon" name="arrow"></icon>
      </div>
    </div>
    <!-- 头像修改 -->
    <popup class="upimg upbox" position="right" v-model="state.img.show">
      <Icon @click="userImg()" class="icon1" size="30px" name="arrow-left"></Icon>
      <div>
        <uploader>
          <icon size="60px" name="photograph"/>
        </uploader>
        <Button class="btn1" type="primary">确认修改</Button>
      </div>
    </popup>
    <!-- 昵称 -->
    <div class="text">
      <span class="text1">修改昵称</span>
      <div @click="usernickname()">
        <span class="text2">{{user.u_nick_name}}</span>
        <icon class="icon" name="arrow"></icon>
      </div>
    </div>
    <!-- 修改昵称 -->
    <popup class="upnickname upbox" position="right" v-model="state.nickname.show">
      <Icon @click="usernickname()" class="icon1" size="30px" name="arrow-left"></Icon>
      <div>
        <Cell-group>
          <field placeholder="请输入新昵称"/>
        </Cell-group>
        <Button class="btn1" type="primary">确认修改</Button>
      </div>
    </popup>
    <!-- 性别 -->
    <div class="text">
      <span class="text1">性别</span>
      <div @click="usergender()">
        <span class="text2">{{user.u_gender}}</span>
        <icon class="icon" name="arrow"></icon>
      </div>
    </div>
    <!-- 修改性别 -->
    <actionsheet v-model="state.gender.show" title="请选择性别">
      <radio-group v-model="message.gender">
        <radio name="男">男</radio>
        <radio name="女">女</radio>
      </radio-group>
      <Button type="default">确认修改</Button>
    </actionsheet>
    <!-- 生日 -->
    <div class="text">
      <span class="text1">生日</span>
      <div @click="userbirthday()">
        <span class="text2">{{user.u_birth}}</span>
        <icon class="icon" name="arrow"></icon>
      </div>
    </div>
    <!-- 修改生日 -->
    <actionsheet v-model="state.birthday.show">
      <datetime-picker
        v-model="state.birthday.currentDate"
        type="date"
        :show-toolbar="true"
        @confirm="birthday()"
        @cancel="userbirthday1()"
        :min-date="state.birthday.minDate"
        :max-date="state.birthday.maxDate"
      />
    </actionsheet>
    <!-- 密码 -->
    <div class="text">
      <span class="text1">修改密码</span>
      <div @click="userpassword()">
        <icon class="icon" name="arrow"></icon>
      </div>
    </div>
    <!-- 修改密码 -->
    <popup class="upimg upbox" position="right" v-model="state.password.show">
      <Icon @click="userpassword()" class="icon1" size="30px" name="arrow-left"></Icon>
      <cell-group>
        <field type="password" label="原密码" placeholder="请输入原密码"/>
        <field type="password" label="新密码" placeholder="请输入新密码"/>
        <field type="password" label="新密码" placeholder="请确认新密码"/>
        <Button class="btn1" type="primary">确认修改</Button>
      </cell-group>
    </popup>
    <!-- 信息修改 -->
    <!-- 退出登录 -->
    <Button class="btn" type="default">确认修改</Button>
  </div>
</template>
<script>
import {
  NavBar,
  Icon,
  Button,
  Actionsheet,
  Popup,
  Uploader,
  Field,
  CellGroup,
  Cell,
  RadioGroup,
  Radio,
  DatetimePicker
} from "vant";
export default {
  name: "Setup",
  created(){
    this.user=this.$route.query
    console.log(this.user)
  },
  data() {
    return {
      user:{},
      user_state:{
        img:false,
        nickName:false,
        gender:false,
        birthday:false,
        password:false,
      },
      state: {
        img: {
          show: false
        },
        nickname: {
          show: false
        },
        gender: {
          show: false
        },
        birthday: {
          show: false,
          currentDate: new Date("2000/00/00"),
          minDate: new Date("1970/01/01"),
          maxDate: new Date()
        },
        password: {
          show: false
        }
      },
      message: {
        img:
          "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=ee9bedd9b8de9c82b268f1dd0de8eb6f/3ac79f3df8dcd100c662f1c1798b4710b8122f57.jpg",
        nickName: "天价腰花",
        gender: "男",
        birthday: "1970-00-00",
        password: ""
      }
    };
  },
  components: {
    NavBar,
    Icon,
    Button,
    Actionsheet,
    Popup,
    Uploader,
    Field,
    CellGroup,
    Cell,
    RadioGroup,
    Radio,
    DatetimePicker
  },
  computed: {
    bg() {
      let img = this.user.u_img
      return `background-image: url(${img})`;
    },
  },
  methods: {
    // 修改头像
    userImg() {
      this.state.img.show = !this.state.img.show;
    },
    // 修改昵称
    usernickname() {
      this.state.nickname.show = !this.state.nickname.show;
    },
    // 修改性别
    usergender() {
      this.state.gender.show = !this.state.gender.show;
    },
    // 修改生日
    userbirthday() {
      this.state.birthday.show = !this.state.birthday.show;
    },
    userbirthday1() {
      this.state.birthday.show = !this.state.birthday.show;
    },
    birthday() {
      let x = this.state.birthday.currentDate.toLocaleDateString();
      this.message.birthday = x;
      this.state.birthday.show = !this.state.birthday.show;
    },
    // 修改密码
    userpassword() {
      this.state.password.show = !this.state.password.show;
    },
    // 测试
    fanhui(){
      this.$router.go(-1)
    }
  }
};
</script>
<style scoped lang="scss">
.setup {
  margin-top: 46px;
  > div {
    border-bottom: 1px solid rgb(219, 219, 219);
  }
  p {
    margin: 0;
  }
  .text1 {
    margin: 10px 20px;
    color: #000;
    font-size: 14px;
  }
  .icon {
    margin-right: 20px;
  }
  // 返回上一页
  .fanhui{
    position: fixed;
    z-index: 99;
    top:10px;
    left:20px;
  }
  //   头像
  .img {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      p {
        height: 60px;
        width: 60px;
        margin: 20px 20px;
        background-size: cover;
        border-radius: 40px;
      }
    }
  }
  //   文本资料
  .text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
      .text2 {
        font-size: 14px;
        margin: 10px 20px;
      }
    }
  }
  //   退出登录
  .btn {
    width: 60%;
    height: 50px;
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
  }
}
// 修改页面
.upbox {
  height: 100%;
  width: 100%;
  .icon1 {
    float: left;
    margin: 20px 0 0 20px;
    z-index: 999;
  }
  .btn1 {
    width: 60%;
    margin-top: 50px;
  }
}
// 头像修改
.upimg {
  > div {
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
// 昵称修改
// .usernickname {
//   > div {
//     }
//   }
</style>
