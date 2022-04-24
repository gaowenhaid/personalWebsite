<!--
 * @Date: 2022-04-21 10:15:20
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 18:03:46
 * @FilePath: \personalweb\src\App.vue
-->
<template>
  <div id="app">
    <!-- <div class="mask"></div> -->
    <!-- <div class="menuHeader" v-if="$route.meta.isShown"> -->
    <ul class="menu" v-if="$route.meta.isShown">
      <li
        v-for="item in MenuList"
        :key="item.id"
        :class="{ checkbox: activeIndex == item.id }"
        @click="checkMenu(item)"
      >
        {{ item.name }}
      </li>
    </ul>
    <!-- </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      imgUrl: '',
      // activeIndex: this.$route.query.id,
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
    }
  },
  watch: {
    '$route.path': function (newVal, oldVal) {
      this.activeIndex = this.$route.query.id
    }
  },
  mounted() {
  },
  methods: {
    checkMenu(item) {
      this.activeIndex = item.id
      this.$router.push({
        path: item.path,
        query: {
          id: item.id
        }
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
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-image: url('https://tva1.sinaimg.cn/large/a15b4afegy1fmvj0o7vyxj21hc0u07hf.jpg');
  overflow: hidden;
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
.menu {
  width: 100%;
  height: 0.6rem;
  display: flex;
  font-size: 0.24rem;
  color: rgb(190, 181, 181);
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #eee;
  border-radius: 0.05rem;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
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
.menuHeader {
  height: 0.7rem;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
}
</style>
