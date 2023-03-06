# 尚硅谷Webpack5入门到原理



# 课程简介

【尚硅谷Webpack5入门到原理（面试开发一条龙）】 https://www.bilibili.com/video/BV14T4y1z7sw/?share_source=copy_web&vd_source=534cd597c2fb4b381da3354013fd5304

在线资料文档：https://yk2012.github.io/sgg_webpack5/



不管你在模式中创建了那些文件js也好，css也罢，都要导入到入口文件中， 才能够被打包到一个指定区域的文件中，然后打包好了， 再到public 的html 中去引入，才能被浏览器解析



生产模式完整配置看 ： P24 末尾

基础配置：

```js
const path = require("path");   // nodejs 核心模块，专门用来处理路径问题
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: "./src/main.js",    // 相对路径
    // 输出
    output: {
        // 所有文件的输出路径
        // __dirname nodejs 的变量，代表当前文件的文件夹目录
        path: path.resolve(__dirname, "dist"),   // 绝对路径
        // 入口文件打包输出文件名
        filename: "static/js/min.js",
        // 自动清空上次打包的内容
        // 原理：在打包前，将 path 整个目录内容清空，再进行打包
        clean: true,
    },
    // 加载器
    module: {
        rules: [
            // loader 的配置
            {
                test: /\.css$/,  // 只检测 .css 文件
                use: [
                    // 执行顺序：从右到左（从下到上）
                    "style-loader",    // 将 js 中 css 通过创建 style 标签添加到 html 文件中生效
                    "css-loader",    // 将 css 资源编译成 commonjs 的模块到 js 中
                ],
            },
            {
                test: /\.less$/,  // 只检测 .less 文件
                use: [
                    // 使用多个 loader
                    "style-loader",    // 将 js 中 css 通过创建 style 标签添加到 html 文件中生效
                    "css-loader",    // 将 css 资源编译成 commonjs 的模块到 js 中
                    "less-loader",     // 将 less 编译成 css 文件
                ],
            },
            {
                test: /\.s[ac]ss$/,  // 只检测 .sass scss 文件
                use: [
                    // 使用多个 loader
                    "style-loader",    // 将 js 中 css 通过创建 style 标签添加到 html 文件中生效
                    "css-loader",    // 将 css 资源编译成 commonjs 的模块到 js 中
                    "sass-loader",     // 将 sass 编译成 css 文件
                ],
            },
            {
                test: /\.styl$/,  // 只检测 .stylus 文件
                use: [
                    // 使用多个 loader
                    "style-loader",    // 将 js 中 css 通过创建 style 标签添加到 html 文件中生效
                    "css-loader",    // 将 css 资源编译成 commonjs 的模块到 js 中
                    "stylus-loader",     // 将 stylus 编译成 css 文件
                ],
            },
            {
                test: /\.(png | jpe?g | gif | webp | svg)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        // 小于 10 kb 的图片转 base64
                        // 优点：减少请求数量（服务器）
                        // 缺点：体积会更大
                        maxSize: 10 * 1024,  // 10kb
                    },
                },
                generator: {
                    // 输出图片名称
                    // [hash: 10] hash 值取前 10 位
                    filename: "static/images/[hash:10][ext][query]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,   // 排除 node_modules 中的 js 文件（这些文件不处理）
                loader: "babel-loader",   // 同时需要写 babel.config.js
                // options: {
                //     presets: ["@babel/preset-env"],
                // },
            },
        ],
    },
    // 插件
    plugins: {
        // plugins 的配置
        new ESLintPlugin({    // 同时配置 .eslintrc.js
            // 检测那些文件
            context: path.resolve(__dirname, "src"),
        }),
        new HtmlWebpackPlugin({
            // 模板：以 pubic/index.html 文件创建新的 HTML 文件
            // 新的 html 文件特点：1.结构和原来一致  2. 自动引入打包输出的资源
            template: path.resolve(__dirname, "public/index.html"),
        }),
    },
    // 开发服务器：不会输出资源，在内存中编译打包的
    devServer: {
        hosy: "localhost",   //启动服务器域名
        port: "3000",    // 启动服务器端口号
        open: true,       // 是否自动打开浏览器
    },
    // 模式
    mode: "development",
};
```

.eslintrc.js 文件：

```js
module.exports = {
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  env: {
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  parserOptions: {
    ecmaVersion: 6, // es6
    sourceType: "module", // es module
  },
  rules: {
    "no-var": 2, // 不能使用 var 定义变量
  },
};
```



babel.config.js 文件：

```js
module.exports = {
  // 智能预设：能够编译ES6语法
  presets: ["@babel/preset-env"],
};
```

