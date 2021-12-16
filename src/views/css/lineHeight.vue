<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>line-height指的是基线之间的距离</pre>
          <img src="../../img/css/lineheight01.png" height="350px" width="750px">
          <pre>当line-height再变大时，变大的不仅仅是基线，行距也在跟着变化，行距 = line-height - font-size; 半行距 =（line-height - font-size）/2</pre>
          <img src="../../img/css/lineheight02.png" height="350px" width="750px">
          <pre>line-height与font-size数值大小之间的对比效果</pre>
          <img src="../../img/css/lineheight05.png" height="350px" width="750px">
          <pre>line-height的垂直居中与height密切相关</pre>
          <img src="../../img/css/lineheight03.png" height="350px" width="750px">
          <img src="../../img/css/lineheight04.png" height="350px" width="750px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'linefeed',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
