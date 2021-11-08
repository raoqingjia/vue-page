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
使用promise调取接口数据渲染到前端页面的时候浏览器控制台报错误：
ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'name' of undefined
因为在我们加载对象的时候，用的是异步模式，即使promise（表示异步）立刻被处理返回，但是浏览器在开始加载对象的时候，这个对象还是没有定义，所以也就读不到属性。
data?.name  和  data.name 的区别是什么？  加了一个 ？ 有什么作用。
就是对象为空时候不报错，本来这个报错是提示没对象，然后加了个？ 就是让他跳过这步检测。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getDate',
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
