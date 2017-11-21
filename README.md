# Note
demo 来自于 [webpack guides](https://webpack.js.org/guides/asset-management/) 的各个章节

# Concepts
[基本概念](./Concepts.md)

# Thinking
将模块化看成树状结构，入口（Entry）是根节点，出口（Output）是遍历整棵树后生成的一个结果，加载器（Loader）和插件（Plugins）是中间处理过程。
单模块是单棵树，多模块是多棵树。

# Questions
1. 多个入口的依赖树之间互相依赖，打包时存在重复打包公共依赖模块部分，如何去除重复打包部分？
答：仔细阅读[prevent-duplication](https://webpack.js.org/guides/code-splitting/#prevent-duplication)

2. 所有资源的打包是在编译阶段完成，均一次性加载，不能按需动态加载？
答：仔细阅读[dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) and
[lazy-loading](https://webpack.js.org/guides/lazy-loading/)

3. 只需要引用模块中的部分内容时， 怎样在打包时去除无用的代码？
答：使用 [Tree Shaking](https://webpack.js.org/guides/tree-shaking/)

4. 如何缓存？
答：[caching](https://webpack.js.org/guides/caching/)

# Tool
* [Webpack可视化分析工具](https://webpack.js.org/guides/code-splitting/#bundle-analysis)
* [vue中的懒加载](https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/)
