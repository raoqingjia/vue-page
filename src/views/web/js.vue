<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>javaScript的组成</h3>
          <pre>
由三部分组成ECMAscript DOM BOM
1. ECMAscript(语言核心功能基于ES规范)、定义变量，条件的判定，数组，循环
2. DOM— js需要支持对DOM的维护,通过document,element对象实现.这些都是在ES中没有的.
3. BOM— js需要支持对BOM的维护,通过window对象实现.这些都是在ES中没有的.
</pre>
          <h3>javaScript执行的原理</h3>
          <pre>https://blog.csdn.net/GY_U_YG/article/details/72869315</pre>
          <h3>javascript处理引擎</h3>
          <pre>
能解析并且运行js代码的解释器。
浏览器通常会有js引擎，js刚出来时就是运行在浏览器中,作为客户端语言使用。常见的js引擎有：
Chrome ：  webkit/blink ： V8
FireFox：  Gecko        :  SpiderMonkey
Safari ：  webkit       ： JavaScriptCore
IE     ：  Trident      ： Chakra
js不一定非要在浏览器中运行，只要有JS引擎即可，最典型的比如NodeJS，采用了谷歌的v8引擎，使得JS完全脱离浏览器运行
Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。
上文提到V8引擎是用来解析执行JS，并且V8是基于ECMAscirpt标准实现的.换个角度说,nodejs里头没有DOM和bom的操作,只保留的javascript的语法核心(ES)
nodejs作为服务运行在linux,mac,window,把javascipt的角色从前台开发,转移到了后台开发</pre>
          <h3>常用的输出</h3>
          <pre>
1）document.write('要输出的内容')
2）alert('要输出的内容')
3）console.log('要输出的内容\n hello world');
\n 表是字符串中文职换行
&#60br> 是html中的换行 </pre>
          <h3>定义标识符的规则</h3>
          <pre>
1)js中是区分大小写的
2)变量，对象，函数的名称组成：
  a.大小写字母、数字、下划线、$ 所组成，但是首字母不能是数字 ，
  b.见名知义，尽量用英文单词
  c.使用驼峰命名法，第一个单词的首字母小写，其它单词的首字母都大写，或者单次间用_下滑先分开
3)每条语句的后面都加上分号</pre>
          <h3>循环语句</h3>
          <pre>
<span>while循环的使用</span>
while循环的三步骤
            1）定义循环变量并给循环变量赋初始值
          </pre>
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
