# Modules 模块化加载
1. webpack原生支持多种模块化框架，如import、export
2. webpack打包时不会改变除了import和export声明之外的任何代码（若想转化代码，可以使用babel）

# Configuration 使用配置文件
1. 在项目目录下运行 'webpack' 默认使用 webpack.config.js 配置，也可以指定options配置，运行 'webpack --config webpack.config.js'
2. 在package.json中配置wepback命令
```json
{
  "scripts":{
    "start":"webpack --config webpack.config.js"
  }
}
```
npm 操作
```bash
npm run start
```
