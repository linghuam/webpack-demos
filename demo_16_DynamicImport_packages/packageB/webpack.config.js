const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'packageB-bundle.js'
  },
  externals: ['lodash']
}