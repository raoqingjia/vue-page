<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3></h3>
          <pre>
别名糖衣语法，英文名Syntactic sugar
解释：指计算机语言中添加的某种语法，这种语法对语言的功能没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性，从而减少程序代码出错的机会。
语法糖”可以给我们带来方便，是一种便捷的写法，编译器会帮我们做转换；而且可以提高开发编码的效率，在性能上也不会带来损失。

来个小demo:
function abc(a,b){
 return a+b;
}
语法糖写法：
let abc = (a,b) => a+b

v-bind、v-on 也是非常经典的语法糖，
v-bind缩写为：“：”
v-on缩写为： “@”</pre>
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
