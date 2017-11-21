# Concepts
** Core Concepts **
* Entry
* Output
* Loaders
* Plugins

## Entry
告诉 webpack 怎么读
### 语法
entry: String | Array | Object
### 应用场景
* 单页面和Vendor
```js
entry : {
   app: './src/app.js',
   vendors: './src/vendors.js'
}
```
* 多页面
```js
entry: {
   pageOne: './src/pageOne/index.js',
   pageTwo: './src/pageTwo/index.js',
   pageThree: './src/pageThree/index.js'
}
```

## Output
告诉 webpack 怎么写
### 语法
output: Object
### 多个入口
```js
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
```

## Loaders
loaders 可以让 webpack 处理除 js 外的其他文件（webpack原生只能处理js文件），它可以将不同类型的文件转换成 modules 形式处理。
```js
module: {
  rules: [
    { test: /\.txt$/, use: 'raw-loader' }
  ]
}
```

## Plugins
一个webpack插件就是一个js对象，可以通过new关键字创建实例并且可以在初始化时传参。
