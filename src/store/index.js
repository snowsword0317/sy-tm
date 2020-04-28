import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList:[
      {
        num:"1",
        name:"阿迪达斯官网UltraBOOST w女跑步运动鞋BB6149 BB6308",
        thumb:"/goods-list/1.jpg",
        price:"1299",
        people:"1299",
        post:"0.00",
      },
      {
        num:"2",
        name:"CONVERSE匡威官方 Chuck 70 潮流帆布鞋高帮男女休闲鞋 167668C",
        thumb:"/goods-list/25.jpg",
        price:"599",
        people:"3846",
        post:"7.00"
      },
      {
        num:"3",
        name:"【蒂梵】黑.白 随意拉伸不变形18k金记忆金管手镯 海水珍珠手链",
        thumb:"/goods-list/26.jpg",
        price:"1880",
        people:"1",
        post:"免运费"
      },
      {
        num:"4",
        name:"v领长袖衬衫女装2020春秋新款法式设计感小众很仙的港风粉色上衣",
        thumb:"/goods-list/27.jpg",
        price:"169",
        people:"1879",
        post:"免运费"
      },
      {
        num:"5",
        name:"CONVERSE匡威官方 Jack Purcell 开口笑 简约百搭休闲鞋 167706C",
        thumb:"/goods-list/28.jpg",
        price:"469",
        people:"1080",
        post:"7.00"
      },
      {
        num:"6",
        name:"Dr.Althea艾西儿医生壳聚糖精华乳液70ml修复肌肤屏障镇静补水冬",
        thumb:"/goods-list/29.jpg",
        price:"179",
        people:"18",
        post:"0.00"
      },
      {
        num:"7",
        name:"母亲节向日葵鲜花云南直发玫瑰花小雏菊百合花束表白速递同城生日",
        thumb:"/goods-list/30.jpg",
        price:"9.9",
        people:"483",
        post:"0.00"
      },
      {
        num:"8",
        name:"黑鱼20000毫安充电宝超薄小巧便携大容量迷你个性创意移动电源潮",
        thumb:"/goods-list/31.jpg",
        price:"129",
        people:"83",
        post:"0.00"
      },
      {
        num:"9",
        name:"娜丽丝太阳伞防晒喷雾女学生防水全身防晒霜防紫外线隔离面部女",
        thumb:"/goods-list/32.jpg",
        price:"948",
        people:"168",
        post:"免运费"
      },
      {
        num:"10",
        name:"电脑桌简约现代台式桌办公桌简易桌子家用书桌学生书架卧室写字桌",
        thumb:"/goods-list/33.jpg",
        price:"208",
        people:"255",
        post:"0.00"
      },
    ],
    carList:[],
    uname:"hahaha",
    pwd:"123123"
  },
  mutations: {
    pushCarList(state,goods){
      for(let i=0;i<state.carList.length;i++){
        if(state.carList[i].name == goods.name){
          state.carList[i].per++
          return
        }
      }
      state.carList.push(goods);
      console.log(state.carList);
    },
    deleteGoods(state,index){
      state.carList.splice(index,1)
    },
    minus(state,index){
      if(state.carList[index].per>0){
        state.carList[index].per--
      }
    },
    plus(state,index){
      state.carList[index].per++
    },
  },
  actions: {
  },
  modules: {
  }
})
