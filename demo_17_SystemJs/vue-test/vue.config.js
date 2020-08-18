const path = require('path');

module.exports = {
  configureWebpack: {
    externals: ['com1'],
    output: {
      libraryTarget: 'system'
    }
  },
  devServer: {
    host: 'localhost',
    port: '8080',
    open: true,
    contentBase: path.resolve(__dirname, './'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // chainWebpack: config => {
  //   config
  //   .plugin('html')
  //   .tap(args => {
  //     return [{ inject: true }]
  //   })
  // }
}