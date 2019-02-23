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
            text-indent的作用是让每个段落首行开头文字缩进，如缩进2个文字距离样式
          </h3>
          <h3>1、text-indent缩进语法与结构</h3>
          <article>
            <p>.divcss5{text-indent:25px}这里divcss5对象内段落首行开头文字缩进了25像素。css text-indent文本缩进样式属性单词，text-indent的值跟数字+单位组成缩进样式。</p>
          </article>
          <h3>
            2、css段落段首文字缩进案例
          </h3>
          <article>
            <p>
              通常text-indent缩进属性将对段落首行开头文本文字进行缩进显示。如果使用html br换行标签，第二个换行开始也不会出现缩进效果。
              如果使用了html P段落标签段落换行，将会出现每个p段落换行开头都将缩进，这里我们给大家通过案例演示给大家，
              希望通过DIVCSS5案例掌握CSS text-indent缩进样式。
              <img src="../../img/text-indent.jpg"/>
            </p>
          </article>
          <h3>
            3、首行段落文字缩进text-indent总结
          </h3>
          <article>
            <p>我们要让每段文字开头缩进，并且可以控制缩进距离我使用text-indent缩进单词。如果不想使用text-indent样式进行缩进，我可以使用空格来实现，但需要多打几个html空格字符“&nbsp;”实现空格字符占位缩进，你可以详细了解html多空格字符应用。</p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'text-indent',
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
