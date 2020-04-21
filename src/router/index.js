import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/classify/index.vue'
import About from '../views/about/index.vue'
import Detail from '../views/detail'
import Favorite from '../views/favorite/index.vue'
import Feedback from '../views/feedback/index.vue'
import History from '../views/history'
import Login from '../views/login'
import Regist from '../views/regist'
import Mine from '../views/mine'
import Search from '../views/search'
import SerachResult from '../views/search-result/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/classify',
    component: Classify
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/favorite',
    component: Favorite
  },
  {
    path: '/feedback',
    component: Feedback
  },
  {
    path: '/history',
    component: History
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/regist',
    component: Regist
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/serach-result',
    component: SerachResult
  },
  {
    path: '/home',
    component: Home
  }

]

const router = new VueRouter({
  routes
})

export default router
