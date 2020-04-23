<template>
  <div class="outer">
    <div class="iconfont thumb">&#xe61a;</div>
    <div class="login">
      <div class="input1">
        <input type="text" placeholder="手机号/邮箱/会员名" />
      </div>
      <div class="input2">
        <input type="text" placeholder="请输入登陆密码" />
      </div>
      <div class="mess-login">
        <div>短信验证码登陆</div>
        <div>免费注册</div>
      </div>
      <div>
        <button>登陆</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style scoped>
.outer {
  padding: 20px;
}
.thumb {
  font-size: 60px;
  margin: 40px auto 40px;
  color: white;
  background: -webkit-linear-gradient(60deg, #ff3306, rgb(250, 138, 113));
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
  width:100%;
  outline: none;
}
.input1,.input2{
    border-bottom: 1px solid #ff3306;
}
.input1{
    margin-bottom:40px
}
.mess-login {
  display: flex;
  margin:20px 0px 8px;
}
.mess-login div {
  flex: 1;
}
.mess-login div:nth-child(2){
    text-align: right;
}
button{
    margin:35px 0px 20px;
    width:100%;
    height:46px;
    line-height:45px;
    text-align: center;
    color:white;
    background: -webkit-linear-gradient(0deg, rgb(250, 138, 113),#ff3306);
    border-radius:23px;
    font-size:16px
}

</style>

