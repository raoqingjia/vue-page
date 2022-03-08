<template>
  <div class="base inner">
    <div class="content">
      <h2>2021年</h2>
      <ul class="clearfix plan-li">
        <li>前端异常信息监控</li>
        <li>JavaScript语言精粹阅读</li>
        <li>flex解析</li>
        <li>Vue全家桶+SSR+Koa2全栈开发美团网</li>
        <li>Babel笔记记录</li>
        <li>React笔记整理</li>
        <li>abs-web测试笔记整理</li>
        <li>CSS Grid 布局设置跨行、跨列和堆叠顺序</li>
        <li>在osdemo中使用nodejs搭建HTTP web服务</li>
      </ul>
      <h2>2022年</h2>
      <ul class="clearfix plan-li">
        <li>POI内存溢出的解决场景</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'project',
    components:{},
    data (){
      return {

      }
    },
    mounted() {

    },
    computed: {
      caseNav(){
        return this.$store.state.caseNav
      }
    },
    created(){
      // this.caseNav=this.$store.state.state;
    },
    methods: {
      urlFun(code){
        this.$router.push({path: "/list"});
        this.$store.commit('listTabFun_m', code)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plan-li li{
  float: left;
  width: 25%;
}
</style>
