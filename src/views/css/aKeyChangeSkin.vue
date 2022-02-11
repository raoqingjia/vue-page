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
先说几个思路
1）js 内联样式
逐个修改，若要全范围修改，工作量大；
代码看起来很挫；
js无法修改:hover等伪元素/伪类的样式。
2)element-ui 换肤
基于有特定的配色方案，可通过js形成新的配色方案
但我们的配色方案没有遵循一定的规则，无法精确查找与替换。
而且切换的颜色更改的区域多半只有头部导航，侧边栏，背景色这种主体部分更改，效果不够出彩
而且页面主体颜色没做状态保持，页面一刷新颜色就成为初始颜色了
3) css variables
ie不兼容，如果只是移动端用开凑合
本网站案例
theme.less
/*默认高亮*/
:root {
  --color: #222;
  --background-color: #fff;
}
/*判断文档根对象上是否存在 user-color-scheme 属性，其是否有值为 dark ，若有则执行 .dark-variable 里定义的样式*/
[user-color-scheme='dark'] {
  --color: #fff;
  --background-color: #000;
}
header{
  background-color: var(--background-color) !important;
}
header ul li a{
  color:var(--color)!important;
}
.art-content pre {
  color:var(--color) !important;
  background-color: var(--background-color) !important;
}

js  代码
setSkinFun(){
  if(this.setSkin.code === 'light'){
    this.setSkin.code = 'dark';
    this.setSkin.value = '暗夜';
  }else{
    this.setSkin.code = 'light';
    this.setSkin.value = '高亮';
  }
  document.body.setAttribute('user-color-scheme', this.setSkin.code);
},


https://juejin.cn/post/6844904122643120141
https://juejin.cn/post/6844904142306017294
https://juejin.cn/post/7063010855167721486
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'absolute-overflow',
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
