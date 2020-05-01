<template>
  <div class="outer">
    <div class="iconfont thumb">&#xe601;</div>
    <div class="login">
      <div class="input-wrap">
        <div class="input1">
          <input type="text" v-model="uname" @input="close1" placeholder="手机号/邮箱/会员名" />
        </div>
        <div class="input2">
          <input :type="type" v-model="pwd" @input="close2" placeholder="请输入登陆密码" />
        </div>
        <div @click="seeYet">
          <div class="iconfont not-see" v-if="isSee">&#xe62c;</div>
          <div class="iconfont see" v-else>&#xe61d;</div>
        </div>
        <div class="iconfont close1" v-if="closeBtn1" @click="closeUname">&#xe670;</div>
        <div class="iconfont close2" v-if="closeBtn2" @click="closePwd">&#xe670;</div>
      </div>

      <div class="mess-login">
        <div @click="login2">短信验证码登陆</div>
        <div>免费注册</div>
      </div>
      <div>
        <button @click="login">登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      uname: "",
      pwd: "",
      type: "password",
      isSee: false,
      closeBtn1:false,
      closeBtn2:false
    };
  },
  methods: {
    login() {
      if (
        this.uname == this.$store.state.uname &&
        this.pwd == this.$store.state.pwd
      ) {
        this.$router.replace("/homelogin");
        this.$router.meta = 3;
        console.log(this.$router);
      }
    },
    seeYet(){
      if(this.isSee){
        this.type = "text";
        this.isSee = false
      }else{
        this.type = "password";
        this.isSee = true;
      }
    },
    close1(){
      if(this.uname){
        this.closeBtn1 = true
      }else{
        this.closeBtn1 = false
      }
    },
    close2(){
      if(this.pwd){
        this.closeBtn2 = true
      }else{
        this.closeBtn2 = false
      }
    },
    closeUname(){
      this.uname = ""
    },
    closePwd(){
      this.pwd = ""
    },
    login2(){
      this.$router.replace("/login2")
    }
  }
};
</script>
<style scoped>
.outer {
  padding: 20px;
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
  width: 100%;
  outline: none;
  border: none;
}
.input1,
.input2 {
  border-bottom: 1px solid #ff3306;
}
.input1 {
  margin-bottom: 40px;
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
  margin: 35px 0px 20px;
  width: 100%;
  height: 46px;
  line-height: 45px;
  text-align: center;
  color: white;
  background: #ff3306;
  border-radius: 23px;
  font-size: 16px;
  outline: none;
  border:none
}
.input-wrap {
  position: relative;
}
.not-see,
.see {
  position: absolute;
  bottom: 4.5px;
  right: 5px;
  font-size:20px;
  color:#666;
  cursor: pointer;
}
.close1 {
  position: absolute;
  top: 7px;
  right: 5px;
  font-size:16px;
  color:#666;
  cursor: pointer;
}
.close2{
  position: absolute;
  bottom: 7px;
  right: 35px;
  font-size:16px;
  color:#666;
  cursor: pointer;
}
</style>

