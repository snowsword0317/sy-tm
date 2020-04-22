import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Good from '../views/Good.vue'
import Classify from '../views/Classify.vue'

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
    path:'/classify',
    component: Classify
  }
]

const router = new VueRouter({
  routes
})

export default router
