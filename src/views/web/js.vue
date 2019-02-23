<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、Javascript的简介</h3>
          <pre>
<span>① javaScript的组成</span>
由三部分组成ECMAscript DOM BOM
核心ECMAscript 定义变量，条件的判定，数组，循环
文档对象模型DOM js操作html
浏览器对象模型 BOM
<span>① javaScript执行的原理</span>
从上到下执行，但是代码的编写顺序并不意味就是代码的执行顺序，尤其是在异步操作的函数中代码并没有同步操作那么直观。
<span>② 计算机的工作原理</span>
CPU要处理的数据，以及CPU处理过的数据都要经过内存条（保存数据的）
输入设备 -> 内存条 ->  CPU  ->  内存条 ->  输出设备
<span>③ 程序的基本概念</span>
程序：由一条或多条指令（即语句）组成，每条语句以分号结束</pre>
          <h3>2、常用的输出</h3>
          <pre>
1）document.write('要输出的内容')
2）alert('要输出的内容')
3）console.log('要输出的内容')</pre>
          <h3>3、常量值</h3>
          <pre>
js中把一个字符，一串字符都叫字符串，用单引号或双引号括起来
['a','b','c'] 中括号括起来叫数组常量
{name:'zhan',age:'22'} 对象常量</pre>
          <h3>4、变量值</h3>
          <pre>
变量值：程序运行的过程中，其值可以发生变化
变量中放什么：数据，常量值
变量的声明： var 变量名称 = 变量值 ；
\n 表是字符串中文职换行 eg:console.log('要输\n出的内容')
&#60br> 是html中的换行</pre>
          <h3>5、定义标识符的规则</h3>
          <pre>
1)js中是区分大小写的
2)变量，对象，函数的名称组成：
  a.大小写字母、数字、下划线、$ 所组成，但是首字母不能是数字 ，
  b.见名知义，尽量用英文单词
  c.使用驼峰命名法，第一个单词的首字母小写，其它单词的首字母都大写，或者单次间用_下滑先分开
3)每条语句的后面都加上分号</pre>
          <h3>5、定义标识符的规则</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'js',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){
        console.log('要输\n出的内容')
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
