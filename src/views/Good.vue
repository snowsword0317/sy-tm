<template>
  <div class="outer">
    <div class="my-swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img src="../assets/images/1.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/2.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/3.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/4.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/5.jpg" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
      <div class="top">
        <div class="back iconfont">&#xe61c;</div>
        <div class="bar iconfont">&#xe658;</div>
      </div>
    </div>
    <div class="price">
      <span>¥</span>
      <span class="price1299">1299</span>
    </div>
    <div class="introduce">
      阿迪达斯官网UltraBOOST w女跑步运动鞋BB6149 BB6308
    </div>
    <div class="mess">
      <div>快递: 0.00</div>
      <div class="center">月销量 1050件</div>
      <div class="right">江苏苏州</div>
    </div>
    <div class="promotion">
      <div class="promotion-title">促销</div>
      <div class="activity">
        <div class="activity-one">
            <div class="pink"><span>促销</span></div>
            <div class="black">满500元,享部分地区包邮</div>
        </div>
        <div class="activity-two">
            <div class="pink"><span>积分</span></div>
            <div class="black">购买可得649积分</div>
        </div>
      </div>
      <div class="iconfont">&#xe61b;</div>
    </div>
    <div class="service">
      <div class="sevice-title">服务</div>
      <div class="sevice-con">
        <ul>
          <li>假一赔四</li>
          <li>1分钱超值洗衣</li>
          <li>退货运费险</li>
          <li>极速退款</li>
        </ul>
      </div>
      <div class="iconfont">&#xe61b;</div>
    </div>
    <div class="choose">
      <div>选择</div>
      <div class="choose-con">请选择颜色分类/鞋码</div>
      <div class="iconfont">&#xe61b;</div>
    </div>
      <div class="choose">
      <div>参数</div>
      <div class="choose-con">品牌 功能...</div>
      <div class="iconfont">&#xe61b;</div>
    </div>
    <div class="goods-evaluate">
      <div class="header">
        <div class="goods-evaluate-num">商品评价(280)</div>
        <div class="total iconfont">查看全部 &#xe61b;</div>
      </div>
      <div class="evaluate-list">
        <ul>
          <li v-for="item in list" :key="item">{{item}}</li>
        </ul>
      </div>
      <div class="evaluate-wrap">
        <div class="thumb">
          <img src="../assets/images/6.jpeg">
          <span>R**5</span>
        </div>
        <div class="say-something">
          很舒服，第一天就去跑步了！鞋底材质还不错！软，有弹性！运动穿很舒服就是了！白色也很好搭！平时37码 买38码刚刚好！建议买大一码或半码。快递是EMS，挺快的三天到。
        </div>
        <div class="time">2020-04-16 颜色分类:亮白;鞋码:38</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="question"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "swiper-example-pagination-fraction",
  title: "Fraction pagination",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      list:["鞋子不错(12)","穿着效果不错(10)","尺码不错(7)","物流快(18)","很舒服(13)"],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style scoped>
.outer {
  background: #f3f3f3;
  /* height:100% */
}
img {
  width: 100%;
}
.my-swiper {
  position: relative;
}
.swiper-button-prev,
.swiper-button-next {
  color: #666;
}
/* .swiper{
    position: relative;
  } */
.swiper-pagination {
  text-align: center;
  width: 36px;
  font-size: 12px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 20px;
  border-radius: 10px;
  word-spacing: -4px;
  line-height: 20px;
  background: #9a9b9d;
  color: white;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 88%;
}

.top {
  position: absolute;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 44px;
  background: -webkit-linear-gradient(rgba(0, 0, 0, 0.15), transparent);
}
.back,
.bar {
  width: 30px;
  height: 30px;
  padding: 5px;
  margin: 8px;
  border-radius: 50%;
  font-size: 20px;
  background: #494949;
  opacity: 0.6;
  z-index: 10;
  color: white;
  font-weight: 600;
}
.back {
  position: absolute;
  top: 0;
  left: 2;
}
.bar {
  position: absolute;
  top: 0px;
  right: 2px;
}
.price {
  width: 100%;
  height: 36px;
  padding: 0 10px;
  background: white;
  color:#fd5173;
  font-size:20px;
  line-height:36px;
  font-weight:500
}
.price .price1299{
  font-size:24px;
}
.introduce{
  padding:3px 10px 0px;
  font-size:14px;
  background: white;
}
.mess{
  padding:0 10px;
  display: flex;
  height:30px;
  line-height:30px;
  background: white;
  margin-bottom:10px;
}
.mess div{
  flex:1;
  height:30px;
  line-height:30px;
  color:#999;
  font-size:12px;
}
.center{
  text-align: center;
}
.right{
  text-align: right;
}
.promotion{
  padding:12px 10px;
  height:60px;
  background: white;
  display: flex;
  color:#999;
  justify-content: space-between;
}
.promotion-title{
  font-size:12px;
  width:30px;
}
.activity{
  flex:1;
  font-size:12px
}
.activity-one,.activity-two{
  display: flex;
}
.pink{
  width:36px;
  height:18px;
  line-height: 18px;
  transform: scale(0.7);
}
.pink span{
  font-size:14px;
  color:#FF0036;
  background: #fff5f7;
  
}
.black{
  color:black
}
.service{
  padding:10px;
  color:#999;
  display: flex;
  justify-content: space-between;
  background: white;
  margin-bottom: 10px;
}
.sevice-title{
  font-size:12px;
  width:30px;
}
.sevice-con ul li{
  color:#333;
  font-size: 12px;
  float:left;
  list-style-type: none;
}
.sevice-con{
  flex:1
}
.sevice-con ul li::after{
  content: "\00b7";
  padding:0  6px;
}
.choose{
  color:#999;
  font-size:12px;
  padding:12px 10px;
  display: flex;
  justify-content: space-between;
  background: white;
}
.choose :nth-child(1){
  width:30px
}
.choose-con{
  color:#333;
  flex:1
}
.goods-evaluate{
  padding:6px;
  margin-top:10px;
  background: white;
}
.goods-evaluate .header{
  margin:6px;
  display:flex;
  justify-content: space-between;
  color:#666;
  font-size:14px
}
.total{
  color:#FF0036;
  font-size:13px
}
.evaluate-list li{
  float:left;
  list-style-type:none;
  margin:6px 3px;
  padding:6px 9px;
  background: #FFEEEE;
  color:#666;
  font-size:12px;
  text-align: center;
  line-height: 14px;
  border-radius: 14px;
}
.evaluate-list{
  height:38px;
  width:100%;
  overflow: hidden;
}
.evaluate-wrap{
  margin:4px 6px
}
.thumb{
  border-radius: 50%;
  display: flex;
  margin:0 0 10px;
  line-height: 16px;
  font-size: 12px;
  height:24px
}
.thumb img{
  width:100%;
  border-radius: 50%;
  width:24px;
  height:24px;
}
.thumb span{
  padding:5px;
  color:#999
}
.say-something{
  font-size: 13px;
  line-height: 16px;
  height: 32px;
  color:#051b28;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.time{
  padding:8px 0 0;
  color:#999;
  font-size:12px;
  margin-bottom:6px
}
.line{
  border-bottom:1px solid #eee;
}
.question{
  padding:12px
}
</style>
