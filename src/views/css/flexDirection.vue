<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>对着https://blog.csdn.net/Allenyhy/article/details/81605547这个地址里的图片，结合看这篇笔记
容器属性有：
flex-direction、flex-wrap、flex-flow、justify-content、align-items、align-content
项目属性有：
order、flex-grow、flex-shrink、flex-basis、flex、align-self</pre>
<!--          <img src="../../img/css/flex-container.png" width="800px" height="350px">-->
          <h3>flex-direction 属性 </h3>
          <pre>flex-direction属性控制主轴的方向，即项目的排列方向，类似是x轴
格式：.container {
       display:flex;
　　　　flex-direction: row | row-reverse | column | column-reverse;
　　}
flex-direction属性有4个值：
属性值
row	             默认值是row，主轴为水平方向，从左到右排列
row-reverse 	   主轴为水平方向，从右到左排列
column	         主轴为垂直方向，从上到下排列
column-reverse	 主轴为垂直方向，从下到上排列</pre>
          <h3>flex-wrap 属性 </h3>
          <pre>让弹性盒元素在必要的时候拆行
格式：.container {
       display:flex;
　　　　flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
　　}
属性值
nowrap	      默认值。不换行，在一行显示，即使子元素的宽度或者高度大于父元素的宽度或者高度，也在一行显示
wrap	        内容超过后换行
wrap-reverse	内容超过后换行，但是以相反的顺序。
initial      	设置该属性为它的默认值。
inherit     	从父元素继承该属性。</pre>
          <h3>justify-content 属性 </h3>
          <pre>justify-content 用于设置弹性盒子元素在主轴（横轴）方向上的对齐方式。  着重理解轴这个字，不然容易和lex-direction混淆
格式：.container {
       display:flex;
　　　　justify-content: flex-start|flex-end|center|space-between|space-around|initial|inherit;
　　}
属性值
flex-start	     start侧对齐，左对齐
flex-end	       end侧对齐，右对齐
center	         位于容器的中心。
space-between	   左右两侧没有间距，中间间距相同
space-around	   左右两侧的间距为中间间距的一半
重点理解space-between、space-around 这个在全屏的左右布局的时候可能用的到</pre>
          <h3>align-items 属性 </h3>
          <pre>交叉轴对齐方式,属性定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式,这个还是看图吧，不然压根理解不了这句话
最好和justify-content搭配理解，类似看出象限图，justify-content相当于x轴时，align-items就相当于是y轴，就是轴的方向不一样
格式：.container {
       display:flex;
　　　  align-items: stretch|center|flex-start|flex-end|baseline|initial|inherit;
　　}
属性值
stretch       元素被拉伸以适应容器，类似height为100%
center        元素位于容器的中心。
flex-start	  y轴上对齐，元素位于容器的开头，弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
flex-end      end侧开始，下对齐，元素位于容器的结尾，弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
baseline      元素位于容器的基线上。</pre>
          <h3>align-content 属性 </h3>
          <pre>align-content 多根轴线对齐方式,属性在弹性容器内的各项没有占用交叉轴上所有可用的空间时对齐容器内的各项（垂直）。
提示：使用 justify-content 属性对齐主轴上的各项（水平）。
注意：容器内必须有多行的项目，该属性才能渲染出效果。
格式：.container {
       display:flex;
　　　  align-content: stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit;
　　}
属性值
stretch        拉伸
center         中心对齐
flex-start     start侧开始，上对齐
flex-end       end侧开始，下对齐
space-between  上下没有间距，中间各子元素间距相同
space-around   上下间距之和等于中间各个间距</pre>
          <pre>1. 前提：必须为每个div设置宽高度
2. flex-item六大属性
order         设置权重，默认为0
flex-grow     将flex-item成比例放大
flex-shrink   将flex-item成比例缩小
flex-basis    设置flex-item的长度(覆盖width)，浏览器依据此值进行放大缩小
flex          合并flex-grow fex-shrink flex-basis
align-self    单独设置某flex-item的对齐方式</pre>
          <h3>flex 属性 </h3>
          <pre>让所有弹性盒模型对象的子元素都有相同的长度,且忽略它们内部的内容
flex 属性用于设置或检索弹性盒模型对象的子元素如何分配空间。
flex 属性是 flex-grow、flex-shrink 和 flex-basis 属性的简写属性。
格式.container  div.item{
    flex:1;
}
属性值
flex: flex-grow flex-shrink flex-basis|auto|initial|inherit;
flex-grow	     一个数字，规定项目将相对于其他灵活的项目进行扩展的量。
flex-shrink	   一个数字，规定项目将相对于其他灵活的项目进行收缩的量。
flex-basis   	 项目的长度。合法值："auto"、"inherit" 或一个后跟 "%"、"px"、"em" 或任何其他长度单位的数字。
auto	         与 1 1 auto 相同
none	         与 0 0 auto 相同

flex-basis、flex-shrink、flex-grow       网上找案例吧，不然不容易理解，下面简单说一下
div:nth-of-type(2) {flex-basis: 80px;}  flex-basis是可以单独设置指定宽度
flex-shrink、flex-grow  设置都是数学，类型百分比等比例分块          </pre>
          <h3>flex-shrink、flex-grow  属性 </h3>
          <pre>
flex-grow   放大比例,属性指定了 flex 元素的放大规则,数值越大，盒子的宽度越大
flex-shrink 缩小比例,属性指定了 flex 元素的收缩规则,数值越大，盒子的宽度越小，前提是还得设置了flex-basis，不然没有计算因子

举例 flex-grow
让第二个元素的宽度为其他元素的三倍大：
div:nth-of-type(1) {flex-grow: 1;}
div:nth-of-type(2) {flex-grow: 3;}
div:nth-of-type(3) {flex-grow: 1;}

举例 flex-shrink
#content {
  display: flex;
  width: 500px;
}
#content div {
  flex-basis: 120px;
  border: 3px solid rgba(0,0,0,.2);
}
div.box {
  flex-shrink: 1;
}
div.box1 {
  flex-shrink: 2;
}
          </pre>
          <h3>flex-basis 属性 </h3>
          <pre>设置弹性盒元素的长度为多少像素，flex-basis是可以单独设置指定宽度
#main div {
    flex-basis: 60px;
}

#main div:nth-of-type(2) {
    flex-basis: 100px;
}
CSS 语法
flex-basis: number|auto|initial|inherit;
number	一个长度单位或者一个百分比，规定灵活项目的初始长度。其他不介绍，用的不多   </pre>
          <h3>order 属性 </h3>
          <pre>设置弹性盒对象元素的顺序，如果元素不是弹性盒对象的元素，则 order 属性不起作用，感觉用的不多，谁没事重置循序
格式.container  div.item1{
     order: 3;
   }
   .container  div.item2{
     order: 2;
   }
   .container  div.item3{
     order: 1;
   }
CSS 语法
order: number|initial|inherit;
number	默认值是 0。规定灵活项目的顺序</pre>
          <h3>align-self 属性 </h3>
          <pre>align-self 属性定义flex子项单独在侧轴（纵轴）方向上的对齐方式。
注意：align-self 属性可重写灵活容器的 align-items 属性
格式.container  div.item{
    align-self: auto|stretch|center|flex-start|flex-end|baseline|initial|inherit;
}
其实就是单独指定某一个元素的侧轴方向的对齐方式
属性值
stretch       元素被拉伸以适应容器，类似height为100%
center        元素位于容器的中心。
flex-start	  y轴上对齐，元素位于容器的开头，弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。
flex-end      end侧开始，下对齐，元素位于容器的结尾，弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。
baseline      元素位于容器的基线上。          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'linefeed',
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

</style>
