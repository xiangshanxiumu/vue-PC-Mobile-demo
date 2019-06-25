import Vue from 'vue'
import Vuex from 'vuex'
// PC 和 Mobile共享的 store
import common from './common'
// PC端 store
import pc from './pc'
// Mobile端 store
import mobile from './mobile'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    pc,
    mobile
  }
})
