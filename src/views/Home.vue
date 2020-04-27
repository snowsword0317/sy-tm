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
                src="//gw.alicdn.com/tfs/TB1ISdWSFXXXXbFXXXXXXXXXXXX-146-147.png_110x10000.jpg_.webp"
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
    <div class="home-roll"></div>
    <div class="home-promotion"></div>
    <div class="home-bottom-title">猜你喜欢</div>
    <ul class="home-bottom-goods">
      <li>
        <router-link to="/good">商品详情</router-link>
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
      <li>
        <router-link to="/good">商品详情</router-link>
      </li>
      <li>
        <router-link to="/good">商品详情</router-link>
      </li>
      <li>
        <router-link to="/good">商品详情</router-link>
      </li>
      <li>
        <router-link to="/good">商品详情</router-link>
      </li>
      <li>
        <router-link to="/good">商品详情</router-link>
      </li>
      <li>
        <router-link to="/good">商品详情</router-link>
      </li>
      <li>
        <router-link to="/good">商品详情</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
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
  background-color: rgb(255, 0, 54);
}
.home-top-top-shell {
  width: 100%;
  height: 38px;
}
.top-classify {
  display: inline-block;
  width: 12%;
  height: 100%;
  background: url(//gw.alicdn.com/tfs/TB17oY3qbGYBuNjy0FoXXciBFXa-564-62.png_620x10000.jpg_.webp)
    no-repeat;
  background-size: 256px 28px;
  background-position: 10px 5px;
  vertical-align: top;
}
.top-logo {
  display: inline-block;
  width: 76%;
  height: 100%;
  background: url(//gw.alicdn.com/tfs/TB1wQw8qamWBuNjy1XaXXXCbXXa-237-41.png_240x10000.jpg_.webp)
    no-repeat;
  background-size: 101px 17px;
  background-position: 70px 10px;
  vertical-align: top;
}
.top-login {
  vertical-align: top;
  display: inline-block;
  width: 12%;
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
  margin: 2px 9px 4px 9px;
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
  border: 1px solid skyblue;
}
/* 促销栏 */
.home-promotion {
  height: 233px;
  border: 1px solid skyblue;
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