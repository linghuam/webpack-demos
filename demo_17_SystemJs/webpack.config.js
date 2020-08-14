const path = require('path');
const systemjsInterop = require("systemjs-webpack-interop/webpack-config");

// module.exports = {
//   mode: 'development',
//   entry: './main.js',
//   output: {
//     filename: 'bundle.js',
//     libraryTarget: 'umd'
//   }
// }

module.exports = systemjsInterop.modifyWebpackConfig({
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    // libraryTarget: 'umd'
  }
});