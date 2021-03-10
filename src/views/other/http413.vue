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
一个上传文件的功能，内网测试都正常了，但是发布到外网就无法上传大点的（大于1MB）文件，更奇怪的是，后台还没有任何的异常信息。
返回的状态是413 Request Entity Too Large（nginx/1.2.1），再百度发现，这是nginx设置了允许上传的包的问题，这也就合乎上面的情况，后台没有任何异常信息，因为请求根本就没到达我们的tomcat，nginx发现请求的包大于设置的值，接直接返回413了。
解决的办法是，设置nginx的包大小限制为适当的值
client_max_body_size     20m;
          </pre>
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
