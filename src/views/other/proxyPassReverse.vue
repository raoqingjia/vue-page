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
apache中的mod_proxy模块用于url的转发，即具有代理的功能。应用此功能，可以很方便的实现同tomcat等应用服务器的整合，甚者可以很方便的实现web集群的功能。
例如使用apache作为域名www.test.com代理服务器，让其暴露在公网上，即DNS解析到本机器上，真正提供web服务器的是另一台位于同一内网的机器上，假设起IP是192.168.100.22，那么只需要如下配置就可以了。

代理配置如下
ProxyPass /web/test  http://192.168.1.2:8080/test
ProxyPassReverse /web/test  http://192.168.1.2:8080/test

ProxyPass 就是把所有来自客户端对/test的请求转发给http://192.168.1.2:8080/test上进行处理
ProxyPass 它主要是用作URL前缀匹配，不能有正则表达式，它里面配置的Path实际上是一个虚拟的路径，在反向代理到后端的url后，path是不会带过去的，使用示例：

ProxyPassReverse 的配置总是和ProxyPass 一致，它的作用在于反向代理（客户端到服务器称之为正向代理，那服务器到客户端就叫反向代理），如果响应中有302重定向，ProxyPassReverse就派上用场。
举例说明，假设用户访问http://www.test.com/exam.php，通过转发交给http://192.168.100.22 /exam.php处理，假定exam.php处理的结果是实现redirect到login.php(使用相对路径,即省略了域名信息)，如果没有配置 反向代理，客户端收到的请求响应是重定向操作，并且重定向目的url为http://192.168.100.22/login.php ，而这个地址只是代理服务器能访问到的，可想而知，客户端肯定是打不开的，反之如果配置了反向代理，则会在转交HTTP重定向应答到客户端之前调整它为 http://www.test.com/login.php，即是在原请求之后追加上了redirect的路径。当客户端再次请求http: //www.test.com/login.php，代理服务器再次工作把其转发到http://192.168.100.22/login.php。
         </pre>
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
