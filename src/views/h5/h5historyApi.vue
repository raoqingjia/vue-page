<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、H5新增的API</h3>
           <pre>
① history.pushState(data, title,[url])：往历史记录堆栈顶部添加一条记录；data会在onpopstate事件触发时作为参数传递过去；title为页面标题，当前所有浏览器都会忽略此参数；url为页面地址，可选，缺省为当前页地址。
② history.replaceState(data, title ,[ url]) ：更改当前的历史记录，参数同上。
③ history.state：获取历史栈中最顶端的state数据（即history.pushState中的第一个参数），不同浏览器的读写权限不一样。
④ popstate事件：当用户单击浏览器的后退或者前进按钮（或者调用history.go，history.back，history.forward方法也会触发popstate事件。调用history.pushState()或者history.replaceState()不会触发popstate事件，但改变url中的hash值会触发popstate事件）时触发该事件。在事件处理函数中读取触发事件的事件对象的state属性值，该属性值即为执行pushState方法时所使用的第一个参数值，该state与history.state是相同的，而不是历史栈中被抛出的state对象。
到目前为止，IE10，firefox4以上的版本，Chrome8以上的版本，Safari5，Opera11以上的版本浏览器支持HTML5中的History API。
⑤ 判断是否支持h5 history api：
if (history.pushState) {  … };
           </pre>
          <h3>2、防止浏览器后退</h3>
          <pre>
//防止浏览器后退  http://www.cnblogs.com/webzwf/p/5714385.html
$(function() {
    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            window.history.pushState('forward', null, '#');
            window.history.forward(1);
        });
    }
    window.history.pushState('forward', null, '#'); //在IE中必须得有这两行   //ie8/9不支持
    window.history.forward(1);
    location.hash="../../src/error.html?error=1";  //当前页面地址   单独对ie8/9做的支持   和&#60script src="../plugins/history/js/history.js">&#60/script>  解决兼容性插件
});</pre>
          <h3>3、历史前进后退</h3>
          <pre>
 A)history.length：当前历史列表中的历史记录数（我大概测了下，IE6+是从0开始的，其他的是从1开始的，若有误请反馈哈，（^_^）；
 B)history.go(n)：前进或后退n条记录，当n=0或空时会刷新当前页；
 C)history.back()：后退一步；
 D)history.forward()：前进一步;</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h5historyApi',
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
