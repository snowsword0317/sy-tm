<template>
  <div>
    <div class="home-top"></div>
    <div class="home-second-top">
      <ul class="home-top-list">
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <a href></a>
        </li>
        <li>
          <router-link to="/classify">分类</router-link>
        </li>
      </ul>
    </div>
    <div class="home-roll"></div>
    <div class="home-promotion"></div>
    <div class="home-bottom-title"></div>
    <ul class="home-bottom-goods">
      <li></li>
      <li><a href=""></a></li>
      <li><router-link to="/good">商品详情</router-link></li>
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
.home-shell {
  height: 100%;
  border: 1px solid sandybrown;
}
.home-top {
  height: 78px;
  border: 1px solid skyblue;
}
.home-second-top {
  height: 65px;
  border: 1px solid skyblue;
}
.home-roll {
  height: 113px;
  border: 1px solid skyblue;
}
.home-top-list {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  list-style-type: none;
  padding: 0px 10px;
}
.home-top-list > li {
  height: 65px;
  border: 1px solid seagreen;
  padding: 8px;
}
.home-promotion {
  height: 233px;
  border: 1px solid skyblue;
}
.home-bottom-title {
  height: 34px;
  border: 1px solid skyblue;
}
.home-bottom-goods {
  display: grid;
  grid-template-columns: 49.5% 49.5%;
  list-style-type: none;
  
}
.home-bottom-goods>li{
    height: 228px;
    margin: 5px 5px;
    border: 1px solid salmon;
}
</style>