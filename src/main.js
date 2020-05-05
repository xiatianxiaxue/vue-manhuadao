import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './assets/styles/base.scss'
import 'lib-flexible'
Vue.config.productionTip = false

// 全局定义一个过滤器。formatYi
// Vue.filter('formatYi', (value) => {
//   console.log('value: ', value)
//   return `${value}亿`
// })
// vue 图片懒加载 VueLazyload
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/icon/logo.png'),
  loading: require('./assets/icon/logo.png'),
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
