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
哔站上很详细的一个介绍    https://www.bilibili.com/video/BV1n94y1U7Eu?spm_id_from=333.851.b_7265636f6d6d656e64.5

curl 可以不需要浏览器也能发送http客户端请求，可以在终端输入命令，也可以作为脚本传输数据，直接输入 curl URL 就可以测试能否与目标进行连接，有点类似ping命令，不同的是curl也能返回对方的响应资源
curl常用参数
1、curl -k
再发送https请求时，加上-k参数，否则会有如下证书的报错
curl: (60) Peer's certificate issuer has been marked as not trusted by the user.
More details here: http://curl.haxx.se/docs/sslcerts.html

2、curl -X(大写) 指定请求方法，如POST、GET等
curl -k -X POST  https://www.baidu.com

3、 curl -w %{http_code} 返回值带上http响应码
curl -k -w %{http_code} -X POST https://XX

4、curi -d 添加请求body
curl -k -w %{http_code} -X POST https://1XX -d 'body内容' （内容需要用单引号括起来）

5、curi -H 添加header内容
curl -k -w %{http_code} -X POST https://1XX -d 'body内容' -H 'header内容'

6、-F body带文件
curl -k -X POST https://XX -F 'file=@file_path'

完整请求例子
1、这是我常用的一个完整的post请求
curl -k -w %{http_code} -X POST https://XX -d '{"value":["XX"],"name":"XX"}'  -H 'Content-Type: application/json;charset=UTF-8' -H 'Cookie: session=eyJfcGVybWFuZW50IjpmYWxzZSwidXNlciI6eyJpZCI6MSwibmFtZSI6ImFkbWluIn19.YPovOg.oOLrM4Xgfs0qtw8-m4NxYLrpPks'  -H 'Referer: https://XX'

2、get请求
curl -k -X GET https://XX -H 'Cookie: session=eyJfcGVybWFuZW50IjpmYWxzZSwidXNlciI6eyJpZCI6MSwibmFtZSI6ImFkbWluIn19.YPovOg.oOLrM4Xgfs0qtw8-m4NxYLrpPks'

3、请求接口时post带文件数据
-F file=@文件路径
curl -k -X POST https://XX -F \'file=@文件路径</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: '',
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
