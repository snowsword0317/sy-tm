<template>
  <div class="outer-wrap">
    <div class="outer">
      <div class="header">
        <div class="iconfont">&#xe61c;</div>
        <div>购物车（）</div>
        <div></div>
      </div>
      <div class="goods-car">
        <div class="shop-name">
          <div class="iconfont red">&#xe798;</div>
          <div>天猫官方旗舰店</div>
          <div class="iconfont">&#xe61b;</div>
          <div>领券</div>
          <div>编辑</div>
        </div>
        <div clss="car-list">
          <div class="out-wrap goods">
            <div class="inner-wrap">
              <div class="show">
                <div>
                  <input type="checkbox" name="convanse" id="convanse" />
                  <label for="convanse"></label>
                </div>
                <div>
                  <img src="../assets/images/22.jpg" />
                </div>
                <div></div>
              </div>
            </div>
            <div class="hidden">删除</div>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-fix"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style scoped>
@font-face {
  font-family: helvetica;
  src: url("../assets/Helvetica.otf");
}
.outer-wrap {
  width: 100%;
  height: 100%;
  background: #eee;
}
.header {
  background: white;
  display: flex;
  height: 45px;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
}
.header div {
  flex: 1;
  text-align: center;
  color: #333;
  font-size: 18px;
  font-family: helvetica;
  font-weight: 400;
  letter-spacing: 1px;
}
.header .iconfont {
  text-align: left;
  font-size: 20px;
  font-weight: 800;
}
.goods-car {
  padding: 0 10px;
  font-size: 12px;
  color: #333;
  background: white;
  /* display: flex; */
}
.shop-name {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
}
.shop-name .red {
  color: #ff0036;
  margin-left: 32px;
  margin-right: 10px;
}
.shop-name div:nth-child(2) {
  margin-right: 10px;
}
.shop-name div:nth-child(3) {
  flex: 1;
}
.shop-name div:nth-child(4),
.shop-name div:nth-child(5) {
  width: 50px;
  text-align: center;
}
.car-list {
  padding: 0 10px;
  background: white;
}
.out-wrap {
  width: 100%;
  position: relative;
  height: 117px;
  margin-bottom: 5px;
}
.inner-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  z-index: 20;
  position: relative;
  top: 0;
  left: 0;
}
.show {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  /* transform: translateX(-60px); */
}
.show input {
  width: 50px;
  height: 50px;
  background: transparent;
  border: 1px solid #000;
}
.show img {
  width: 98px;
  height: 98px;
}
.hidden {
  width: 60px;
  background: #ff0036;
  color: white;
  font-size: 14px;
  height: 115px;
  position: absolute;
  right: 1px;
  top: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>