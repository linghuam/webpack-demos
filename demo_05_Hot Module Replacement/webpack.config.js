const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    // 文件名
    filename: '[name].bundle.js',
    // 路径名 __dirname表示当前路径，生成一个绝对路径,如‘d:/demo_02/dist/’
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module:{
  },
  plugins:[
    // 在构建之前清空dist目录
    new CleanWebpackPlugin(['dist']),
    // 在dist目录下自动生成index.html,会覆盖之前的
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 加此配置方便调试（生产环境不要加，会暴露源码）
  devtool: 'inline-source-map',
  // 运行 webpack-dev-sever --open 浏览器自动打开网页，并自动响应修改
  devServer: {
    contentBase: './dist',
    hot: true
  },
};
