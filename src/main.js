// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// pc端element-ui 按需引入
import { Button, Loading } from 'element-ui'
// 引入移动端mint-ui
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import http from './global/http'

// http 挂载到vue prototype
Vue.prototype.$http = http
Vue.config.productionTip = false

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.use(Button).use(Loading)

Vue.use(Mint)
/* eslint-disable no-new */
window.vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
