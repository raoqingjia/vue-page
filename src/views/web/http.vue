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
            <li v-for="(items,index) in catalogue"><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>文档连接</h3>
          <pre>http://c.biancheng.net/tcp_ip/  TCP/IP协议入门教程</pre>
          <h3>http的工作流程</h3>
          <pre>
第一步：建立TCP/IP连接，客户端与服务器通过TCP三次握手进行连接
第二步：客户端向服务端发起HTTP请求（例如：POST/login.html http/1.1）
第三步：客户端发送请求头信息，请求内容，最后会发送一空白行，标示客户端请求完毕
第四步：服务器做出应答，表示对于客户端请求的应答，例如：HTTP/1.1 200 OK
第五步：服务器向客户端发送应答头信息
第六步：服务器向客户端发送请求头信息后，也会发送一空白行，标示应答头信息发送完毕，接着就以Content-type要求的数据格式发送数据给客户端
第七步：服务端关闭TCP连接，如果服务器或者客户端增Connection:keep-alive就表示客户端与服务器端继续保存连接，在下次请求时可以继续使用这次的连接

一个HTTP请求一般由四部分组成：
1.HTTP请求的方法或动作，比如是GET还是POST请求
2.正在请求的URL，总得知道请求地址是什么吧
3.请求头，包含一些客户端环境信息，身份证信息等
4.请求体，也就是请求正文，请求正文可以包含提交的查询字符串信息，表单信息等
</pre>
          <h3>HTTP1.0、HTTP1.1 和 HTTP2.0 的区别</h3>
          <pre>
http协议是超文本传输协议，是应用层协议，http协议是建立在tcp协议之上的。http协议的特点是客户端发送请求都需要服务端回应，在请求结束后，会主动释放链接。从建立连接到关闭连接的过程称为‘一次连接’。
HTTP是基于TCP/IP协议的，创建一个TCP连接是需要经过三次握手的,有一定的开销，如果每次通讯都要重新建立连接的话，对性能有影响。因此最好能维持一个长连接，可以用个长连接来发多个请求

http1.0：
每次请求都需要重新建立tcp连接，请求完后立即断开与服务器连接，这很大程度造成了性能上的缺陷，http1.0被抱怨最多的就是连接无法复用。
http1.1：
引入了长连接（keep-alive），相较于1.0减少了连接和关闭的延迟，提高了效率，但是若干个请求还是需要串行排队处理，如果一旦某个请求超时，后面的就会被阻塞，也就是常说的线头阻塞。
http2主要特点是
1.新的二进制格式传输：二进制即0和1的组合，实现方便健壮，而1.x版本是基于文本，解析存在缺陷
2.多路复用：一个连接可以有多个请求，且可以混杂在一起根据requestid来区分不同的请求，提高了连接的利用率，降低了延迟
3.header头部压缩：通讯两方各自缓存了一份 header请求头表，避免了重复的header传输，且缩小了包的体积大小
4.服务端推送功能：可以服务端主动向客户端push消息

汇总对比
HTTP1.0        无状态、无连接
HTTP1.1
持久连接
请求管道化
增加缓存处理（新的字段如cache-control）
增加Host字段、支持断点传输等（把文件分成几部分）
HTTP2.0
二进制分帧
多路复用（或连接共享）
头部压缩
服务器推送</pre>
          <h3>UDP协议简介</h3>
          <pre>
用户数据报协议（User Datagram Protocol，UDP）是一种传输层协议。在 TCP/IP 网络中，它与 TCP 协议一样用于处理数据包，是一种无连接的协议。

TCP 协议在进行数据传输时，需要建立连接，并且每次传输的数据都需要进行确认。当不再进行传输数据时，还需要断开连接。这样做虽然安全，但是效率较低。而 UDP 协议正好避免了这些过程，它是一种没有复杂控制，提供面向无连接的通信服务协议。
UPD协议并不提供超时重传，出错重传等功能也就是说其是不可靠协议

UDP 协议具备以下特点：
没有各种连接：在传输数据前不需要建立连接，也避免了后续的断开连接。
不重新排序：对到达顺序混乱的数据包不进行重新排序。
没有确认：发送数据包无须等待对方确认。因此，使用 UDP 协议可以随时发送数据，但无法保证数据能否成功被目标主机接收。</pre>
          <h3>TCP是什么意思</h3>
          <pre>
TCP服务含义
TCP指的是传输控制协议。它是一种面向连接导向的、可靠地及基于字节流的运输层通信协议。而在接触TCP中还有UDP，UDP也是一项重要的传输协议。TCP提供超时重发，丢弃重复数据，检验数据，流量控制等功能，保证数据能从一端传到另一端。
1、提供IP环境下的数据可靠传输(一台计算机发出的字节流会无差错的发往网络上的其他计算机，而且计算机A接收数据包的时候，也会向计算机B回发数据包，这也会产生部分通信量)，有效流控，全双工操作(数据在两个方向上能同时传递)，多路复用服务，是面向连接，端到端的传输;
2、面向连接：正式通信前必须要与对方建立连接。事先为所发送的数据开辟出连接好的通道，然后再进行数据发送，像打电话。
3、TCP支持的应用协议：FTP 文件传送、RLogin 远程登录、SMTP POP3 电子邮件、NFS 网络文件系统、远程打印、远程执行、名字服务器终端服务器等服务类型。
4、TCP连接包括连接建立和连接终止，建立连接需要三次握手，而终止连接只需要四次握手，如图所示：
</pre>
          <img src="../../img/tcpImg02.jpeg">
          <pre>
TCP服务特点：
1、面向连接的传输;
2、端到端的通信;
3、高可靠性，确保传输数据的正确性，不出现丢失或乱序;
4、全双工方式传输;
5、采用字节流方式，即以字节为单位传输字节序列;
6、紧急数据传送功能;</pre>
          <h3>tcp三次握手</h3>
          <pre>
三次握手（Three-way Handshake）其实就是指建立一个TCP连接时，需要客户端和服务器总共发送3个包。进行三次握手的主要作用是(为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备。实质上其实就是连接服务器指定端口，建立TCP连接，并同步连接双方的序列号和确认号，交换TCP窗口大小信息)。
刚开始客户端处于 Closed 的状态，服务端处于 Listen 状态，进行三次握手：
第一次握手：客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号ISN。此时客户端处于 SYN_SENT 状态。
第二次握手：服务器收到客户端的 SYN 报文之后，会以自己的SYN报文作为应答，并且也是指定了自己的初始化序列号ISN(s)。同时会把客户端的 ISN + 1 作为ACK 的值，表示自己已经收到了客户端的 SYN，此时服务器处于 SYN_RCVD 的状态。
第三次握手：客户端收到 SYN 报文之后，会发送一个 ACK 报文，当然，也是一样把服务器的 ISN + 1 作为 ACK 的值，表示已经收到了服务端的 SYN 报文，此时客户端处于 ESTABLISHED 状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED 状态，此时，双方已建立起了连接。

SYN：同步标志  该标志仅在三次握手建立TCP连接时有效。它提示TCP连接的服务端检查序列编号，该序列编号为TCP连接初始端(一般是客户端)的初始序列编号。通过TCP连接交换的数据中每一个字节都经过序列编号。
ACK：确认标志  大多数情况下该标志位是置位的。TCP报头内的确认编号栏内包含的确认编号(w+1，Figure-1)为下一个预期的序列编号，同时提示远端系统已经成功接收所有数据。

简单的示意如下图</pre>
          <img src="../../img/tcpImg01.jpeg">
          <pre>
三次握手过程中可以携带数据吗？
其实第三次握手的时候，是可以携带数据的。但是，第一次、第二次握手不可以携带数据.
假如第一次握手可以携带数据的话，如果有人要恶意攻击服务器，那他每次都在第一次握手中的 SYN 报文中放入大量的数据。因为攻击者根本就不理服务器的接收、发送能力是否正常，然后疯狂着重复发 SYN 报文的话，这会让服务器花费很多时间、内存空间来接收这些报文。
也就是说，第一次握手不可以放数据，其中一个简单的原因就是会让服务器更加容易受到攻击了。而对于第三次的话，此时客户端已经处于 ESTABLISHED 状态。对于客户端来说，他已经建立起连接了，并且也已经知道服务器的接收、发送能力是正常的了，所以能携带数据也没啥毛病。</pre>
          <h3>tcp四次挥手</h3>
          <pre>
第 1 次挥手:
客户端向服务器端发送断开 TCP 连接请求的
第 2 次挥手:
当服务器端收到客户端发来的断开 TCP 连接的请求后，回复发送 ACK 报文，表示已经收到断开请求。回复时，随机生成一个序列号
第 3 次挥手
服务器端在回复完客户端的 TCP 断开请求后，不会马上进行 TCP 连接的断开。服务器端会先确认断开前，所有传输到客户端的数据是否已经传输完毕。确认数据传输完毕后才进行断开，向客户端发送报文
第 4 次挥手
客户端收到服务器发来的 TCP 断开连接数据包后将进行回复，表示收到断开 TCP 连接数据包。向服务器发送 ACK 报文

四次挥手主要是别三次握手特殊在第三步，服务器端要确认传输到客户端的数据是否已经传输完毕，再发给客户端一次报文
简单的示意如下图 </pre>
          <img src="../../img/tcpImg03.png" width="400px" height="500px">
          <h3>connection为keep-alive是什么意思</h3>
          <pre>
          https://blog.csdn.net/qq_27053493/article/details/102481042
https://blog.csdn.net/leelxp/article/details/108096660
        </pre>
          <h3>HTTP与TCP的区别和联系</h3>
          <pre>
TCP是传输层协议，主要解决数据如何在网络中传输
HTTP是超文本传输协议，是应用层协议，定义的是传输数据的内容的规范,HTTP协议的特点是客户端发送请求都需要服务端回应，在请求结束后，会主动释放链接。从建立连接到关闭连接的过程称为‘一次连接’。
HTTP协议中的数据是利用TCP协议传输的，所以支持HTTP也就一定支持TCP
TCP是传输层协议，HTTP是应用层协议；HTTP承载在TCP之上，打个比喻，网络是路，TCP是跑在路上的车，HTTP是车上的人。

简单的说HTTP是要基于TCP连接基础上的，TCP是单纯建立连接，不涉及任何请求实际数据,http是用来收发数据。在前面客户端和应用服务器建立TCP连接之后，就需要用http协议来传送数据了，HTTP协议简单来说，还是请求，确认，连接；总体就是C发送一个HTTP请求给S，S收到了这个http请求，然后返回给Chttp响应，然后C的中间件或者说浏览器把这些数据渲染成为了网页，展示在用户面前。

tcp/ip是网络上数据通信的一种协议，如果没有这个协议，你就在tcp/ip网络上什么也做不了htp协议是tcp/ip协议里面包含的应用层的协议而已，没有这个协议只是不能浏览网页而已，其他的服务是正常的比如邮件smtp，pop3协议，ftp等协议，这些协议都是应用层协议</pre>
          <h3>http与https的区别</h3>
          <pre>
HTTPS协议需要到CA申请证书，一般免费证书很少，需要交费。
HTTP协议运行在TCP之上，所有传输的内容都是明文，HTTPS运行在SSL/TLS之上，SSL/TLS运行在TCP之上，所有传输的内容都经过加密的。
HTTP和HTTPS使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
HTTPS可以有效的防止运营商劫持，解决了防劫持的一个大问题。</pre>
          <img src="../../img/httpAndHttps.png">
          <h3>http协议中常见响应状态码</h3>
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
502  网关错误。
503  因暂时超载或临时维护，服务器目前无法处理 HTTP 请求。这是个暂时情况，会有些延误，过后将会得到缓解。
504  网关超时。
505  不支持的http版本。</pre>
          <h3>POST和GET请求的区别</h3>
          <pre>
get请求在浏览器回退中是无害的，而post请求会再次提交
get请求产生的url地址可以被收藏，而post不可以
get请求会被浏览器主动收藏，而post请求不会除非手动设置
get请求只能进行url编码，而post请求支出多种编码方式
get请求参数会被完整的保留在浏览器历史记录中，而post请求中的参数不会被保留
get请求在url中传输的参数长度是有限制的，提交的数据大小最多1024字节，post请求参数没有限制
对于参数的数据类型，get请求只接受ASCII字符，而post没有限制
get请求比post请求更不安全，因为参数直接暴露在url上，所以不能用来传递敏感信息
get请求参数通过url传递，post请求参数只能放在request body中
GET提交的数据会放在URL之后，以?分割URL和传输数据，参数之间以&相连。POST把提交的数据放在Body中。

若要搞明白get与post区别还得从底层分析：
无论是GET || POST 从底层上我们都要遵守HTTP协议，HTTP协议是什么呢？类似于我们的交通法规，无论你是挂着GET牌照还是POST牌照都要遵从HTTP的要求。
真正要传输数据还是要看我们TCP传输控制协议（TCP，Transmission Control Protocol）是一种面向连接的、可靠的、基于字节流的传输层通信协议。这是请求和服务端建立连接的暗语。
这就是TCP https://mp.weixin.qq.com/s/B8xRPxwjJfURyYzTQgIxUw
          </pre>
          F
          <h3>细说http的504错误</h3>
          <pre>
504错误代表网关超时 （Gateway timeout），是指服务器作为网关或代理，但是没有及时从上游服务器收到请求。这通常意味着上游服务器已关闭（不响应网关 / 代理），而不是上游服务器和网关/代理在交换数据的协议上不一致。
首先，了解什么是网关。
网络的基本概念：
客户端:应用 C/S（客户端/服务器） B/S（浏览器/服务器）
服务器：为客户端提供服务、数据、资源的机器
请求：客户端向服务器索取数据
响应：服务器对客户端请求作出反应，一般是返回给客户端数据
在这之中，把nginx或Apache作为网关。一般服务的架构是：用PHP则是nginx+php的一系列进程，Apache+tomcat+JVM。
网关超时就与nginx或Apache配置的超时时间，和与php线程、java线程的响应时间有关。以nginx与PHP为例：它的超时配置fastcgi_connect_timeout、fastcgi_send_timeout、fastcgi_read_timeout。nginx将请求丢给PHP来处理，某个PHP的线程响应时间假如是10s，在10s内没有响应给nginx就报超时。这时可以打开PHP慢日志记录，然后排查之。
另外，数据库的慢查询也会导致504 。nginx只要进程没有死，一般不是nginx的问题。假如场景是：确定程序执行是正确的，比如向数据库插入大量数据，需要5分钟，nginx设置的超时时间是3分钟。这时候可以将超时时间临时设置为大于5分钟</pre>
          <h3>http头部信息</h3>
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
          <h3>http报错问题积累</h3>
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
          <h3>扩展</h3>
          <pre>
相关文档网站
http://www.cnblogs.com/testyao/p/6548261.html


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
    name: 'http',
    data() {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue: []
      }
    },
    created() {

    },
    mounted: function () {
      this.$nextTick(function () {
        this.createCatalogue();

      })
    },
    computed: {},
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
          var o = {name: object[i].innerHTML};
          flag.push(o)
        }
        this.catalogue = flag;
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
