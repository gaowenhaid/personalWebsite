<!--
 * @Date: 2022-04-21 13:58:25
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 18:04:48
 * @FilePath: \personalweb\src\views\Home\index.vue
-->
<template>
  <div class="container" ref="container">
    <!-- <div class="swiper" style="overflow: hidden; text-align: center">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="/images/banner1.jpeg" alt="image" />
        </div>
        <div class="swiper-slide">
          <img src="/images/banner2.jpeg" alt="image" />
        </div>
        <div class="swiper-slide">
          <img src="/images/banner3.jpeg" alt="image" />
        </div>
        <div class="swiper-slide">
          <img src="/images/banner4.jpeg" alt="image" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div> -->
    <ul class="menu">
      <li v-for="item in MenuList" :key="item.id" :class="{checkbox: activeIndex == item.id}" @click="checkMenu(item.id)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Home',
  components: {
    Swiper
  },
  data() {
    return {
      imgUrl: '',
      activeIndex: '1',
      MenuList:[
        {
          name:'首 页',
          id:"1"
        },
        {
          name:'技术博客',
          id:'2'
        },
        {
          name:'个人作品',
          id:'3'
        },
        {
          name:'眼观天下',
          id:'4'
        },
        {
          name:'关于站长',
          id:'5'
        },
      ]
    }
  },
  methods: {
    createSwiper() {
      new Swiper('.swiper', {
        // direction: 'vertical', // 垂直切换选项

        loop: true, // 循环模式选项

        autoplay: true,

        // 如果需要分页器

        pagination: {
          el: '.swiper-pagination',

          clickable: true
        },

        // 如果需要前进后退按钮

        navigation: {
          nextEl: '.swiper-button-next',

          prevEl: '.swiper-button-prev'
        }
      })
    },
    getHomeImage() {
      getHomeImage().then(res => {
        console.log(res.data[0])
        this.imgUrl = res.data[0].imgUrl
        this.$nextTick(() => {
          // this.createSwiper()
          this.$refs.container.style.backgroundImage = this.imgUrl
        })
      })
    },
    handleSelect() {},
    checkMenu(id){
      this.activeIndex = id
    }
  },
  mounted() {
    this.createSwiper()
  }
}
</script>

<style lang="less" scoped>
.container {
  z-index: 9999;
  width: 100%;
  height: 100%;
  .menu {
    position:absolute;
    top: 20%;
    right: 0;
    width: 60%;
    height:.5rem;
    display:flex;
    font-size: .24rem;
    color: #000;
    justify-content:space-evenly;
    align-items:center;
    padding-bottom: .15rem;
    border-bottom: 1px solid #eee;
    border-radius: .05rem;
    li {
      padding: .1rem;
      width: 1.5rem;
      height:.5rem;
      text-align: center;
      cursor: pointer;
    }
    .checkbox {
      transition: all .2s linear;
      background-color:rgba(0,0,0,.1);
      border-radius: .05rem;
    }
  }
}
</style>