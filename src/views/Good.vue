<template>
  <div class="outer">
    <div class="my-swiper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide><img src="../assets/images/1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/4.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/5.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
      <div class="top">
        <div class="back iconfont">&#xe61c;</div>
        <div class="bar iconfont">&#xe658;</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

  export default {
    name: 'swiper-example-pagination-fraction',
    title: 'Fraction pagination',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style scoped>
  .outer{
    background: #f3f3f3;
    /* height:100% */
  }
  img{
    width:100%
  }
  .my-swiper{
    position: relative;
  }
  .swiper-button-prev,.swiper-button-next{
    color:#666
  }
  .swiper{
    position: relative;
  }
  .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    right:10px
  }
  .swiper-pagination{
    text-align: center;
    width:36px;
    font-size: 12px;
    position: absolute;
    right:10px;
    height:20px;
    border-radius: 10px;
    word-spacing:-4px;
    line-height:20px;
    background: #9a9b9d;
    color:white
  }
  .top{
    position: absolute;
    top: 0;
    z-index: 10;
    width:100%;
    height:44px;
    background: -webkit-linear-gradient(rgba(0,0,0,.15),transparent);
  }
  .back,.bar{
    width:30px;
    height:30px;
    padding:5px;
    margin:8px;
    border-radius: 50%;
    font-size:20px;
    background: #494949;
    opacity: 0.6;
    z-index: 10;
    color:white;
    font-weight: 600;
  }
  .back{
    position: absolute;
    top:0;
    left:2
  }
  .bar{
    position: absolute;
    top:0px;
    right:2px;
  }
  
</style>
