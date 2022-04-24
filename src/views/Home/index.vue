<!--
 * @Date: 2022-04-21 13:58:25
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 18:04:48
 * @FilePath: \personalweb\src\views\Home\index.vue
-->
<template>
  <div class="container" ref="container">
    <!-- 欢迎语区域 -->
    <div class="welcome">
      Welcome to my personal website!
    </div>
    <!-- 动态特效 -->
    <vue-particles
      color="#e1eec3"
      :particleOpacity="0.9"
      :particlesNumber="120"
      shapeType="star"
      :particleSize="6"
      linesColor="#e1eec3"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="cash"
    >
    </vue-particles>
    <!-- 菜单区域 -->
    <ul class="menu" v-if="!$route.meta.isShown">
      <li
        v-for="item in MenuList"
        :key="item.id"
        :class="{ checkbox: activeIndex == item.id }"
        @click="checkMenu(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <!-- 中间区域 -->
    <!-- 底部音乐播放器区域 -->
    <div class="video">
      <div class="video-wrapper">
        <span class="video-name">{{ getNames }}</span>
        <div>
          <img class="avatar" :src="getSongImg" alt="" />
        </div>
      </div>
      <audio-player
        ref="audioPlayer"
        :audio-list="audioList.map(elm => elm.url)"
        :before-play="handleBeforePlay"
        :show-next-button="false"
        :show-prev-button="false"
        theme-color="#ff2929"
        :isLoop="false"
        muted="muted"

      />
    </div>
  </div>
</template>

<script>
import { getHomeImage, getMusic } from '@/api/home'
import Swiper from 'swiper'
export default {
  name: 'Home',
  components: {
    Swiper
  },
  computed: {
    getSongImg() {
      return this.audioList.map(elm => elm.picurl)
    },
    getNames() {
      return this.audioList.map(elm => elm.name)
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      this.activeIndex = this.$route.query.id
    },
    audioList: {
      immediate: true,
      handler: function (val) {
        this.$nextTick(() => {
          this.$refs.audioPlayer.play(0)
        })
      }
    }
  },
  data() {
    return {
      imgUrl: '',
      activeIndex: '1',
      MenuList: [
        {
          name: '首 页',
          id: '1',
          path: '/home'
        },
        {
          name: '技术博客',
          id: '2',
          path: '/technology'
        },
        {
          name: '个人作品',
          id: '3',
          path: '/personal'
        },
        {
          name: '眼观天下',
          id: '4',
          path: '/news'
        },
        {
          name: '关于站长',
          id: '5',
          path: '/about'
        }
      ],
      audioList: []
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
        this.imgUrl = res.data[0].imgurl
        let doc = document.querySelector('.container')
        doc.style.backgroundImage = `url(${this.imgUrl})`
      })
    },
    handleSelect() {},
    checkMenu(item) {
      // this.activeIndex = item.id
      this.$router.push({
        path: item.path,
        query: {
          id: item.id
        }
      })
    },
    getMusic() {
      getMusic().then(res => {
        if (res.data.id) {
          let arr = []
          arr.push(res.data)
          this.audioList = arr
          this.$nextTick(() => {
            let that = this
            let doc = document.querySelector('.audio-player__audio')
            doc.addEventListener('ended', () => {
              that.ended()
            })
          })
        }
      })
    },
    handleBeforePlay(next) {
      next() // 开始播放
    },
    ended(){
      this.getMusic()
    }
  },
  mounted() {
    // this.createSwiper()
    this.getHomeImage()
    this.getMusic()
    this.audioList = []
  }
}
</script>

<style lang="less" scoped>
// 动画效果

@keyframes wind {
  0% {
    bottom: 100%;
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-90deg);
    bottom: -10%;
  }
}
//可添加不同速度
.speed1 {
  position: absolute;
  animation: wind 5s linear;
}
.container {
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .welcome{
    width: 100%;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
    font-size: .8rem;
    font-family: "方正舒体","幼圆","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-weight: 900;
    mix-blend-mode: screen;
    color: #fff;
    opacity: .4;
  }
  .menu {
    position: fixed;
    top: 20%;
    right: 0;
    width: 60%;
    height: 0.5rem;
    display: flex;
    font-size: 0.24rem;
    color: rgb(190, 181, 181);
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 0.15rem;
    border-bottom: 1px solid #eee;
    border-radius: 0.05rem;
    li {
      padding: 0.1rem;
      width: 1.5rem;
      height: 0.5rem;
      text-align: center;
      cursor: pointer;
      font-size: 0.22rem;
    }
    .checkbox {
      transition: all 0.2s linear;
      // background-color:rgba(255, 255, 255, 0.2);
      background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);
      border-radius: 0.05rem;
      opacity: 0.7;
    }
  }
  .video {
    width: 100%;
    position: fixed;
    bottom: 0;
    opacity: 0.7;
  }
  .video-wrapper {
    width: 4rem;
    height: 1rem;
    position: absolute;
    bottom: 35%;
    left: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      width: 28%;
      height: 70%;
      overflow: hidden;
      opacity: 1 !important;
      img {
        width: 100%;
      }
    }
    span {
      display: block;
      width: 72%;
      height: 100%;
      text-align: center;
      line-height: 1rem;
      font-size: 0.24rem;
      color: rgb(245, 79, 209);
    }
  }
}
</style>