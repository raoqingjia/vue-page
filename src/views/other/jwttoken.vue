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
JWT全称为json web token,他的本质是一个对JSON对象加密后的字符串，当服务器认证通过后一个包含用户信息的josn对象，返给用户，典型的JWT由三个部分组成，每一个部分由点（.）分隔，这样就构成JWT，
JWT根据工号信息不同，返回出的JWT长度是不一样的，它不是等长的
例子如下：
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ (三种不同的信息)
第一部分：头部（header）  头部包含所使用的签名算法和令牌的类型(即JWT)，这部分会被编码为Base64URL格式。
第二部分：载荷（payload） 这部分为后端JAVA为我们加密后的数据，我们需要在前端将第二段数据分割出来，然后再去解析他
第三部分：签证（signature）

const msg = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

解析方式一
const str = msg.split('.')[1].replace(/-/g, "+").replace(/_/g, "/");  //  将JWT切割转义   获取需要的载荷
let user = decodeURIComponent(escape(window.atob(str)));
let res = JSON.parse(user)     //将获取的字符串转换成JSON对象

解析方式二
import { Buffer } from 'buffer';
const info = JSON.parse(new Buffer(msg[1], 'base64').toString()); </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
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
