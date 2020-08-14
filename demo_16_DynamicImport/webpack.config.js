const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  devServer: {
    contentBase: path.join(__dirname, './'),
    host: 'localhost',
    port: '9091',
    open: true,
    openPage: 'index.html'
  },
  output: {
    filename: 'bundle.js'
  }
}