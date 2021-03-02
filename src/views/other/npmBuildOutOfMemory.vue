<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <div class="div-cmd">
          <p>FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
            Writing Node.js report to file: report.20191015.111850.12168.0.001.json
            Node.js report completed</p>
          <p>1: 00007FF61703D7AA public: __cdecl v8::internal::GCIdleTimeHandler::GCIdleTimeHandler(void) __ptr64+4618
          <p> 2: 00007FF616FEB736 uv_loop_fork+86646</p>
          <p>3: 00007FF616FEC1FD uv_loop_fork+89405</p>
          <p> 4: 00007FF61741454E void __cdecl v8::internal::FatalProcessOutOfMemory(class v8::internal::Isolate * __ptr64,char const * __ptr64)+798</p>
          </div>
          <pre>
主要原因是包体太大，堆栈溢出。解决方法就是提高内存限制，具体操作：
package.json中修改  "build": "node --max_old_space_size=4096 build/build.js"
写上 --max_old_space_size=4096 就好了，我这里设置的内存大小是4G,这个具体的大小可以根据自己的项目情况来设置就好了。然后再重新运行 npm run build 就可以正常打包构建了

            网上说还有一种方式，我没尝试过
            命令行运行命令npm install -g increase-memory-limit
            进入项目文件夹，执行命令：increase-memory-limit
            这样再打包就可以成功了。
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
