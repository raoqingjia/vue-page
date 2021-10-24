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
1、404、loading、数据加载失败、弹窗等公共组件的封装
2、util文件公共方法的封装
3、全局变量的封装
4、后台返回字段各个公用模块之间字段匹配的问题，尽量让各个服务应统一字段，这要前端可以统一封装报文拼接方法
5、一些接口联调发现问题如果不及时修改，非等后期问题升级再修改，就有可能造成前期已生成数据修复的问题
6、项目一开始一定要选一个版本稳定，成熟的UI框架
7、提单页面考虑重复提交问题
8、http请求封装提前封装好请求拦截器，后续为请求头加参数都靠拦截器这呢
9、http请求url路径根据后台服务模块生成响应的httpUrl的文件
10、一个后台http请求接口就单独封装一个方法，后续各个需要使用接口请求调取的地方之间使用这个方法
11、get请求和post提前封装好，最好将get也封装成post请求的方式，而且get请求候还要注意要不要加时间戳，有些get请求不需要被ie浏览器缓存，有些接口就是要被缓存
12、在判断中多用if加return的方式，少用else，因为用else后期有可能不容易扩展
13、打包部署考虑代码压缩、部署项目浏览器缓存问题
14、项目中用户信息存贮注意加密，尤其是存贮在session中的数据
15、页面中列表查询，每次更改查询条件查询的时候，最好把查询条件更新到浏览器url中，这样就算页面刷新，查询条件也不会清空
16、省市县联动考虑是让后台做成独立的省、市、县三个接口查询，还是做成tree树形接口
17、提单后为什么后台不存储枚举值，第一是因为入库数据量过大，第二十如果枚举值发生变化还要刷新历史数据
18、公共的css样式，和UI组件的重置样式分为单独的css文件</pre>
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
