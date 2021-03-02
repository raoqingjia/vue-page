<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1.关于这个插件
          </h3>
          <pre>
效果图：
<img src="../../img/mobileSelect.jpg" style="width: 250px">
github中文地址 https://github.com/onlyhom/mobileSelect.js/blob/master/docs/README-CN.md          </pre>
          <h3>2.关于参数</h3>
        <pre>
1）要给插件的确定按键添加自定义事件一定要写在callback中
2）wheels数组中的对象中的key值一定是id，value不然插件不识别
3）position对应的是wheels数组中的下标值
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mobileSelect',
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
