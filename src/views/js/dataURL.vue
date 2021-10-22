<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>什么是Bloburl？</h3>
          <pre>
Blob URL（参考W3C ，正式名称）或Object-URL（参考MDN和方法名称）
Blob URL / Object URL是一个伪协议，允许Blob和File对象用作图像，下载二进制数据链接等URL源。
一个Blob URL并不是指在服务器上存在的数据，它指的是您的浏览器目前在存储器中，当前页面的数据。它在其他页面上将不可用，在其他浏览器中将不可用，并且在其他计算机上将不可用。URL.createObjectURL()将build一个对Blob或File对象的特殊引用，以后可以使用URL.revokeObjectURL()发布。 这些URL只能在浏览器的单个实例中以及在同一个会话中（即页面/文档的生命周期）在本地使用。</pre>
          <h3>如何使用Bloburl？</h3>
          <pre>
需要将二进制数据封装为BLOB对象，然后使用它URL.createObjectURL()为其生成本地URL：
var blob = new Blob([arrayBufferWithPNG], {type: "image/png"}),
    url = URL.createObjectURL(blob),
    img = new Image();
img.onload = function() {
    URL.revokeObjectURL(this.src);     // clean-up memory
    document.body.appendChild(this);   // add image to DOM
}
img.src = url;                         // can now "stream" the bytes
请注意，URL可能会在webkit浏览器中添加前缀，因此请使用：
var url = (URL || webkitURL).createObjectURL(...);
或者如下
function createObjectURL(blob){
  if (window.URL){
    return window.URL.createObjectURL(blob);
  } else if (window.webkitURL){
    return window.webkitURL.createObjectURL(blob);
  } else {
    return null;
  }
}
</pre>
          <h3>Blob URL和Data URL有什么区别?</h3>
          <pre>
blob显示的形式blob:域名/e61c67e3-df3a-453a-8f41-df740c1f5faf
dataURL的显示形式data:image/jpeg;base64,/9j/4AAQ...
Blob URL的长度一般比较短，但Data URL因为直接存储图片base64编码后的数据，往往很长，如上图所示，浏览器在显示Data URL时使用了省略号（…）。当显式大图片时，使用Blob URL能获取更好的可能性。
Blob URL可以方便的使用XMLHttpRequest获取源数据（xhr.responseType = 'blob'）。对于Data URL，并不是所有浏览器都支持通过XMLHttpRequest获取源数据的
Blob URL 只能在当前应用内部使用，把Blob URL复制到浏览器的地址栏中，是无法获取数据的。Data URL相比之下，就有很好的移植性，你可以在任意浏览器中使用。
Blob URL除了可以用作图片资源的网络地址，Blob URL也可以用作其他资源的网络地址，例如html文件、json文件等，为了保证浏览器能正确的解析Blob URL返回的文件类型，需要在创建Blob对象时指定相应的type。
使用Data URL的好处是，您不需要额外再发出一个HTTP 请求到服务器端取得额外的资料；而缺点便是，网页的大小可能会变大。它适合应用在内嵌小图片，不建议将大图像文件编码成Data URL来使用。您的图像文件不能够超过浏览器限定的大小，否则无法读取图像文件。
          </pre>
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
