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
            <li v-for="(items,index) in catalogue" :key="index"><a @click="jump(index)">{{index+1}}、{{items.name}}</a>
            </li>
          </ul>
          <h3>简介及网站链接</h3>
            <pre>① 简介
Less 是用 JavaScript 写的，所以需要额外的 Node.js 或者网页浏览器才能够运行它。你可以在你的网站中引入 less.js ，这样在真正的运行环境下它就可以自动编译，但这个过程非常缓慢，所以不建议这么使用。 推荐的方式是提前编译成 CSS 代码并且将一个正常的发展版本备份在线上。
② 网站链接
中文官网  http://lesscss.cn/
英文官网  https://less.bootcss.com/usage/
其他链接  https://blog.csdn.net/iamcgt/article/details/73028435?utm_source=itdadao&utm_medium=referral</pre>
          <h3>Node.js 环境中使用 Less</h3>
           <pre>① npm install -g less  全局安装
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
          <h3>直接在html中使用Less</h3>
          <pre>
html中直接引入：
&#60link rel="stylesheet/less" type="text/css" href="文件路径/styles.less" rel="external nofollow" >
&#60script src="文件路径/less.js" type="text/javascript">&#60/script>
或者  lessc styles.less > styles.css 后引入转译后的css（使用lessc的前提是npm i less --save-dev本地安装了）
&#60link rel="stylesheet" type="text/css" href="styles.css" />
&#60script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.0.2/less.min.js" >&#60/script></pre>
          <h3>Vue2中使用Less</h3>
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
          <h3>Less 变量（Variables）</h3>
          <pre>语法格式： @key: 值;
首先声明一个变量表示这个颜色值，变量的 ‘key’ 需要在前面加上 ‘@’ 符号表示该属性是一个变量
<p class="language-bg">@red:red;
@w:200px;
#big{
  width:@w;
  height:@w;
  background-color:@red;
}
p{
  color:@red;
}</p>变量的使用场合主要为以下几种：
值变量
选择器变量
属性名变量
URL 变量
声明变量
变量运算
1 值变量
<p class="language-bg">@link-color: red;
@link-size : 24px;
.link {
  color    : @link-color;
  font-size: @link-size;
}</p>
2 声明变量
<p class="language-bg">@bg: {background-color:red};
.container {
  @bg();
}
输出代码：
.container {
   background-color:red;
}</p>
3 选择器变量
变量可以把选择器变为一个动态的选择器，同时也可以复用选择器中重复的字符，与常规用法不同的是在使用变量时需要用 ‘{}’ 把变量包裹起来。
<p class="language-bg">@sleName: container;
.@{sleName} {
  color: #fff;
}
#@{sleName} {
  color: #fff;
}
.top-@{sleName} {
  color: #fff;
}
输出代码：
.container {
  color: #fff;
}
#container {
  color: #fff;
}
.top-container {
  color: #fff;
}</p>
4 属性名变量
<p class="language-bg"> @bg: background-color;
.container {
  @{bg}: red;
}
输出代码：
.container {
  background-color: red;
}</p>
5 URL 变量
文件的 URL 也可以作为一个变量，便于文件结构变化后修改文件路径。
<p class="language-bg">@util: "../util"
.container {
  background-image: src("@{util}/a.png");
}
 输出代码：
.container {
  background-image: src("../util/a.png");
}</p>
6 变量运算
变量可以通过加减乘除等算法输出运算后的值。
加减运算时以第一个数据的单位为准
乘除运算注意保持单位的一致
<p class="language-bg">@width: 20px;
.container {
  width: @width/2;
}
输出代码：
.container {
  width: 10px;
}</p>
Tip提示
变量是延迟加载的，所以可以不用提前声明。
<p class="language-bg">输入代码：
.a {
  color: @color;
}
@color: red;
输出代码：
.a {
  color: red;
}</p>
变量遵循就近原则，当有多个同名变量存在时，变量的值为最近定义的哪一个；同时如果在当前作用域未找到该变量，则会向上查找。
<p class="language-bg">输入代码
@size: 20px;
.container {
  @size: 30px;
  font-size: @size;
}
输出代码：
.container {
  font-size: 30px;
}</p>
个人经验
我们可以创建一个配置文件单独声明变量，利于我们维护代码，类似于如下代码：
<p class="language-bg">@default-color          : @theme-color;
@success-color          : #34BFA3;
@warning-color          : #FFE57F;
@error-color            : #F4516C;
@disabled-color         : #DEE2E6;
@selected-color         : fade(@default-color, 90%);
@tooltip-color          : #fff;
@subsidiary-color       : #80848f;
@rate-star-color        : #f5a623;</p></pre>
          <h3>Less 继承（Extend）</h3>
          <pre>Extend 主要用于复用重复的样式类，可附加在选择器上或放置到样式集中。
代码解释：我们可以看到输出的代码中并没有 :extend() 这个伪类，在编译的过程中这个伪类会被删除掉，从而使原代码块保持原样，这一点与 :hover 那些伪类并不相同。
Less 中的继承有 2 种使用方法，分别为在选择器中使用，和在样式集中使用，2 种方式都是把需要继承的选择器名称写入 :extend() 的括号来实现继承的。

在样式集中使用
语法  &:extend(class类名);
<p class="language-bg">nav {
  &:extend(.line);
  background: blue;
}
.line {
  color: red;
}
输出结果
.nav {
  background: blue;
}
.line，nav {
  color: red;
}</p>
附加在选择器上使用
语法格式
< selector>:extend(< extendSelector>) { }
<p class="language-bg">.b{
  color: red;
}
.a:extend(.b) {
  background: blue;
}
输出结果
.b,.a {
  color: red;
}</p>
继承中的 ‘all’ 关键字
当继承嵌套结构的样式时，如果想要同时继承嵌套结构内的样式，需要在样式名加上 ‘all’ 关键字。
<p class="language-bg">.a {
  &:extend(.b all);
}
.b {
  color: red;
  .c {
    background: #8a2be2;
  }
}
输出代码：
.a,.b {
  color: red;
}
.a .c, .b .c {
  background: #8a2be2;
}
.a下面的.c 同时继承了 .b下面的子级</p>
Tips
1、选择器可以包含多个伪类，但是 :extend() 必须位于末位。
            <p class="language-bg">div:hover:extend(span)</p>
2、选择器和 :extend() 之间是允许有空格。
            <p class="language-bg">div :extend(span)</p>
3、选择器可以多次继承。
<p class="language-bg">.color {
  color: red;
}
.bg-color {
  background: green;
}
//  与 div:hover:extend(.color, .bg-color) 等效
div:hover:extend(.color):extend(.bg-color)</p>
4、如果一个规则集包含多个选择器，其中任何一个选择器都可以具有 :extend() 。
<p class="language-bg">.content:extend(.color), .image:extend(.bg-color) {
  color: red
}</p>
5、:extend() 可以匹配嵌套选择器。
<p class="language-bg">div {
  img {
    width: 10px;
  }
}
.class:extend(div img) {
  hegiht: 20px;
}</p>
6、:extend() 中所继承的选择器名称不能是变量，以下示例均为错误示范。
<p class="language-bg">.content {
  color: blue;
}
.class:extend(@{selector}) {} // 找不到匹配项
@selector: .content;</p>
7、:extend() 并没有重复检测，请勿重复定义。比如以下代码中只用继承 .success-info 或者 span 即可，以下写法编译时并不会帮我们把重复的选择器删除掉。
<p class="language-bg">.success-info,span {
  color: green;
}
.success:extend(.success-info, span) {}</p></pre>
          <h3>混合函数（Mixins as Functions)</h3>
          <pre>类似于 JS 等编程语言中函数，它也具有函数的诸多特征，比如传入参数、返回参数等
混合函数可以对传入参数进行处理后返回，封装判断、循环及计算逻辑，从而达到复用的效果。
<p class="language-bg">.return() {
  @width:  80%;
  @height: 20px;
}
.callback {
  .return();    //  这里相当于直接返回了 @width  @height 供后续css使用
  width:  @width;
  height: @height;
}
输出结果
.callback {
  width:  80%;
  height: 20px;
}</p>
返回参数
混合函数可对传入参数进行计算处理，感觉这个应用在移动端计算长宽度挺好用的，先定义好计算公式，之后传入入参就行了
<p class="language-bg">img(@line, @row) {
  @width: ((@row+ @line) / 2);
}
img {
  .img(20px, 50px); // 引入 mixin
  width: @width;    // 使用返回值（@width）
}
输出代码
img {
  width: 35px;
}
混合函数可以返回一个 Mixins 并引入使用</p>

Tip
1、在 Mixins 中定义的变量和混合函数是仅对调用方来说是可见的。比如说下面的用法就是错误的：
<p class="language-bg">.a {
  .b(@color){
    color: @color;
  }
}
.c{
   // 此处会报错，因为 .b() 是属于 .a 的作用域，所以 .c 不能直接调用 .b()
  .b(#fff);
}</p>
2、如果调用方的作用域中，包含相同名称的变量（包括由另一个混合函数定义的变量），则保留原本定义的变量。从父作用域所继承的变量则会被覆盖重写。
<p class="language-bg">@width: 300px; // 父作用域变量会被覆盖
.a() {
  @width: 100px;
}
.b {
  .a();
  @width: 200px; // 调用方作用域中的变量需在 mixins 之后才不会被 mixins 中的变量覆盖。
  width: @width;
}
输出代码
.b {
  width: 200px;
}</p></pre>
          <h3>样式导入（Import Styles）</h3>
          <pre>导出并不需要特殊的语法，但是导入需要我们使用 @import 语法并加上文件名称。此外导入机制仅编译我们用到的代码，并不会编译多余的代码。
有一点与原生语法不同的是，在 CSS 中 @import 规则必须位于所有其他类型的规则之前。但是 Less 可以将 @import 语句放在任意位置。
@import 可以帮助我们形成一个个的文件模块，使用文件模块有以下几个优点：
提高代码复用性
提高代码可维护性
<p class="language-bg">.apple {
  background: red;
}
@import "base.less"; </p>
在这里 Less 中虽然允许我们将导入指令写在任意位置，建议同 CSS 语法一样在文件头部导入文件，便于我们快速查阅导入文件的列表并进行修改。
除了可以引入.less 文件，还可以引导不同类型的文件。
根据导入文件类型的不同，@import 语句可能会出现以下几种情形：
如果文件扩展名为 .css，该文件将被视为 CSS 文件，@import 语句引入规则保持不变。
如果文件扩展名为除 .css 和 .less 以外的拓展名，@import 语句将会将其拓展名视为 .less 并将其引入。
文件无扩展名时，@import 语句将会默认添加 .less 拓展名并引入。
<p class="language-bg">@import "foo";      // 引入 foo.less
@import "foo.js";  // foo.js 会被当作 less 文件引入
@import "foo.css";  // 规则不变</p></pre>
          <h3>父选择器（Parent Selectors）</h3>
          <pre>用 ＆ 符号引用父选择器。
<p class="language-bg">a {
  color: blue;
  &:hover {
    color: green;
  }
}
在上述代码中，:hover 前面加上了 & 符号，编译后则等同于 a:hover 。
输出代码
a {
  color: blue;
}
a:hover {
  color: green;
}</p>
多个 & 组合
使用多个 & 运算符并使用其他运算符连接起来，便于重复引用父选择器而无需重复其名称。
<p class="language-bg">.link {
  & , & {
    color: red;
  }
  && {
    color: blue;
  }
  &, &ish {
    color: cyan;
  }
}
输出代码
.link , .link {
  color: red;
}
.link.link {
  color: blue;
}
.link, .linkish {
  color: cyan;
}</p>
Tips
在嵌套结构中，＆ 运算符代表所有父选择器，而不仅仅是最接近的父选择器，比如
<p class="language-bg">.grand {
  .parent {
    & > & {
      color: red;
    }
  }
}
上述代码中的 & 运算符不仅仅指的是 .parent 这个父选择器，而是 .grand .parent ,输出代码
.grand .parent > .grand .parent {
  color: red;
}</p></pre>
<!--          https://www.wenjiangs.com/doc/less-miscfunctions-->
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
        title: this.$route.query.name,
        catalogue: []
      }
    },
    mounted() {
      this.$nextTick(function () {
        less.render('.class { width: 1 + 1 }', function (e, css) {
          console.log(css);
        });
        this.createCatalogue();
      })
    },
    methods: {
      jump(index) {
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

        function smoothDown() {
          if (total > distance) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }

        function smoothUp() {
          if (total < distance) {
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
      createCatalogue() {
        let object = document.getElementsByTagName('h3');
        var flag = [];
        for (var i = 0; i < object.length; i++) {
          var o = {name: object[i].innerHTML};
          flag.push(o);
          object[i].innerHTML = (i+1) +'、'+ object[i].innerHTML;
        }
        this.catalogue = flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
