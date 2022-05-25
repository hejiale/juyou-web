const path = require('path')

function resolveRealPath(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    // proxy: 'https://juyou-dev.yun-chang.com'
    proxy: 'https://www.juyyds.com'
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
      .set('@', resolveRealPath('src'))
      .set('@img', resolveRealPath('src/assets'))
  }
}