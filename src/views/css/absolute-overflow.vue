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
            1、让position:absolute超出div溢出隐藏
          </h3>
          <pre>
通常，为了让DIV子元素超出部分隐藏，都是在父元素设置overflow:hidden，这样即可防止子元素撑开父元素，使子元素能够溢出隐藏！但是，对于position:absolute定位的子元素，仅仅使用overflow:hidden没办法将其溢出部分隐藏，需要在父元素上也加上一个定位position:relative;才能将含有 position:absolute属性的子元素进行溢出隐藏！
&#60!DOCTYPE html>
&#60html>
&#60head>
&#60title>父元素中有overflow:hidden, 子元素absolute不能显示&#60/title>
&#60style>
    .parent{
      height:40px;
      width:200px;
      border:solid 1px black;
      position:relative;
    }
    .sub{
      position:absolute;
      top:10px;
      left:10px;
      height:100px;
      width:100px;
      background-color:red
    }
    .overHidden{
      overflow:hidden; /* 会隐藏position:absolute的子元素,但前提是.parent有position:relative; */
    }
&#60/style>
&#60/head>
&#60body>
  这个是有overflow:hidden
  &#60div class="parent overHidden">
  &#60div class="sub">&#60/div>
  &#60/div>
  这个没有
  &#60div class="parent">
  &#60div class="sub">&#60/div>
  &#60/div>
&#60/body>
&#60/html>
感觉同时使用overflow:hidden和position:absolute是存在问题的，如果想让position:absolute隐藏就给父元素设置position:relative;那你使用绝对定位干嘛，想让他溢出那你让他隐藏干嘛，如果不设置position:relative吧，绝对定位就可能没有了参照点，定位可能不准         </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'absolute-overflow',
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
  table.dataintable {
    margin-top: 15px;
    border-collapse: collapse;
    border: 1px solid #aaa;
    width: 100%;
    margin-bottom: 15px;
  }
  table.dataintable tr:nth-child(odd) {
    background-color: #F5F5F5;
  }
  table.dataintable tr:nth-child(even) {
    background-color: #fff;
  }
  table.dataintable th {
    vertical-align: baseline;
    padding: 5px 15px 5px 6px;
    background-color: #3F3F3F;
    text-align: center;
    color: #fff;
    border: 1px solid #aaa;
  }
  table.dataintable td {
    vertical-align: text-top;
    padding: 6px 15px 6px 6px;
    border: 1px solid #aaa;
    text-align: left;
  }
</style>
