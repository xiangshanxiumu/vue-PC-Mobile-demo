import Vue from 'vue'
import Router from 'vue-router'
import common from './common'
import mobile from './mobile'
import pc from './pc'
Vue.use(Router)

let router = new Router({
  routes: [
    ...common,
    ...mobile,
    ...pc
  ]
})
/**
 * 判断是否移动端,是则切换到移动端,不是则切换到PC端
 */
const autoSwitchPcAndMobile = (to, from, next) => {
  let u = navigator.userAgent
  if (u.indexOf('Mobile') > -1) {
    // console.log('Mobile')
    if (/pc/.test(to.path)) {
      next({
        // 替换 移动端 路由 统一 mobile/ 下面
        path: to.path.replace(/pc/, 'mobile')
      })
    }
  } else {
    // console.log('PC')
    if (/mobile/i.test(to.path)) {
      next({
        // 替换 移动端 路由 统一 pc/ 下面
        path: to.path.replace(/mobile/, 'pc')
      })
    }
  }
}
router.beforeEach((to, from, next) => {
  // 设置页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  // 窗口变化触发自动切换
  window.onresize = () => {
    autoSwitchPcAndMobile(to, from, next)
  }
  next()
})
export default router
