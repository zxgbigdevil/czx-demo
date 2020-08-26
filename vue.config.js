const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}


module.exports = {
  chainWebpack: config => {
    // 配置路径别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_view', resolve('src/views'))
      .set('img', resolve('src/assets/images'))
  },
  devServer: {
    port: 8888,     // 端口
  },
};