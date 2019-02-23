<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、单行文本的溢出显示省略号显示</h3>
           <pre>
css.{
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
           }</pre>
          <h3>
            2、多行文本溢出显示省略号显示
          </h3>
            <pre>
css.{
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
              }
注释：
-webkit-line-clamp用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
-webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式             </pre>
<div class="test-content test">
  多行文本溢出显示省略号显示多行文本溢出显示省略号显示多行文本溢出显示省略号显示多行文本溢出显示省略号显示。
</div>
<p>
  多行文本溢出显示省略号显示多行文本溢出显示省略号显示多行文本溢出显示省略号显示多行文本溢出显示省略号显示。
</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'overflow-omit',
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
.test-content{
  width: 200px;
  padding: 10px 15px;
  height: 80px;
  border-radius: 4px;
  border: 1px #CCCCCC solid;
  background-color: #ffffff;
}
  .test {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
p{
  position: relative;
  line-height: 20px;
  overflow: hidden;
  width: 200px;
  height: 160px;
  padding: 10px 15px;
  border-radius: 4px;
  border: 1px #CCCCCC solid;
  background-color: #ffffff;
}
p::after{content: "..."; position: absolute; bottom: 0; right: 0; padding-left: 40px;
  background: -webkit-linear-gradient(left, transparent, #fff 55%);
  background: -o-linear-gradient(right, transparent, #fff 55%);
  background: -moz-linear-gradient(right, transparent, #fff 55%);
  background: linear-gradient(to right, transparent, #fff 55%);
}
</style>
