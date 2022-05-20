import Axios from 'axios'
import config from '../config'

Axios.defaults.baseURL = config.apiBaseUrl
Axios.defaults.timeout = 10000000
Axios.defaults.headers['Content-Type'] = 'application/json; charset=utf-8'

window.__axiosPromiseArr = []

// Axios 请求拦截器
Axios.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8'
  config.headers['responseType'] = 'blob'
  // 将cancel放置于全局变量的数组中, 用于取消请求
  config.cancelToken = new Axios.CancelToken(cancel => {
    window.__axiosPromiseArr.push({
      cancel
    })
  })
  return config
})

// Axios 响应拦截器 对返回码进行处理处理
Axios.interceptors.response.use(res => {
  if (res.status === 200) {
    //  处理文件流接口
    if (res.headers['content-disposition']) {
      return res
    }
    if (res.data.rspCd === '00000') {
      return res.data.data
    } else if (res.data.rspCd === '30002') {
      return Promise.reject(res.data.rspInf)
    }
  }
  return Promise.reject(res.data.rspInf)
}, err => {
  if (err.response) {
    switch (err.response.status) {
      case 502:
        break
      case 401:
        break
      case 404:
        break
      case 405:
        break
      default:
        break
    }
  }
  return Promise.reject(err.response)
})