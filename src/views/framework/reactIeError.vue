<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/react-ie-error.png" alt="jquery安全版本" height="250" width="100%">
          <pre>
1.安装react-app-polyfill和core-js
npm i react-app-polyfill core-js --save

2.在src/index.js引入(需放在首行)
import 'core-js/es'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'

3.修改package.json
"production": [
   ">0.2%",
   "not dead",
   "not op_mini all",
   "ie > 9"
 ],
 "development": [
   "last 1 chrome version",
   "last 1 firefox version",
   "last 1 safari version",
   "ie > 9"
 ]

4.重启项目即可
补充：如果没生效，删除node_modules目录, 重新下载          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'trim',
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
