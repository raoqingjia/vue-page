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
@font-face是CSS3中的一个模块，他主要是把自己定义的Web字体嵌入到你的网页中
实例
指定名为"myFirstFont"的字体，并指定在哪里可以找到它的URL：
@font-face{
  font-family: myFirstFont;
  src: url('Sansation_Light.ttf'),
       url('Sansation_Light.eot'); /* IE9 */
}
以下实例为在div中使用的字体:
div{
 font-family: myFirstFont;
}
语法解析
@font-face {
  font-family: < YourWebFontName>;
  src: < source> [< format>][,< source> [< format>]]*;
  [font-weight: < weight>];
  [font-style: < style>];
}
取值说明
1、YourWebFontName:此值指的就是你自定义的字体名称，最好是使用你下载的默认字体，他将被引用到你的Web元素中的font-family。如"font-family:"YourWebFontName";"
2、source:此值指的是你自定义的字体的存放路径，可以是相对路径也可以是绝路径；
3、format：此值指的是你自定义的字体的格式，主要用来帮助浏览器识别，其值主要有以下几种类型：truetype,opentype,truetype-aat,embedded-opentype,avg等；
兼容性
根据字体格式的兼容性，意味着在@font-face中我们至少需要.woff,.eot两种格式字体，甚至还需要.svg等字体达到更多种浏览版本的支持。 为了使@font-face达到更多的浏览器支持，Paul Irish写了一个独特的@font-face语法叫Bulletproof @font-face:
@font-face {
  font-family: 'YourWebFontName';
  src: url('YourWebFontName.eot?') format('eot');/*IE*/
  src: url('YourWebFontName.woff') format('woff')
      ,url('YourWebFontName.ttf') format('truetype');/*non-IE*/
}
但为了让各多的浏览器支持，你也可以写成：
@font-face {
  font-family: 'YourWebFontName';
  src: url('YourWebFontName.eot'); /* IE9 Compat Modes */
  src: url('YourWebFontName.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('YourWebFontName.woff') format('woff'), /* Modern Browsers */
       url('YourWebFontName.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('YourWebFontName.svg#YourWebFontName') format('svg'); /* Legacy iOS */
}</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fontFace',
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
