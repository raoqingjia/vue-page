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
