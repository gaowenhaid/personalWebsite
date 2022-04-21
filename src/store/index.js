/*
 * @Date: 2022-04-21 14:52:21
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 15:00:23
 * @FilePath: \personalweb\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules.js'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules
})

export default store