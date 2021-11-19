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
所谓的双向绑定建立是基于MVVM的模型基础上的：
数据层 Model ： 应用的数据以及业务逻辑
视图层 View ： 应用的展示效果，各类的UI组件等
业务逻辑层 ViewModel： 负责将数据和视图关联起来

所谓的双向绑定可以理解为
数据变化后更新视图
视图变化后更新数据

数据双向绑定包含两个重要的组成部分
监听器 Observer ： 对所有的数据属性进行监听
解析器 Compiler ： 对每个元素节点的指令进行扫描和解析，根据指令替换数据，绑定对应的更新函数

具体的实现原理
1.new Vue()执行初始化，对data通过Object.defineProperty进行响应化处理，这个过程发生在Observer中，每个key都会有一个dep实例来存储watcher实例数组
2.对模板进行编译时，v-开头的关键词作为指令解析，找到动态绑定的数据，从data中获取数据并初始化视图，这个过程发生在Compiler里，如果遇到了v-model，就监听input事件，更新data对应的数值
3.在解析指令的过程中，会定义一个更新函数和Watcher，之后对应的数据变化时，Watcher会调用更新函数，new Watcher的过程中会去读取data中的key，触发getter的依赖收集，将对应的Watcher添加到dep中
4.将来data中的数据一旦发生变化，会首先找到对应的dep，通知所有的watcher执行更新函数</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vueTwoWayDataBinding',
    data () {
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
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
