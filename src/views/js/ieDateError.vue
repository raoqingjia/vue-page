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
IE下面使用
var t = new Date(“2019-02-22”)
var t = new Date(“2019.02.22”)
转换会有问题
经查得知短横线格式的日期在IE下不支持这种转换，需要换成斜杠格式的日期，如：
var t = new Date(“2019/02/22”)这样就能成功。
可以使用正则把短横线替换成斜杠在做转换。
var t = new Date(“2019-02-22”.replace(/\-/g, '/');
var t = new Date(“2019.02.22”.replace(/\./g, '/');
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
