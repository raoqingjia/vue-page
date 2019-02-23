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
<span>① 返回的json和jsonp有什么区别？</span>
json是一种基于文本的数据交换格式（不支持跨域），而jsonp是一种非官方跨域数据传输方式,json不支持跨域请求,只能使用jsonp。
简单的说json返回的是一串数据；而jsonp返回的是脚本代码（包含一个函数调用）,  一个是静止的文本，一个是动态的函数。
因为json不支持跨域，而js可以跨域，因此在服务器端用客户端提供的js函数名将json数据封装起来，再将函数提供给客户端调用，从而获得json数据，这就是jsonp协议的原理。
json的特点：
1）基于纯文本，跨平台传递极其简单；2）Javascript原生支持，后台语言几乎全部支持；3）轻量级数据格式，占用字符数量极少，特别适合互联网传递；4）可读性较强，虽然比不上XML那么一目了然，但在合理的依次缩进之后还是很容易识别的；5）容易编写和解析，当然前提是你要知道数据结构；
jsonp的使用方法 ：
JSONP的出现是为了解决Ajax跨域请求问题，所谓的跨域请求问题，即访问不同的域 (只要协议、域名、端口有任何一个不同，都被当作是不同的域) 的资源的时候会被拒绝。
开发过程中，如果出现类似 “Origin ****** is not allowed by Access-Control-Allow-Origin.” 的错误，则可能是由于json数据不支持跨域导致的，应考虑使用jsonp协议。
如果出现类似 ”SyntaxError: Unexpected token ':'. Parse error.“ 的错误，则可能是由于返回的json数据没有用”callback“传递的函数名封装导致的。

          </pre>
          <h3>
            三、关于css样式
          </h3>
          <pre>
<span>①、盒模型中W3C和IE怪异盒模型</span>
          </pre>
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
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
      }
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
