<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1、简介及网站链接
          </h3>
            <pre>
① 简介
Less 是用 JavaScript 写的，所以需要额外的 Node.js 或者网页浏览器才能够运行它。你可以在你的网站中引入 less.js ，这样在真正的运行环境下它就可以自动编译，但这个过程非常缓慢，所以不建议这么使用。 推荐的方式是提前编译成 CSS 代码并且将一个正常的发展版本备份在线上。
② 网站链接
中文官网  http://lesscss.cn/
英文官网  https://less.bootcss.com/usage/
其他链接  https://blog.csdn.net/iamcgt/article/details/73028435?utm_source=itdadao&utm_medium=referral</pre>
          <h3>
            2、Node.js 环境中使用 Less
          </h3>
           <pre>
① npm install -g less  全局安装
② 之后切换到项目目录，通过npm init初始化一个package.json文件
npm i less --save-dev
③ 安装完成后，你将可以在任何打开的窗口中使用 lessc命令，这个命令允许你将 .less 文件编译成纯 CSS 文件，像下面这样：
lessc styles.less > styles.css
如果说，我们用 less 将所有的样式写在了 style.less 中，通过上述命令，我们就可以将代码转换为纯 CSS 代码。接下来你就可以将样式表引入到 HTML 中了，如果在编译过程中出现了错误，将会在终端的命令行中提示你。
④ 只要安装了 LESS，就可以在Node中像这样调用编译器:
var less = require('less');
less.render('.class { width: 1 + 1 }', function (e, css) {
    console.log(css);
});           </pre>
          <h3>
            3、直接在html中使用Less
          </h3>
          <pre>
html中直接引入：
&#60link rel="stylesheet/less" type="text/css" href="文件路径/styles.less" rel="external nofollow" >
&#60script src="文件路径/less.js" type="text/javascript">&#60/script>
或者  lessc styles.less > styles.css 后引入转译后的css（使用lessc的前提是npm i less --save-dev本地安装了）
&#60link rel="stylesheet" type="text/css" href="styles.css" />
&#60script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.0.2/less.min.js" >&#60/script></pre>
          <h3>
            4、Vue2中使用Less
          </h3>
          <pre>
① 由于不需要手动配置webpack，所以vue中使用less是非常简单的，只需要安装less，less-loadder就ok了首先，说明一点，如果是使用npm init webpack项目名的方式创建的项目,无需手动配置webpack，所以再vue中使用less就非常简单了，只需要安装less, less-loader就行了
npm install less --save-dev
npm install less-loader --save-dev
npm install less less-loader --save   //同时将less和less-loader安装到开发依赖
② 如果安装成功那么就可以再vue组件中使用less了，使用的时候在style标签里加上lang=”less”里面就可以写less的代码了(style标签里加上 scoped 为只在此作用域 有效)
&#60style lang="less" scoped>
  @p-blue:blue;
  .hello{
    p{
      color:@p-blue;
    }
  }
&#60style>
或者是
&#60style lang="less" scoped>
  @import './index.less'; //引入全局less文件
&#60style>
③ less的引用写法：
&#60style lang="less" src="./index.less">&#60/style>
css的引用写法：
&#60style lang="css">
  @import './index.css'
&#60/style>
 或者
&#60style lang="css" src="./index.css">&#60/style>          </pre>
          <h3> 4、在.less中的书写方式</h3>
          <pre>
① 变量
@red:red;
@w:200px;
#big{
  width:@w;
  height:@w;
  background-color:@red;
}
p{
  color:@red;
}
② 混合
.bt{
  width:200px;
  height:200px;
  border-top:2px solid red;
  background-color:red;
}
#big{
  .bt;
  #small{
    .bt;
  }
}
③ 嵌套
 #box{
  width:100%;
  height:60px;
  background-color:#ccc;
  h3{
    width:100%;
    height:20px;
    background-color:yellow;
  }
  ul{
    list-style:none;
    li{
      height:40px;
      line-height:40px;
    }
  }
}
④ 带参数
1）可以像函数一样定义一个带参数的属性集合
  .border-radius (@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
#header {
  .border-radius(4px);
}
2）给参数设置默认值
.border-radius (@radius: 5px) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
#header {
  .border-radius;
}
⑤ 注释
//单行注释//
/*多行
 注释*/
•引入其他less文件
@import "other.less";          </pre>
        </div>
        <div class="hello" >
          <p>less测试</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var less = require('less');
  export default {
    name: 'npm',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
        less.render('.class { width: 1 + 1 }', function (e, css) {
          console.log(css);
        });
      })
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @p-blue:blue;
  .hello{
    p{
      color:@p-blue;
    }
  }
</style>
