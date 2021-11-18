<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>我为了进行安全信息用AES加密引入了crypto-js @4.1.1结果就是IE运行报错，点击SCRIPT1006: 缺少 ')'报错点定位到是./node_modules/_crypto-js@4.1.1@crypto-js/enc-base64url.js</pre>
          <img src="../../img/cryptoJsInIEError01.png">
          <pre>
分别按照网上的方式,转换成es5
npm i -D uglifyjs-webpack-plugin@beta
或者
resolve(’/node_modules/_crypto-js@4.1.1@crypto-js/enc-base64url.js’),
打包时不报错了,但是打包下来的项目运行报错,找不到enc</pre>
          <img src="../../img/cryptoJsInIEError02.png">
          <pre>查了网上的解决办法是cdn引入
index.html页面
< html>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/core.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-base64.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/md5.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/evpkdf.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/cipher-core.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/aes.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/pad-pkcs7.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/mode-ecb.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-utf8.min.js">< /script>
< script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-hex.min.js">< /script>
< body>
	< div id="app">< /div>
< /body>
< script>
  window.CryptoJS = CryptoJS;
< /script>
< /html>
page.vue 中使用
const CryptoJS = window.CryptoJS;
const CRYPTOJSKEY = CryptoJS.enc.Utf8.parse("XXXXX");

但是我想到我另一个项目也用到了crypto-js 但是却没有报错，一看用的是"crypto-js": "^3.3.0"，那我就把4.1.1降低为3.3.0再运行不报错了,估计还是高版本改了啥写法，结果IE不兼容</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
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
