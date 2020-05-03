import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 会生成一个$store 实例
  state: {
    city: '北京',
    num: 0,
    name: '喜爱阿天',
    age: 888
  },
  // 修改state的数据 别的不行
  mutations: {
    increment: (state, payload) => {
      // state 仓库|公共数据 payload携带的负载 // mutations 不做业务,只负责突变state
      state.name = payload
    },
    setcity (state, payload) { state.city = payload }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    setname: function (state) {
      return state.name.substr(0, 1)
    }
    // 处理的公共数据 类是于计算属性中的计算属性中的方法
  }
})
