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
Load: DOM树构建完成后，继续加载 html/css 中的外部资源，加载完成之后，视为页面加载完成,相当是DOM数渲染和外部资源加载之和。
DOMContentLoaded 会比Load时间小，两者时间差大致等于外部资源加载的时间，也就是 Load - DOMContentLoaded = 外部资源加载时间

Finish
Finish 时间与DOMContentLoaded 和 Load 并无直接关系。
Finish 时间是页面上所有http请求发送到响应完成的时间，HTTP1.0/1.1 协议限定，单个域名的请求并发量是6个，即Finish 是所有请求（不止是XHR请求，还包括DOC,img,js,css 等资源的请求）在并发量为6的限制下完成的时间。

Finish 的时间比load大，意味着页面有不少的请求量，
finish 的时间比load小，意味着页面请求量也很少，如果页面是只有一个HTML请求的静态页面，Finish时间基本就等于HTML请求时间

页面发送请求和页面解析文档结构，分属两个不同的线程，所以 Finish 时间与DOMContentLoaded 和 Load 并无直接关系。

引申
什么是DOMContentLoaded
MDN上是这个样说的:当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发，而无需等待样式表、图像和子框架的完成加载。

我们先思考一个问题,如何衡量一个网页的加载速度？
有人说可以用网页加载完全的时间来衡量。我觉得这没有问题，但不够好。为什么呢？在日常生活中，很多时候因为网络原因我们并不需要等待网页上的所有内容都加载完毕，而是只需要加载主要内容就可以了，比如你打开这篇博客时，可能并不需要等所有图片都加载完成，而是看到博客的正文就可以正常阅读了。把上面的话提炼一下就是，用户有时候只需要在空白的网页上看见内容就可以了，而不需要等待所有内容都加载出来。那既然这样，回到刚刚的问题，我觉得衡量一个网页加载速度的一个方法就是“计算这个网页从空白到出现内容所花费的时间”。那怎么计算这段时间？HTML5 规范已经帮我们完成了相应的工作，就是当一个 HTML 文档被加载和解析完成后，DOMContentLoaded 事件便会被触发。

HTML 文档被完全加载和解析完成是什么意思？
接下来我们就需要从浏览器渲染原理来谈谈。我们知道执行 JS 有一个 JS 引擎，那么执行渲染也有一个渲染引擎。同样，渲染引擎在不同的浏览器中也不是都相同的。比如在 Firefox 中叫做 Gecko，在 Chrome 和 Safari 中都是基于 WebKit 开发的。

如果需要升深入了解的同学，可以去看浏览器的工作原理相关的文章。
浏览器向服务器请求到了 HTML 文档后便开始解析，产物是 DOM（文档对象模型），到这里 HTML 文档就被加载和解析完成了。如果有 CSS 的会根据 CSS 生成 CSSOM（CSS 对象模型），然后再由 DOM 和 CSSOM 合并产生渲染树。有了渲染树，知道了所有节点的样式，下面便根据这些节点以及样式计算它们在浏览器中确切的大小和位置，这就是布局阶段。有了以上这些信息，下面就把节点绘制到浏览器上。所有的过程如下图所示：</pre>
<img src="../../img/other/finishAndDOMContentLoaded01.png" width="900px">
<pre>现在你可能了解 HTML 文档被加载和解析完成前浏览器大概做了哪些工作，但还没完，因为我们还没有考虑现在前端的主角之一 JavaScript。JavaScript 可以阻塞 DOM 的生成，也就是说当浏览器在解析 HTML 文档时，如果遇到 < script>，便会停下对 HTML 文档的解析，转而去处理脚本。如果脚本是内联的，浏览器会先去执行这段内联的脚本，如果是外链的，那么先会去加载脚本，然后执行。在处理完脚本之后，浏览器便继续解析 HTML 文档。看下面的例子：
< body>
  < script type="text/javascript">
  console.log(document.getElementById('ele')); // null
  < /script>
  < div id="ele">< /div>
  < script type="text/javascript">
  console.log(document.getElementById('ele')); // < div id="ele">< /div>
  < /script>
< /body>
另外，因为 JavaScript 可以查询任意对象的样式，所以意味着在 CSS 解析完成，也就是 CSSOM 生成之后，JavaScript 才可以被执行。到这里，我们可以总结一下。当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等 CSSOM 构建完成才能执行。在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。

异步脚本
我们到这里一直在说同步脚本对网页渲染的影响，如果我们想让页面尽快显示，那我们可以使用异步脚本。HTML5 中定义了两个定义异步脚本的方法：defer 和 async。我们来看一看他们的区别。
同步脚本（标签中不含 async 或 defer）： < script src="***.js" charset="utf-8">< /script>
当 HTML 文档被解析时如果遇见（同步）脚本，则停止解析，先去加载脚本，然后执行，执行结束后继续解析 HTML 文档。
defer 脚本：< script src="***.js" charset="utf-8" defer>< /script>
当 HTML 文档被解析时如果遇见 defer 脚本，则在后台加载脚本，文档解析过程不中断，而等文档解析结束之后，defer 脚本执行。另外，defer 脚本的执行顺序与定义时的位置有关。
async 脚本：< script src="***.js" charset="utf-8" async>< /script>
当 HTML 文档被解析时如果遇见 async 脚本，则在后台加载脚本，文档解析过程不中断。脚本加载完成后，文档停止解析，脚本执行，执行结束后文档继续解析。

defer 与 DOMContentLoaded
如果 script 标签中包含 defer，那么这一块脚本将不会影响 HTML 文档的解析，而是等到 HTML 解析完成后才会执行。而 DOMContentLoaded 只有在 defer 脚本执行结束后才会被触发。 所以这意味着什么呢？HTML 文档解析不受影响，等 DOM 构建完成之后 defer 脚本执行，但脚本执行之前需要等待 CSSOM 构建完成。在 DOM、CSSOM 构建完毕，defer 脚本执行完成之后，DOMContentLoaded 事件触发。

async 与 DOMContentLoaded
如果 script 标签中包含 async，则 HTML 文档构建不受影响，解析完毕后，DOMContentLoaded 触发，而不需要等待 async 脚本执行、样式表加载等等。这里有两种情况：

在HTML解析完成前async脚本已经加载完成，文档停止解析，样式表加载，脚本执行，执行结束后文档继续解析。
在HTML解析完成后async脚本才加载完成DOMContentLoaded 触发，而不需要等待 async 脚本执行、样式表加载等等。

什么是Load
MDN上是这个样说的:当一个资源及其依赖资源已完成加载时，将触发load事件。
通俗的讲就是指浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。</pre>
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
