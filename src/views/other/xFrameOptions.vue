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
X-Frame-Options是什么？
X-Frame-Options是一个HTTP标头（header），用来告诉浏览器这个网页是否可以放在iFrame内。例如：
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
X-Frame-Options: ALLOW-FROM http://xxxx.com/
DENY           表示该页面不允许在 frame 中展示，即便是在相同域名的页面中嵌套也不允许。
SAMEORIGIN     表示该页面可以在相同域名页面的 frame 中展示。
ALLOW-FROM http://xxxx.com/      表示该页面可以在指定来源的uri中展示。

不指定X-Frame-Options的网页等同表示它可以放在任何iFrame内。
X-Frame-Options可以保障你的网页不会被放在恶意网站设定的iFrame内，令用户成为点击劫持的受害人。

有人说还可以直接通过meta标签来设置，不需要放在http头部请求中了，也有说在网页中设置meta标签是无用的!例如
&lt; meta http-equiv="X-Frame-Options" content="deny"> 这个待验证

这个问题纯前端无法解决。解决方案：将不能跨域访问的url的host设置为你网站的域名，这一步是为了即使浏览器对url发起请求，因为host是你服务器的域名，请求也会进入到你的服务器；第二步配置Nginx转发，将该url对应的请求的头部，加上more_clear_headers： x-frame-options，去掉响应头里的x-frame-options限制。这样就类似于模拟了从浏览器空页面直接访问的效果，规避了同源限制。第二步的Nginx方案等都是为了修改请求头，也可以使用Node做中间件，去修改请求头

response.setHeader("X-Frame-Options", "SAMEORIGIN"); // 解决IFrame拒绝的问题

配置 Apache 在所有页面上发送 X-Frame-Options 响应头，需要把下面这行添加到 'site' 的配置中:
Header always append X-Frame-Options SAMEORIGIN

配置 nginx 发送 X-Frame-Options 响应头，把下面这行添加到 'http', 'server' 或者 'location' 的配置中:
add_header X-Frame-Options SAMEORIGIN;

配置 IIS 发送 X-Frame-Options 响应头，添加下面的配置到 Web.config 文件中:
&lt; system.webServer>
  &lt;httpProtocol>
    &lt; customHeaders>
      &lt; add name="X-Frame-Options" value="SAMEORIGIN" />
    &lt; /customHeaders>
  &lt; /httpProtocol>
&lt; /system.webServer></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
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
