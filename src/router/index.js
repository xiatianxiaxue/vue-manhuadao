import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import Classify from '../views/Classify'
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
import Aboutmy from '../views/Aboutmy'
// import Aboutmy from '../views/Aboutmy'
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
      component: History,
      meta: {
        needlogin: true
      }
    },
    {
      path: '/favorite',
      component: Favorite,
      meta: {
        needlogin: true
      }
    },
    { path: '/login', component: Login },
    { path: '/bigbookid', component: Bigbookid },
    {
      path: '/my',
      component: My,
      meta: {
        // 判断是否需要登录后才能进入功能
        needlogin: true
      }
    },
    { path: '/aboutmy', component: Aboutmy },
    { path: '/ranking', component: Ranking },
    { path: '/register', component: Register },
    { path: '/search', component: Search },
    { path: '/search-result', component: SearchResult },
    {
      path: '/vip',
      component: Vip,
      meta: {
        needlogin: true
      }
    },
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
  // NProgress.con figure({ showSpinner: true })
  NProgress.configure({ showSpinner: false })
  // 判断在to 中是否有needlogin
  if (to.meta.needlogin) {
    // 如果有就表示需要登录 没有就放行
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      next()
    } else {
      next('/login')
    }
  }
  next()
})

router.afterEach((to, from) => {
  // 加载条 取消
  NProgress.done()
})
export default router
