<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>总结</h3>
          <pre>在正式跨域的请求前，浏览器会根据需要，发起一个“PreFlight”（也就是Option请求），用来让服务端返回允许的方法（如get、post），被跨域访问的Origin（来源，或者域），还有是否需要Credentials(认证信息）
1、为什么会出现options请求？
跨域请求中，options请求是浏览器自发起的preflight request(预检请求)，以检测实际请求是否可以被浏览器接受。

2、跨域请求分两种：简单请求、复杂请求，这两种请求都会发起preflight request么？
当跨域请求是简单请求时不会进行preflight request,只有复杂请求才会进行preflight request。

3、跨域请求分两种：简单请求、复杂请求，那么什么样的请求才是复杂请求？
a、使用方法put或者delete;
b、发送json格式的数据（content-type: application/json）
c、请求中带有自定义头部；

4、为什么跨域的复杂请求需要preflight request？
复杂请求可能对服务器数据产生副作用。例如delete或者put,都会对服务器数据进行修改,所以在请求之前都要先询问服务器，当前网页所在域名是否在服务器的许可名单中，服务器允许后，浏览器才会发出正式的请求，否则不发送正式请求。</pre>
          <h3>options 应用场景</h3>
          <pre>场景一：检测服务器所支持的请求方法
可以使用 OPTIONS 方法对服务器发起请求，以检测服务器支持哪些 HTTP 方法：
curl -X OPTIONS http://example.org -i
解析：curl 是一个指令，在类似liunx操作系统中，可以使用curl指令去发起请求
返回结果
HTTP/1.1 200 OK
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Thu, 10 Aug 2023 12:19:48 GMT
Expires: Thu, 17 Aug 2023 12:19:48 GMT
Server: EOS (vny/0450)
Content-Length: 0

场景二：CORS 中的预检请求
在 CORS 中，可以使用 OPTIONS 方法发起一个预检请求，以检测实际请求是否可以被服务器所接受。
解析:
cors 是解决跨域的一种常见方式，至于为什么会有跨域，这就是浏览器的一种安全策略：浏览器同源策略；这里就不赘述了。
跨域资源共享(CORS)是一种机制，它使用额外的HTTP头来告诉浏览器让运行在一个origin (domain)上的Web应用被准许访问来自不同源服务器上的指定的资源。当从与该资源本身所在的服务器不同的域或端口请求一个资源时，资源会发起一个跨域HTTP请求。
比如，站点http://domain-a.com 的某 HTML页面通过的src请求 http:ldomain-b.com/image.jpg 。网络上的许多页面都会加载来自不同域的CSS样式表，图像和脚本等资源。
出于安全原因，浏览器限制从脚本内发起的跨源HTTP请求。例如XMLHttpRequest和Fetch API遵循同源策略。
这意味着使用这些API的Web应用程序只能从加载应用程序的同一个域请求HTTP资源，除非使用CORS头文件。
浏览器将CORS请求分为两类：简单请求（simple request）和⾮简单请求（not-simple-request）,简单请求浏览器不会预检，⽽⾮简单请求会预检。
'同时满足'下列三⼤条件，就属于简单请求，否则属于⾮简单请求
1、请求⽅式只能是：GET、POST、HEAD
2.HTTP请求头限制这⼏种字段：Accept、Accept-Language、Content-Language、Content-Type、Last-Event-ID
3.Content-type只能取：application/x-www-form-urlencoded、multipart/form-data、text/plain</pre>
          <h3> 优化OPTIONS请求：Access-Control-Max-Age 或者 避免触发</h3>
          <pre>可见一旦达到触发条件，跨域请求便会一直发送2次请求，这样增加的请求数是否可优化呢？答案是可以，OPTIONS预检请求的结果可以被缓存。
Access-Control-Max-Age这个响应首部表示 preflight request （预检请求）的返回结果（即 Access-Control-Allow-Methods 和Access-Control-Allow-Headers 提供的信息） 可以被缓存的最长时间，单位是秒。
Access-Control-Allow-Headers:*                       告知服务器实际请求所携带的自定义首部字段
Access-Control-Allow-Methods: GET,POST,OPTIONS       告知服务器实际请求所使用的HTTP方法；
Access-Control-Allow-Origin:*
Access-Control-Max-Age: 1728800
如果值为 -1，则表示禁用缓存，每一次请求都需要提供预检请求，即用OPTIONS请求进行检测</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'learnOptions',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
