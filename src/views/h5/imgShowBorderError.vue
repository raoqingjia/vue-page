<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <img src="../../img/imgShowBorderError.png" alt="错误显示信息" height="250px" width="80%">
          <img src="../../img/imgShowBorderErrorCode.jpg" alt="问题代码" height="150px" width="80%">
           <pre>
< img/>在src加载失败或没有给的，浏览器会自动给img加上边框。
img[src=""]{
opacity: 0;
}
可以在src为空的时候隐藏，动态添加以后img就会出现。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'h5historyApi',
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
