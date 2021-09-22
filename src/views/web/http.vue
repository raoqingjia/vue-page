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
            1、http请求过程
          </h3>
          <pre>
在我们向服务器发送一个HTTP请求时，会经历tcp连接（三次握手），发送HTTP请求，服务器返回HTTP响应，浏览器对响应中的状态码进行分析判断，来确定请求是否成功，是否成功得到我们需要的信息。
一个完整的HTTP请求过程，通常有下面7个步骤：
1.建立TCP连接
2.Web浏览器向Web服务器发送请求命令
3.Web浏览器发送请求头信息
4.Web服务器应答
5.Web服务器发送应答头信息
6.Web服务器想浏览器发送数据
7.Web服务器关闭TCP连接

一个HTTP请求一般由四部分组成：
1.HTTP请求的方法或动作，比如是GET还是POST请求
2.正在请求的URL，总得知道请求地址是什么吧
3.请求头，包含一些客户端环境信息，身份证信息等
4.请求体，也就是请求正文，请求正文可以包含提交的查询字符串信息，表单信息等
</pre>
          <h3>
           2、http协议中常见响应状态码
          </h3>
          <pre>
http状态码
分类	  分类描述
1**	    信息，服务器收到请求，需要请求者继续执行操作
2**	    成功，操作被成功接收并处理
3**	    重定向，需要进一步的操作以完成请求
4**	    客户端错误，请求包含语法错误或无法完成请求
5**    	服务器错误，服务器在处理请求的过程中发生了错误

304  自从上次请求后，请求的网页未修改过       就是因为本地存在缓存，清除浏览器本地数据就行
400  说明接口请求中头文件传输data参数有误     自己的接口传参数有错
401  该接口调取时，后台未配置对应的权限       找后台配置权限
403  服务器已经理解请求，但是拒绝执行它     找后台配置权限
404  接口有误，没有找到相关的接口地址         自己的接口写错啦
405  接口请求方式有误，post get请求方式有误   自己写的请求方式错啦
413  上传文件过大引起的请求长度超过了nginx默认的缓存大小和最大客户端最大请求大小

该类型状态码表示服务器或网关错误
500  服务器错误。
501  服务器不支持请求的功能。
502  网关错误。503，无法获得服务。
503  因暂时超载或临时维护，服务器目前无法处理 HTTP 请求。这是个暂时情况，会有些延误，过后将会得到缓解。
504  网关超时。
505  不支持的http版本。</pre>
          <h3>
          3、http头部信息
          </h3>
          <pre>
头部信息分三部分：
1).  通用头部：包含请求和响应消息都支持的头域
Request URL：请求的URL地址
Request Method：请求方法，get/post/put/……
Status Code：状态码，200为请求成功
Remote Address：路由地址
2).  请求头部
Accept：告诉web服务器自己接受什么介质类型，*/*表示任何类型
Accept-Charset：浏览器声明自己接收的字符集
Accept-Encoding：浏览器声明自己接收的编码方式，通常指压缩方式
Accept-Language：接收的语言，中文还是其他
Authorization：当客户端收到来自web服务器的WWW-Authenticate响应时，该头部来回应自己的身份验证
Connection：表示是否要持久连接，close/keep-alive。
Referer：浏览器向web服务器表明自己是从哪个网页获得/点击当前请求页面的
User-Agent：表明自己是哪种浏览器
Host：发送请求页面所在域
Cache-Control：浏览器应遵循的缓存机制
no-cache：不要缓存的实体，要求现在从服务器端取
max-age：之接受Age值小于max-age值，并且没有过期的对象
max-stale：可以接受过去的对象，但是过期时间必须小于max-stale值
min-fresh：接受其新鲜生命期大于当前Age和min-fresh值之和的缓存对象
Pramga：主要为Pragma：no-cache，相当于Cache-Control：no-cache
Range：浏览器（比如Flashget多线程下载时）告诉服务器自己想取对象的哪部分
Form：一种请求头标，给定控制用户代理的人工用户的电子邮件地址
Cookie：这是最重要的请求头信息之一
3).  响应头部
Age
Accept-Ranges
Cache-Control
Connection
Content-Encoding
Content-Language
Content-Length
Content-Range
Content-Type
Expired
Last-Modified
Location
Proxy-Authenticate
Server
Refresh</pre>
          <h3>
           4、http报错问题积累
          </h3>
           <pre>
一、问题:调取一个接口时而成功时而失败报404的错误
解决方案
可能是后台对应该接口的集群太多，但是只有一个集群是真正对应你的请求接口的，后台没有做负载均衡，接口请求时找到其他集群时就报错了，其他集群并没有真正接受你的请求，造成你的请求报404

二、问题:为什么有的缓存是 200 OK (from cache)，有的缓存是 304 Not Modified 呢？
解决方案
很简单，看运维是否移除了 Entity Tag。移除了，就总是 200 OK (from cache)。没有移除，就两者交替出现。

三、问题: 304 not modified 缓存问题解决
解决方法很简单，只需在url后面拼接一个时间戳就行了。示例代码如下：
this.$http.get('./api/ratings?t='+ (new Date()).getTime().toString())

四、HTTP 413错误解决方法
Failed to load resource: the server responded with a status of 413 (Request Entity Too Large
出现http状态码413，说明上传的文件大小超出了服务器端的限制大小。首先，需要确定是服务器端的哪个环节限制了上传文件的大小
nginx默认上传文件的大小是1M，可nginx的设置中修改。
打开nginx配置文件 nginx.conf, 路径一般是：/etc/nginx/nginx.conf。
在http{}段中加入 client_max_body_size 20m; 20m为允许最大上传的大小。
保存后重启nginx，问题解决

五、ajax调取接口后直接进入error函数中，报Failed to load resource: net::ERR_CONNECTION_REFUSED错误
我调取的是http://10.248.50.221:8080/api...接口，如果报上面提示的错误，有两种情况：
① 我没有链接到http://10.248.50.221:8080/接口，可以ping一下验证电脑是否能连到接口，如果ping不同就是链接错误
② 如果ping通了就是后台可能将接口修改了，修改成http://10.248.50.220:8080或者将端口换了

五、调取后台接口报500浏览器response中显示：
{"timestamp":1523438392792,"status":500,"error":"Internal Server Error","exception":"com.netflix.zuul.exception.ZuulException","message":"GENERAL"}
结论是网关报错
           </pre>
          <h3>
            5、扩展
          </h3>
           <pre>
相关文档网站
http://www.cnblogs.com/testyao/p/6548261.html

GET和POST方法的主要区别：
GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连。POST把提交的数据放在Body中。
GET提交的数据大小最多1024字节。POST提交的数据大小没有限制。
GET提交数据时，会出现在URL上。POST则不会出现在URL上。

Chrome浏览器开发者工具Network窗口下，可以查看下载各组件所需的具体时间
Stalled是浏览器得到要发出这个请求的指令，到请求可以发出的等待时间，一般是代理协商、以及等待可复用的TCP连接释放的时间，
不包括DNS查询、建立TCP连接等时间等
Request sent 请求第一个字节发出前到最后一个字节发出后的时间，也就是上传时间
Waiting 请求发出后，到收到响应的第一个字节所花费的时间(Time To First Byte),也就是从发送请求到收到响应之间的空隙
Content Download 收到响应的第一个字节，到接受完最后一个字节的时间，就是下载时间</pre>
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
        title: this.$route.query.name
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
