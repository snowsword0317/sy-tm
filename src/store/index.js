import Vue from 'vue'
import Vuex from 'vuex'
import {goodsList} from "../components/good/goodsList.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    goodsList:goodsList,
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
