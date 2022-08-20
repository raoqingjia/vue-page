<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/other/finishAndDOMContentLoaded01.png" width="900px">
          <pre>谷歌浏览器时间解析 DOMContentLoaded 和 Load 和 Finish他们有什么区别呢？
首先，DOMContentLoaded 和 Load
DOMContentLoaded和Load 分别对应页面DOMContentLaded和Load 事件触发的时间点，即：
DOMContentLoaded: DOM树构建完成。即HTML页面由上向下解析HTML结构到末尾封闭标签。 DOM树构建完成后，继续加载 html/css 中的外部资源，加载完成之后，视为页面加载完成
Load: DOM树构建完成后，继续加载 html/css 中的外部资源，加载完成之后，视为页面加载完成。

DOMContentLoaded 会比Load时间小，两者时间差大致等于外部资源加载的时间。

Finish
Finish 时间与DOMContentLoaded 和 Load 并无直接关系。
Finish 时间是页面上所有http请求发送到响应完成的时间，HTTP1.0/1.1 协议限定，单个域名的请求并发量是6个，即Finish 是所有请求（不止是XHR请求，还包括DOC,img,js,css 等资源的请求）在并发量为6的限制下完成的时间。

Finish 的时间比load大，意味着页面也相当部分的请求量，
finish 的时间比load小，意味着也没请求量也很少，如果页面是只有一个HTML请求的静态页面，Finish时间基本就等于HTML请求时间

页面发送请求和页面解析文档结构，分属两个不同的线程，所以 Finish 时间与DOMContentLoaded 和 Load 并无直接关系。
          </pre>
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
