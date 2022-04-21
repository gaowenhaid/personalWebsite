<!--
 * @Date: 2022-04-21 10:15:20
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 18:03:46
 * @FilePath: \personalweb\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div class="mask"></div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { getHomeImage } from '@/api/home'
export default {
  name: 'App',
  data() {
    return {
      imgUrl:''
    }
  },
  mounted(){
    // this.getHomeImage()
  },
  methods: {
    getHomeImage(){
      getHomeImage().then(res => {
        this.imgUrl = res.data[0].imgurl
        let doc = document.getElementById('app')
        // doc.style.backgroundImage = `url(${this.imgUrl})`
      })
    }
  }
}
</script>

<style lang="less" scoped>
  #app {
    width: 100%;
    height: 100%;
    min-width: 768px;
    min-height: 600px;
    // background-image: url('./assets/logo.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }
</style>
