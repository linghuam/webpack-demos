# Note
demo 来自于 [webpack guides](https://webpack.js.org/guides/asset-management/) 的各个章节

# Questions
1. 多个入口的依赖树之间互相依赖，打包时存在重复打包公共依赖模块部分，如何去除重复打包部分？
答：仔细阅读[prevent-duplication](https://webpack.js.org/guides/code-splitting/#prevent-duplication)
2. 所有资源的打包是在编译阶段完成，均一次性加载，不能按需动态加载？
答：仔细阅读[dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
3. 只需要引用模块中的部分内容时， 怎样在打包时去除无用的代码？
答：使用 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

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
