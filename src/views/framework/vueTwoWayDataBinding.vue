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

所谓的双向绑定可以理解为：
数据变化后更新视图
视图变化后更新数据

数据双向绑定包含两个重要的组成部分：
监听器 Observer ： 对所有的数据属性进行监听
解析器 Compiler ： 对每个元素节点的指令进行扫描和解析，根据指令替换数据，绑定对应的更新函数

具体的实现原理：
1.new Vue()执行初始化，对data通过Object.defineProperty进行响应化处理,为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化，这个过程发生在Observer中，每个key都会有一个dep实例来存储watcher实例数组
2.对模板进行编译时，v-开头的关键词作为指令解析，找到动态绑定的数据，从data中获取数据并初始化视图，这个过程发生在Compiler里，如果遇到了v-model，就监听input事件，更新data对应的数值
3.在解析指令的过程中，会定义一个更新函数和Watcher，之后对应的数据变化时，Watcher会调用更新函数，new Watcher的过程中会去读取data中的key，触发getter的依赖收集，将对应的Watcher添加到dep中
4.将来data中的数据一旦发生变化，会首先找到对应的dep，通知所有的watcher执行更新函数</pre>
          <img src="../../img/vueTwoWayDataBinding.jpg" alt="跨域截图" height="300px" width="800px">
          <pre>
上面的是比较直白的说法，下面是一些拓展不一定好理解
核心实现类:
Observer : 它的作用是给对象的属性添加 getter 和 setter，用于依赖收集和派发更新
Dep : 用于收集当前响应式对象的依赖关系,每个响应式对象包括子对象都拥有一个 Dep 实例（里面 subs 是 Watcher 实例数组）,当数据有变更时,会通过 dep.notify()通知各个 watcher。
Watcher : 观察者对象 , 实例分为渲染 watcher (render watcher),计算属性 watcher (computed watcher),侦听器 watcher（user watcher）三种
Watcher 和 Dep 的关系
watcher 中实例化了 dep 并向 dep.subs 中添加了订阅者,dep 通过 notify 遍历了 dep.subs 通知每个 watcher 更新。

依赖收集
initState 时,对 computed 属性初始化时,触发 computed watcher 依赖收集
initState 时,对侦听属性初始化时,触发 user watcher 依赖收集
render()的过程,触发 render watcher 依赖收集
re-render 时,vm.render()再次执行,会移除所有 subs 中的 watcer 的订阅,重新赋值。

派发更新
组件中对响应的数据进行了修改,触发 setter 的逻辑
调用 dep.notify()
遍历所有的 subs（Watcher 实例）,调用每一个 watcher 的 update 方法。

原理
当创建 Vue 实例时,vue 会遍历 data 选项的属性,利用 Object.defineProperty 为属性添加 getter 和 setter 对数据的读取进行劫持（getter 用来依赖收集,setter 用来派发更新）,并且在内部追踪依赖,在属性被访问和修改时通知变化。
每个组件实例会有相应的 watcher 实例,会在组件渲染的过程中记录依赖的所有数据属性（进行依赖收集,还有 computed watcher,user watcher 实例）,之后依赖项被改动时,setter 方法会通知依赖与此 data 的 watcher 实例重新计算（派发更新）,从而使它关联的组件重新渲染。

 一句话总结:
vue.js 采用数据劫持结合发布-订阅模式,通过 Object.defineproperty 来劫持各个属性的 setter,getter,在数据变动时发布消息给订阅者,触发响应的监听回调</pre>
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
