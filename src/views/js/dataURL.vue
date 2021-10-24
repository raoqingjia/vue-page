<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>初识Data URL</h3>
          <pre>
data URL是一种特殊格式的url，它的前缀是data:
data URL允许内容的创建者将小文件嵌入在documents中，过去被叫做data URIs，直到WHATWG将其更名为data URL(s)

data URL与传统的url不同。
传统的url在浏览器地址栏中输入，可以直接导航到目标地址；而data URL则是一个data的url表现，可以理解为用url代表数据。
通常情况下，这里的数据指代的是图片

在Data URL协议中，图片被转换成base64编码的字符串形式，并存储在URL中，冠以mime-type。几乎所有的现代浏览器都支持Data URL格式，包括火狐浏览器，谷歌浏览器，Safari浏览器，opera浏览器。IE8也支持，但有部分限制，IE9完全支持。
图片在网页中的使用方法通常是下面这种利用img标记的形式：
< img src="images/myimg.gif ">
这种方式中，img标记的src属性指定了一个远程服务器上的资源。当网页加载到浏览器中时，浏览器会针对每个外部资源都向服务器发送一次拉取资源请求，占用网络资源。大多数的浏览器都有一个并发请求数不能超过4个的限制。这意味着，如果一个网页里嵌入了过多的外部资源，这些请求会导致整个页面的加载延迟。而使用Data URL技术，图片数据以base64字符串格式嵌入到了页面中，它们一个是引用了外部资源，一个是使用了Data URL</pre>
          <h3>data URL语法</h3>
          <pre>
data URL由哪四部分组成？
data:[< mediatype>][;base64],< data>
组成                  含义
data:     	     前缀
[< mediatype>]	     MIME type 代表数据的类型
[;base64]	     可选的base64标识
< data>	             数据本身
[< mediatype>]       详情
mediatype是一个MIME type的字符串，比如'image/jpeg'。
如果忽略的话，默认是"text/plain;charset=US-ASCII"。
canvas.toDataURL()并没有忽略，默认MIMIE type为"image/png"。
[;base64]和< data>详情
如果data是纯文本，你可以简单的嵌入文本（根据document类型使用适当的实体或者转义）。
如果data不是纯文本的话，可以标识为base64，并且嵌入base64编码的二进制数据。
常见的data URL形式
简单的text/plain数据
简单的text/palin数据的base64形式
HTML片段：普通标签
HTML片段：执行js的script标签</pre>
          <h3>Data URL使用场合</h3>
          <pre>
Data URL能用在很多场合，跟传统的外部资源引用方式相比，它有如下独到的用处：
当访问外部资源很麻烦或受限时(这个比较鸡肋)
当图片是在服务器端用程序动态生成，每个访问用户显示的都不同时（场景较少）
当图片的体积太小，占用一个HTTP会话不是很值得时（雪碧图可以出场了）

Data URL也有一些不适用的场合
Base64编码的数据体积通常是原数据的体积4/3，也就是Data URL形式的图片会比二进制格式的图片体积大1/3
Data URL形式的图片不会被浏览器缓存，这意味着每次访问这样页面时都被下载一次。这是一个使用效率方面的问题——尤其当这个图片被整个网站大量使用的时候。

例如在CSS里使用Data URL，CSS中的url操作符是用来指定网页元素的背景图片的，而浏览器并不在意URL里写的是什么，只要能通过它获取需要的数据，这种Data URL的使用是完全符合场景的，它避免了让这个小小的背景图片独自产生一次HTTP请求，而且这个小图片还能同CSS文件一起被浏览器缓存起来，重复使用，不会每次使用时都加载一次。只要这个图片不是很大，而且不是在CSS文件里反复使用，就可以以Data URL方法呈现图片降低页面的加载时间，改善用户的浏览体验。          </pre>
          <h3>转换成Data URL格式的方法</h3>
          <pre>
canvas有一个非常常用的方法canvas.toDataURL()，它会将canvas转化为data URL的格式。
通常情况下这个data URL的类型为image。
< canvas id="canvas" height="2" width="2"></canvas>
var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL();
console.log(dataURL);  // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAADklEQVQYV2NkgAJGGAMAAC0AA03DhRMAAAAASUVORK5CYII

new FileReader()也可以转换
let reader = new FileReader();
reader.readAsDataURL(e.target.files[0])
reader.onload = (res) => {
  console.log("文件读取内容", res);
  let img = document.getElementById("show-img")
  img.src = res.target.result
}          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexOf',
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
