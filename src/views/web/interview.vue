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
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>
            一、关于浏览器面试题
          </h3>
          <pre>
<span>① 浏览器里面的事件都会按照一定的规则去传递，这个规则是什么？</span>
事件捕获、事件响应、事件冒泡。
<img src="../../img/bomEvent.jpg" style="width: 400px">
不管body上绑定事件、或者div甚至div的text节点上绑定事件，这个事件必须先从根节点开始遍历（即Window对象开始），从上往下，传递的过程中，发现有的元素绑定了事件，也先放着，等全部事件捕获完毕（遍历完毕）， 开始处理事件，处理的顺序为，从最小的根节点上的事件开始，依次向上冒泡。
一句话概括这种机制：
捕获：自外而内，从根到叶，从大到小 。
冒泡：自内而外，从叶到根，从小到大。
但是addEventListener这种监听事件的方式可以改变
btn.addEventListener('click', function() {alert(this.id)},false);
true - 事件句柄在捕获阶段执行
false- 默认,事件句柄在冒泡阶段执行
Internet Explorer 8 及更早IE版本不支持 addEventListener() 方法
总结：
1)addEventListener(事件，函数，boolean?捕获:冒泡)，这个API可以设置事件触发于捕获/冒泡阶段，而且这个事件可以复写。
2)普通的API,例如 onclick ,onmouse 默认只能在冒泡阶段触发，而且不能复写，复写事件会覆盖。
<span>② 浏览器私有前缀</span>
-moz-         火狐浏览器
-webkit-      360、苹果、猎豹、搜狗、QQ、 Chrome等浏览器
-o-           Opera/欧朋浏览器
-ms-          IE、百度等浏览器
</pre>
          <h3>
            二、关于数据问题
          </h3>
          <pre>
<span>1、返回的json和jsonp有什么区别？</span>
json是一种基于文本的数据交换格式（不支持跨域），而jsonp是一种非官方跨域数据传输方式,json不支持跨域请求,只能使用jsonp。
简单的说json返回的是一串数据；而jsonp返回的是脚本代码（包含一个函数调用）,  一个是静止的文本，一个是动态的函数。
因为json不支持跨域，而js可以跨域，因此在服务器端用客户端提供的js函数名将json数据封装起来，再将函数提供给客户端调用，从而获得json数据，这就是jsonp协议的原理。

<span>2、json的特点：</span>
1）基于纯文本，跨平台传递极其简单；
2）Javascript原生支持，后台语言几乎全部支持；
3）轻量级数据格式，占用字符数量极少，特别适合互联网传递；
4）可读性较强，虽然比不上XML那么一目了然，但在合理的依次缩进之后还是很容易识别的；
5）容易编写和解析，当然前提是你要知道数据结构；

<span>3、jsonp的使用方法 ：</span>
JSONP的出现是为了解决Ajax跨域请求问题，所谓的跨域请求问题，即访问不同的域 (只要协议、域名、端口有任何一个不同，都被当作是不同的域) 的资源的时候会被拒绝。
开发过程中，如果出现类似 “Origin ****** is not allowed by Access-Control-Allow-Origin.” 的错误，则可能是由于json数据不支持跨域导致的，应考虑使用jsonp协议。
如果出现类似 ”SyntaxError: Unexpected token ':'. Parse error.“ 的错误，则可能是由于返回的json数据没有用”callback“传递的函数名封装导致的。
          </pre>
          <h3>
            三、H5、CSS相关
          </h3>
          <pre>
<span>1、盒模型中W3C和IE怪异盒模型</span>
<span>2、内部样式、外部样式、内联样式、选择器</span>
内联方式：样式定义在单个的HTML元素中 
内部样式表：样式定义在HTML页的头元素中，即在文档的&#60head>元素内添加&#60style>元素 在&#60style>元素中添加样式规则
外部样式表：将样式定义在一个外部的CSS文件中（.css文件）；由HTML页面引用样式表文件

<span>3、css的解析顺序</span>
加载顺序一般是：外部样式 < 内部样式 < 内联样式
有种特殊情况：就是如果外部样式放在内部样式的后面，则外部样式将覆盖内部样式。

<span>4、css优先级</span>
说明：优先级主要是针对不同的选择方式来说的。
内联样式表的权值 > ID 选择器的权值 > Class 类选择器的权值 > HTML 标签选择器的权值
可以在属性最后添加!important，申明最大优先级

<span>5、css选择器</span>
选择器的目的是为了得到对目标元素的引用，一旦得到引用，就可以在此引用上执行各类操作。一个元素有很多不同的表征，这些都可以作为寻找引用的依据。

1. id选择器
    id: id是一个标签元素在html中的唯一标识，使用id可以快速且唯一的寻找到元素引用

2. Class选择器
    class: class表示了一个标签元素所属的类，类和标签属于多对多关系，一个类可以有多个标签，一个标签也可以属于多个类，使用class会寻找到归属于此类的多个标签元素

3. 标签选择器
    tagName: tagName是一个标签的名称，通过标签名可以找到文档中所有同名标签

4. 后代选择器:
    div p: 表示文档中，所有div子树中的p都被抓取，不论p是div的儿子辈还是孙子辈

5. 子选择器
    div>p: 表示文档中，所有div子树中的直接后辈p都被抓取，即p必须是div的儿子辈

6. 群组选择器
    div, p, li: 表示组合，即对多个元素组合执行相同的操作

7. 高级选择器
    div#box1: 表示文档中，所有id是box1的div(其实应该只有1个)，查询结果等价于#box1
    div.box1: 表示文档中，所有class中含有box1的div
    邻兄弟选择器器
    h1 + p {margin-top:50px;} 这个选择器读作：“选择紧接在 h1 元素后出现的段落；而且要是h1 和 p 元素拥有共同的父元素”。

8. 属性查找
    [school]: 表示文档中，所有含有school属性的所有标签
    div[school]: 表示文档中，含有school属性的所有div
    div[school='abc']: 表示文档中，含有school属性且值为'abc'的所有div
    div[school^='a']: 表示文档中，含有school属性且值以'a'开头的所有div
    div[school$='a']: 表示文档中，含有school属性且值以'a'结尾的所有div

9. 伪类选择器
    某元素:link  表示当此元素未被访问时的样式(即初始默认样式)
    某元素:hover 表示当鼠标移到此元素上时的样式
    某元素:active 表示当鼠标点击瞬间(未释放鼠标)时的样式
    某元素:visited 表示当此元素被访问过(释放鼠标后)时的样式
    以上4种伪类选择器定义了当发生某些动作时的样式改变，可以用于提供简单的界面交互

    p:first-child 表示当p是某一个父元素的第一个子元素时被获取
    p:last-child 表示当p是某一个父元素的最后一个子元素时被获取
    p:nth-child(x) 表示当p是某一个父元素的指定第x个子元素时被获取
    p:nth-child(2n) 表示当p是某一个父元素的指定偶数个子元素时被获取
    以上4种伪类的理解容易发生偏差，且使用时容易出错，产生意外结果

10. 伪元素选择器
    li:first-letter 表示此元素的第一个文本字符被获取
    li:before
    li:after
    以上2种一般配合content属性使用，表示此元素的原有文本前/后增加对应内容,first-letter不能应用于a等行内元素

<span>7、说一下max-height、min-height、height之间的基准</span>
max-height 这个属性会阻止 height 属性的设置值变得比 max-height 更大，
min-height 这个属性会阻止 height 属性的设置值变得比 min-height 更小，
max-height 属性用来设置给定元素的最大高度. 如果height 属性设置的高度比该属性设置的高度还大,则height 属性会失效.
min-height 属性用来设置给定元素的最小高度. 如果height 属性设置的高度比该属性设置的高度还小,则height 属性会失效.
max-height 重载（覆盖掉） height, 但是 min-height 又会重载（覆盖掉） max-height.

<span>8、水平、垂直居中的方式</span>
1、绝对定位与负margin
先left:50%,然后margin为元素宽的负一半
2、绝对定位margin值为auto
Top、bottom、left、right为0，margin: auto;
3、借助绝对定位与平移
Trandform: translate(-50%,-50%);
4、借助display: table;
5、盒子
6、(1)行内元素: text-align: center;
(2)margin: 0 auto;
  Inline-block (在子元素) 配合text-align: center;(在父元素)


<span>6、如何理解html、css、js之间的关系</span>
Html是例如人体的骨骼，骨骼是否畸形的全由他， css是人的外貌，好不好看全靠他，
Js类似人的大脑中枢，指挥人的日常行动
如果说HTML是肉身、CSS就是皮相、Javascript就是灵魂
如果说HTML是建筑师，CSS就是干装修的，Javascript是魔术师    </pre>
          <h3>四、规范手守则</h3>
          <pre>
<span>① AMD与CMD规范</span>
AMD 规范是异步模块加载机制。
CMD 规范是一个模块就是一个文件
AMD 是 RequireJS 在推广过程中对模块定义的规范化产出，RequireJS 遵循的是 AMD（异步模块定义）规范，
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出，SeaJS 遵循的是 CMD （通用模块定义）规范”。
区别：
对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同），CMD 推崇依赖就近，AMD 推崇依赖前置。
amd 规范 https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88)
cmd 规范 https://github.com/seajs/seajs/issues/242
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'http_error',
    data() {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue: []
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.createCatalogue();
      })
    },
    methods: {
      jump(index) {
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
          flag.push({name: object[i].innerHTML})
        }
        this.catalogue = flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
