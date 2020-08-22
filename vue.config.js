const path = require('path');//引入path模块
function resolve(dir) {
  return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
  devServer: {
    open: true,
    hot: true,
    compress: true,
    disableHostCheck: true, //webpack4.0 开启热更新
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('network', resolve('src/network'))
      .set('common', resolve('src/common'))
    //set第一个参数：设置的别名，第二个参数：设置的路径
    // 修复HMR
    config.resolve.symlinks(true);
  }
}

// devServer: {
//   open: true,  // npm run serve后自动打开页面
//   // host: '0.0.0.0',  // 匹配本机IP地址(默认是0.0.0.0)
//   // port: 8080, // 开发服务器运行端口号
//   // proxy: null,
// },