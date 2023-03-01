<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items, index) in catalogue" :key="index">
              <a @click="jump(index)" >{{ index + 1 }}、{{ items.name }}</a>
            </li>
          </ul>
          <h3>webpack 核心字段概念</h3>
          <pre>module.exports={
    entry:{
        main:"./src/app.js"
    },
    output:{
        path:path.resolve(__dirname,"app"),
        publicPath:"/",
        filename:"[name].js"
     },
    plugins: [ ],
    mode: 'development'
}
1、Entry
入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。

2、Output
输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。
    path:打包后的文件存放的地方
    publicPath：指定资源文件引用的目录
    [name]:这里app
    __dirname:是node.js中的一个全局变量，它指向当前执行脚本所在的目录

3、Plugins
插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

4、Mode
模式(Mode)指示 webpack 使用相应模式的配置。
development 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和NamedModulesPlugin。能让代码本地调试运行的环境
production  会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。能让代码优化上线运行的</pre>
          <h3>输入指令下载并安装 webpack</h3>
          <pre>npm install webpack webpack-cli -g
npm install webpack webpack-cli -D
npm i css-loader style-loader less-loader less -D   打包样式资源下载安装 loader 包
npm install --save-dev html-webpack-plugin  打包 HTML 资源
npm install --save-dev html-loader url-loader file-loader   打包图片资源
npm install webpack-dev-server 安装webpack-dev-server实现了自动编译刷新浏览器  运行指令: npx webpack-dev-server
npm install --save-dev mini-css-extract-plugin   提取 css 成单独文件</pre>
          <h3>编译打包应用</h3>
          <pre>webpack 能够编译打包 js 和 json 文件。能将 es6 的模块化语法转换成浏览器能识别的语法。能压缩代码。不能编译打包 css、img 等文件。不能将 js 的 es6 基本语法转化为 es5 以下语法。
webpack 开发环境的基本配置
src 是项目文件用的是ES6的写法  webpack.config 是打包配置用的是common.js写法

创建文件 webpack.config.js配置内容如下
const { resolve } = require('path');   // resolve用来拼接绝对路径的方法
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',  // 入口起点
  output: {    // 输出
    filename: 'built.js',  // 输出文件名
    path: resolve(__dirname, 'build')  // 输出路径__dirname nodejs的变量，代表当前文件的目录绝对路径
  },
  // loader的配置
  module: {
    rules: [
      {
        // 处理css将css文件中的样式解析到js文件中不需要outputPath
        test: /\.css$/,  // 匹配哪些文件
        use: [  // 多个loader处理用use
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载js中，里面内容是样式字符串
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] // 将less文件编译成css文件,需要下载 less-loader和less
      },
      {
        // 处理图片资源但是处理不了html中img图片
        test: /\.(jpg|png|gif)$/,
        // 使用一个loader
        // 下载 url-loader file-loader
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，就会被base64处理
          // 优点: 减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash的前10位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]',
          outputPath: 'imgs'  // 输出后所在文件夹位置
        }
      },
      {
        // 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）  但是只能使用commonjs解析
        test: /\.html$/,
        loader: 'html-loader'
      },
      // 打包其他资源(除了html/js/css资源以外的资源)
      {
        // 排除css/js/html/less资源，将其他资源原封不动的返回
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  // plugins的配置
  plugins: [
    // plugins的配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
      template: './src/index.html'
    })
  ],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production'
  // 开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器~~）
  // 特点：只会在内存中编译打包，不会有任何输出
  // 启动devServer指令为：npx webpack-dev-server
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开浏览器
    open: true
  }
} </pre>
          <h3>对css的处理</h3>
          <pre>对css的处理主要在于1、提取css成单独文件2、css兼容性处理3、压缩css
webpack中对css处理要使用css-loader/style-loader/postcss-loader
webpack是只识别js的，所以我们要将css转换成js中的代码，这时转换就需要用到css-loader style-loade
npm install --save-dev css-loader style-loader
平时开发中肯定要使用css预处理，这里拿less来举例。
npm install --save-dev less-loader less
PostCSS是一个用 JavaScript 工具和插件转换 CSS 代码的工具，它有很多插件来转换css，可以大胆的使用未来语法。
我们用的最多的插件就是autoprefixer：自动添加浏览器前缀，添加css兼容性写法。
npm install --save-dev postcss-loader autoprefixer


const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //  css成单独文件要依赖MiniCssExtractPlugin
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');  //压缩css只需要用optimize-css-assets-webpack-plugin插件就行
process.env.NODE_ENV = 'development';  // 设置nodejs环境变量
module.exports ={
  ..........
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          //创建style标签，将样式放入 'style-loader',
          // MiniCssExtractPlugin.loader这个loader取代style-loader。作用：提取js中的css成单独文件
          'css-loader', // 将css文件整合到js文件中但是需要style-loader等把css转换成脚本加载的JavaScript代码
          'style-loader',
          'less-loader',
          /*  css兼容性处理：postcss --> postcss-loader postcss-preset-env
           帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
           "browserslist": {
             // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
             "development": [
               "last 1 chrome version",
               "last 1 firefox version",
               "last 1 safari version"
             ],
             // 生产环境：默认是看生产环境
             "production": [
               ">0.2%",
               "not dead",
               "not op_mini all"
             ]
           }
         */
          {
            loader: 'postcss-loader',  //  如果不加options就是使用loader的默认配置
            options: {
              ident: 'postcss',
              plugins: () => [
                // postcss的插件
                require('postcss-preset-env')()
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin()
  ],
  mode: 'development'
}</pre
          >
          <h3>对js进行修改</h3>
          <pre>
1、 使用eslint-loader对代码进行js语法检查
module.exports = {
  ..........
  module: {
    rules: [
      /*语法检查： eslint-loader  eslint
      注意：只检查自己写的源代码，第三方的库是不用检查的
      设置检查规则：
        package.json中eslintConfig中设置~
          "eslintConfig": {
            "extends": "airbnb-base"
          }
        airbnb --> eslint-config-airbnb-base  eslint-plugin-import eslint
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // 自动修复eslint的错误
          fix: true
        }
      }
    ]
  }
  ...........
};
2、js兼容性处理 利用babel、 polyfill 、 core-js
module.exports = {
 ........
  module: {
    rules: [
      /*
        js兼容性处理：babel-loader @babel/corebabel-core是babel的核心，若是想要用babel-loader把es6的代码转换成为es5的代码，那么你就需要对应版本的babel-core
          1. 基本js兼容性处理 --> @babel/preset-env
            问题：只能转换基本语法，如promise高级语法不能转换
          2. 全部js兼容性处理 --> @babel/polyfill
            问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了~
          3. 需要做兼容性处理的就做：按需加载  --> core-js
      */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做怎么样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                // 指定core-js版本
                corejs: {
                  version: 3
                },
                // 指定兼容性做到哪个版本浏览器
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  ........
};</pre>
          <h3>process.env.NODE_ENV详解</h3>
          <pre>在node中，有全局变量process表示的是当前的node进程。process.env包含着关于系统环境的信息。但是process.env中并不存在NODE_ENV这个东西。NODE_ENV是用户一个自定义的变量，在webpack中它的用途是判断生产环境或开发环境的依据的。
为了查看 process的基本信息，我们可以在文件夹中 新建一个 process.js 文件，在里面加一句代码：console.log(process);然后进入该文件夹，执行 node process.js 可以在命令行中打印信息,里面的相应信息相当的多
我打印了一个console.log(process.env.NODE_ENV)这个字段实际是在node中不存在的，这个需要自己单独声明

理解 DefinePlugin 含义
官网配置地址  https://webpack.js.org/plugins/define-plugin/#usage
官网解释的是：DefinePlugin允许我们创建全局变量，可以在编译时进行设置，因此我们可以使用该属性来设置全局变量来区分开发环境和正式环境。这就是 DefinePlugin 的基本功能。
因此我们可以在 webpack.config.js 中添加如下代码配置全局变量信息了，因为当webpack进行编译的时候会全局设置变量；如下代码：
module.exports = {
  plugins: [
    // 设置环境变量信息
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify('1.1.0'),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
}
package.json 打包配置如下命令：
"scripts": {
  "dev": "webpack-dev-server --progress --colors --devtool cheap-module-eval-source-map --hot --inline",
  "build": "webpack --progress --colors --devtool cheap-module-source-map",
  "build:dll": "webpack --config webpack.dll.config.js"
}
这样配置完成后，为了验证一下是否是全局变量，运行 npm run dev 打包后，我们可以在我们项目中入口js文件，打印下即可：比如如下代码：
console.log('Running App version ' + VERSION); // 打印 Running App version 1.1.0
console.log(PRODUCTION); // 打印 true
console.log(process.env); // 打印 { NODE_ENV: undefined }
如上信息可以看到 process.env.NODE_ENV 打印出为 undefined，那是因为我们在 package.json 文件中未进行配置。下面我们把 package.json 加上 NODE_ENV 变量值，代码打包命令变成如下：
"scripts": {
  "dev": "NODE_ENV=development webpack-dev-server --progress --colors --devtool cheap-module-eval-source-map --hot --inline",
  "build": "NODE_ENV=production webpack --progress --colors --devtool cheap-module-source-map",
  "build:dll": "webpack --config webpack.dll.config.js"
}
如上打包命令，在dev打包命令上，前面加上了 NODE_ENV=development 命令，在build打包命令上前面加上了 NODE_ENV=production，因此继续查看代码结果变为如下：
console.log(process.env); // 打印 { NODE_ENV: 'development' }
复制代码可以看到这个时候 process.env.NODE_ENV  才有值，因此在项目打包中，为了区分开发环境和正式环境我们像如上配置即可，然后在 webpack.config.js 中通过 process.env.NODE_ENV  这个来区分正式环境还是开发环境即可。



webpack-cli提供的参数 node-env 官网配置地址  https://webpack.js.org/api/cli/#node-env


          </pre>
          <h3>@ 代表src目录的设置</h3>
          <pre>方法一
const path = require('path') // 导入node.js中 专门操作路径的模块
module.exports = {
    mode: 'production',
    devtool: 'nosources-source-map',
    resolve: {
        alias: {
            // 告诉 webpack，@ 符号代表src这一层目录
            '@': path.join(__dirname, './src/')
        }
    }
}
方法二
'use strict'
const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  configureWebpack: {
    name: 'vue Element Admin',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
} </pre>
          <h3>配置source-map打印控制台报错信息</h3>
          <pre>https://webpack.docschina.org/configuration/devtool/ 官方介绍
Devtool作用：
此选项控制是否生成，以及如何生成 source map。
module.exports = {
    mode: 'development', // 开发阶段
    devtool: 'eval-source-map'  // 运行时 报错的行数 与 源代码行数 一致， 方便排查问题
}
module.exports = {
    mode: 'production', // 生产发布
    devtool: 'nosources-source-map' // 防止源码泄露，提高网站安全性
}


devtool选项有这么几个：
source-map、cheap-module-source-map、eval-source-map、cheap-module-eval-source-map

source-map
在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；

cheap-module-source-map
在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；

eval-source-map
使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；

cheap-module-eval-source-map
这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；

source-map是一种提供源代码到构建后代码映射技术，也就是说如果构建后代码出错了，通过映射可以追踪源代码错误
格式：[inline- | hidden- | eval-][nosources-][cheap-[module-]]source-map
可以任意排列，但[]的顺序不能乱
具体介绍
source-map: 在外部生成一个文件
  在控制台会显示 错误代码准确信息 和 源代码的错误位置
inline-source-map: 内嵌到bundle.js中
  只生成一个source-map
  在控制台会显示 错误代码准确信息 和 源代码的错误位置
hidden-source-map: 外部
  错误代码错误原因，源代码的错误位置
  不能追踪源代码错误，只能提示到构建后代码的错误位置
eval-source-map： 内嵌
  每一个文件都生成对应的source-map
  错误代码准确信息，源代码的错误位置
nosources-source-map: 外部
  错误代码准确信息，没有任何源代码信息
cheap-source-map: 外部
  错误代码准确信息，源代码的错误位置
  只能精准到行
cheap-odule-source-map: 外部
  错误代码准确信息，源代码的错误位置
  module会将loader的source-map加入

内嵌与外部的区别： 1.外部生成单独的文件，内嵌没有 2.内嵌构建速度快
这么多source-map如何选择？
开发环境：速度快，调试更友好
速度快（ eval>inline>cheap>··· ）
  组合eval-cheap-source-map > eval-source-map
调试更友好
  source-map > cheap-module-source-map > cheap-source-map
最终结果：cheap-module-source-map 和 eval-source-map (vuecli与react脚手架默认)

生产环境：源代码要不要隐藏？调试要不要更友好
内嵌会让代码体积变大，所以在生产环境下不用内嵌
nosources-source-map  全部隐藏
hidden-source-map   只隐藏源代码，会提示构建后代码错误信息
最终结果：source-map 和 cheap-module-source-map

建议
中小型项目开发阶段使用eval-source-map,大项目里使用cheap-module-eval-source-map

配置
module.exports = {
  devtool: 'cheap-module-source-map'
  .....
}</pre>
          <h3>webpack-cli 命令配置</h3>
          <pre>webpack-cli 命令的选项比较多，详细可以通过 webpack-cli 的文档进行查阅，这里总结我们日常用的最多的几个选项（options）：
–config：指定一个 Webpack 配置文件的路径；
–mode：指定打包环境的mode，取值为development和production，分别对应着开发环境和生产环境；
–json：输mode出 Webpack 打包的结果，可以使用webpack --json > stats.json方式将打包结果输出到指定的文件；
–progress：显示 Webpack 打包进度；
–watch, -w：watch 模式打包，监控文件变化之后重新开始打包；
–color, --colors/–no-color, --no-colors：控制台输出的内容是否开启颜色；
–hot：开启 Hot Module Replacement模式，后面会详细介绍；
–profile：会详细的输出每个环节的用时（时间），方便排查打包速度瓶颈。
$ webpack -p//压缩混淆脚本，这个非常非常重要！
$ webpack -d//生成map映射文件，告知哪些模块被最终打包到哪里了其中的 </pre>
          <h3>webpack-dev-server【devServer属性配置】</h3>
          <pre>DevServer 是webpack开发服务器
webpack-dev-server：一个服务器插件，相当于webpack+apache，启动一个web服务并实时更新修改，会自动监听变化，自动打包构建，自动更新刷新浏览器
特点：
不会产生dist文件，将打包结果暂时存在内存中，内部的http-sever访问这些文件并读取数据，发送给浏览器
减少磁盘的读取，提高构建效率
写法：在webpack.config.js文件中，通过属性devServer: { } 设置与 webpack-dev-server相关的配置
安装：下载安装webpack-dev-server库
$ npm i -D webapck-dev-server
配置package.json 和 webpack.config.js
"scripts": {
  "dev": "webpack-dev-server --inline --open --progress --colors --config build/webpack.dev.conf.js",
  "serve":"webpack-dev-server --env.NODE_ENV=development --progress --disable-host-check",
   ......
},
当运行 npm run dev 的时候，devServer首先会在内存中创建类似的dist目录，这里不会看到生成的dist打包文件，是因为webpack-dev-server是将打包编译结果放在内存中，内部的http-sever会访问这些文件并读取数据，再发送给浏览器 ，由浏览器打开进行预览

webpack-dev-server其它配置
mode: 'development',
entry: {},
output: {},
devtool:'#source-map',
module: {rules: []},
devServer: {
    contentBase: resolve('./'), // 对外提供的访问内容的路径，只有在提供静态文件访问的情况下才需要使用该配置。
    compress: true, // 配置是否启用 gzip 压缩。boolean 为类型，默认为 false。
    host: 'localhost' || baseDevServer.host,
    inline: true, // 切换dev-server的两种模式，默认情况server使用inline mode(live reload及构建信息的相关代码会被插入到bundle中。)。
       // false:切换到iframe mode(使用iframe mode会在通知栏下方显示构建信息)
    port: baseDevServer.port || 9000,
    quiet: true, // 当启用该配置，除了初始化信息会被写到console中，其他任何信息都不会被写进去。
                // errors和warnings也不会被写到console中。
    useLocalIp: baseDevServer.useLocalIp || false,
    overlay: { // 在编译过程中有任何错误，可以显示在网页上,在浏览器上全屏显示编译的errors或warnings。默认是关闭的
      warnings: false,
      errors: true
    },
    headers: { // 向所有的请求添加headers
      "X-Custom-Foo": "bar"
    },
    historyApiFallback: true, // 当使用html5 history api,将会在响应404时返回index.html。
    historyApiFallback: {
       rewrites: [ // 通过传递一个object来对该共呢个做更多的定
         { from: /^\/$/, to: '/views/landing.html' },
         { from: /^\/subpage/, to: '/views/subpage.html' },
         { from: /./, to: '/views/404.html' }
       ],
       disableDotRule: true // 当在路径中使用.符号，需要使用disableDotRule配置。
    },
    https: true, // 默认情况下dev-server使用http协议，通过配置可以支持https
    https: {
       key: fs.readFileSync("/path/to/server.key"),
       cert: fs.readFileSync("/path/to/server.crt"),
       ca: fs.readFileSync("/path/to/ca.pem"),
    },
    open: false, // 第一次构建是否自动用浏览器打开网页，默认是true
    openPage: '/different/page', // 配置项用于打开指定 URL 的网页
    hot: true, // 开启热更新HMR，只能跟新css。js和图片需要手动更新
    hotOnly:true, 启用HMR，当编译失败时，不刷新页面。
    proxy: {
     '/api': {
         target: 'https://api.github.com', // 代理地址
         pathRewrite: {
           '^/api': ''
         },
         // 默认代理服务器，会以我们实际在浏览器请求的主机名【localhost:8080】，作为代理服务器的主机名，
         // 然后代理服务器会带上这个主机名，去请求github，然而 github是不认识 【localhost:8080】
         //  changeOrigin: true 就是以实际代理请求发生过程中的主机名去请求，如：代理服务器的主机名
         changeOrigin: true
      }
   }
},
resolve: {
   extensions: ['.js', '.vue', '.json'],
   alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('./')
   }
},
plugins: [
   new webpack.HotModuleReplacementPlugin() // HMR 特性所需要的插件
]</pre>
          <h3>本地服务器devServer</h3>
          <pre>在开发模式下，DevServer 提供虚拟服务器，让我们进行开发和调试,需要单独安装
命令
npm install webpack-dev-server --save-dev
使用
let webpackConfig =require('./webpack.config')
webpackConfig.devServer = {
  ...
}
详细介绍
1、hot
热模块更新作用。即修改或模块后，保存会自动更新，页面不用刷新呈现最新的效果。
这不是和 webpack.HotModuleReplacementPlugin （HMR） 这个插件不是一样功能吗？是的，不过请注意了，HMR 这个插件是真正实现热模块更新的。而 devServer 里配置了 hot: true , webpack会自动添加 HMR 插件。所以模块热更新最终还是 HMR 这个插件起的作用。
2、host
写主机名的。默认 localhost
3、inline
设置为true，当源文件改变时会自动刷新页面
4、port
端口号。默认 8080
5、historyApiFallback
如果为 true ，页面出错不会弹出 404 页面
6、compress
如果为 true ，开启虚拟服务器时，为你的代码进行压缩。加快开发流程和优化的作用
7、contentBase
建议绝对路径 .你要提供哪里的内容给虚拟服务器用
// 单目录
contentBase: path.join(__dirname, "public")
// 多目录
contentBase: [path.join(__dirname, "public"), path.join(__dirname, "assets")]
默认情况下，它将使用您当前的工作目录来提供内容
8、open
true，则自动打开浏览器
9、overlay
如果为 true ，在浏览器上全屏显示编译的errors或warnings。默认 false （关闭）
如果你只想看 error ，不想看 warning
overlay：{
  errors：true，
  warnings：false
}
10、quiet
true，则终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的
11、publicPath
配置资源文件路径
publicPath: "/assets/"
// 原本路径 --> 变换后的路径
http://localhost:8080/app.js --> http://localhost:8080/assets/app.js
12、proxy
当您有一个单独的API后端开发服务器，并且想要在同一个域上发送API请求时，则代理这些 url
proxy: {
    '/proxy': {
        target: 'http://10.248.50.224',  // 实际请求地址ip
        ws：true,      //  如果开启了WebSockets配置这个参数
        secure:false,   //  如果使用https，会有安全校验，设置secure为false
        changeOrigin: true,  // 是否跨域
        pathRewrite: {       // 请求路径重写
            '^/api': ''    // 将 /api/xxx --> /xxx （去掉/api）
        }
  }
假设你主机名为 localhost:8080 , 请求 API 的 url 是 http：//10.248.50.224/user/list
'/proxy'：如果点击某个按钮，触发请求 API 事件，这时请求 url 是http：//localhost:8080/proxy/user/list
changeOrigin：如果 true ，那么 http：//localhost:8080/proxy/user/list 变为 http：//10.248.50.224/proxy/user/list 。但还不是我们要的 url
pathRewrite：重写路径。匹配 /proxy ，然后变为” ，那么 url 最终为 http：//10.248.50.224/user/list
将请求代理到同一目标

13.如果要将多个特定路径代理到同一目标，则可以使用具有context属性的一个或多个对象的数组：
const url='http://192.168.0111.8888'
module.exports = {
  //...
  devServer: {
    proxy: [{
      context: ['/auth', '/api'],
      target: url,
    }]
  }
}

完整配置如下:
devServer: {
        contentBase: './app',
        port: 8081,
        inline: true,
        open: true,
        openPage: '',
        hot: true,
        proxy: {
            "/api/*": {
                target: ip,
                secure: false,
                changeOrigin: true,
                pathRewrite: {
                    "/api": "/"
                }
            }
        },
        overlay: {
            warnings: true,
            errors: true
        }
    }</pre>
          <h3>webpack 日常报错积累</h3>
          <pre>1、浏览器报错500，Cannot read property 'split' of null
主要是devServer.proxy.target 这里引起的
比如http://192.168.2.181:8000/写成了http//192.168.2.181:8000/，很难看出来吧，就是少了一个冒号：
我是.env.developmen配的 VUE_APP_BASE_TARGET 多了个分号 -> VUE_APP_BASE_TARGET= 'http://10.248.50.224';
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue",
  data() {
    return {
      created: this.$route.query.created,
      title: this.$route.query.name,
      catalogue: [],
    };
  },
  created() {
    // console.log(process);
  },
  mounted: function () {
    this.$nextTick(function () {
      this.createCatalogue();
    });
  },
  computed: {},
  methods: {
    jump(index) {
      let jump = document.getElementsByTagName("h3");
      let total = jump[index].offsetTop; // 获取目标位置滚动的距离
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total; //防止total，let step=total/50太小，移动缓慢
        step = newTotal / 50;
        smoothUp();
      }

      function smoothDown() {
        if (total > distance) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (total < distance) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
    },
    //创建目录函数
    createCatalogue() {
      let object = document.getElementsByTagName("h3");
      var flag = [];
      for (var i = 0; i < object.length; i++) {
        var o = { name: object[i].innerHTML };
        flag.push(o);
      }
      this.catalogue = flag;
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
