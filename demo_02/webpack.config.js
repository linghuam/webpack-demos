const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    // 文件名
    filename: 'bundle.js',
    // 路径名 __dirname表示当前路径，生成一个绝对路径,如‘d:/demo_02/dist/’
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      // 加载css
      // 此规则可以让 import './style.css' 生效，
      // 当调用此模块是，html文档的head将会插入<style>标签(故样式会应用于全局)
      {
        test: /\.css$/, //通过正则表达式寻找到要运用规则的文件
        use: ['style-loader', 'css-loader']
      },
      // 加载图片 import img from './img.png'
      // 图片将会添加到输出路径下，并且 img 的值会变成最终生成的 img 路径
      // css-loader中的url
      // html-loader中的url 皆如此处理
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use:['file-loader']
      },
      // 加载数据 JSON(原生支持)， CSV，TSV，XML...
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
};
