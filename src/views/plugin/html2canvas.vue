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
            canvas  绘制有高度要求，导出也有点模糊 和当前设备还有关系···，
            而且还不能出现横向滚动条，否则导出不全···，
            canvas截图是截的浏览器可视区域的
            高度设置14400px ,否则还会出现空白，
            导出word还行，挺好，pdf劝退；
          </pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'html2canvas',
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
