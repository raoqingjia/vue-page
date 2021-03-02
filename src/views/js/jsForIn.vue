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
          1、关于for in语法
        </h3>
        <pre>
for ...  in语法主要用于遍历数组中的元素，或者遍历对象中的元素。
当使用for ... in 遍历对象属性时，原型链上的所有属性都将被遍历。</pre>
          <h3>2、各浏览器 for-in 遍历对象属性的顺序差异</h3>
          <pre>
var menuList = {
    '26':{'name':'新闻','model':'list'},
    '23':{'name':'娱乐','model':'list'},
    '25':{'name':'体育','model':'list'},
    '21':{'name':'读书','model':'list'},
    '24':{'name':'时尚','model':'list'},
    '22':{'name':'女性','model':'list'}
};
var info = document.getElementById('info');
for(menu in menuList) {
    info.innerHTML += menu + " : "  + menuList[menu]['name'] + "<br/>";
}
在 IE6、IE7、IE8、Firefox、Safari（包括 iPhone）中，遍历得到的结果，和给定的一致：
26 : 新闻
23 : 娱乐
25 : 体育
21 : 读书
24 : 时尚
22 : 女性
而在 IE9、Chrome、Opera、Android  中，输出的顺序则是：
21 : 读书
22 : 女性
23 : 娱乐
24 : 时尚
25 : 体育
26 : 新闻
参考此文得知原因如下：
① 根据 ECMA-262（ECMAScript）第三版中描述，for-in 语句的属性遍历的顺序是由对象定义时属性的书写顺序决定的。
② 在现有最新的 ECMA-262（ECMAScript）第五版规范中，对 for-in 语句的遍历机制又做了调整，属性遍历的顺序是没有被规定的。
③ 新版本中的属性遍历顺序说明与早期版本不同，这将导致遵循 ECMA-262 第三版规范内容实现的 JavaScript 解析引擎（如IE6 IE7 IE8 Firefox Safari 浏览器的 JavaScript 解析引擎，它们完成时间早于 ECMA-262 第五版规范发布时间）在处理 for-in 语句时，与遵循第五版规范实现的解析引擎，对属性的遍历顺序存在不一致的问题。</pre>
        <h3>
          3、关于for in的一个坑
        </h3>
        <pre>
var arr = [1,2,3,4];
for (var k in arr){
    alert(arr[k])
}
结果是依次弹出1、2、3、4。
同样，我们自然的认为for ... in遍历Object时也是按照属性出现的顺序来查找。就像下的代码：
var o = {
    'first':'first',
    'second':'second',
    'third':'third'
}
for (var k in o){
    alert(o[k])
}
会依次弹出‘first’，‘second’，‘third’。
这当然没错，不过，再试试下面的代码
var o = {
    '01':'1',
    '2':'2',
    '今天':3
}
for (var k in o){
    alert(o[k])
}
结果怎样？2，1，3对不对？
这一次循环不是按照属性出现的瞬息来查找的。
最后一个实例与forin的遍历方式有关系：
forin首先遍历所有的数字键（按升序进行排列）；
然后遍历所有的字符串键（按时间先后的顺序进行排列。）
你上面的‘2’键应该是转化了数字键。‘03’没有转化依旧按字符串键进行遍历（经过测试，以0开头的都不转化为数字键（我也不知道为什么。哈哈）。当然‘0’除外。）</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'jsForIn.',
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
