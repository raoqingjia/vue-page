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
目前jquery版本可以分为三个大类
1.x：兼容ie678,使用最为广泛的，官方只做BUG维护，功能不再新增。因此一般项目来说，使用1.x版本就可以了，最终版本：1.12.4 (2016年5月20日)
2.x：不兼容ie678，很少有人使用，官方只做BUG维护，功能不再新增。如果不考虑兼容低版本的浏览器可以使用2.x，最终版本：2.2.4 (2016年5月20日)
3.x：不兼容ie678，只支持最新的浏览器。除非特殊要求，一般不会使用3.x版本的，很多老的jQuery插件不支持这个版本。目前该版本是官方主要更新维护的版本。

项目中还项目碰到过jquery版本被安全扫描出Jquery跨站脚本攻击漏洞，关于jquery跨站脚本的漏洞安全，下图中被圈出来的算是可以用的</pre>
          <img src="../../img/jqueryVersionSafe.jpg" alt="jquery安全版本" height="450" width="100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'trim',
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
