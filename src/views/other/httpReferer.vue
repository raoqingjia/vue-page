<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
HTTP Referer是header的一部分，当浏览器向web服务器发送请求的时候，一般会带上Referer，告诉服务器该网页是从哪个页面链接过来的。服务器就能够从HTTP Referer中统计出每天有多少用户点击我主页上的链接访问他的网站。Referer的正确英语拼法是referrer。由于早期HTTP规范的拼写错误，为了保持向后兼容就将错就错了。其它网络技术的规范企图修正此问题，使用正确拼法，所以目前拼法不统一，还有它第一个字母是大写。

Referer作用是什么？
1）防盗链
比如办事通服务器只允许网站访问自己的静态资源，那服务器每次都需要判断Referer的值是否是zwfw.yn.gov.cn，如果是就继续访问，不是就拦截。例如c语言Request.ServerVariables("HTTP_REFERER")的用法是防外连接。

2）防止恶意请求
比如静态请求是.html结尾的，动态请求是.shtml，那么所有的*.shtml请求，必须 Referer为我自己的网站才可以访问，这就是Referer的作用。

空Referer是怎么回事？
空Referer是指Referer头部的内容为空，或者，一个HTTP 请求头中根本不包含Referer，那么什么时候HTTP请求会不包含Referer字段呢？
根据Referer的定义，它的作用是指示一个请求是从哪里链接过来，那么当一个请求并不是由链接触发产生的，那么自然也就不需要指定这个请求的链接来源。

比如，直接在浏览器的地址栏中输入一个资源的URL地址，那么这种请求是不会包含Referer字段的，因为这是一个“凭空产生”的HTTP请求，并不是从一个地方链接过去的。

在防盗链设置中，允许空Referer和不允许空Referer有什么区别？
允许Referer为空，意味着你允许比如浏览器直接访问，就是空。

< meta>标签法（针对整个页面）
页面添加Referer元素需要使用meta referrer标签：

1、None：绝不允许referrer data通过
标签写法：< meta name="referrer" content="none">

2、None When Downgrade：发送referrer信息去安全的HTTPS站点，而非不稳定的HTTP站点。
标签写法：< meta name="referrer" content="none-when-downgrade">

3、Origin Only: 发送协议、主机和端口（即子域）没有一个完整的URL作为来源，
即https://moz.com/example.html只会发送https://moz.com
标签写法：< meta name="referrer" content="origin">

4、Origin When Cross-Origin: 当传origin-only来路信息发送给外部站点时，如果目标有相同的协议、主机和端口（即子域），无论它是HTTP或HTTPS，都将全部的URL作为Referrer发送出去。（注解：官方说明书上有一处排印错误，将来的版本应该是"origin-when-cross-origin"）
标签写法：< meta name="referrer" content="origin-when-crossorigin">

5、Unsafe URL: 总是将URL字串作为一个referrer通过。
注意：如果你的URL中存在任何敏感信息，这不是最安全的选择。其中URL的片段、用户名、密码被自动剥去。
标签写法：< meta name="referrer" content="unsafe-url">

单个链接标签法

这种方法可以只针对网页中具体的某一个或多个链接单独设置referrer，常常运用在< a>、< img>、< area>、< iframe>、< link>标签上。
< a rel="no-referrer" href="http://www.liudaima.com" />刘代码博客< /a>
< img rel="no-referrer" src="logo.png" />
值得注意的是：
这种单个链接标签法，只对该标签中链接有效，且referrer的属性值，只有三个，分别是：no-referrer、origin、unsafe-url；而且，单个链接标签法设置referrer的优先级比< meta>标签法要高。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
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
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
