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
问题是mac连接oracle数据库报   Mac：oracle 24454 client host name is not set
一般这种错误就是本地的host没有配置：
一行指令解决
sudo /bin/bash -c "echo '127.0.0.1 ${HOSTNAME}' >> /etc/hosts
如果还继续报错，一般原因就是本机的hostname被自动修改了，需要重新刷新一下。
sudo scutil --set HostName $(hostname)</pre>
          <img src="../../img/macLocalHost.png">
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
