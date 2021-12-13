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
vue周期函数一共8个
beforeCreate、created、beforeMounted、mounted beforeUpdate、updated beforeDestroy、destroyed

先理解什么事钩子函数
钩子函数用来描述一个组件从引入到退出的全过程中的某个过程，整个过程称为生命周期。
钩子函数按照组件生命周期的过程分为，挂载阶段=>更新阶段=>销毁阶段。

每个阶段对应的钩子函数
挂载阶段：beforeCreate、created、beforeMounted、mounted
更新阶段：beforeUpdate、updated
销毁阶段：beforeDestroy、destroyed

父子组件钩子函数在三个阶段的代码执行顺序
挂载：父亲created> 子created > 子mounted> 父亲mounted>
更新：父亲beforeUpdate > 子beforeUpdated > 子updated > 父亲updated
销毁：父亲beforeDestroy> 子beforeDestroy > 子destroyed> 父destroyed

每个阶段特点与适合做什么
beforeCreat data还未生成
created：实例创建完成，data生成，el还未生成，可访问data、computed、watch、methods上的方法和数据，未挂载到DOM，不能访问到el属性，el属性，ref属性内容为空数组常用于简单的ajax请求，页面的初始化
beforeMount：el生成，data还未挂载，在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数
mounted：el实例挂载到DOM上，此时可以通过DOM API获取到DOM节点，$ref属性可以访问常用于获取VNode信息和操作，ajax请求
beforeupdate：响应式数据更新时调用，发生在虚拟DOM打补丁之前，适合在更新之前访问现有的DOM，比如手动移除已添加的事件监听器
updated：虚拟 DOM 重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作避免在这个钩子函数中操作数据，可能陷入死循环
beforeDestroy：实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例，常用于销毁定时器、解绑全局事件、销毁插件对象等操作
</pre>
          <h3>延伸阅读</h3>
          <pre>$el指的是获取Vue实例关联的DOM元素，el: '#app'表示该Vue实例将挂载到< div id="app">...< /div>这个元素上，
var app   = new Vue({
    el:"#app",    // 这里
    data:{
            msg:"hello,2018!"
    },
    address:"长安西路"
})
$el 用于获取vue挂载的实例的dom对象，在mounted生命周期中才有效。
 mounted(){
    // this.$el只在mounted中才有效
  console.log(this.$el);//打印这个vue组件的dom对象
  this.$el.style.color = "red"
}

          </pre>
          <h3>Vue生命周期流程图</h3>
          <img src="../../img/vue-lifecycle01.png" width="600px" height="1000px">
          <img src="../../img/vue-lifecycle02.png" width="900px" height="500px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
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
