<template>
  <div class="classify-shell">
    <div class="classify-title">全部分类</div>
    <div class="classify-list">
      <div class="classify-tab" @click="tab(1)" :class="{active:pageindex==1}">为您推荐</div>
      <div class="classify-tab" @click="tab(2)" :class="{active:pageindex==2}">国际大牌</div>
      <div class="classify-tab" @click="tab(3)" :class="{active:pageindex==3}">天猫国际</div>
      <div class="classify-tab" @click="tab(4)" :class="{active:pageindex==4}">女装</div>
      <div class="classify-tab" @click="tab(5)" :class="{active:pageindex==5}">女鞋</div>
      <div class="classify-tab" @click="tab(6)" :class="{active:pageindex==6}">男装</div>
      <div class="classify-tab" @click="tab(7)" :class="{active:pageindex==7}">男鞋</div>
      <div class="classify-tab" @click="tab(8)" :class="{active:pageindex==8}">内衣</div>
      <div class="classify-tab" @click="tab(9)" :class="{active:pageindex==9}">母婴</div>
      <div class="classify-tab" @click="tab(10)" :class="{active:pageindex==10}">手机</div>
      <div class="classify-tab" @click="tab(11)" :class="{active:pageindex==11}">数码</div>
      <div class="classify-tab" @click="tab(12)" :class="{active:pageindex==12}">家电</div>
      <div class="classify-tab" @click="tab(13)" :class="{active:pageindex==13}">美妆</div>
      <div class="classify-tab" @click="tab(14)" :class="{active:pageindex==14}">箱包</div>
      <div class="classify-tab" @click="tab(15)" :class="{active:pageindex==15}">运动</div>
      <div class="classify-tab" @click="tab(16)" :class="{active:pageindex==16}">户外</div>
      <div class="classify-tab" @click="tab(17)" :class="{active:pageindex==17}">家装</div>
      <div class="classify-tab" @click="tab(18)" :class="{active:pageindex==18}">家纺</div>
      <div class="classify-tab" @click="tab(19)" :class="{active:pageindex==19}">居家百货</div>
      <div class="classify-tab" @click="tab(20)" :class="{active:pageindex==20}">鲜花宠物</div>
      <div class="classify-tab" @click="tab(21)" :class="{active:pageindex==21}">配饰</div>
      <div class="classify-tab" @click="tab(22)" :class="{active:pageindex==22}">食品</div>
      <div class="classify-tab" @click="tab(23)" :class="{active:pageindex==23}">生鲜</div>
      <div class="classify-tab" @click="tab(24)" :class="{active:pageindex==24}">汽车摩托</div>
      <div class="classify-tab" @click="tab(25)" :class="{active:pageindex==25}">医药</div>
      <div class="classify-tab" @click="tab(26)" :class="{active:pageindex==26}">图书</div>
      <div class="classify-tab" @click="tab(27)" :class="{active:pageindex==27}">通信</div>
      <div class="classify-tab" @click="tab(28)" :class="{active:pageindex==28}">洗护</div>
      <div class="classify-tab" @click="tab(29)" :class="{active:pageindex==29}">乐器</div>
    </div>
    <div class="classify-detail">
      <component :is="tabname"></component>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabname: "recommended",
      pageindex: 1
    };
  },
  methods: {
    tab(index) {
      this.pageindex = index;
      switch (index) {
        case 1:
          this.tabname = "recommended";//为您推荐
          break;
        case 2:
          this.tabname = "world";//国际大牌
          break;
        case 3:
          this.tabname = "tmWorld";//天猫国际
          break;
        case 4:
          this.tabname = "wWear";//女装
          break;
        case 5:
          this.tabname = "wShoes";//女鞋
          break;
        case 6:
          this.tabname = "mWear";//男装
          break;
        case 7:
          this.tabname = "mShoes";//男鞋
          break;
        case 8:
          this.tabname = "underWear";//内衣
          break;
        case 9:
          this.tabname = "moba";//母婴
          break;
        case 10:
          this.tabname = "phone";//手机
          break;
        case 11:
          this.tabname = "digital";//数码
          break;
        case 12:
          this.tabname = "houseEle";//家电
          break;
        case 13:
          this.tabname = "makeup";//美妆
          break;
        case 14:
          this.tabname = "bags";//箱包
          break;
        case 15:
          this.tabname = "motion";//运动
          break;
        case 16:
          this.tabname = "outdoors";//户外
          break;
        case 17:
          this.tabname = "homeDecoration";
          break;
        case 18:
          this.tabname = "homeTextiles";
          break;
        case 19:
          this.tabname = "homeStore";
          break;
        case 20:
          this.tabname = "flowerPet";
          break;
        case 21:
          this.tabname = "accessories";
          break;
        case 22:
          this.tabname = "food";
          break;
        case 23:
          this.tabname = "fresh";
          break;
        case 24:
          this.tabname = "motorCar";
          break;
        case 25:
          this.tabname = "medicine";
          break;
        case 26:
          this.tabname = "books";
          break;
        case 27:
          this.tabname = "correspond";
          break;
        case 28:
          this.tabname = "washAndCare";
          break;
        default:
          this.tabname = "musical";
          break;
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.classify-shell {
  height: 100%;
}
.classify-title {
  width: 100%;
  height: 7%;
  background: #eee;
  color: #333;
  font-size: 14px;
  padding: 3.5% 4%;
}
.classify-list {
  display: inline-block;
  width: 22%;
  height: 93.5%;
  overflow: auto;
  position: relative;
}
.classify-tab {
  height: 59px;
  line-height: 59px;
  border-bottom: 1px solid #e1e1e1;
  background: #eee;
  color: #9b9b9b;
  font-size: 14px;
  text-align: center;
}
.classify-detail {
  display: inline-block;
  width: 78%;
  height: 93%;
}

.active {
  display: block;
  color: #333;
  background: white;
}
</style>