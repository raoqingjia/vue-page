<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue">
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>webpack 五个核心概念</h3>
          <pre>
1、Entry
入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。
2、Output
输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。
3、Plugins
插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
4、Mode
模式(Mode)指示 webpack 使用相应模式的配置。
development 会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 development。启用 NamedChunksPlugin 和NamedModulesPlugin。能让代码本地调试运行的环境
production  会将 DefinePlugin 中 process.env.NODE_ENV 的值设置为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 TerserPlugin。能让代码优化上线运行的</pre>
          <h3>输入指令下载并安装 webpack</h3>
          <pre>
npm install webpack webpack-cli -g
npm install webpack webpack-cli -D
npm i css-loader style-loader less-loader less -D   打包样式资源下载安装 loader 包
npm install --save-dev html-webpack-plugin  打包 HTML 资源
npm install --save-dev html-loader url-loader file-loader   打包图片资源
npm install webpack-dev-server 安装webpack-dev-server实现了自动编译刷新浏览器  运行指令: npx webpack-dev-server  
npm install --save-dev mini-css-extract-plugin   提取 css 成单独文件</pre>
          <h3>编译打包应用</h3>
          <pre>
webpack 能够编译打包 js 和 json 文件。能将 es6 的模块化语法转换成浏览器能识别的语法。能压缩代码。不能编译打包 css、img 等文件。不能将 js 的 es6 基本语法转化为 es5 以下语法。
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
          <pre>
对css的处理主要在于1、提取css成单独文件2、css兼容性处理3、压缩css
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
}</pre>
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
              <h3></h3>
          <pre></pre>
              <h3></h3>
          <pre></pre>
              <h3></h3>
          <pre></pre>
              <h3></h3>
          <pre></pre>
              <h3></h3>
          <pre></pre>
              <h3></h3>
          <pre></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    created(){

    },
    mounted:function(){
      this.$nextTick(function(){
          this.createCatalogue();

     })
    },
    computed:{},
    methods: {
      jump (index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown () {
          if (total>distance ) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if ( total<distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue(){
        let object = document.getElementsByTagName('h3');
        var flag=[];
        for(var i=0;i<object.length;i++){
          var o={name:object[i].innerHTML};
          flag.push(o)
        }
       this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
