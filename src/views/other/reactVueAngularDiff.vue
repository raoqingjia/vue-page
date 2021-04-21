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
一、在代码书写上的区别
Angular分为css html  ts  三区域样式js逻辑相互独立不至于一个页面来回切换
React  css可单独独立， render  和 jsx 都放在一个文件，而且 jsx还都放在render上方，不太好找对应方法
Vue 2.0 css template  options 都写在一个.vue文件中，一个页面来回跳  Vue3.0 有点类型Angular的写法了

二、在资料查询上
Angular 百度上相关案例和资料过少，好多还都停留再angular.js，好多内容都是git上提的issue之类的还都是英文，中文的资料和涉及的案例比较少
React   百度上相关案例和资料也不是很多
Vue     百度上案例和资料挺多的，国内用Vue还是中主流吧，毕竟是国人开发的，好多API也都是中文的，涉及Vue的中文框架也不少

三、框架渲染解析
React  jsx会被解析成js运行，React没有响应式，纯纯的vdom，计算diff，如果vdom树过大，计算会卡顿
Vue 响应式主动通知，虚拟dom被动计算，Vue根据组件划分，组件之间通过响应式通知，组件内部通过vdom计算dif

          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'colresizable',
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
