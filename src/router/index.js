import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Good from '../views/Good.vue'
import Classify from '../views/Classify.vue'
import Login from '../views/Login.vue'
import Car from '../views/Car.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/good',
    component: Good
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/car',
    component: Car
  },
  {
    path:'/classify',
    component: Classify
  },
  {
    path:'/search',
    component:Search
  }
]

const router = new VueRouter({
  routes
})

export default router
