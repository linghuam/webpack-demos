// 使用 tree-shaking 的前提条件：
// 使用 ES2015 模块语法（import and export） 【将整个依赖关系想像成树状结构】
// 引入插件 uglifyjs 或其他类似插件
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins:[
    new UglifyJSPlugin()
  ]
};
