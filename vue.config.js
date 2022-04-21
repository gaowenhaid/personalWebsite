/*
 * @Date: 2022-04-21 10:34:17
 * @LastEditors: wenhai
 * @LastEditTime: 2022-04-21 16:41:48
 * @FilePath: \personalweb\vue.config.js
 */
// vue.config.js
module.exports = {
  // 基本路径
  publicPath: "./",
  // 相对于打包路径index.html的路径
  indexPath: "index.html",
  // 文件输出目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/apis': {
        target: 'https://acg.toubiec.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {"^/apis" : ""}
      },
      
    }
  },
  // 生成的静态资源存放的目录
  assetsDir: "static",
  // 以多页模式构建应用程序
  pages: undefined,
  // 是否使用包含运行时编译器的vue构建版本
  runtimeCompiler: false,
  // 是否为babel或typescript使用thread-loader，在系统的CPU有多于一个内核时自动启用，仅作用于生产环境，在适当的时候开启多线程去并发的执行压缩
  parallel: require("os").cpus().length > 1,
  // 生产环境是否生成sourceMap 文件，一般不建议打开
  productionSourceMap: false,
  // css配置相关
  css: {},
  // PWA插件相关配置
  pwa: {},
  // 第三方插件配置
  pluginOptions: {}
};
