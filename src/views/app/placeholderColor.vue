<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、如何设置css3中placeholder的字体颜色</h3>
           <pre>
Chrome支持input=[type=text]占位文本属性，但下列CSS样式却不起作用
input[placeholder], [placeholder], *[placeholder] {
   color:red !important;
}
因为每个浏览器的CSS选择器都有所差异，所以需要针对每个浏览器做单独的设定(可以在冒号前面写input和textarea)。可以按下面的写法
①  WebKit和Blink（Safari,Google Chrome, Opera15+）使用伪元素
::-webkit-input-placeholder {  /* WebKit browsers  */
　　color:#999;
}
②  Mozilla Firefox 4-18使用伪类
:-moz-placeholder {  /* Mozilla Firefox 4 to 18   */
　　color:#999;
}
③  Mozilla Firefox 19+ 使用伪元素
::-moz-placeholder {  /* Mozilla Firefox 19+   */
　　color:#999;
}
④  IE10使用伪类
:-ms-input-placeholder { /* Internet Explorer 10+ */
　　color:#999;
}
还可以写成下面这样(推荐写法)：
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder { color: #ccc;}
input:-moz-placeholder, textarea:-moz-placeholder { color:#ccc; }
input::-moz-placeholder, textarea::-moz-placeholder { color:#ccc; }
input:-ms-input-placeholder, textarea:-ms-input-placeholder { color:#ccc; }
PS:除此之外，还能修改placeholder的font-weight等样式 </pre>
          <h3>2、知识点扩展：</h3>
          <pre>
单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。
css伪类：CSS 伪类用于向某些选择器添加特殊的效果。
css伪元素：CSS 伪元素用于向某些选择器设置特殊效果。
伪元素由双冒号和伪元素名称组成。双冒号是在当前规范中引入的，用于区分伪类和伪元素。但是伪类兼容现存样式，浏览器需要同时支持旧的伪类， 如:first-line,:first-letter,:before,:after等等。因此对于css2之前已经有的伪元素两种写法的作用是一样的，但是为了兼容IE浏览器还是使用单冒号的写法。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'placeholderColor',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      forbidKeyboard(){
         document.activeElement.blur();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
  p{
    margin: 10px 0;
  }
</style>
