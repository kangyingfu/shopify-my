const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    config.resolve = {
      //配置文件扩展名
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    };
  },
});
