<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>背景
https://www.raoqingjia.site/#/translation的页面里的一个ifream链接了http://mobile.youdao.com/dict?le=eng&q=%E6%9C%AA%E6%98%BE%E7%A4%BA地址后该界面不展示console控制台报下面的错误
报错提示信息
Mixed Content: The page at 'https://www.raoqingjia.site/#/translation' was loaded over HTTPS, but requested an insecure frame 'http://mobile.youdao.com/dict?le=eng&q=%E6%9C%AA%E6%98%BE%E7%A4%BA'. This request has been blocked; the content must be served over HTTPS.
翻译
混合内容:页面'https://www.raoqingjia.site/#/translation'是通过HTTPS加载的，但要求一个不安全的框架'http://mobile.youdao.com/dict?le=eng&q=%E6%9C%AA%E6%98%BE%E7%A4%BA'。此请求已被阻止;内容必须通过HTTPS提供。
引起原因：
前端项目部署在服务器上配置的域名是https的， 而接口部署的服务器域名配置的是http的。
HTTPS 是 HTTP over Secure Socket Layer，以安全为目标的 HTTP 通道，所以在 HTTPS 承载的页面上不允许出现 http 请求，一旦出现就是提示或报错。
解决办法
只能是保持域一直，为https或者http</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'colresizable',
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
