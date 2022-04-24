<template>
  <div class="NewsContainer">
    <div class="leftDiv">新闻</div>
    <div class="bannerDiv"></div>
    <div class="rightDiv"></div>
  </div>
</template>

<script>
export default {
  name: 'News'
}
</script>

<style lang="less" scoped>
.NewsContainer {
  width: 100%;
  height: 100%;
  background-color: #bfa;
  .leftDiv {
    width: 3rem;
    height:100%;
    background-color:red;
  }
}
</style>