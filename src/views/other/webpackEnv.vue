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
在node中，有全局变量process表示的是当前的node进程。因为是全局变量，它对于node应用程序是始终可用的，无需require()。
process.env包含着关于系统环境的信息，process.env中并不存在NODE_ENV，VUE_APP_URL这些东西。
NODE_ENV是一个用户自定义的变量，在webpack中它的用途是判断生产环境或开发环境。
VUE_APP_URL = "你的开发或测试接口地址"  配置测试和本地开发时的 接口地址

在Webpack配置文件中，经常会看到如下类似的代码：
// webpack.config.js
module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}
process.env.NODE_ENV 是用来辨识开发环境的，如果 process.env.NODE_ENV === 'development' 则说明是开发环境，你需要是是开发环境的后台地址

vue-cli3中的process.env.NODE_ENV
使用vue-cli3构建的项目就简单多了，因为vue-cli3使用上述的DefinePlugin方式帮你把process.env.NODE_ENV配置好了，我们不需要再自己去配置。
它自带了三种模式：
development：在vue-cli-service serve下，即开发环境使用
production：在vue-cli-service build和vue-cli-service test:e2e下，即正式环境使用
test： 在vue-cli-service test:unit下使用
在package.json中的scripts命令如下
{
  "name": "",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "vue-cli-service serve", //本地开发运行，会把process.env.NODE_ENV设置为'development'
    "build": "vue-cli-service build", //默认打包模式，会把process.env.NODE_ENV设置为'production'
  },
  "dependencies": {
  }
}</pre>
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
