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
          <h3>TCP（传输控制协议）是什么？</h3>
          <pre>

          </pre>
          <h3>React事件绑定原理</h3>
          <pre>

          </pre>
          <h3>说一下浏览器输入URL发生了什么？</h3>
          <pre>
【得分点】
DNS解析、TCP握手、HTTP缓存、重定向、服务器状态码、渲染引擎和JS引擎互斥、渲染过程、浏览器进程、网路进程、渲染进程
【参考答案】
标准回答
输入地址，浏览器查找域名的 IP 地址。
浏览器向 该 IP 地址的web 服务器发送一个 HTTP 请求，在发送请求之前浏览器和服务器建立TCP的三次握手，判断是否是HTTP缓存，如果是强制缓存且在有效期内，不再向服务器发请求，如果是HTTP协商缓存向后端发送请求且和后端服务器对比，在有效期内，服务器返回304，直接从浏览器获取数据，如果不在有效期内服务器返回200，返回新数据。
请求发送出去服务器返回重定向，浏览器再按照重定向的地址重新发送请求。
如果请求的参数有问题，服务器端返回404，如果服务器端挂了返回500。
如果有数据一切正常，当浏览器拿到服务器的数据之后，开始渲染页面同时获取HTML页面中图片、音频、视频、CSS、JS，在这期间获取到JS文件之后，会直接执行JS代码，阻塞浏览器渲染，因为渲染引擎和JS引擎互斥，不能同时工作，所以通常把Script标签放在body标签的底部。
渲染过程就是先将HTML转换成dom树，再将CSS样式转换成stylesheet，根据dom树和stylesheet创建布局树，对布局树进行分层，为每个图层生成绘制列表，再将图层分成图块，紧接着光栅化将图块转换成位图，最后合成绘制生成页面。
加分回答
整个流程中涉及到浏览器的浏览器进程、网路进程和渲染进程
            【延伸阅读】
浏览器查找域名的 IP 地址
1.    浏览器会首先查看本地硬盘的 hosts 文件，看看其中有没有和这个域名对应的规则，如果有的话就直接使用 hosts 文件里面的 ip 地址。
2.    如果在本地的 hosts 文件没有能够找到对应的 ip 地址，浏览器会发出一个 DNS请求到本地DNS服务器 。本地DNS服务器一般都是你的网络接入服务器商提供，比如中国电信，中国移动。
3.    查询你输入的网址的DNS请求到达本地DNS服务器之后，本地DNS服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果，此过程是递归的方式进行查询。如果没有，本地DNS服务器还要向DNS根服务器进行查询。
4.    根DNS服务器没有记录具体的域名和IP地址的对应关系，而是告诉本地DNS服务器，你可以到域服务器上去继续查询，并给出域服务器的地址。这种过程是迭代的过程。
5.    本地DNS服务器继续向域服务器发出请求，在这个例子中，请求的对象是.com域服务器。.com域服务器收到请求之后，也不会直接返回域名和IP地址的对应关系，而是告诉本地DNS服务器，你的域名的解析服务器的地址。
6.    本地DNS服务器向域名的解析服务器发出请求，这时就能收到一个域名和IP地址对应关系，本地DNS服务器不仅要把IP地址返回给用户电脑，还要把这个对应关系保存在缓存中，以备下次别的用户查询时，可以直接返回结果，加快网络访问。
          </pre>
          <h3>说一说你对闭包的理解？</h3>
          <pre>
【得分点】

变量背包、作用域链、局部变量不销毁、函数体外访问函数的内部变量、内存泄漏、内存溢出、形成块级作用域、柯里化、构造函数中定义特权方法、Vue中数据响应式Observer

【参考答案】

标准回答

闭包

一个函数和词法环境的引用捆绑在一起，这样的组合就是闭包（closure）。一般就是一个函数A，return其内部的函数B，被return出去的B函数能够在外部访问A函数内部的变量，这时候就形成了一个B函数的变量背包，A函数执行结束后这个变量背包也不会被销毁，并且这个变量背包在A函数外部只能通过B函数访问。

闭包形成的原理：作用域链，当前作用域可以访问上级作用域中的变量

闭包解决的问题：能够让函数作用域中的变量在函数执行结束之后不被销毁，同时也能在函数外部可以访问函数内部的局部变量。

闭包带来的问题：由于垃圾回收器不会将闭包中变量销毁，于是就造成了内存泄露，内存泄露积累多了就容易导致内存溢出。

加分回答

闭包的应用，能够模仿块级作用域，能够实现柯里化，在构造函数中定义特权方法、Vue中数据响应式Observer中使用闭包等。

【延伸阅读】

闭包形成块级作用域
for(var i = 0; i < 5; i++) {

    (function(j){

        setTimeout(() => {

            console.log(j);

        }, j * 1000);

    })(i)

}

实现柯里化

// 非柯里化

function check(reg, txt) {

    return reg.test(txt)

}

check(/^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, '15123422345')      //true

// Currying后

function curryingCheck(reg) {

    return function (txt) {

        return reg.test(txt)

    }

}

构造函数中定义特权方法

function MyObject() {

    // 私有变量和私有函数

    var privateVariable = 10;

    function privateFunction() {

        return false;

    }

    // 特权方法

    this.publicMethod = function() {

        privateVariable++;

        return privateFunction;

    }

}

Vue中数据响应式Observer(省略闭包之外的相关逻辑)，保证设置、获取操作的是同一个变量

function defineReactive(obj, key, value) {

    return Object.defineProperty(obj, key, {

        get() {

            return value;

        },

        set(newVal) {

            value = newVal;

        }

    })

}
          </pre>
          <h3>代码var foo = "10"+3-"1";console.log(foo);执行后，foo的值为( )</h3>
          <pre>
正确答案: B
A)"102"
B)102
C)12
D)"12"
对于“+”来说，有两个含义：第一个含义是做字符串拼接，第二个含义是加减法中的加法。
1，如果操作数里有一个是字符串，其他的值将被转换成字符串；
2，其他情况，操作数转换成数字执行加法运算。
而对于“ - ”来说，只有一个含义，就是做减法，自然不会转化成字符串了。</pre>
          <h3>在大数据量场景下，以下哪种js中字符串连接方式较为高效（）</h3>
          <pre>
正确答案: C  但是这题答案很片面
a+=b
a = a+b
Array.join()
Array.push()
+的处理机制是：新建一个临时字符串，将新字符串赋值为a+b，然后返回这个临新字符串并同时销毁原始字符串，所以字符串连接效率较低。所以用Array.join()不会新建临时字符串效率更高。（当然以上效率问题仅存在于低版本浏览器ie7-及以下，现在的新浏览器基本上都解决了这个问题，效率差不多）
在旧浏览器（ie7-）下用 join 会更高效。
在现代浏览器，尽量用"+",更高效。
当然，在少数现代浏览器里 “+” 不一定会比 join 快（如，safari 5.0.5，opera 11.10)
本身是字符串数组的，直接 join 会更好。
在"+"与concat之间，当然是优选使用"+"，方便又直观又高效。</pre>
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
          <h3>有如下代码,请问执行后弹出的值是：（）</h3>
          <pre>
var name = "World!";
(function () {
  var name;
  if (typeof name === 'undefined') {
      name = 'Jack';
      console.log('Goodbye' + name);
  } else {
      console.log('hello' + name);
  }
})();
正确答案: B
A)Hello World!
B)Goodbye Jack
C)Hello Jack
D)Goodbye World!
解释1：js搜索变量是从内部顺原型链往外部找的，内部直接找到了name，就不去外部了，执行第一次if时还没初始化值，所以为undefined，然后赋值，执行console结束
解释2：当函数内部变量与全局变量同名时 全局变量会被覆盖 因为js是单线程执行 var name当前没有赋值 所以类型为undefined</pre>
          <h3>两个for控制台打印的结果是？</h3>
          <pre>
for(let i=0;i<2;i++){
  setTimeout(function(){
          console.log(i)
      },100
  );
}
for(var i=0;i<2;i++){
  setTimeout(function(){
          console.log(i)
      },100
  );
}
正确答案: A
A)0 1 2 2
B)0 1 0 1
C)0 1 1 1
D)1 1 0 0
解题思路：①Js是单线程的，Settimeout是异步宏任务，所以代码执行遇到异步的，就放在事件队列中的，等线程中的任务执行完后才会执行事件队列中的任务。② let是es6中声明变量的方式，有自己的作用域块，可以放变量，所以let绑定for循环时，每个i都有自己的值. 在这个for循环中就是满足一次条件向事件队列中添加一个打印i的事件，且每个事件中的i有自己的值 ③Var没有作用域块，for循环的变量就会后一个覆盖前一个，当循环完毕时i就只有一个值，又因为for循环的判断条件是不满足跳出，所以i最后是2而不是1 ④这些完了后执行事件队列中的任务，就打印了0122          </pre>
          <h3>angularjs1中的$apply()的作用是？</h3>
          <pre>
正确答案: C
A)手动绑定外部数据
B)格式化数据
C)使方法生效
D)发送消息给其它controller
解题思路：在原生js或者第三方框架下，修改model，是有可能不会触发视图更新的，比如setTimeout、jquery插件。为什么？因为他们脱离了Angularjs的上下文，Angularjs并不能监听到数据的改变，$apply 是为了让angularJS内部没有在$digest状态当中的代码块进入到$digest当中，从而实现双向数据绑定。所谓$digest就是angularjs 检测数据更新的方式</pre>
          <h3>Math类中提供了三个与取整有关的方法：ceil,floor,round，这三个用处功能</h3>
          <pre>
这些方法的作用于它们的英文名称的含义相对应，例如：ceil的英文意义是天花板，该方法就表示向上取整，Math.ceil（11.3）的结果为12，Math.ceil(-11.6)的结果为-11；floor的英文是地板，该方法就表示向下取整，Math.floor(11.6)的结果是11，Math.floor(-11.4)的结果-12；最难掌握的是round方法，他表示“四舍五入”，算法为Math.floor(x+0.5),即将原来的数字加上0.5后再向下取整，所以，Math.round(11.5)的结果是12，Math.round(-11.5)的结果为-11</pre>
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
解答:基本数据类型：String  Boolean Number Undefined Null Symbol（es6引入） 引用数据类型：Object Array Function
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
