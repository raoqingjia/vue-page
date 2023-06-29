<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>安装anywhere插件</h3>
          <pre>1、安装anywhere插件
在命令行运行下面代码全局安装：
npm install anywhere -g
pm由于网络原因比较卡的，推荐安装国内淘宝源：
暂时使用：
npm --registry https://registry.npm.taobao.org i express
永久使用：
npm conf set registry https://registry.npm.taobao.org

2、执行 anywhere --help 检查是否安装成功，如果安装成功，会打印如下信息
Usage:
  anywhere --help // print help information
  anywhere // 8000 as default port, current folder as root
  anywhere 8888 // 8888 as port
  anywhere -p 8989 // 8989 as port
  anywhere -s // don't open browser
  anywhere -h localhost // localhost as hostname
  anywhere -d /home // /home as root
  anywhere -l // print log
  anywhere -f // Enable history fallback

比如执行
anywhere -p 8000 # 指定静态服务器的端口号
anywhere -s # 静默执行，不打开浏览器
</pre>
          <h3>项目里使用 anywhere插件</h3>
          <pre>比如我有个Vue项目执行了npm run build之后生成了dist
进入到dist文件，在dist文件夹路径里调出cmd窗口后执行anywhere就行了，项目就运行起来了
如果成功，会打印如下信息
Running at http://10.7.129.33:8000/
Also running at https://10.7.129.33:8001/
如果这个目录下有 文件，那你就可以直接在启动成功后的地址后面加上 /文件 访问了，
例如 http://10.7.129.33:8000/test.txt
当然，如果这个文件是一个 html ，浏览器就会把它解析成网页了</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'anywhere',
        data() {
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
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
