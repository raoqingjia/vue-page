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
第一种理解
h5 一般指的是包括以下三类特性的Web应用：1、通过社交网络传播；2、通过移动端体验；3、轻功能而重体验的小品级应用。包括HTML5、CSS3、JavaScript这一系列技术中比较前沿的应用的“集合”。

第二种理解
html5 HTML（HyperText Mark-up Language）即超文本标记语言或超文本链接标示语言，是目前网络上应用最为广泛的语言，也是构成网页文档的主要语言。HTML5是HTML的第五个版本。
H5是html5的简称，是新一代html版本，现在是html5.1 ，html5.2在开发中。h5较html4来说新增了很多移动端特性，所以很适合移动端开发，主要体现在一些媒体功能，视频画布等。

H5的最显著的优势在于跨平台性，用H5技术可以兼容PC端与移动端、Windows与Linux、安卓与IOS。它可以轻易地移植到各种不同的开放平台、应用平台上，打破各自为政的局面  </pre>

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
