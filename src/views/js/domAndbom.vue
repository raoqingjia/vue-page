<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1.Javascript组成
          </h3>
          <pre>
ECMAScript(核心)                 处理网页内容的方法和接口
描述了JS的语法和基本对象。       浏览器对象模型（BOM）
文档对象模型 （DOM）             与浏览器交互的方法和接口
javascript 有三部分构成，ECMAScript，DOM和BOM，根据宿主（浏览器）的不同，具体的表现形式也不尽相同，ie和其他的浏览器风格迥异,IE 扩展了 BOM，加入了 ActiveXObject 类，可以通过 JavaScript 实例化 ActiveX 对象 </pre>
          <h3>
            2.DOM与BOM的区别
          </h3>
          <pre>
DOM 是为了操作文档出现的 API，document 是其的一个对象；
BOM 是为了操作浏览器出现的 API，window 是其的一个对象。
BOM是浏览器对象模型，DOM是文档对象模型，前者是对浏览器本身进行操作，而后者是对浏览器（可看成容器）内的内容进行操作
 <img src="../../img/domAndbom.jpg">
归DOM管的：
E区（就是你说的document啦。由web开发人员呕心沥血写出来的一个文件夹，里面有index.html，CSS和JS什么鬼的，部署在服务器上，我们可以通过浏览器的地址栏输入URL然后回车将这个document加载到本地，浏览，右键查看源代码等。
归BOM管的：
A区（浏览器的标签页，地址栏，搜索栏，书签栏，窗口放大还原关闭按钮，菜单栏等等）
B区（浏览器的右键菜单）
C区（document加载时的状态栏，显示http状态码等）
D区（滚动条scroll bar）</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'domAndbom',
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
