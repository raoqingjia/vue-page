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
首先从自身来看,++i 和 i++都 等同于 i = i + 1；
但是一般情况下，它们都是跟赋值联系在一起。
比如:
var a ;
a = i ++   //将i的值赋给a ， 即a = i,之后再执行i = i + 1;
a = ++ i   //将i+1 的值赋给a，即a = i + 1 ,之后再执行i = i + 1;
【总结】：
1：后置++ 是将自身的值赋给变量，之后自身再加1；
2：前置++ 是将自身+1 后的值赋给变量，同时自身加1；

var a = 1;
b = a ++;
console.log('a='a + ' ' + 'b='b); // a = 2 , b = 1

var a = 1 ;
b = ++a ;
console.log('a=' + a + ' ' +'b=' + b)//a = 2 b=2</pre>
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
