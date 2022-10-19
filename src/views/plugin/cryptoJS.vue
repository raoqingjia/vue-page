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
          </h3>
          <pre>Gitee 极速下载/crypto-js、文件下载和API手册看这个地址就行
https://gitee.com/mirrors/crypto-js

原生js直接使用
< script src="https://cdn.bootcdn.net/ajax/libs/crypto-js/4.0.0/crypto-js.js">< /script>
< script type="text/javascript">
    var str1 = "afdsfda12345sfads";
    var sign = CryptoJS.SHA256(str1).toString(CryptoJS.enc.Hex); // sha256 加密
< /script>

npm方式使用
1、安装crypto-js
npm install crypto-js
2、引入crypto-js
支持ES6导入
import CryptoJS from "crypto-js";
console.log(CryptoJS.HmacSHA1("Message", "Key"));
或者按需引入
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';
使用
const message, nonce, path, privateKey;
const hashDigest = sha256(nonce + message);
const hmacDigest = Base64.stringify(hmacSHA512(path + hashDigest, privateKey));

require引入
const CryptoJS = require("crypto-js");
console.log(CryptoJS.HmacSHA1("Message", "Key"));
或者按需引入
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
console.log(SHA256("Message"));</pre>

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
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
