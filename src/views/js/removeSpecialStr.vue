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
            1.关于JS删除String里的字符的方法，一般使用replace()方法。但是这个方法只会删除一次，如果需要将string里的所以字符都删除就要用到正则。
          </h3>
          <pre>
var str = "agbcdagggbagbbssaaa";
var reg = new RegExp("ag","gm");   //第一个参数a是要删除的字符，第二个参数包含属性 "g"、"i" 和 "m"，分别用于指定全局匹配、区分大小写的匹配和多行匹配，ECMAScript 标准化之前，不支持 m 属性。如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。
var a = str.replace(reg,"");
console.log(a);
打印结果bcdggbbbssaaa
再简单点就是replace()但只能删除一次
var endDate='2017-08
endDate=endDate.replace("-","");
console.log(endDate);
打印结果201804</pre>
          <h3>
            2.分割成数组，再重新拼接成新的字符串
          </h3>
          <pre>
var str = "abcdaabbssaaa";
var a = str.split("a").join("");</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'removeSpecialStr',
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
