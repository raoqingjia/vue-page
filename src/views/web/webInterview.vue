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
          <h3>只能输入零和非零开头的数字，正确的正则表达式是</h3>
          <pre>
A)^(0|[1-9][0-9]*)$
B)^(0|[1-9][1-9]*)$
C)^(0|[1-9][0-9])$
D)^\+[1-9][0-9]*$
正确答案: A
只能输入零／非零开头的数字
^ 以。。。开头，$以。。。结尾。
*任意多次
|或的意思
()组
[]集合</pre>
          <h3>通过div显示XMLHttpRequest的状态，哪个是正确的做法</h3><pre>
A)var myDiv = document.getElementById ("statusCode"); myDiv.innerHTML = req.statusCode;
B)var myDiv = document.getElementById ("statusCode"); myDiv.innerHTML = req.status;
C)var myDiv = document.getElementById ("statusCode"); myDiv.setStatus (req.statusCode);
D)var myDiv = document.getElementById ("statusCode"); myDiv.status = req.status;
正确答案: B
status属性返回状态码，为一个数字。
statusText属性返回状态码以及描述，字符串。
并没有statusCode....
XMLHttpRequest对象的readyState与status的几种状态码表示的意思:
readyState有五种状态：
0 (未初始化)： (XMLHttpRequest)对象已经创建，但还没有调用open()方法；
1 (载入)：已经调用open() 方法，但尚未发送请求；
2 (载入完成)： 请求已经发送完成；
3 (交互)：可以接收到部分响应数据；
4 (完成)：已经接收到了全部数据，并且连接已经关闭。
status实际是一种辅状态判断，只是status更多是服务器方的状态判断。
关于status，由于它的状态有几十种，我只列出平时常用的几种：
1xx——信息类，表示收到Web浏览器请求，正在进一步的处理中。如，100：客户必须继续发出请求；101：客户要求服务器根据请求转换HTTP协议版本
2xx——成功，表示用户请求被正确接收，理解和处理。例如，200：OK；201：提示知道新文件的URL
3xx——重定向，表示请求没有成功，客户必须采取进一步的动作。如，300：请求的资源可在多处得到；301：删除请求数据
4xx——客户端错误，表示客户端提交的请求有错误。如，404：NOT Found，意味着请求中所引用的文档不存在。
5xx——服务器错误，表示服务器不能完成对请求的处理。如，500，服务器产生内部错误</pre>
          <h3>以下代码执行后，console 的输出是？</h3>
          <pre>
function Foo(){'use strict'
console.log(this.location);
}
Foo()
A)当前窗口的 Location 对象
B)undefined
C)null
D)TypeError
正确答案: D
'use strict'是严格模式,严格模式下禁止this关键字指向全局对象。此时this为undefined         </pre>
          <h3>JavaScript的基本数据类型？</h3>
          <pre>
解答:基本数据类型：String Number Boolean Number Undefined Symbol（es6引入） 引用数据类型：Object Array Function
可以这样记 usnb u: undifined s: string symbol n: number null b: boolean</pre>
          <h3>代码的输出结果是</h3>
          <pre>
var one;
var two=null;
console.log(one==two,one===two);
上面代码的输出结果是：true false
解析：one变量的值是undefined，two的值是null，undefined==null，但undefined的type是undefined，但null的类型是object</pre>
          <h3>以下哪些表达式的结果为true（）</h3>
          <pre>
A. undefined == null
B. isNaN("100")
C. parseInt("1a") === 1
D. [] instanceof Array
正确答案: A C D
解析
1. isNaN()函数用来判断一个数是否是NaN; 只有一个值是NaN或者能被转换为NaN的时候才返回true
console.log(isNaN('e'));//true,因为e可以被转换为NaN
console.log(isNaN('11'));//false,因为字符串可以被转换为数字,不能被转为NaN
console.log(isNaN(null));//false,因为null可以被转换为0,不能被转为NaN
console.log(isNaN(NaN));// true,NaN返回true

2. parseInt(string,raix)函数有两个参数
2.1如果都是字母， 返回：NaN
parseInt("abc", 10)  //返回 NaN
2.2如果都是数字，则返回整数
parseInt("123", 10)   //返回 123
2.3如果字母和数字都存在
2.3.1以数字开头，则取截止到第一个字母出现之前的所有数字进行转换
2.3.2如果参数“string”，以字母开头，直接返回NaN （10进制中字母不是一个有效的的表示）
parseInt("df2bc", 10)  //返回 NaN</pre>
          <h3>jquery中   eq(index)  find(expr)  siblings([expr])  next() 查找元素的范围是什么</h3>
          <pre>siblings同辈，find后辈及子辈，eq第几个，next下一个</pre>
          <h3>typeof 结果有哪些类型</h3>
          <pre>
undefined         值未定义
boolean           布尔值
string            字符串
number            数值（整形和浮点）
object            对象或null
function          函数</pre>
          <h3>浏览器私有前缀</h3>
<pre>
-moz-         火狐浏览器
-webkit-      360、苹果、猎豹、搜狗、QQ、 Chrome等浏览器
-o-           Opera/欧朋浏览器
-ms-          IE、百度等浏览器</pre>
          <h3>返回的json和jsonp有什么区别？</h3>
          <pre>
json是一种基于文本的数据交换格式（不支持跨域），而jsonp是一种非官方跨域数据传输方式,json不支持跨域请求,只能使用jsonp。
简单的说json返回的是一串数据；而jsonp返回的是脚本代码（包含一个函数调用）,  一个是静止的文本，一个是动态的函数。
因为json不支持跨域，而js可以跨域，因此在服务器端用客户端提供的js函数名将json数据封装起来，再将函数提供给客户端调用，从而获得json数据，这就是jsonp协议的原理。
json的特点：
1）基于纯文本，跨平台传递极其简单；2）Javascript原生支持，后台语言几乎全部支持；3）轻量级数据格式，占用字符数量极少，特别适合互联网传递；4）可读性较强，虽然比不上XML那么一目了然，但在合理的依次缩进之后还是很容易识别的；5）容易编写和解析，当然前提是你要知道数据结构；
jsonp的使用方法 ：
JSONP的出现是为了解决Ajax跨域请求问题，所谓的跨域请求问题，即访问不同的域 (只要协议、域名、端口有任何一个不同，都被当作是不同的域) 的资源的时候会被拒绝。
开发过程中，如果出现类似 “Origin ****** is not allowed by Access-Control-Allow-Origin.” 的错误，则可能是由于json数据不支持跨域导致的，应考虑使用jsonp协议。
如果出现类似 ”SyntaxError: Unexpected token ':'. Parse error.“ 的错误，则可能是由于返回的json数据没有用”callback“传递的函数名封装导致的。</pre>
          <h3>浏览器里面的事件都会按照一定的规则去传递，这个规则是什么？</h3>
          <pre>
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
2)普通的API,例如 onclick ,onmouse 默认只能在冒泡阶段触发，而且不能复写，复写事件会覆盖。</pre>
          <h3>AMD与CMD规范</h3>
          <pre>
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
    mounted() {
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
          object[i].innerHTML = ((i + 1) + ". " + object[i].innerHTML);
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
