const path = require('path');

module.exports = {
  mode: 'development',
  entry: './external.js',
  output: {
    filename: 'lodash@4.17.20.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  }
}