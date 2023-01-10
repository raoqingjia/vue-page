<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>数据库建表有两种方式，横表和竖表
纵表，一个id一行数据
横表示例:
<p class="language-bg">uid	Chinese	 Math	English
aaa     90	 70	90</p>
横表的优点：横标优点显示清晰直观，同时在字段的选择上更为科学合理，具体的字段可以根据具体情况划分字段类型。
横表的缺点：不方便扩展和公用，也就是说设计了一张横标，只能在固定的某一种特定的相对不变的场景下使用，比如加字段，或者类似的业务想公用一张横表，都有局限。

纵表，一个id多行数据，类似把横表的一行记录拆成多行
纵表示例:
<p class="language-bg">uid	  filedName  	filedValue
aaa 	  Chinese    	80
aaa 	  Math	        80
aaa	  English   	90</p>
竖表的优点：最大的特点是可以灵活扩展存储的内容，同时具有一定的公用性。因为竖表的存储结构不受字段个数的限制，可以存储具有一定共性的业务数据。
竖表的缺点：竖表的字段类型要兼容，比如横表可以根据具体的值设计成varchar，decimal，datetime等，竖表为了兼容以上字段类型，只能设计成varchar的，可能会浪费一定的空间。</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'indirectTabVerticalTab',
        data() {
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
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
