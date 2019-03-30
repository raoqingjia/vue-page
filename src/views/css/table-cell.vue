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
我介绍display:table-cell样式是因为我发现，在td标签中使用
{
  width:130px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
上述样式作用时强制超出文字...显示，但是它无效了;当将td标签的display:table-cell改为display:block;时强制超出文字换行就起作用了，这就让我很费解了！
<span>W3C中说明</span>
block	      此元素将显示为块级元素，此元素前后会带有换行符
table-cell	此元素会作为一个表格单元格显示（类似 td 和 th 标签）
W3C中说明感觉没深层器说明什么
下面时我自己从网上的汇总
display:table-cell属性指让标签元素以表格单元格的形式呈现，类似于td标签。目前IE8+以及其他现代浏览器都是支持此属性的，但是IE6/7只能对你说sorry了；
单元格有一些比较特别的属性，例如元素的垂直居中对齐，关联伸缩等，所以display:table-cell还是有不少潜在的使用价值的
与其他一些display属性类似，table-cell同样会被其他一些CSS属性破坏，例如float, position:absolute，所以，在使用display:table-cell与float:left或是position:absolute属性尽量不用同用。设置了display:table-cell的元素对宽度高度敏感，对margin值无反应，响应padding属性，基本上就是活脱脱的一个td标签元素了。
<span>table-cell垂直居中</span>
想要垂直居中，父级要设置display:table; 子级同时设置display:table-cell;vertical-align:middle;
子级中再设置text-align: center;水平居中就实现文字水平且垂直居中了</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'line-block',
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
