'use strict'
// 进行版本检查
require('./check-versions')()

// 设置当前环境为生产环境
process.env.NODE_ENV = 'production'

// 终端加载、勾叉图标 https://github.com/sindresorhus/ora
const ora = require('ora')
// The UNIX command rm -rf for node. https://github.com/isaacs/rimraf
const rm = require('rimraf')
// node 路径模块
const path = require('path')
// 粉笔着色器
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('./config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
spinner.start()

// 删除发布文件夹下的文件内容
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // 运行 webpack 打包工具
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
