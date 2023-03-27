<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>插槽简单理解：一个坑一个萝卜，（坑）插槽组件准备好，坐等（萝卜）html结构放到组件中间进去</pre>
          <h3>Vue插槽＜slot＞的理解与使用</h3>
          <p></p>
          <pre>默认插槽
一个slot里面是可以放入多个html标签结构的。
<p class="pre-cmd"> 1)第一种情况，父组件内子组件标签没有html结构的情况
//子组件代码
< template>
  < div class="category">
      < h3>{ {title}}推荐< /h3>
      < slot>定义插槽，此处如果没有html结构，默认展示此文字< /slot>
  < /div>
< /template>
// 父组件代码
< template>
  < div class="container">
    < Category title="美食">< /Category>
  < /div>
< /template>

2) 第二种情况，父组件内子组件标签有html结构的情况
//子组件代码
< template>
  < div class="category">
      < h3>{ {title}}推荐< /h3>
      < slot>定义插槽、此处如果没有html结构，默认展示此文字< /slot>
  < /div>
< /template>
// 父组件代码
< template>
  < div class="container">
    < Category title="美食">
      < img src="./assets/美食.jpg" alt="">
    < /Category>
  < /div>
< /template></p>
具名插槽
使用方式：在默认插槽的基础上，给每个定义的插槽添加一个名字属性name，使用的时候需要在对应html标签内添加slot=“名字属性值”。如果插槽有名字，html标签使用时不加上这个属性值不会报错，不会显示相应的内容；如果使用了template标签可以使用v-slot：属性值来绑定到对应插槽。

            <code class="language-js line-numbers">

            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Prism from "prismjs";
  export default {
    name: 'componentCardSolt',
    data() {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
      })
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
