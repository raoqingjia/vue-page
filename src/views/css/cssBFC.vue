<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>什么是BFC</h3>
          <pre>一个块格式化上下文（block formatting context） 是Web页面的可视化CSS渲染出的一部分。它是块级盒布局出现的区域，也是浮动层元素进行交互的区域。
上面太绕口，通俗来讲BFC就是一个独立的布局环境，BFC中的元素布局不受外部元素的影响，也不会影响到外部元素

在CSS中，元素定位规则分为以下三种：
1、普通文档流：元素按照从上至下，从左至右的顺序排列，但元素又分行内元素和块级元素，其排列方式有所不同：
 1.1、行内元素：水平排列，直到水平方向占满一行后再另起一行排列。
 1.2、块级元素：垂直排列，每一个块级元素都会独自占用一行。
2、浮动流：设置浮动的元素会向左或向右浮动，直到碰到父级元素或其他浮动的元素，需要注意的是，设置浮动的元素只是半脱离文档流。
3、脱离文档的定位流：当定位设置为absolute绝对定位或fixed固定定位时，元素会完全脱离文档流，元素的位置就是定位时设置的位置，其布局不会受其他元素的影响，也不会影响到其他元素。
BFC内部依然遵循元素定位规则这句话很好理解，前面提到根元素html本身会形成一个BFC，所以其内部自然遵循元素定位规则。</pre>
          <h3>BFC的布局规则</h3>
          <pre>1、内部的Box会在垂直方向，一个接一个地放置
2、Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin上下会发生重叠，左右则不会重叠
3、每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
4、BFC的区域不会与float box重叠
5、BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
6、计算BFC的高度时，浮动元素也参与计算</pre>
          <h3>触发 BFC</h3>
          <pre>只要元素满足下面任一条件即可触发 BFC 特性：
1、body 根元素
2、浮动元素：float 除 none 以外的值
3、绝对定位元素：position (absolute、fixed)
4、display 为 inline-block、table-cells、flex
5、overflow 除了 visible 以外的值 (hidden、auto、scroll)</pre>
          <h3>BFC的作用(重点)</h3>
          <pre>1.利用BFC避免margin重叠
< style>
    *{
      margin: 0;
      padding: 0;
    }
    p {
      color: #f55;
      background: yellow;
      width: 200px;
      line-height: 100px;
      text-align:center;
      margin: 30px;
    }
< /style>
< body>
    < p>看看我的 margin是多少< /p>
    < p>看看我的 margin是多少< /p>
< /body>
p标签设置的是上下 margin: 30px但实际在页面呈现的实际效果是上下边距只有30px而不是60px；
根据第二条，属于同一个BFC的两个相邻的Box会发生margin重叠，所以我们可以设置，两个不同的BFC，也就是我们可以让把第二个p用div包起来，然后激活它使其成为一个BFC
例如下面的写法，第二个p标签包裹一个div
< style>
    *{
      margin: 0;
      padding: 0;
    }
    p {
      color: #f55;
      background: yellow;
      width: 200px;
      line-height: 100px;
      text-align:center;
      margin: 30px;
    }
    div{
      overflow: hidden;
    }
< /style>
< body>
    < p>看看我的 margin是多少< /p>
    < div>
        < p>看看我的 margin是多少< /p>
    < /div>
< /body>

2.自适应两栏布局
每个盒子的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。这句话很绕口，看下面的截图就清楚了
< style>
    *{
      margin: 0;
      padding: 0;
    }
    .left {
      width: 100px;
      height: 150px;
      float: left;
      background: rgb(139, 214, 78);
      text-align: center;
      line-height: 150px;
      font-size: 20px;
    }
    .right {
      height: 300px;
      background: rgb(170, 54, 236);
      text-align: center;
      line-height: 300px;
      font-size: 40px;
    }
< /style>
< body>
    < div class="left">LEFT< /div>
    < div class="right">RIGHT< /div>
< /body>
因为BFC的区域不会与float box重叠。所以我们让right单独成为一个BFC，看下面截图理解这句话</pre>
          <img src="../../img/css/bfc-01.png" width="500px" height="300px">
          <pre>下面给right的加个float：right就行了，不过在现实的项目中我估计没人会直接一个浮动元素后跟着一个块级元素，这布局也没啥用啊
< style>
    *{
      margin: 0;
      padding: 0;
    }
    body {
      width: 100%;
      position: relative;
    }
    .left {
      width: 100px;
      height: 150px;
      float: left;
      background: rgb(139, 214, 78);
      text-align: center;
      line-height: 150px;
      font-size: 20px;
    }
    .right {
      overflow: hidden;
      height: 300px;
      background: rgb(170, 54, 236);
      text-align: center;
      line-height: 300px;
      font-size: 40px;
    }
< /style>
< body>
    < div class="left">LEFT< /div>
    < div class="right">RIGHT< /div>
< /body></pre>
          <img src="../../img/css/bfc-02.png" width="500px" height="300px">
          <pre>
3.清除浮动
当我们不给父节点设置高度，子节点设置浮动的时候，会发生高度塌陷，这个时候我们就要清除浮动。
这清除浮动是给父级元素加了个overflow: hidden;
< style>
    .par {
      border: 5px solid rgb(91, 243, 30);
      width: 300px;
      overflow: hidden;   关键点是这里
    }
    .child {
      border: 5px solid rgb(233, 250, 84);
      width:100px;
      height: 100px;
      float: left;
    }
< /style>
< body>
    < div class="par">
        < div class="child">< /div>
        < div class="child">< /div>
    < /div>
< /body></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'cssBFC',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table.dataintable {
    margin-top: 15px;
    border-collapse: collapse;
    border: 1px solid #aaa;
    width: 100%;
    margin-bottom: 15px;
  }

  table.dataintable tr:nth-child(odd) {
    background-color: #F5F5F5;
  }

  table.dataintable tr:nth-child(even) {
    background-color: #fff;
  }

  table.dataintable th {
    vertical-align: baseline;
    padding: 5px 15px 5px 6px;
    background-color: #3F3F3F;
    text-align: center;
    color: #fff;
    border: 1px solid #aaa;
  }

  table.dataintable td {
    vertical-align: text-top;
    padding: 6px 15px 6px 6px;
    border: 1px solid #aaa;
    text-align: left;
  }
</style>
