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
            1.Echarts中tooltip超出外层div显示不全问题
          </h3>
          <pre><img src="../../img/echarts-tooltip.png" style="width:360px;">
解决办法是利用tooltip中的position属性
position: [10, 10]  //绝对位置，相对于容器左侧 10px, 上侧 10 px
position: ['50%', '50%'] //相对位置，放置在容器正中间
Function  //回调函数，格式如下
position: function (point, params, dom, rect, size) {
    return [point[0], '10%'];   // 固定在顶部
}
具体办法是：position:function(p){  return [p[0]+50, p[1] +10]; } , p[0]左右值，p[1]上下值
</pre>
          <h3>2、题外话谈谈tooltip</h3>
          <pre>
1)tooltip并非是canvas绘制，而是一个div。
2)tooltip样式问题，首先考虑样式冲突。
3)多用控制台查找问题，修改代码。
4)tooltip显示的内容可以自定义修改
formatter: function (params) {
 var tar = params[0];
 return tar.name + ’' + tar.seriesName + ' : ' + tar.value;
}
5)tooltip显示的过大
先看是不是写成&#60div id="pie1" style="width:236px; height:220px;">&#60/div>规定的宽高不要写在css里，直接写在html里就可以了！之后再看css定义的样式是不是有问题。
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'echarts-tooltip',
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
