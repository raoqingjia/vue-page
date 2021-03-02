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
            1、简单介绍以下一bootstrap
          </h3>
          <pre>
1）bootstrap是基于HTML、CSS、JavaScript 开发的简洁、直观、强悍的前端开发框架，其实它就是提前编写好了css，封装了js的几个css，js文件，而且他的js交互我也不爱用，最多用用css文件的响应式布局，而且也就只能应用在pc端，使用在移动端问题还不少！
2）bootstrap有三个版本2.0 、3.0 、4.0，其中3.0跟4.0的区别不大，跟2.0的写法区别很大，下面我是以3.0的规范进行书写
https://v3.bootcss.com/css/    bootstrap3.0 API      </pre>
          <h3>
            2、简以bootstrap3.0为例的API讲解
          </h3>
           <pre>
<span>① 布局容器</span>
Bootstrap 需要为页面内容和栅格系统包裹一个 .container/.container-fluid 的容器，这个很总要，而且由于 padding 等属性的原因，这两种容器类不能互相嵌套。
1）.container --固定宽度且居中，两边会留有空白的安全区域，固定宽度是针对不同的显示屏幕。
&#60div class="container">
  ...
&#60/div>
.container 默认padding-left/right:15px; margin-left/right:auto;
2）.container-fluid 类用于 100% 宽度，占据全部视口（viewport）的容器。
&#60div class="container-fluid">
  ...
&#60/div>
<span>② 栅格系统</span>
栅格系统将container、container-fluid水平方向划分为12分，栅格系统用于通过一系列的行（row）与列（column）的组合来创建页面布局；row将作为一个父级盒子，col的数字和一定要是12。
&#60div class="container">
  &#60div class="row">
      &#60div class="col-md-6">&#60/div>
      &#60div class="col-md-6">&#60/div>
  &#60/div>
&#60/div>
row:默认 margin-left/right:-15px;
col:默认 padding-left/right:15px;
这里说一下css中的box-sizing 盒尺寸的显示方式
content-box 是平时html中默认的，这是由 CSS2.1 规定的宽度高度行为。padding，margin不会包含在width中
border-box  是bootstrap默认的宽度高度行为。padding，margin包含在width中
<span>③ 栅格基本原理</span>
1）1个row最多容纳12个栅格单位，超出会换行
2） 对于sm，md，lg视图大于临界值，水平布局，小于临界值会垂直分布
3） 对于xs 始终是水平布局
<table>
  <thead>
  <tr>
    <th>临界值</th>
    <th>屏幕</th>
    <th>container宽度</th>
    <th>栅格单位</th>
    <th>栅格尺寸</th>
    <th>栅格布局</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>&ge; 1200px</td>
    <td>宽屏幕设备</td>
    <td>1170px</td>
    <td>col-lg-1</td>
    <td>97px</td>
    <td rowspan="3">满足临界值水平</td>
  </tr>
  <tr>
    <td>&ge; 992px</td>
    <td>普通桌面</td>
    <td>970px</td>
    <td>col-md-1</td>
    <td>80px</td>
  </tr>
  <tr>
    <td>&ge; 768px</td>
    <td>平板手机</td>
    <td>760px</td>
    <td>col-sm-1</td>
    <td>62px</td>
  </tr>
  <tr>
    <td>&le; 768px</td>
    <td>手机</td>
    <td>自动</td>
    <td>col-xs-1</td>
    <td>自动</td>
    <td>始终水平</td>
  </tr>
  </tbody>
</table>
当 xs sm md lg混合使用
1）垂直布局临界值以小屏幕优先
2）同时生效时，区块宽度以大屏幕优先
<span>④ 列偏移</span>
<img src="../../img/bootstrap-offset.jpg">
offset 向右偏移,类似于添加了margin
使用 .col-md-offset-* 类可以将列向右侧偏移。这些类实际是通过使用 * 选择器为当前元素增加了左侧的边距（margin）。
col-sm-offset-4 向右偏移4个sm单位
col-md-offset-2 向右偏移2个md单位
<span>⑤ 列排序</span>
<img src="../../img/bootstrap-push.jpg">
push 推  pull 拉
col-md-push-3  向右偏移3个md单位
col-md-pull-3  向左偏移3个md单位
&#60div class="row">
  &#60div class="col-md-9 col-md-push-3">.col-md-9 .col-md-push-3&#60/div>
  &#60div class="col-md-3 col-md-pull-9">.col-md-3 .col-md-pull-9&#60/div>
&#60/div>
不管有多少个push pull，col之和都不许超过12个
<span>⑥ 列嵌套</span>
可以通过添加一个新的 .row 元素和一系列 .col-sm-* 元素到已经存在的 .col-sm-* 元素内。被嵌套的行（row）所包含的列（column）的个数不能超过12
<img src="../../img/bootstrap-qiantao.jpg">
&#60div class="row">
  &#60div class="col-sm-9">
    Level 1: .col-sm-9
    &#60div class="row">
      &#60div class="col-xs-8 col-sm-6">
        Level 2: .col-xs-8 .col-sm-6
      &#60/div>
      &#60div class="col-xs-4 col-sm-6">
        Level 2: .col-xs-4 .col-sm-6
      &#60/div>
    &#60/div>
  &#60/div>
&#60/div>

<span>⑦ bootstrap全局设置</span>
font-size:14px; line-height:1.428(20px) 相对于默认字体大小
h1,h2,h3 默认设置是 margin-top:20px; margin-bottom:10px;
h4,h5,h6 默认设置是 margin-top:10px; margin-bottom:10px;
p标签 默认留白 margin-bottom:10px;
ul,ol 默认留白 margin-bottom:10px;
.table默认样式
1）.table 默认设置
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
2）.table中的 th td 默认设置
padding: 8px;
line-height: 1.42857143;
vertical-align: top;
border-top: 1px solid #ddd;
3）.table中的  th 默认设置
vertical-align: bottom;
border-bottom: 2px solid #ddd;
4）table.table内填充、行高、上边框
table.table-boedered 每个单元格增加边框
table.table-striped 隔行换色的效果
table.table-hover 对鼠标悬停做出响应

<span>⑧ 其他有用功能</span>
.center-block 让块级元素居中 相当于{margin:0 auto;display:block}
.show 显示  .hidden 隐藏不占位  invisible 隐藏占位
.visible-xs xs手机可见
.visible-sm
.visible-md
.visible-lg
只有在临界值之中才能可见，否则就算是大于临界值也不会可见
.hidden-xs xs手机隐藏
.hidden-sm
.hidden-md
.hidden-lg
.visible-xs-block 当满足xs的临界值时产生一种清浮动的效果
img.img-responsive 让图片宽度相对于父级盒自适应 ma-width：100%
img.img-rounded 圆角图片
img.img-circle 椭圆形或圆形图片
img.img-thumbnail 缩略图有边框</pre>
         </div>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bootstrap',
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
    computed:{

    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table{
    margin-top: 15px;
    text-align: center;
    border-collapse: collapse;
  }
  table tr {
    border: 0;
    background-color: #fff;
  }

  table thead tr{
    background-color: #eff3f5;
  }
  table tbody tr:nth-of-type(2n){
    background-color: #F7F7F7;
  }

  table thead th{
    min-width: 120px;
    padding: 10px;
    border: 1px solid #CCCCCC;
  }
  table tbody td{
    min-width: 120px;
    padding: 15px 10px;
    border: 1px solid #CCCCCC;
  }
</style>
