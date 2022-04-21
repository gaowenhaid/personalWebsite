/*
 * @Date: 2022-04-21 14:49:15
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 16:41:25
 * @FilePath: \personalweb\src\utils\request.js
 */
import nprogress from 'nprogress'
import axios from 'axios'
let request = axios.create()
request.interceptors.request.use(config => {
  nprogress.start()
  return config
}, error => {
  return Promise.reject(error)
}
)
request.interceptors.response.use(response => {
  nprogress.done()
  return response
}
  , error => {
    return Promise.reject(error)
  }
)
export default request