<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、利用css样式换行要先看是中文，英文，还是数字</h3>
           <pre>
word-break:break-all; /*只对英文起作用，以字母作为换行依据*/
word-wrap:break-word; /*只对英文起作用，以单词作为换行依据*/
white-space:pre-wrap; /*只对中文起作用，强制换行*/</pre>
          <h3>2、内容超过宽度显示省略号</h3>
           <pre>
white-space:nowrap;
overflow:hidden;
text-overflow: ellipsis;</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'linefeed',
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
