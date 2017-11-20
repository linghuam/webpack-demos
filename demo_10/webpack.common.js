const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: ['lodash']
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Caching'}),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // Specify the common bundle's name.
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime' // Specify the common bundle's name.
    })
  ],
  output:{
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};
