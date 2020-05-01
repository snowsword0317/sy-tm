<template>
  <div>
    <div class="shell" v-if="shellShow">
      <div class="user-triangle"></div>
      <div class="user-shell">
        <div class="user-shell-list">
          <div class="list-title">我的天猫</div>
          <div class="list-exit" @click="exit"></div>
        </div>
        <div class="user-shell-detail">
          <div>
            <a href="#">
              <div class="detail-img detail-img-1"></div>
              <div class="detail-font">天猫客户端</div>
            </a>
          </div>
          <div>
            <a href="#">
              <div class="detail-img detail-img-2"></div>
              <div class="detail-font">新人有礼</div>
            </a>
          </div>
          <div>
            <router-link to="/car">
              <div class="detail-img detail-img-3"></div>
              <div class="detail-font">购物车</div>
            </router-link>
          </div>
          <div>
            <a href="#">
              <div class="detail-img detail-img-4"></div>
              <div class="detail-font">收藏宝贝</div>
            </a>
          </div>
          <div>
            <a href="#">
              <div class="detail-img detail-img-5"></div>
              <div class="detail-font">收藏店铺</div>
            </a>
          </div>
          <div>
            <a href="#">
              <div class="detail-img detail-img-6"></div>
              <div class="detail-font">全部订单</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shellShow: true
    };
  },
  methods: {
      exit(){
          this.shellShow=false;
      }
  },
};
</script>

<style scoped>
.shell {
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 1px;
  left: 0;
  z-index: 999;
}
.user-triangle {
  width: 0;
  height: 0;
  border-width: 0 8.5px 8.5px;
  border-style: solid;
  border-color: transparent transparent white; /*透明 透明  灰*/
  position: absolute;
  left: 90.5%;
  top: 4.25%;
}
.user-shell {
  width: 100%;
  height: 210px;
  background-color: white;
  position: absolute;
  left: 0;
  top: 5.5%;
}
.user-shell-list {
  width: 100%;
  height: 28px;
  background-color: rgb(229, 229, 229);
}
.list-title {
  vertical-align: top;
  display: inline-block;
  width: 20%;
  font-size: 11.9467px;
  padding-left: 7.68px;
  font-weight: 600;
  height: 100%;
  line-height: 28px;
}
.list-exit {
  width: 28px;
  height: 28px;
  display: inline-block;
  background: url(/home/user/1.jpg) no-repeat;
  background-size: 79px 450px;
  background-position: -53px -173px;
  margin-left: 68%;
}
.user-shell-detail {
  width: 100%;
  height: 182px;
}
.user-shell-detail > div {
  display: inline-block;
  width: 33.33%;
  height: 50%;
  border: 1px solid rgb(229, 229, 229);
  vertical-align: top;
}
.user-shell-detail > div > a {
  text-decoration: none;
}
.detail-img {
  width: 28px;
  height: 28px;
  background: url(/home/user/1.jpg) no-repeat;
  background-size: 79px 450px;
  margin: 20px auto 0 auto;
}
.detail-img-1 {
  background-position: -53px 3px;
}
.detail-img-2 {
  background: url(/home/user/2.jpg) no-repeat;
  background-size: 25px 25px;
}
.detail-img-3 {
  background-position: -53px -55px;
}
.detail-img-4 {
  background-position: -54px -84px;
}
.detail-img-5 {
  background-position: -54px -115px;
}
.detail-img-6 {
  background-position: -54px -145px;
}

.detail-font {
  font-size: 10.24px;
  color: rgb(0, 0, 0);
  text-align: center;
}
</style>