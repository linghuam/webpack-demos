const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'packageA-bundle.js'
  },
  externals: ['lodash']
}