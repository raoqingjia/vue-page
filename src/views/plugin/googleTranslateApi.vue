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
          <pre>
文档简介地址
https://gitee.com/jsqiufeng/google-translate-open-api
https://github.com/hua1995116/google-translate-open-api

npm install --save google-translate-open-api

单段文本
import translate from 'google-translate-open-api';
const result = await translate(`I'm fine.`, {
  tld: "cn",
  to: "zh-CN",
});
const data = result.data[0];
// 我很好。

多段文本
import translate from 'google-translate-open-api';
const result = await translate([`I'm fine.`, `I'm ok.`], {
  tld: "cn",
  to: "zh-CN",
});
const data = result.data[0];
// [[[["我很好。"]],null,"en"],[[["我可以。"]],null,"en"]]

代理
proxy-config https://github.com/axios/axios#request-config
const result = await translate([`I'm fine. And you?`,`I'm ok.`], {
  tld: "cn",
  to: "zh-CN",
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  }
});

浏览器
const result = await translate([`I'm fine. And you?`,`I'm ok.`], {
  tld: "cn",
  to: "zh-CN",
  browers: true
});
const data = result.data[0];


          </pre>

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
