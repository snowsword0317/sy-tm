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
    <div class="introduce">阿迪达斯官网UltraBOOST w女跑步运动鞋BB6149 BB6308</div>
    <div class="mess">
      <div>快递: 0.00</div>
      <div class="center">月销量 1050件</div>
      <div class="right">江苏苏州</div>
    </div>
    <div class="promotion">
      <div class="promotion-title">促销</div>
      <div class="activity">
        <div class="activity-one">
          <div class="pink">
            <span>促销</span>
          </div>
          <div class="black">满500元,享部分地区包邮</div>
        </div>
        <div class="activity-two">
          <div class="pink">
            <span>积分</span>
          </div>
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
          <img src="../assets/images/6.jpeg" />
          <span>R**5</span>
        </div>
        <div
          class="say-something"
        >很舒服，第一天就去跑步了！鞋底材质还不错！软，有弹性！运动穿很舒服就是了！白色也很好搭！平时37码 买38码刚刚好！建议买大一码或半码。快递是EMS，挺快的三天到。</div>
        <div class="time">2020-04-16 颜色分类:亮白;鞋码:38</div>
        <div class="line"></div>
      </div>
    </div>
    <div class="question-wrap">
      <div class="question">
        <div class="ques-title">问大家(77)</div>
        <div class="look-app iconfont">打开app查看全部 &#xe61b;</div>
      </div>
      <div class="ques-one">
        <div>
          <div class="wen">问</div>最便宜时多少钱呀？谢谢
        </div>
        <div class="answer">1个回答</div>
      </div>
      <div class="ques-two">
        <div>
          <div class="wen">问</div>鞋子穿久了会不会有些下榻
        </div>
        <div class="answer">7个回答</div>
      </div>
    </div>
    <div class="shop">
      <div class="shop-header">
        <img src="../assets/images/7.png" alt />
        <div>
          <div class="adidas">adidas官方旗舰店</div>
          <div class="tianmao">天猫</div>
        </div>
      </div>
      <div class="shop-middle">
        <div>
          <span class="shop-title">宝贝描述</span>
          <span class="grade grade-down">4.8</span>
          <span class="iconfont down">&#xe72a;</span>
        </div>
        <div>
          <span class="shop-title">买家服务</span>
          <span class="grade grade-down">4.7</span>
          <span class="iconfont down">&#xe72a;</span>
        </div>
        <div>
          <span class="shop-title">物流服务</span>
          <span class="grade grade-up">4.8</span>
          <span class="iconfont up">&#xe729;</span>
        </div>
      </div>
      <div class="shop-foot">
        <div>全部商品</div>
        <div>进入店铺</div>
      </div>
    </div>
    <div class="look-look">看了又看</div>
    <div class="sorry">对不起，找不到相关的商品</div>
    <div class="detail">
      <div class="xiangqing">-------详情------</div>
    </div>
    <div class="boost">"Boost技术 尺码参考试穿报告"</div>
    <div class="goods-pic">
      <div class="pic-title">商品图片</div>
      <div class="pics">
        <img src="../assets/images/7.jpg" alt="">
        <img src="../assets/images/8.jpg" alt="">
        <img src="../assets/images/9.jpg" alt="">
        <img src="../assets/images/10.jpg" alt="">
        <img src="../assets/images/11.jpg" alt="">
        <img src="../assets/images/12.jpg" alt="">
        <img src="../assets/images/13.jpg" alt="">
        <img src="../assets/images/14.jpg" alt="">
        <img src="../assets/images/15.jpg" alt="">
        <img src="../assets/images/16.jpg" alt="">
        <img src="../assets/images/17.jpg" alt="">
        <img src="../assets/images/18.jpg" alt="">
        <img src="../assets/images/19.jpg" alt="">
      </div>
    </div>
  <div class="product-con">
    <div class="product-mess">产品信息</div>
    <div class="mess-con">
      <table>
        <tr>
          <td>功能</td>
          <td>平衡</td>
        </tr>
        <tr>
          <td>品牌</td>
          <td>Adidas/阿迪达斯</td>
        </tr>
        <tr>
          <td>上市时间</td>
          <td>2019年冬季</td>
        </tr>
        <tr>
          <td>是否商场同款</td>
          <td>是</td>
        </tr>
        <tr>
          <td>吊牌图</td>
          <td><img src="../assets/images/21.jpg" alt=""></td>
        </tr>
        <tr>
          <td>适合路面</td>
          <td>小道、公路、跑道</td>
        </tr>
        <tr>
          <td>运动鞋科技</td>
          <td>Ultraboost</td>
        </tr>
        <tr>
          <td>吊牌价</td>
          <td>1099.00</td>
        </tr>
      </table>
    </div>
  </div>
  <div class="custom">自定义</div>
  <div><img src="../assets/images/20.png" alt=""></div>
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
      list: [
        "鞋子不错(12)",
        "穿着效果不错(10)",
        "尺码不错(7)",
        "物流快(18)",
        "很舒服(13)"
      ],
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
  width:100%;
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
  color: #fd5173;
  font-size: 20px;
  line-height: 36px;
  font-weight: 500;
}
.price .price1299 {
  font-size: 24px;
}
.introduce {
  padding: 3px 10px 0px;
  font-size: 14px;
  background: white;
}
.mess {
  padding: 0 10px;
  display: flex;
  height: 30px;
  line-height: 30px;
  background: white;
  margin-bottom: 10px;
}
.mess div {
  flex: 1;
  height: 30px;
  line-height: 30px;
  color: #999;
  font-size: 12px;
}
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.promotion {
  padding: 12px 10px;
  height: 60px;
  background: white;
  display: flex;
  color: #999;
  justify-content: space-between;
}
.promotion-title {
  font-size: 12px;
  width: 30px;
}
.activity {
  flex: 1;
  font-size: 12px;
}
.activity-one,
.activity-two {
  display: flex;
}
.pink {
  width: 36px;
  height: 18px;
  line-height: 18px;
  transform: scale(0.7);
}
.pink span {
  font-size: 14px;
  color: #ff0036;
  background: #fff5f7;
}
.black {
  color: black;
}
.service {
  padding: 10px;
  color: #999;
  display: flex;
  justify-content: space-between;
  background: white;
  margin-bottom: 10px;
}
.sevice-title {
  font-size: 12px;
  width: 30px;
}
.sevice-con ul li {
  color: #333;
  font-size: 12px;
  float: left;
  list-style-type: none;
}
.sevice-con {
  flex: 1;
}
.sevice-con ul li::after {
  content: "\00b7";
  padding: 0 6px;
}
.choose {
  color: #999;
  font-size: 12px;
  padding: 12px 10px;
  display: flex;
  justify-content: space-between;
  background: white;
}
.choose :nth-child(1) {
  width: 30px;
}
.choose-con {
  color: #333;
  flex: 1;
}
.goods-evaluate {
  padding: 6px;
  margin-top: 10px;
  background: white;
}
.goods-evaluate .header {
  margin: 6px;
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 14px;
}
.total {
  color: #ff0036;
  font-size: 13px;
}
.evaluate-list li {
  float: left;
  list-style-type: none;
  margin: 6px 3px;
  padding: 6px 9px;
  background: #ffeeee;
  color: #666;
  font-size: 12px;
  text-align: center;
  line-height: 14px;
  border-radius: 14px;
}
.evaluate-list {
  height: 38px;
  width: 100%;
  overflow: hidden;
}
.evaluate-wrap {
  margin: 4px 6px;
}
.thumb {
  border-radius: 50%;
  display: flex;
  margin: 0 0 10px;
  line-height: 16px;
  font-size: 12px;
  height: 24px;
}
.thumb img {
  width: 100%;
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
.thumb span {
  padding: 5px;
  color: #999;
}
.say-something {
  font-size: 13px;
  line-height: 16px;
  height: 32px;
  color: #051b28;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.time {
  padding: 8px 0 0;
  color: #999;
  font-size: 12px;
  margin-bottom: 6px;
}
.line {
  border-bottom: 1px solid #eee;
}
.question-wrap {
  padding: 0 12px 12px;
  background: white;
  margin-bottom: 10px;
}
.question {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}
.ques-title {
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: #666;
}
.look-app {
  color: #ff0036;
  font-size: 13px;
}
.ques-one,
.ques-two {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #051b28;
  height: 25px;
  line-height: 25px;
  font-weight: 400;
}
.answer {
  color: #999;
}
.wen {
  width: 14px;
  height: 14px;
  line-height: 14px;
  font-size: 14px;
  text-align: center;
  color: #fff;
  background-image: linear-gradient(90deg, #ff7b3f, #ff5000);
  margin-right: 3px;
  border-radius: 2px;
  display: inline-block;
}
.shop {
  background: white;
  padding: 10px;
  margin-bottom: 10px;
}
.shop-header {
  display: flex;
}
.shop-header img {
  width: 54px;
  height: 54px;
}
.shop-header > div {
  padding: 5px 10px;
}
.adidas {
  line-height: 18px;
  color: #333;
  font-size: 16px;
}
.tianmao {
  height: 16px;
  margin: 5px 0 2px 0;
  vertical-align: bottom;
  font-size: 12px;
  line-height: 16px;
  color: white;
  background: #fb1038;
  width: 32px;
  text-align: center;
  border-radius: 8px;
}
.shop-middle {
  display: flex;
  width: 100%;
  height: 18px;
  margin: 12px 0 10px;
}
.shop-middle > div {
  flex: 1;
  text-align: center;
}
.shop-title {
  color: #999;
  font-size: 12px;
  height: 18px;
  line-height: 18px;
}
.grade {
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  margin-right: 3px;
}
.grade-down {
  color: #00b78b;
}
.grade-up {
  color: #e43e4c;
}
.down {
  border-radius: 50%;
  color: white;
  background: #00b78b;
  font-size: 12px;
}
.up {
  border-radius: 50%;
  color: white;
  background: #e43e4c;
  font-size: 12px;
}
.shop-foot {
  display: flex;
  justify-content: center;
}
.shop-foot > div {
  border: 1px solid rgba(255, 0, 54, 0.5);
  height: 24px;
  line-height: 22px;
  font-size: 13px;
  color: rgba(255, 0, 54, 0.8);
  border-radius: 12px;
  text-align: center;
  width: 96px;
}
.shop-foot div:first-child {
  margin-right: 10px;
}
.look-look {
  height: 38px;
  line-height: 18px;
  padding: 10px;
  font-size: 12px;
  color: #051b28;
  background: white;
}
.sorry {
  text-align: center;
  height: 38px;
  line-height: 18px;
  padding: 10px;
  font-size: 12px;
  color: #051b28;
  background: white;
}
.detail {
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
}
.xiangqing {
  font-size: 12px;
  height: 18px;
  line-height: 18px;
  color: #999;
}
.boost {
  background-color: white;
  padding: 10px;
  font-size: 16px;
  height: 48px;
  line-height: 28px;
  color: #051b28;
  text-align: center;
  margin-bottom: 10px;
}
.pic-title ,.product-mess,.custom{
  background: white;
  font-weight: 400;
  height: 34px;
  line-height: 34px;
  padding: 6px 0 0 12px;
  font-size: 14px;
  color: #666;
  border-left: 3px solid #ff0036;
}
.pics{
  margin-bottom: 10px;
}
.pics img{
  margin-top:-5px
}
.custom{
  margin-bottom:10px
}
.mess-con{
  margin-bottom:10px;
  font-size:12px;
  line-height:24px;
  color:#999;
  padding:15px 12px 0 18px;
  background:rgb(248, 248, 248)
}
table{
  width:100%;
  border-collapse:separate
}
table img{
  width:90px;
  height:90px
}
table tr td:first-child{
  width:20%;
  padding-right:10px
}
</style>