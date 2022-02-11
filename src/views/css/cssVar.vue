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
CSS 语法
var(custom-property-name, value)
custom-property-name	 必需。自定义属性的名称，必需以 -- 开头。
value    	可选。备用值，在属性不存在的时候使用。
使用 var() 函数调用多个自定义的值：

:root {
  --main-bg-color: coral;
  --main-txt-color: blue;
  --main-padding: 15px;
}

#div1 {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);
  padding: var(--main-padding);
}
#div2 {
  background-color: var(--main-bg-color);
  color: var(--main-txt-color);
  padding: var(--main-padding);
}
类似less中的 @ 定义变量 ， scss中的$定义变量方式

css的var还得注意ie兼容性问题，其实现在都用框架搭建的项目不是用less就是用scss，感觉也都用不到var()了
但是也是有些需要注的地方，例如
// 错误写法
.test{
    --size: 20;
    font-size: var(--size)px;      // 这里的写法是错误，这样会读取成font-size:20 px,值的中间会多了一个空格，导致读取失败
}
// 正确写法
.test2{
    --size: 20px;
    --size2: 20;
    font-size: var(--size);
    font-size: calc(var(--size2) * 1px);
}
通过在:root定义的字段，就相当于css中的全局变量，可以在css中任意的样式中进行使用
:root{
    --size:20px;
}</pre>
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
