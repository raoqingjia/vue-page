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
作用是在vue项目中，经常需要使用如elementUI等组件库，但是直接elementUI组件的样式加载循序在style.css之后，有些样式只能直接在组件中修改,但是直接使用css父子选择器修改改还不起作用，这时候就要使用深度选择器

1)样式穿透的前提是在style中加< style scoped>
scoped的解释是 Add "scoped" attribute to limit CSS to this component only 翻译是添加“scoped”属性来限制CSS只在这个组件中
这是因为在加了 scoped 之后样式会自动添加一个hash值
例如未加scoped之前组件根元素是< div data-v-14e4fede class="dh-wrap clearfix">
加了之后< div data-v-08fe830c  data-v-14e4fede class="dh-wrap clearfix"> 多了个data-v-08fe830c

2)有些css预处理器，比如Sass, Less，可能无法正确解析 >>>，这种情况下，可以使用/deep/ 或::v-deep代替

3)例如，改变elementui中的日期组件样式
.dh-wrap /deep/ .el-input__inner{
   height: 30px;
   line-height: 30px;
   width: 150px;
   background: #192b4f !important;
   border: 1px solid #192b4f !important;
   color: @fontColor !important;
 }

4)用法
>>>  使用的是css原生样式，那么可以直接使用 >>> 穿透修改
.a >>> .b {

}
/deep    注意：vue-cli3以上版本不可以
.a {
 /deep/ .b {
 }
}
.a /deep/ .b {

}
::v-deep  使用了预处理器都可以使用 ::v-deep
.a{
::v-deep .b{
  }
}
a ::v-deep .b{

}</pre>
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
