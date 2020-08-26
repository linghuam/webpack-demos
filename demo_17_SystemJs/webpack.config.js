const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'system'
  },
  // Webpack externals will be shared across bundles and come from the import map and systemjs
  externals: ['jquery', 'lodash']
}