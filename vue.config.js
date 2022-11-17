const { defineConfig } = require('@vue/cli-service');

// vue-cli 的配置文件
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.my-site.com',
      },
      '/commercial_api': {
        target: 'https://www.zhihu.com',
      },
    },
  },
  configureWebpack: require('./webpack.config'),
});
