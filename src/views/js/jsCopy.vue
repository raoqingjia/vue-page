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
            https://blog.csdn.net/zhenghhgz/article/details/106273496
            https://blog.csdn.net/weixin_36521716/article/details/94588622
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexOf',
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
