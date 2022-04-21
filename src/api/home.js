/*
 * @Date: 2022-04-21 14:51:34
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 16:39:49
 * @FilePath: \personalweb\src\api\home.js
 */
import axios from '@/utils/request.js'

export const getHomeImage = () => {
  return axios({
    url:'apis/random.php?ret=json',
    methods:'get',
  })
}