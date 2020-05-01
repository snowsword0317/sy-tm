<template>
  <div class="home-shell">
    <div class="home-top">
      <div class="home-top-top-shell">
        <router-link to="/classify" class="top-classify"></router-link>
        <div class="top-logo"></div>
        <div class="top-login" @click="tab(1)"></div>
      </div>
      <router-link to="/search" class="top-search">
        <input type="text" placeholder="搜索商品，品牌" />
        <!-- todo:补充动画和input内容 -->
        <div class="top-search-img"></div>
      </router-link>
    </div>
    <div class="home-second-top">
      <ul class="home-top-list">
        <li>
          <a href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1">
            <div class="home-top-list-img">
              <img src="/home/classify/1.jpg" style="align: center;" />
            </div>
            <p>苏宁易购</p>
          </a>
        </li>
        <li>
          <a href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2">
            <div class="home-top-list-img">
              <img src="/home/classify/2.png" />
            </div>
            <p>天猫超市</p>
          </a>
        </li>
        <li>
          <a href="https://pages.tmall.com/wow/jinkou/act/zhiying?wh_from=icon&pos=3&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547673722287_1699747&spm=a211ue.11501597.icon.3">
            <div class="home-top-list-img">
              <img src="/home/classify/3.jpg" />
            </div>
            <p>天猫国际</p>
          </a>
        </li>
        <li>
          <a href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4">
            <div class="home-top-list-img">
              <img src="/home/classify/4.jpg" />
            </div>
            <p>聚划算</p>
          </a>
        </li>
        <li>
          <router-link to="/classify">
            <div class="home-top-list-img">
              <img src="/home/classify/5.jpg" />
            </div>
            <p>分类</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="home-roll">
      <div class="roll-shell">
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="slide">
            <a href="https://pages.tmall.com/wow/mit/act/download?mmstat=tb_homepagejiao&src=tb_homepage&pos=1&acm=201810194.1003.2.7697690&scm=1003.2.201810194.OTHER_1587988720254_7697690&firstModule=7&spm=a211ue.11501597.banner.1">
              <img src="/home/roll/1.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a href="https://shop491733054.m.taobao.com?pos=1&acm=&scm=1049.lyg_turing_-1_335.146383.146383-THJH_215488&spm=a211ue.11501597.banner.2">
              <img src="/home/roll/2.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a href="https://haier.tmall.com/shop/view_shop.htm?mytmenu=mdianpu&user_number_id=470168984&utkn=g,xkr3n65z3g333rxmxwrll2q1585880124865&pos=1&acm=&scm=1049.lyg_turing_-1_124.145284.145284-THJH_213897&spm=a211ue.11501597.banner.3">
              <img src="/home/roll/3.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/1116/wupr?pos=1&wh_pid=daily-191884&acm=2017041213-1.1003.2.7704661&scm=1003.2.2017041213-1.OTHER_1589836459808_7704661&spm=a211ue.11501597.banner.4">
              <img src="/home/roll/4.jpg" alt />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/1116/wupr?pos=1&wh_pid=daily-191884&acm=2017041213-1.1003.2.7704661&scm=1003.2.2017041213-1.OTHER_1589836459808_7704661&spm=a211ue.11501597.banner.4">
              <img src="/home/roll/5.jpg" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="home-promotion">
      <div class="home-promotion-small home-sale">
        <div class="home-promontion-title">限时抢购</div>
        <div class="home-time">
          <span>{{hou}}</span>:
          <span>{{min}}</span>:
          <span>{{sec}}</span>
        </div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/1.jpg" />
              <span>实属好货</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/2.jpg" />
              <span>限时特价</span>
            </a>
          </div>
        </div>
      </div>
      <div class="home-promotion-small home-goods">
        <div class="home-promontion-title">天猫好物</div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/3.jpg" />
              <span>时髦设计</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="https://jupage.taobao.com/wow/tqg/act/tqgtmallhome?wh_weex=true&wh_biz=tm&wx_navbar_transparent=true&topJuIds=10001021484493,10001007791869&wx_navbar_hidden=true&wx_navbar_transparent=true&disableNav=YES&spm=a211ue.11501597.flash_sale.1">
              <img src="/home/promontion/4.jpg" />
              <span>半身裙</span>
            </a>
          </div>
        </div>
      </div>
      <div class="home-promotion-small home-ju">
        <div class="home-promontion-title">聚划算</div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="#">
              <img src="/home/promontion/5.jpg" />
              <span>满199元减免</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="#">
              <img src="/home/promontion/6.jpg" />
              <span>抢100元券</span>
            </a>
          </div>
        </div>
      </div>
      <div class="home-promotion-small home-sale">
        <div class="home-promontion-title">天猫闪降</div>
        <div class="home-promontion-in-shell">
          <div class="home-promontion-in-one">
            <a href="#">
              <img src="/home/promontion/7.jpg" />
              <span>人气爆款</span>
            </a>
          </div>
          <div class="home-promontion-in-two">
            <a href="#">
              <img src="/home/promontion/8.jpg" />
              <span>降价好货</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="home-bottom-title">猜你喜欢</div>
    <ul class="home-bottom-goods">
      <li v-for="(item, index) in onelist" :key="index">
        <router-link class="home-bottom-goods-link" :to="'/good?name='+item.name+'&thumb='+item.thumb+'&people='+item.people+'&post='+item.post+'&price='+item.price">
          <div class="home-bottom-goods-img">
            <img :src="item.thumb" alt />
          </div>
          <div class="home-bottom-goods-brand">{{item.brand}}</div>
          <div class="home-bottom-goods-name">{{item.name}}</div>
          <div class="home-bottom-goods-sale">{{item.sale}}</div>
          <div class="home-bottom-goods-price">￥{{item.price}}</div>
          <div class="home-bottom-goods-btn">看相似</div>
        </router-link>
      </li>
      <li>
        <a href="https://pages.tmall.com/wow/mit/act/download?firstModule=3&mmstat=tb_homepageprice&src=tb_homepageprice&spm=a211ue.11501597.new-recommend.dingkeng">
          <img src="//gw.alicdn.com/tfs/TB1FRVUPAvoK1RjSZFwXXciCFXa-344-540.png_360x10000.jpg_.webp" alt class="redbag" />
        </a>
      </li>
      <li v-for="item in goodsList" :key="item.num">
        <router-link class="home-bottom-goods-link" :to="'/good?name='+item.name+'&thumb='+item.thumb+'&people='+item.people+'&post='+item.post+'&price='+item.price">
          <div class="home-bottom-goods-img">
            <img :src="item.thumb" alt />
          </div>
          <div class="home-bottom-goods-brand">{{item.brand}}</div>
          <div class="home-bottom-goods-name">{{item.name}}</div>
          <div class="home-bottom-goods-sale">{{item.sale}}</div>
          <div class="home-bottom-goods-price">￥{{item.price}}</div>
          <div class="home-bottom-goods-btn">看相似</div>
        </router-link>
      </li>
    </ul>
    <img v-if="btnFlag" class="go-top" src="/home/top/1.jpg" @click="backTop" />
    <div>
      <component :is="tabname" v-if="showtab"></component>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { onelist } from "../components/home/onelist.js";
import user from "../components/home/user.vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
    "user":user,
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      swiperOptions: {
        direction: "horizontal",
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 5000 // 自动切换的时间间隔（单位ms）
        },
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      onelist: onelist,
      btnFlag: "",
      hou: 0,
      min: 0,
      sec: 0,
      tabname: "user",
      pageindex: 1,
      showtab:false
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    goodsList() {
      return this.$store.state.goodsList;
    }
  },
  created() {
    let that = this;
    that.time();
  },
  mounted() {
    this.swiper.slideTo(1, 1000, true);
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 100) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
    time() {
      var that = this;
      var interval = setInterval(function timestampToTime() {
        var date = new Date(2020, 5, 5, 15, 30, 0, 999) - new Date().getTime();
        //new Date当前的时间戳，也可以换成自定义的时间戳
        if (date > 0) {
          let time = date / 1000;
          // 获取时、分、秒,毫秒
          that.hou =
            parseInt((time % (60 * 60 * 24)) / 3600) < 10
              ? "0" + parseInt((time % (60 * 60 * 24)) / 3600)
              : parseInt((time % (60 * 60 * 24)) / 3600);
          that.min =
            parseInt(((time % (60 * 60 * 24)) % 3600) / 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) / 60);
          that.sec =
            parseInt(((time % (60 * 60 * 24)) % 3600) % 60) < 10
              ? "0" + parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
              : parseInt(((time % (60 * 60 * 24)) % 3600) % 60);
        } else {
        }
      }, 1000);
    },
    tab(index) {
      this.pageindex = index;
      if ((index = 1)) {
        this.tabname = "user";
        this.showtab=true
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* 顶部栏固定定位用 */
.home-shell {
  position: relative;
}
/* 顶部栏页面 */
.home-top {
  width: 100%;
  height: 77px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgb(255, 0, 54);
}
.home-top-top-shell {
  width: 100%;
  height: 38px;
}
.top-classify {
  display: inline-block;
  width: 35px;
  height: 100%;
  background: url(//gw.alicdn.com/tfs/TB17oY3qbGYBuNjy0FoXXciBFXa-564-62.png_620x10000.jpg_.webp)
    no-repeat;
  background-size: 256px 28px;
  background-position: 10px 5px;
  vertical-align: top;
}
.top-logo {
  display: inline-block;
  width: 79%;
  height: 100%;
  background: url(//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp)
    no-repeat center;
  background-size: 101px 17px;
}
.top-login {
  vertical-align: top;
  float: right;
  width: 8%;
  margin-right: 2%;
  height: 100%;
  background: url(//gw.alicdn.com/tfs/TB17oY3qbGYBuNjy0FoXXciBFXa-564-62.png_620x10000.jpg_.webp)
    no-repeat;
  background-size: 256px 28px;
  background-position: -34px 6px;
}

.top-search {
  display: block;
  width: 100%;
  height: 39px;
  position: relative;
}
.top-search > input {
  width: 95%;
  height: 80%;
  margin-left: 2.5%;
  border-radius: 5px;
  border: 1px transparent;
  padding-left: 10%;
  color: rgba(0, 0, 0, 0.3);
}
.top-search-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 35px;
  height: 100%;
  background: url(//gw.alicdn.com/tfs/TB17oY3qbGYBuNjy0FoXXciBFXa-564-62.png_620x10000.jpg_.webp)
    no-repeat;
  background-size: 256px 28px;
  background-position: -59px 3px;
}

/* 次级选择栏 */
.home-second-top {
  margin-top: 77px;
  height: 65px;
}

.home-top-list {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  list-style-type: none;
  padding: 0px 10px;
}
.home-top-list > li {
  height: 65px;
}
.home-top-list-img {
  width: 42px;
  height: 42px;
  margin: 2px auto 4px auto;
}
.home-top-list-img > img {
  width: 100%;
  height: 100%;
}
.home-top-list > li > a {
  text-decoration: none;
}
.home-top-list > li > a > p {
  font-size: 11.0933px;
  text-align: center;
  line-height: 12.8px;
  color: rgb(0, 0, 0);
}

/*轮播图  */
.home-roll {
  height: 113px;
}
.roll-shell {
  width: 94%;
  height: 100px;
  margin: 2% 10px;
}
.slide {
  width: 100%;
  height: 100px;
}

.slide > a {
  display: block;
}
.slide > a > img {
  width: 100%;
  height: 100%;
  max-height: 100%;
}

/* 促销栏 */
.home-promotion {
  height: 233px;
  /* border: 1px solid skyblue; */
}

.home-promotion-small {
  display: inline-block;
  width: 45.5%;
  height: 48%;
  margin-left: 3%;
  margin-bottom: 2%;
  vertical-align: top;
}

.home-sale {
  background: url(//gw.alicdn.com/tfs/TB1pg6qwx9YBuNjy0FfXXXIsVXa-518-512.png?avatar=1_360x10000.jpg_.webp)
    no-repeat;
  background-size: 100% 175%;
}
.home-goods {
  background: url(//gw.alicdn.com/tfs/TB1Wy_6rYZnBKNjSZFrXXaRLFXa-345-257.png?getAvatar=1_360x10000.jpg_.webp)
    no-repeat;
  background-size: 100% 100%;
}
.home-ju {
  background: url(//gw.alicdn.com/tfs/TB1XWMYymzqK1RjSZFLXXcn2XXa-345-237.png?avatar=1_360x10000.jpg_.webp)
    no-repeat;
  background-size: 100% 100%;
}
.home-promontion-title {
  font-size: 13.6533px;
  color: rgb(32, 32, 32);
  font-weight: bold;
  display: inline-block;
  margin-top: 13px;
  margin-left: 5%;
}
.home-time {
  margin-left: 8%;
  display: inline-block;
  font-size: 11.0933px;
}
.home-time > span {
  background-color: rgb(0, 0, 0);
  font-size: 11.0933px;
  color: white;
  border-radius: 3px;
}
.home-promontion-in-shell {
  width: 92%;
  height: 65%;
  margin-left: 4%;
}
.home-promontion-in-one,
.home-promontion-in-two {
  vertical-align: top;
  display: inline-block;
  width: 50%;
  height: 100%;
  position: relative;
}
.home-promontion-in-one > a > img {
  width: 100%;
  height: 100%;
}
.home-promontion-in-one > a > span {
  display: inline-block;
  height: 10.24px;
  line-height: 9.38667px;
  position: absolute;
  left: 10%;
  top: 80%;
  color: rgb(255, 0, 54);
  font-size: 8.53333px;
  background-color: rgb(255, 237, 241);
  max-width: 66.1333px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.home-promontion-in-two > a > img {
  width: 100%;
  height: 100%;
}
.home-promontion-in-two > a > span {
  display: inline-block;
  height: 10.24px;
  line-height: 9.38667px;
  position: absolute;
  left: 10%;
  top: 80%;
  color: rgb(255, 0, 54);
  font-size: 8.53333px;
  background-color: rgb(255, 237, 241);
  max-width: 66.1333px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

/* 底部 */
.home-bottom-title {
  height: 34px;
  font-size: 15.36px;
  color: rgb(51, 51, 51);
  font-weight: bold;
  line-height: 40px;
  padding-left: 5px;
}
.home-bottom-goods {
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 49.5% 49.5%;
  list-style-type: none;

  background: url(//gw.alicdn.com/tfs/TB1Pq4.x9zqK1RjSZPcXXbTepXa-750-294.png_790x10000.jpg_.webp)
    no-repeat;
  background-size: 100% 125px;
}
.home-bottom-goods > li {
  height: 228px;
  margin-left: 10px;
  margin-right: 5px;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  font-size: 11.9467px;

  border: 0.853333px solid rgb(237, 237, 237);
  background-color: white;
}
.home-bottom-goods-link {
  text-decoration: none;
}
.home-bottom-goods-img {
  width: 117.75px;
  height: 117.75px;
  margin: 10px auto 5px auto;
}
.home-bottom-goods-img > img {
  width: 100%;
  height: 100%;
}
.home-bottom-goods-brand {
  width: 85%;
  margin: 0 auto;
  text-align: center;
  text-decoration: none;
  background-color: rgb(205, 163, 177);
  color: white;
}
.home-bottom-goods-name {
  width: 85%;
  height: 31px;
  margin: 1px auto 3px auto;
  color: rgb(62, 62, 62);
  overflow: hidden;
  text-overflow: ellipsis;
}
.home-bottom-goods-sale {
  margin-left: 8%;
  margin-bottom: 2px;
  width: 30%;
  color: rgb(255, 0, 54);
  border: 1px solid rgb(255, 0, 54);
  font-size: 9.38667px;
  height: 11.0933px;
  line-height: 11.0933px;
}
.home-bottom-goods-price {
  margin-left: 8%;
  color: rgb(255, 0, 0);
  display: inline-block;
  font-size: 13.6533px;
  font-weight: 600;
  line-height: 23.8933px;
}
.home-bottom-goods-btn {
  float: right;
  /* display: inline-block; */
  background-color: rgb(255, 230, 235);
  width: 35%;
  border-radius: 10px;
  color: rgb(255, 0, 54);
  font-size: 9.38667px;
  height: 19.6267px;
  text-align: center;
  margin-right: 5%;
}

.redbag {
  width: 100%;
  height: 100%;
}
</style>