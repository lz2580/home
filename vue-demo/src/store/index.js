import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)
// 创建Vuex仓库

export default new Vuex.Store({
  // 公用数据
  state,
  mutations
  // 类似于计算属性
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' +state.city
  //   }
  // }
})
