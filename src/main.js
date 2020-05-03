import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/base.scss'
import 'lib-flexible'
Vue.config.productionTip = false

// 全局定义一个过滤器。formatYi
// Vue.filter('formatYi', (value) => {
//   console.log('value: ', value)
//   return `${value}亿`
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
