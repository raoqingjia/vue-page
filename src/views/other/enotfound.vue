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
在换mac后重新运行vue和angular在git上拉取的项目代码报下面的错误
 Error: getaddrinfo ENOTFOUND localhost
    at errnoException (dns.js:50:10)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:95:26)
以开始以为是node_modules少了依赖，但是后来重新npm install了也不行，上网查原来是本地的localhost没和127.0.0.1绑定
两种解决办法
1) 打开hosts文件 添加 127.0.0.1 localhost
2） 将项目中npm run dev 代码配置中 host改为ip：127.0.0.1而不是在用localhost</pre>
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
