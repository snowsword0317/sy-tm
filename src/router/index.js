import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Good from '../views/Good.vue'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
