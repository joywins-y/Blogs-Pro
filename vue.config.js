const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.my-site.com",
      },
      "/commercial_api": {
        target: "https://www.zhihu.com",
      },
    },
  },
});
