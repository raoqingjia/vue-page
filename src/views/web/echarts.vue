<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>常用链接</h3>
          <pre>https://www.makeapie.com/explore.html#sort=rank~timeframe=all~author=follow
https://www.makeapie.com/explore.html
https://echarts.apache.org/zh/option.html</pre>
          <h3>Option的配置的通用配置</h3>
          <pre>
backgroundColor                                     背景色

myChart.clear();                                    清空数据缓存
myChart.setOption(option);                          重新更新配置

new echarts.graphic.LinearGradient(a,b,c,d,arr)     设置颜色渐变效果
a ,b,c,d为0，1
a:1 arr中的颜色右到左
c:1 arr中的颜色左到右
b:1 arr中的颜色下到上
d:1 arr中的颜色上到下
具体用法
itemStyle: {
	color: new echarts.graphic.LinearGradient(
		0, 1, 0, 0,
		[
			{offset: 0, color: '#17CC8C'},
			{offset: 0.37, color: '#0D9BFC'},
			{offset: 0.67, color: '#38D7F4'},
			{offset: 1, color: '#666'}
		]
	)
}
 </pre>
          <h3>tooltip  提示框组件的通用介绍</h3>
          <pre>提示框组件可以设置在多种地方
可以设置在全局，即 tooltip
可以设置在坐标系中，即 grid.tooltip、polar.tooltip、single.tooltip
可以设置在系列中，即 series.tooltip
可以设置在系列的每个数据项中，即 series.data.tooltip
. show                     是否显示提示框组件
. trigger                  触发类型   item 数据项图形触发，主要在散点图，饼图等无类目轴的图表
                           axis坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
                           none什么都不触发
. formatter                提示框浮层内容格式，支持字符串和回调函数,例如 formatter: '{b0}: {c0}< br/>{b1}: {c1}'
. backgroundColor          提示框浮层的背景颜色
. borderColor              提示框浮层的边框颜色
. borderWidth              提示框浮层的边框宽
. padding                  提示框浮层内边距，单位px，默认各方向内边距为
. position                 提示框浮层的位置，默认不设置位置会跟随鼠标的位置，放置在容器正中间position: ['50%', '50%']
. triggerOn                提示框触发的条件，mousemove鼠标移动时触发click点击时触发mousemove|click同时鼠标移动和点击时触发
. alwaysShowContent        boolean  是否永远显示提示框内容，默认情况下在移出可触发提示框区域后 一定时间 后隐藏
. showDelay                浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
. textStyle                提示框浮层的文本样式
                  . color        文字的颜色
                  . fontStyle    字体格式
                  . fontWeight   字体粗细程度
                  . lineHeight   字体行高
. axisPointer              坐标轴指示器配置项
            https://echarts.apache.org/zh/option.html#tooltip.axisPointer
          </pre>
          <h3>legend  图例组件</h3>
          <pre>
. show                   boolean 是否展示
. left                   string、number图例组件离容器左侧的距离
. top                    string、number图例组件离容器顶部的距离
. width                  string、number图例组件的宽度默认自适应
. orient                 图例列表的布局朝向 horizontal（横）、vertical（竖）
. align                  图例标记和文本的对齐 auto、left、right
. padding                number、Array图例内边距
. itemGap                number 图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔
. itemWidth              number 图例标记的图形宽度
. itemHeight             number 图例标记的图形高度
. selectedMode           string boolean 控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭
. textStyle              图例中的文本样式
            . color            文字的颜色
            . fontStyle        字体格式
            . fontWeight       字体粗细程度
            . lineHeight       字体行高
. data                   图例的数据数组，如果 data 没有被指定，会自动从当前系列中获取。多数系列会取自 series
                         data: [{
                            name: '系列1',
                            // 强制设置图形为圆。
                            icon: 'circle',  //triangle三角、roundRect圆角矩形、rect矩形、diamond菱形、pin水滴、arrow none
                            textStyle: {
                              color: 'red'  // 设置文本为红色
                            }
                        }]</pre>
          <h3>grid 组件在容器中的位置</h3>
          <pre>
. left: '5%',
. right: '5%',
. top: '5%',
. bottom: '18%',
. show: true,
. borderColor:'#fff'

坐标轴位置布局
grid:[
    {x: '7%', y: '20%', width: '38%', height: '60%'},
    {x2: '7%', y: '20%', width: '38%', height: '60%'}
],
 xAxis: [//X轴各图标属性
    {gridIndex: 0, type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
    {gridIndex: 1, type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
],
yAxis: [
    {gridIndex: 0, type: 'value'},
    {gridIndex: 1, type: 'value'},
],
series: [
  {
      data: dataAll[0],
      xAxisIndex: 0,
      yAxisIndex: 0,
      type: 'line',
      name:'折线图'
  },
  {
      data: dataAll[1],
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      name:'柱状图'
  }]        </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'css',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){

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
  strong{
background-repeat: no-repeat;

  }
</style>
