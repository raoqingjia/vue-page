<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1、atob -> Base64解码、btoa -> Base64编码
          </h3>
          <pre>
前言
从IE10+浏览器开始，所有浏览器就原生提供了Base64编码解码方法，不仅可以用于浏览器环境，Service Worker环境也可以使用
1、atob -> Base64解码
语法为（浏览器中）：
var decodedData = window.atob(encodedData);
例如：
window.atob('emhhbmd4aW54dQ==');

atob解密reader.readAsDataURL() 的结果
let reader = new FileReader();
reader.readAsDataURL(item);
reader.onload = (res:any) => {
  console.log("文件读取内容", res.target.result.split(',')[1]);
  // 我这里上传的txt格式的,返回的是 data:plan/txt;base64,iVBORw0KGgoAAA 所处要截取逗号之后的内容
  formData.append('file', res.target.result);
  console.log(window.atob(res.target.result.split(',')[1]));
}
2、btoa -> Base64编码
语法为（浏览器中）：
var encodedData = window.btoa(stringToEncode);
例如：
window.btoa('jiemi');</pre>
          <h3>任意文件Base64编码</h3>
          <pre>
借助FileReader对象和readAsDataURL方法，我们可以把任意文件转为Base64 Data-URI。假设我们的文件对象是file，则转换的JavaScript代码如下：
var reader = new FileReader();
reader.readAsDataURL(file);
reader.onload = function(e) {
  // e.target.result就是该文件的完整Base64 Data-URI
  //  返回的是 data:plan/txt;base64,iVBORw0KGgoAAA的格式
};</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
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
