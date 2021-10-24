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
