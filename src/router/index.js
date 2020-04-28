import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
// import Hello from '../views/Hello'
import Favorite from '../views/Hello/Favorite'
import History from '../views/Hello/History'
import Login from '../views/Login'
import My from '../views/My'
import Ranking from '../views/Ranking'
import Register from '../views/Register'
import Search from '../views/Search'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'
import Bigbookid from '../views/Bigbookid'
// 引入加载条插件
import NProgress from 'nprogress'
// 引入加载条的样式
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
      path: '/history',
      component: History
    },
    {
      path: '/favorite',
      component: Favorite
    },
    { path: '/login', component: Login },
    { path: '/bigbookid', component: Bigbookid },
    {
      path: '/my',
      component: My,
      beforeEnter: (to, from, next) => { // 路由独享守卫 前置
        console.log('路由独享守卫 目的是看看有没有登录')
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
          next()
        } else {
          next('/login')
        }
      }
    },
    { path: '/ranking', component: Ranking },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/search-result', component: SearchResult },
    { path: '/vip', component: Vip },
    { path: '/', redirect: '/home' }
  ]
})
// 全局前置守卫 进入每一个路由都会触发的这个守卫
// next()  必须有回调才能进行下去
// to  是要进行的下一个路由的信息
// from 是当前路由的信息对象
router.beforeEach((to, from, next) => {
  // 加载条  启动
  NProgress.start()
  // 关闭加载旋转器
  NProgress.configure({ showSpinner: false })
  next()
})
router.afterEach((to, from) => {
  // 加载条 取消
  NProgress.done()
})
export default router
