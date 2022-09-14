<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、为什么会出现跨域的问题？</h3>
          <pre>
1) 因为浏览器本身存在同源政策，即协议，域名，端口相同，视为同一个域（源）,简单的说就是当前端页面与后台运行在不同的服务器时，就必定会出现跨域这一问题
2) 同源策略的定义
同源策略限制从一个源加载的文档或脚本与另一个源的资源进行交互，是用于隔离潜在恶意文件的重要机制。不同源的客户端脚本在没有明确授权的情况下，不能读取对方资源。比如，浏览器执行javascript脚本时，会检查这个脚本属于哪个页面，如果不是同源页面，就不会被执行。
3) 同源策略在保护什么
同源策略对于js的限制有3点：
（1）无法用js读取非同源的Cookie、LocalStorage 和 IndexDB 无法读取
为了防止恶意网站通过js获取用户其他网站的cookie
（2） 无法用js获取非同源的DOM
如果没有这一条，恶意网站可以通过iframe打开银行页面，可以获取dom就相当于可以获取整个银行页面的信息。当然，iframe标签允许加载，可能会造成另外一个问题，点击劫持。
（3） AJAX 请求限制发送
为什么要做这个请求限制呢？比如说我搭建了一个站点，我在我的页面中写入js请求，去请求百度修改账号头像。如果没有跨域的保护，我可以发送这个请求，并且你如果百度账号是登录状态，那你的头像就被我修改了
          </pre>
          <img src="../../img/cors.png" alt="跨域截图" height="250px" width="800px">
          <h3>2、跨域解决办法</h3>
          <pre>
上面图中红色字体的警告含义就是localhost:8080无法访问http://192.168.1.1:8080下的请求，这就说明是不同源了，解决思路不跨域不就完了
1）代理的思路
nginx作为代理服务器和用户交互，这样用户就只需要在统一个端口上进行交互就可以了，这样就避免了跨域问题，因为我们都是在相同端口上进行交互的；但是这种不是本地开发调试
如何你是本地开发webpack中有devServer->proxy 即可配置代理解决跨域
devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 8090,
    open:true,
    proxy: {
        '/api':  {
            target: 'http://10.34.28.2:28884/border-gateway-backend-service',   //要访问的跨域的域名
            changeOrigin: true,//开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样客户端端和服务端进行数据的交互就不会有跨域问题
            pathRewrite: {
                '^/api': ''  // 思路是如果是开发环境，就给所有要代理的接口统一加上/api前缀，然后代理请求时再统一通过rewrite去掉
            }
        }
    }
changeOrigin: true  这是重点，开启了一个虚拟服务端，ip和端口都是你自己配的那个

2）普通跨域请求：只需服务器端设置Access-Control-Allow-Origin，这样前端就不需要配置其他
// 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
response.setHeader("Access-Control-Allow-Origin", "http://www.domain1.com");
// 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
response.setHeader("Access-Control-Allow-Credentials", "true");
// 提示OPTIONS预检时，后端需要设置的两个常用自定义头
 response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");

如果是spring boot的项目就更简单了，controller层的接口上加个  @CrossOrigin(origins = "*", maxAge = 3600) 就行了

3）ajax的jsonp跨域请求，不过现在都是用angular，react和vue了，不做解释

4）npm install fetch-jsonp -S
import fetchJSONP from 'fetch-jsonp'
fetchJSONP("https://example.com/api/test")
.then(response => response.json())
.then( data => {
	console.log(data)
})</pre>
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
