/** axios封装的拦截器的http */
import axios from 'axios'

import qs from 'qs'

axios.defaults.timeout = 6000 // 超时时间 单位毫秒
axios.defaults.baseURL = 'XXXXXX' // 请求根路径配置 最好外部项目配置文件引入
axios.defaults.retry = 3
axios.defaults.retryDelay = 1000
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.params) { // 接口params.isLoadingShow参考控制
    if (config.params.isLoadingShow) {
      // 显示loading
      window.vm.$store.commit('showLoading')
    }
  }
  // 设置数据格式
  config.headers.Accept = 'application/json'
  // post请求参数格式转换
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  // authentication() 外部封装引入
  // ...
  return config
}, function (error) {
  // 对请求错误做些什么
  // 隐藏loading
  window.vm.$store.commit('hideLoading')
  // errorRequestHandle() 外部封装引入
  // ...
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 隐藏loading
  window.vm.$store.commit('hideLoading')
  // responseHandle() 外部封装引入
  // ...
  return response
}, function (error) {
  // 对响应错误做点什么
  // 隐藏loading
  window.vm.$store.commit('hideLoading')
  // errorResponseHandle() 外部封装引入
  // ...
  return Promise.reject(error)
})

export default axios
