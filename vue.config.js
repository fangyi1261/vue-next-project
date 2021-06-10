/* eslint-disable */
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  publicPath: './', // 基本路径
  outputDir: 'dist', // 构建输出目录
  assetsDir: 'static', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  chainWebpack: config => { // webpack链接API，用于生成和修改webapck配置，see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    if (debug) {
      // 本地开发配置
    } else {
      // 生产开发配置
    }
    // 修复HMR
    config.resolve.symlinks(true);
    // 别名配置
    config.resolve.alias
      .set('@', path.resolve(__dirname, './src'))
      .set('@a', path.resolve(__dirname, './src/assets'))
      .set('@c', path.resolve(__dirname, './src/components'))
      .set('@p', path.resolve(__dirname, './src/pages'));
    
    config.module.rule()
  },
  configureWebpack: config => { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    
  },
  productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: { // 单页插件相关配置 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  },
  devServer: {},
  // 第三方插件配置
  pluginOptions: {}
};
