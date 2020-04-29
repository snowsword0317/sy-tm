<template>
  <div class="home-shell">
    <div class="home-top">
      <div class="home-top-top-shell">
        <router-link to="/classify" class="top-classify"></router-link>
        <div class="top-logo"></div>
        <router-link to="/login" class="top-login">登录</router-link>
      </div>
      <router-link to="/search" class="top-search">
        <input type="text" />
        <!-- todo:补充动画和input内容 -->
        <div></div>
        <div></div>
      </router-link>
    </div>
    <div class="home-second-top">
      <ul class="home-top-list">
        <li>
          <a
            href="https://suning.tmall.com/?pos=1&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547149173937_1699747&spm=a211ue.11501597.icon.1"
          >
            <div class="home-top-list-img">
              <img
                src="//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp" style="align: center;"
              />
            </div>
            <p>苏宁易购</p>
          </a>
        </li>
        <li>
          <a
            href="https://chaoshi.m.tmall.com/?pos=2&acm=201704071.1003.64.1699747&_ig=shoumao&scm=1003.64.201704071.OTHER_1545931209467_1699747&spm=a211ue.11501597.icon.2"
          >
            <div class="home-top-list-img">
              <img
                src="//gw.alicdn.com/tfs/TB1wSoFa5qAXuNjy1XdXXaYcVXa-196-196.png?avatar=1_110x10000.jpg_.webp"
              />
            </div>
            <p>天猫超市</p>
          </a>
        </li>
        <li>
          <a
            href="https://pages.tmall.com/wow/jinkou/act/zhiying?wh_from=icon&pos=3&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547673722287_1699747&spm=a211ue.11501597.icon.3"
          >
            <div class="home-top-list-img">
              <img
                src="//gw.alicdn.com/tfs/TB1Jc0fSFXXXXXTapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
              />
            </div>
            <p>天猫国际</p>
          </a>
        </li>
        <li>
          <a
            href="https://tb.cn/x/ju?pos=4&acm=201704071.1003.64.1699747&scm=1003.64.201704071.OTHER_1547844648097_1699747&spm=a211ue.11501597.icon.4"
          >
            <div class="home-top-list-img">
              <img
                src="//gw.alicdn.com/tfs/TB15lhOSFXXXXaKXpXXXXXXXXXX-147-147.png_110x10000.jpg_.webp"
              />
            </div>
            <p>聚划算</p>
          </a>
        </li>
        <li>
          <router-link to="/classify">
            <div class="home-top-list-img">
              <img
                src="//gw.alicdn.com/tfs/TB12CFXSFXXXXcpapXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
              />
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
            <a
              href="https://pages.tmall.com/wow/mit/act/download?mmstat=tb_homepagejiao&src=tb_homepage&pos=1&acm=201810194.1003.2.7697690&scm=1003.2.201810194.OTHER_1587988720254_7697690&firstModule=7&spm=a211ue.11501597.banner.1"
            >
              <img
                src="//gw.alicdn.com/tfs/TB17emto4n1gK0jSZKPXXXvUXXa-1035-390.png_790x10000.jpg_.webp"
                alt
              />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a
              href="https://shop491733054.m.taobao.com?pos=1&acm=&scm=1049.lyg_turing_-1_335.146383.146383-THJH_215488&spm=a211ue.11501597.banner.2"
            >
              <img
                src="//gw.alicdn.com/tps/i4/TB1NBFzCVY7gK0jSZKzSuuikpXa.jpg_790x10000Q75.jpg_.webp"
                alt
              />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a
              href="https://haier.tmall.com/shop/view_shop.htm?mytmenu=mdianpu&user_number_id=470168984&utkn=g,xkr3n65z3g333rxmxwrll2q1585880124865&pos=1&acm=&scm=1049.lyg_turing_-1_124.145284.145284-THJH_213897&spm=a211ue.11501597.banner.3"
            >
              <img
                src="//gw.alicdn.com/tps/i4/TB1if9eAKL2gK0jSZPhSuuhvXXa.jpg_790x10000Q75.jpg_.webp"
                alt
              />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a
              href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/1116/wupr?pos=1&wh_pid=daily-191884&acm=2017041213-1.1003.2.7704661&scm=1003.2.2017041213-1.OTHER_1589836459808_7704661&spm=a211ue.11501597.banner.4"
            >
              <img
                src="//gw.alicdn.com/tfs/TB1RmWvDND1gK0jSZFKXXcJrVXa-1035-390.jpg_790x10000Q75.jpg_.webp"
                alt
              />
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a href="https://pages.tmall.com/wow/a/act/tmall/dailygroup/1116/wupr?pos=1&wh_pid=daily-191884&acm=2017041213-1.1003.2.7704661&scm=1003.2.2017041213-1.OTHER_1589836459808_7704661&spm=a211ue.11501597.banner.4">
              <img src="//gw.alicdn.com/imgextra/i4/1365007/O1CN01Djx5s51mrFhL2zQ4c_!!1365007-0-lubanu.jpg_790x10000Q75.jpg_.webp" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
    <div class="home-promotion">
      <div class="home-promotion-small home-sale">
        <div class="home-promontion-title"></div>
        <div class="home-time"></div>
      </div>
      <div class="home-promotion-small home-goods"></div>
      <div class="home-promotion-small home-ju"></div>
      <div class="home-promotion-small home-sale"></div>
    </div>
    <div class="home-bottom-title">猜你喜欢</div>
    <ul class="home-bottom-goods">
      <li v-for="(item, index) in onelist" :key="index">
        <router-link
          :to="'/good?name='+item.name+'&thumb='+item.thumb+'&people='+item.people+'&post='+item.post+'&price='+item.price"
        >
          <div></div>
        </router-link>
      </li>
      <li>
        <a
          href="https://pages.tmall.com/wow/mit/act/download?firstModule=3&mmstat=tb_homepageprice&src=tb_homepageprice&spm=a211ue.11501597.new-recommend.dingkeng"
        >
          <img
            src="//gw.alicdn.com/tfs/TB1FRVUPAvoK1RjSZFwXXciCFXa-344-540.png_360x10000.jpg_.webp"
            alt
            class="redbag"
          />
        </a>
      </li>
      <li v-for="item in goodsList" :key="item.num">
        <router-link
          :to="'/good?name='+item.name+'&thumb='+item.thumb+'&people='+item.people+'&post='+item.post+'&price='+item.price"
        >商品详情</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

let onelist =[
  {
    num:"1",
    name:"2020短款春夏季七分袖外套小西装",
    thumb:"/goods-list/2.jpg",
    price:"99",
    people:"699",
    post:"0.00",
  }
];

export default {
  components: {
    Swiper,
    SwiperSlide
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
      onelist:onelist
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    goodsList() {
      return this.$store.state.goodsList;
    },
  },
  mounted() {
    this.swiper.slideTo(1, 1000, true);
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
  width: 80%;
  height: 100%;
  background: url(//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp)
    no-repeat center;
  background-size: 101px 17px;
}
.top-login {
  vertical-align: top;
  display: inline-block;
  height: 100%;
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: 12px;
  text-align: center;
  line-height: 38px;
}

.top-search {
  display: block;
  width: 100%;
  height: 39px;
}
.top-search > input {
  width: 95%;
  height: 80%;
  margin-left: 2.5%;
  border-radius: 5px;
  border: 1px transparent;
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
  max-height:100%;
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
  border: 1px solid seagreen;
  margin-left: 3%;
}

.home-sale {
  background: url(//gw.alicdn.com/tfs/TB1pg6qwx9YBuNjy0FfXXXIsVXa-518-512.png?avatar=1_360x10000.jpg_.webp) no-repeat;
  background-size: 100% 175%;
}
.home-goods {
  background: url(//gw.alicdn.com/tfs/TB1Wy_6rYZnBKNjSZFrXXaRLFXa-345-257.png?getAvatar=1_360x10000.jpg_.webp) no-repeat;
  background-size: 100% 100%;
}
.home-ju {
  background: url(//gw.alicdn.com/tfs/TB1XWMYymzqK1RjSZFLXXcn2XXa-345-237.png?avatar=1_360x10000.jpg_.webp) no-repeat;
  background-size: 100% 100%;
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
  grid-template-columns: 49.5% 49.5%;
  list-style-type: none;
  background: url(//gw.alicdn.com/tfs/TB1Pq4.x9zqK1RjSZPcXXbTepXa-750-294.png_790x10000.jpg_.webp)
    no-repeat;
  background-size: 100% 125px;
}
.home-bottom-goods > li {
  height: 228px;
  margin: 5px 5px;
  border: 1px solid salmon;
}
.redbag {
  width: 100%;
  height: 100%;
}
</style>