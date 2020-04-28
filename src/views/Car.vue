<template>
  <div class="outer-wrap">
    <div class="outer">
      <div class="header">
        <div class="iconfont" @click="back">&#xe61c;</div>
        <div>购物车({{length}})</div>
        <div></div>
      </div>
      <div class="goods-car">
        <div class="shop-name">
          <div class="iconfont red">&#xe638;</div>
          <div>TMALL</div>
          <div class="iconfont">&#xe61b;</div>
          <div>领券</div>
          <div @click="trans">编辑</div>
        </div>
        <div clss="car-list">
          <div class="out-wrap goods" v-for="(item,index) in carList" :key="item.name">
            <div class="inner-wrap">
              <div class="show" :class="{trans:isTrans}">
                <div>
                  <input
                    type="checkbox"
                    :id="item.name"
                    :checked="item.checked"
                    @change="checkMe(index)"
                  />
                  <label :for="item.name"></label>
                </div>
                <div>
                  <img :src="item.thumb" />
                </div>
                <div class="mess">
                  <div>{{item.name}}</div>
                  <div class="mess-price">
                    <div>¥{{item.price}}</div>
                    <div>
                      <span @click="minus(index)">-</span>
                      <span>{{item.per}}</span>
                      <span @click="plus(index)">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden" v-if="isIndex" @click="deleteGoods(index)">删除</div>
          </div>
        </div>
      </div>
      <div class="you-like">
        <div class="title">
          <div class="iconfont">&#xe66f;</div>
          <div>你可能还喜欢</div>
        </div>
        <div class="you-like-goods">
          <router-link
            :to="'/good?name='+item.name+'&thumb='+item.thumb+'&people='+item.people+'&post='+item.post+'&price='+item.price"
            v-for="item in goodsList"
            :key="item.num"
          >
            <div class="goods-wrap">
              <div>
                <img :src="item.thumb" alt />
              </div>
              <div>{{item.name}}</div>
              <div>
                <span>¥ {{item.price}}</span>
                <span>{{item.people}}人已购买</span>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="foot-fix">
      <div>
        <input type="checkbox" name="checkall" id="checkall2" @change="allCheck" />
        <label for="checkall2"></label>
      </div>
      <div>全选</div>
      <div>
        合计:
        <span>¥{{total}}</span>
      </div>
      <div>结算</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    goodsList() {
      return this.$store.state.goodsList;
    },

    carList() {
      return this.$store.state.carList;
    },

    length() {
      return this.$store.state.carList.length;
    },

    total() {
      var tot = 0;
      for (let i = 0; i < this.carList.length; i++) {
        if (this.carList[i].checked == true) {
          tot = tot + this.carList[i].price * this.carList[i].per;
        }
      }
      if (tot == 0) {
        return 0.0;
      } else {
        return tot;
      }
    }
  },
  data() {
    return {
      isTrans: false,
      isIndex: false
    };
  },
  methods: {
    back() {
      this.$router.push("/");
    },
    trans() {
      if (this.isTrans) {
        this.isTrans = false;
        this.isIndex = false;
      } else {
        this.isTrans = true;
        this.isIndex = true;
      }
      console.log(123);
    },
    deleteGoods(index) {
      this.$store.commit("deleteGoods", index);
    },
    plus(index) {
      this.$store.commit("plus", index);
    },
    minus(index) {
      this.$store.commit("minus", index);
    },
    allCheck(e) {
      if (e.target.checked) {
        for (let i = 0; i < this.carList.length; i++) {
          this.carList[i].checked = true;
        }
      } else {
        for (let i = 0; i < this.carList.length; i++) {
          this.carList[i].checked = false;
        }
      }
    },
    checkMe(index) {
      // console.log(event)
      if (event.target.checked) {
        this.carList[index].checked = true;
        console.log(this.carList);
      } else {
        this.carList[index].checked = false;
      }
    }
  }
};
</script>
<style scoped>
@font-face {
  font-family: helvetica;
  src: url("../assets/Helvetica.otf");
}
a {
  text-decoration: none;
}
.outer-wrap {
  width: 100%;
  height: 100%;
  background: #eee;
  position: relative;
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
  margin-bottom: 20px;
  /* display: flex; */
}
.shop-name {
  display: flex;
  justify-content: space-between;
  height: 40px;
  line-height: 40px;
  position: relative;
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
  padding: 8px 0;
  position: relative;
}
.trans {
  transform: translateX(-60px);
  transition: all 0.5s;
}
.show input {
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid #000;
  visibility: hidden;
}
.show input + label {
  position: absolute;
  top: 45px;
  left: 0px;
  width: 20px;
  height: 20px;
  border: 1px solid #a6a6a6;
  border-radius: 50%;
  background-color: #dedede;
}
.show input:checked + label {
  background: #ff0036;
  border: none;
}
.show input:checked + label:after {
  content: "";
  position: absolute;
  left: 4px;
  top: 4px;
  width: 9px;
  height: 4px;
  border: 2px solid white;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(-45deg);
  /* background: #FF0036; */
  color: white;
}
.show img {
  width: 98px;
  height: 98px;
  margin-left: 10px;
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
  z-index: 20;
}
.mess {
  flex: 1;
  /* background: #ff0036; */
  height: 100%;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  white-space: normal;
  margin-left: 20px;
}
.mess-price {
  display: flex;
  justify-content: space-between;
}
.mess-price div:nth-child(1) {
  font-size: 16px;
  color: #ff0036;
}
.mess-price div:nth-child(2) {
  display: flex;
  width: 98px;
}
.mess-price div:nth-child(2) span {
  font-size: 16px;
  flex: 1;
  text-align: center;
  color: #333;
}
.you-like {
  width: 100%;
  /* height:100px; */
  background: rgb(247, 247, 247);
}
.title {
  line-height: 44px;
  height: 44px;
  color: #ff0036;
  display: flex;
  justify-content: center;
  font-size: 16px;
  align-items: center;
}

.title .iconfont {
  width: 20px;
  height: 20px;
  /* padding:2px; */
  background: #ff0036;
  color: white;
  margin: 14px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 5px;
}
.you-like-goods {
  width: 100%;
  padding: 0 12px;
  /* display: flex; */
  /* justify-content: space-between; */
  /* white-space: normal; */
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 47px;
}
.goods-wrap {
  width: 170px;
  height: 260px;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;
}
.goods-wrap img {
  width: 170px;
  height: 170px;
  margin-bottom: 5px;
}
.goods-wrap div:nth-child(2) {
  font-size: 12px;
  color: #333;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.goods-wrap div:nth-child(3) span:nth-child(1) {
  color: #ff0036;
  font-size: 12px;
  margin-right: 8px;
}
.goods-wrap div:nth-child(3) span:nth-child(2) {
  color: #999;
  font-size: 12px;
}

.foot-fix {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 48px;
  background: #eee;
  display: flex;
  border-top: 1px solid rgb(223, 220, 220);
  line-height: 48px;
}
.foot-fix input {
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid #000;
  visibility: hidden;
}
.foot-fix input + label {
  position: absolute;
  top: 14px;
  left: 10px;
  width: 20px;
  height: 20px;
  border: 1px solid #a6a6a6;
  border-radius: 50%;
  background-color: #dedede;
}
.foot-fix input:checked + label {
  background: #ff0036;
  border: none;
}
.foot-fix input:checked + label:after {
  content: "";
  position: absolute;
  left: 4px;
  top: 4px;
  width: 9px;
  height: 4px;
  border: 2px solid white;
  border-top-color: transparent;
  border-right-color: transparent;
  transform: rotate(-45deg);
  /* background: #FF0036; */
  color: white;
}

.foot-fix div:nth-child(1) {
  width: 45px;
}
.foot-fix div:nth-child(2) {
  color: #333;
  font-size: 16px;
  flex: 1;
}
.foot-fix div:nth-child(3) {
  width: 110px;
}
.foot-fix div:nth-child(3) span {
  color: #ff0036;
  margin-left: 5px;
}
.foot-fix div:nth-child(4) {
  width: 100px;
  background: #ff0036;
  color: white;
  text-align: center;
}
</style>