/*
 * @Date: 2022-04-21 13:59:11
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 14:36:16
 * @FilePath: \personalweb\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
let router =  new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:() => import('@/views/Home/index.vue')
    }
  ],
  scrollBehavior() {
    // return 期望滚动到哪个的位置   }
    return { y: 0 }
  }
})

export default router