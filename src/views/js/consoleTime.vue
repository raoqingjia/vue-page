<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>console.time和console.timeEnd这两个方法可以用来让WEB开发人员测量一个javascript脚本程序执行消耗的时间。随着WEB应用越来越重要，JavaScript的执行性能也日益受到重视，WEB开发人员知道一些性能测试机器是必须的。今天要介绍的console.time和console.timeEnd就是其中之一。

console.time方法是开始计算时间，console.timeEnd是停止计时，输出脚本执行的时间。

// 启动计时器
console.time('testForEach');

// (写一些测试用代码)

// 停止计时，输出时间
console.timeEnd('testForEach');

// 4522.303ms
这两个方法中都可以传人一个参数，作为计时器的名称，它的作用是在代码并行运行时分清楚各个计时器。对console.timeEnd的调用会立即输出执行总共消耗的时间，单位是毫秒。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'consoleTime',
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
