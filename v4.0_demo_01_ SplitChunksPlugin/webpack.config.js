const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: {
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.[name].js'
  },
  optimization: {
    splitChunks: {
      // name: true,
      // chunks: 'all',
      // minChunks: 2,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        },
        av: {
          name: 'av',
          chunks: function(chunk) {
            return chunk.name === 'a'
          }
        },
        bv: {
          name: 'bv',
          chunks: function(chunk) {
            return chunk.name === 'b'
          }
        } 
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new BundleAnalyzerPlugin()
  ]
};
