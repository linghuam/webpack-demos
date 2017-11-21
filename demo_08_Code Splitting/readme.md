# 分隔代码的三种常用方法
1. Entry Points : 通过入口配置人为分隔
缺点： 如果两个入口引入的同一个依赖，一个依赖将被打包两次； 不灵活，不能动态打包。
2. Prevent Duplication: 使用 CommonsChunkPlugin 插件避免重复
3. Dynamic Imports: Split code via inline function calls within modules.
