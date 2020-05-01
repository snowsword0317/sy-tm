<template>
  <div class="out-wrap">
    <div class="outer">
      <div class="iconfont thumb">&#xe601;</div>
      <div class="login">
        <div class="input-wrap">
          <div class="input1">
            <div>
              <select name id class="select">
                <option class="option1">+86</option>
                <option>+852</option>
                <option>+853</option>
                <option>+856</option>
              </select>
            </div>
            <input type="text" v-model="tell" @input="close1" placeholder="手机号/邮箱/会员名" />
          </div>
          <div class="input2">
            <input :type="type" v-model="tellPwd" @input="close2" placeholder="请输入登陆密码" />
          </div>
          <div @click="getPwd" class="tell-pwd" v-if="get">获取验证码</div>
          <div class="tell-pwd" v-else>{{num}}秒后重发</div>
          <div class="iconfont close1" v-if="closeBtn1" @click="closeUname">&#xe670;</div>
          <div class="iconfont close2" v-if="closeBtn2" @click="closePwd">&#xe670;</div>
        </div>

        <div class="mess-login">
          <div>免费注册</div>
        </div>
        <div>
          <button @click="login" class="btn1">登陆</button>
          <button class="btn2" @click="toLogin1">账号密码登陆</button>
        </div>
      </div>
    </div>
    <div class="float-wrap" v-if="floatBox">
      <div class="float-box">
        <div>请输入手机号码</div>
        <div @click="isOk">确认</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      tell: "",
      tellPwd: "",
      type: "password",
      get: true,
      num: 60,
      closeBtn1: false,
      closeBtn2: false,
      timer: null,
      floatBox: false
    };
  },
  methods: {
    login() {
      if (
        this.tell == this.$store.state.tell &&
        this.tellPwd == this.$store.state.tellPwd
      ) {
        this.$router.replace("/homelogin");
        this.$router.meta = 3;
        console.log(this.$router);
      }
    },
    close1() {
      if (this.tell) {
        this.closeBtn1 = true;
      } else {
        this.closeBtn1 = false;
      }
    },
    close2() {
      if (this.tellPwd) {
        this.closeBtn2 = true;
      } else {
        this.closeBtn2 = false;
      }
    },
    closeUname() {
      this.tell = "";
    },
    closePwd() {
      this.tellPwd = "";
    },
    getPwd() {
      let that = this;
      if(!this.tell){
        this.floatBox = true;
        return
      }
      
      if (this.get == true) {
        this.get = false;
        if (this.num > 0) {
          this.timer = setInterval(() => {
            if (that.num > 0) {
              that.num--;
            } else {
              this.timer = null;
              this.get = true;
              this.num = 60;
            }
          }, 1000);
        }
      }
    },
    isOk(){
      this.floatBox = false
    },
    toLogin1(){
      this.$router.replace("/login");
      console.log("haha")
    }
  }
};
</script>
<style scoped>
.out-wrap {
  position: relative;
  width:100%;
  height:100%
}
.float-wrap{
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(57, 57, 58, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

}
.float-box {
  position: absolute;
  width: 200px;
  height: 70px;
  color:black;
  border:1px solid rgb(134, 131, 131);
  border-radius: 5px;
  background: white;
  font-size:12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.float-box div{
  text-align: center;
}
.float-box div:first-child{
  height:40px;
  line-height:40px;
  width:100%;
  color:#666;
  border-bottom:1px solid rgb(212, 210, 210);
  font-size:12px
}
.float-box div:nth-child(2){
  height:30px;
  line-height:30px;
  width:100%;
  color:#FF0035
  
}
.outer {
  padding: 20px;
  width:100%;
  height:100%;
}
.thumb {
  font-size: 60px;
  margin: 40px auto 40px;
  color: white;
  background: #ff3306;
  height: 80px;
  width: 80px;
  padding: 10px;
  border-radius: 50%;
}
.login {
  display: flex;
  flex-direction: column;
  color: #555;
  font-size: 14px;
}
.login > div {
  width: 100%;
}
input {
  padding-left: 5px;
  font-size: 16px;
  color: #333;
  height: 30px;
  outline: none;
  border: none;
}
.input1,
.input2 {
  border-bottom: 1px solid #ff3306;
}
.input1 {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}
.input1 input {
  flex: 1;
}
.input1 .select {
  font-size: 16px;
  width: 55px;
  border: none;
  outline: none;
  background: transparent;
}
.mess-login {
  display: flex;
  margin: 20px 0px 8px;
}
.mess-login div {
  flex: 1;
}
.mess-login div:nth-child(2) {
  text-align: right;
}
button {
  margin: 35px 0px -10px;
  width: 100%;
  height: 46px;
  line-height: 45px;
  text-align: center;
  color: white;
  background: #ff3306;
  border-radius: 23px;
  font-size: 16px;
  outline: none;
  border: none;
}
.input-wrap {
  position: relative;
}
.tell-pwd {
  position: absolute;
  bottom: 4.5px;
  right: 5px;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  font-size: 16px;
}
.close1 {
  position: absolute;
  top: 7px;
  right: 5px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
}
.close2 {
  position: absolute;
  bottom: 7px;
  right: 95px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
}
.tell-pwd {
  color: #ff3306;
}
.btn2 {
  background: white;
  color: #ff3306;
  border: 1px solid #ff0036;
}
</style>

