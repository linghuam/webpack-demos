const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    // 文件名
    filename: '[name].bundle.js',
    // 路径名 __dirname表示当前路径，生成一个绝对路径,如‘d:/demo_02/dist/’
    path: path.resolve(__dirname, 'dist')
  },
  module:{
  },
  plugins:[
    // 在构建之前清空dist目录
    new CleanWebpackPlugin(['dist']),
    // 在dist目录下自动生成index.html,会覆盖之前的
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
};
