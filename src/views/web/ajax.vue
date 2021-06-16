<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>写在前面：
          <pre>如果你的项目是利用$.ajax调取数据的，千万别着急调取后台数据，你需要先确定你的页面在调取数据中会触发哪些交互效果，如果请求成功，失败，超时后的种种情况，等你把所有的场景都考虑到了之后再调取数据！</pre>
          </h3>
          <h3>
            1、$.ajax请求简介
          </h3>
          <pre>
ajax() 方法通过 HTTP 请求加载远程数据，简单易用的高层实现利用 $.get, $.post 等方法。</pre>
          <h3>
            2、$.ajax请求格式范例
          </h3>
          <pre>
下面的格式是给后台传的json格式的请求
$.ajax({
        type: "POST",
        url: targetUrl,
        cache: false,
        data: JSON.stringify({   // 传参,JSON.stringify是将对象转换成json了
            user: {
                name: "hello",
                pass: "world"
            },
            stamp: new Date()
        }),
        dataType : "json",    //返回值类型
        contentType:"application/json;charset=utf-8",  //告诉后台传的数据格式
        async: true,        //默认为异步请求
        timeout : 50000,    //超时时间：50秒
        global:true,        //触发全局 AJAX 事件
        beforeSend: function(request) {
        // 添加请求token
		    request.setRequestHeader("accessToken",storage["token"]);
        // 禁用按钮防止重复提交
        $("#submit").attr({ disabled: "disabled" });
	      },
        error: function(error) {
            console.log(error);
        },
        success: function(data) {
           console.log(data);
        },
        complete: function(data) {
           console.log(data);
        }
  });
参数解析
1）beforeSend(XHR)
类型：Function
发送请求前可修改 XMLHttpRequest 对象的函数，如添加自定义 HTTP 头。XMLHttpRequest 对象是唯一的参数。如果返回 false 可以取消本次 ajax 请求
在用ajax请求时，没有返回前会出现前出现一个转动的loading小图标或者“内容加载中..”，用来告知用户正在请求数据。这个就可以用beforeSend方法来实现。在beforeSend方法中把提交按钮禁用掉，等到Ajax请求执行完毕，在恢复按钮的可用状态，这样可以避免请求网络迟缓造成用户多次请求重复提交表单。
2）async
类型：Boolean
默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
2）事件
complete(XHR, TS)请求完成后回调函数 (请求成功或失败之后均调用)，参数：XMLHttpRequest 对象和一个描述请求类型的字符串。
error请求失败时调用此函数，有以下三个参数：XMLHttpRequest 对象、错误信息、（可选）捕获的异常对象。如果发生了错误，错误信息（第二个参数）除了得到 null 之外，还可能是 "timeout", "error", "notmodified" 和 "parsererror"。
success请求成功后的回调函数。
3）contentType
发送信息至服务器时内容编码类型，简单说告诉服务器请求类型的数据,默认值: "application/x-www-form-urlencoded"传输的是一个个key value；json格式用"application/json;charset=utf-8"；上传文件通常是用 multipart/form-data
4）dataType
告诉服务器，我要想什么类型的数据，除了常见的json、XML，还可以指定 html、jsonp、script或者text
"xml": 返回 XML 文档，可用 jQuery 处理。
"html": 返回纯文本 HTML 信息；包含的 script 标签会在插入 dom 时执行。
"script": 返回纯文本 JavaScript 代码。不会自动缓存结果。除非设置了 "cache" 参数。注意：在远程请求时(不在同一个域下)，所有 POST 请求都将转为 GET 请求。（因为将使用 DOM 的 script标签来加载）
"json": 返回 JSON 数据 。
"jsonp": JSONP 格式。使用 JSONP 形式调用函数时，如 "myurl?callback=?" jQuery 将自动替换 ? 为正确的函数名，以执行回调函数。
"text": 返回纯文本字符串
5）global
类型：Boolean
是否触发全局 AJAX 事件。默认值: true。设置为 false 将不会触发全局 AJAX 事件，如 ajaxStart 或 ajaxStop 可用于控制不同的 Ajax 事件。
6)cache
类型：Boolean
默认值: true，dataType 为 script 和 jsonp 时默认为 false。设置为 false 将不缓存此页面。jQuery 1.2 新功能 。</pre>
          <h3>
            3、$.ajax跨域格式
          </h3>
          <pre>
$.ajax({
    type: "GET",
    url: AjaxPath,
    data: {},
    dataType: "jsonp",
    jsonpCallback: "resultData",
    success: function (resultData) {
        console.log(data);
    },
    error: function (data) {
        console.log(data);
    }
});
1)jsonp
类型：String
在一个 jsonp 请求中重写回调函数的名字。这个值用来替代在 "callback=?" 这种 GET 或 POST 请求中 URL 参数里的 "callback" 部分，比如 {jsonp:'onJsonPLoad'} 会导致将 "onJsonPLoad=?" 传给服务器。
2)jsonpCallback
类型：String
为 jsonp 请求指定一个回调函数名。这个值将用来取代 jQuery 自动生成的随机函数名。这主要用来让 jQuery 生成度独特的函数名，这样管理请求更容易，也能方便地提供回调函数和错误处理。你也可以在想让浏览器缓存 GET 请求的时候，指定这个回调函数名。
          </pre>
          <h3>
            4、Ajax全局事件、辅助函数
          </h3>
          <pre>
①  全局事件
1）.ajaxComplete()当Ajax请求完成后注册一个回调函数。
2）.ajaxError()Ajax请求出错时注册一个回调处理函数。
3）.ajaxSend()在Ajax请求发送之前绑定一个要执行的函数。
4）.ajaxStart()在AJAX 请求刚开始时执行一个处理函数。
5）.ajaxStop()在AJAX 请求完成时执行一个处理函数。
6）.ajaxSuccess()绑定一个函数当 Ajax 请求成功完成时执行。
这些方法用于注册事件处理器，用来处理页面上的任何 Ajax 请求，当某些事件触发后，这些事件处理器被调用。如何 jQuery.ajaxSetup() 中的 global 属性被设置为 true （这也是默认设置），那么，每个 Ajax 请求都会触发全局事件。注意：全局事件绝对不会被跨域（cross-domain）脚本或 JSONP 请求触发，和 global 属性的设置毫无关系。
文档链接  http://www.css88.com/jqapi-1.9/category/ajax/global-ajax-event-handlers/
②  辅助函数
通过 $.ajaxSetup() 设置任何选项的默认值。下面是设置AJAX的全局默认选项的例子：
$.ajaxSetup({
    url: "/index.html" , // 默认URL
    aysnc: false , // 默认同步加载
    type: "POST" , // 默认使用POST方式
    headers: { // 默认添加请求头
      "Author": "CodePlayer" ,
      "Powered-By": "CodePlayer"
    } ,
    success: function( data, textStatus, jqXHR ){
        alert("返回数据：" + data);
    } ,
    error: function(jqXHR, textStatus, errorMsg){ // 出错时默认的处理函数
      // jqXHR 是经过jQuery封装的XMLHttpRequest对象
      // textStatus 可能为： null、"timeout"、"error"、"abort"或"parsererror"
      // errorMsg 可能为： "Not Found"、"Internal Server Error"等
      // 提示形如：发送AJAX请求到"/index.html"时出错[404]：Not Found
      alert( '发送AJAX请求到"' + this.url + '"时出错[' + jqXHR.status + ']：' + errorMsg );
    }
});

$.ajaxSetup({
    dataType : "json",
    contentType : "application/json",
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    error : function(jqXHR, textStatus, errorThrown) {
        switch (jqXHR.status) {
        case (500):
            layer.alert('服务器系统内部错误', {
                icon : 2
            });
            break;
        case (401):
            layer.alert('未登录', {
                icon : 2
            });
            break;
        case (403):
            layer.alert('无权限执行此操作', {
                icon : 2
            });
            break;
        case (408):
            layer.alert('请求超时', {
                icon : 2
            });
            break;
        default:
            layer.alert('未知错误,请联系管理员', {
                icon : 2
            });
        }
    },
    cache : false
});

$(document).ajaxSend(function(event, jqxhr, settings) {
  jqxhr.setRequestHeader('Authorization', ’token‘)
})
文档链接 http://www.runoob.com/jquery/ajax-ajaxsetup.html
</pre>
          <h3>
            5、ajax在ie9以下版本请求数据之间进的error
          </h3>
          <pre>
1）在js中第一行加这个就可以了jQuery.support.cors = true;
2）点击IE浏览器的的“工具->Internet 选项->安全->自定义级别”将“其他”选项中的“通过域访问数据源”选中为“启用”或者“提示”，点击确定就可以了。          </pre>
          <h3>
            6、ajax请求时为什么会出现option请求
          </h3>
          <pre>
在 jQuery 官方文档中写道
<p class="pre-cmd">For cross-domain requests, setting the content type to anything other than application/x-www-form-urlencoded, multipart/form-data, or text/plain will trigger the browser to send a preflight OPTIONS request to the server.</p>
也就是说，发送的请求内容类型如果不是 application/x-www-form-urlencoded，multipart/form-data 或 text/plain 这三者的话，便会触发 OPTIONS 请求，而 jQuery 发送的请求内容类型默认值为 application/x-www-form-urlencoded，这就是 jQuery 可以顺利请求的原因。</pre>
          <h3>
            7、ajax请求状态码
          </h3>
          <pre>
① 状态含义
0 - (未初始化)还没有调用send()方法
1 - (载入)已调用send()方法，正在发送请求
2 - (载入完成)send()方法执行完成
3 - (交互)正在解析响应内容
4 - (完成)响应内容解析完成，可以在客户端调用了
② ajax请求失败的状态码都是0的情况问题分析
url不存在（排除） – Controller层定义正确
url不可达（排除） – 后台确实接收到请求了，而且处理正确
发送了跨域请求（排除） – 使用CORS Filter， 测试发现也不是
数据格式错（排除） – 浏览器和后台调试发现，数据格式正确
ajax在完成之前请求已经被取消（ajax请求没有发出） – 确实是canceled，但是请求确实发出了
请求超时 – 确认问题
解决办法
使用异步请求将timeout时长设置稍长一点</pre>
          <h3>8、IE9、IE8下ajax跨域返回textStatus为“No transport”</h3>
          <pre>
IE9、IE8还不支持CORS协议，即后台添加的Access-Control-Allow-Origin：*。
解决方法如下：
在$.ajax前面添加jQuery.support.cors=true;
          </pre>
          <h3>8、 用jsonp跨域获取数据失败了，如题，ie中报错如下：SCRIPT1004: 缺少 ';'；困扰中，急等，，，</h3>
          <pre>数据不支持jsonp格式调用，改下后端数据</pre>
          <h3>9、如何解决前后端token过期问题</h3>
          <pre>
问题描述: 首先后端生成的token是有时限的,在一段时间后不管前端用户是否进行了访问后端的操作,后端的token都会过期,在拦截器阶段就会返回错误的请求:token过期,从而拿不到想要的请求数据.
解决思路:在每次的后端请求中都将token传送过去获取新的token并返回前端放入cookies中,达到更新cookie中token的效果;而长时间不做操作的话我们就可以让他的token失效退出系统了.
解决方式:我们的访问后端的请求都是jQuery的ajax请求.而这一类的ajax请求都可以通过$.ajaxSetup设置AJAX的全局默认设置。使用方法参考:http://www.runoob.com/jquery/ajax-ajaxsetup.html
现在说明一下我们使用了$.ajaxSetup的什么属性(先上一段伪代码):
$.ajaxSetup({
    beforeSend:function(){
       每次ajax请求前执行的操作;
}
},
    complete:function(XMLHttpRequest,textStatus){
        每次完成后刷新token;
     }

 });
说明:
beforeSend:(在每次ajax请求之前都会执行的部分.)
这里进行了cookie中token的校验,如果没有token我们就会重载页面,然后用户会跳转到登录页面,(这里说明用户已经长时间没有操作过了,前端的cookie已经失效,所以我们需要用户去重新登录).
complete:请求完成时运行的函数（在请求成功或失败之后均调用，即在 success 和 error 函数之后）。


vue
过期后端自己清除即可，前端如果你存在cookie到期会自动清除。
前端通过axios 拦截器处理所有请求

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                 //这里跳转登陆
                 .....
                }
    });

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
