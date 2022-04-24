/*
 * @Date: 2022-04-21 10:15:20
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 16:06:32
 * @FilePath: \personalweb\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "nprogress/nprogress.css";
import store from './store/index.js'
import "swiper/swiper.min.css";
Vue.use(ElementUI);

import VueParticles from 'vue-particles'  
Vue.use(VueParticles)
import AudioPlayer from '@liripeng/vue-audio-player'
Vue.use(AudioPlayer)
import './assets/style.css'
Vue.config.productionTip = false
import router from './router/index'
import './utils/rem'
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
