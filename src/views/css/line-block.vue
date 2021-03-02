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
            1.真正意义上的inline-block水平呈现的元素间，换行显示或空格分隔的情况下会有间距
          </h3>
          <article>
            <p>在line-block的父级元素中设置 :</p>
            <p>{ font-size:0; </p>
            <p> -webkit-text-size-adjust:none; }</p>
            <p>这个方法，基本上可以解决大部分浏览器下inline-block元素之间的间距(IE7等浏览器有时候会有1像素的间距)。不过有个浏览器，就是Chrome, 其默认有最小字体大小限制，因为，考虑到兼容性，我们还需要添加：-webkit-text-size-adjust:none;</p>
            <p>对设置line-block的元素中设置   margin: 0 -4px; 这个方法不适合大规模使用</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'line-block',
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
