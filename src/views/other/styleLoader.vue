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
1.node-sass
其实之所以用到node-sass、是因为sass-loader的缘故。sass-loader 是将sass文件编译成css，而sass-loader又依赖于node-sass，所以需要安装node-sass
npm install node-sass --save-dev
2.sass-loader
加载sass/scss, 并且把sass/scss编译成css。而该loader依赖于node-sass。而node-sass依赖于node，所以要注意node-sass和node之间的版本支持
npm install sass-loader --save-dev
3.style-loader
将 JS 字符串生成为 style 节点、将样式插入到style标签
npm install style-loader --save-dev
4.css-loader
将 CSS 转化成 CommonJS 模块，例如url转为require等
 </pre>
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
