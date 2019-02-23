<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>先看图说问题</h3>
          <pre>
<img src="../../img/z-index02.jpg">
<img src="../../img/z-index01.jpg">
① 第一张图是问题alert区的遮罩层没有覆盖header，主要是应为z-index的设置问题
② 先说一下位置区域
红色是header区    绿色是page-content (我在图上没有标出)    蓝色是siderbar
黄色是left-conten（类名起的不太对，凑合用）    黑色是弹出层alert
③ html结构如下
<p class="pre-cmd">&#60body>
  &#60header>头部&#60/header>
  &#60div class="page-content">
    &#60div class="sidebar">侧边栏&#60/div>
    &#60div class="left-content">
      &#60div class="alert">
        &#60div class="cover">&#60/div>
        &#60div class="text">弹出框内容&#60/div>
      &#60/div>
    &#60/div>
  &#60/div>
&#60/body></p>
④ css样式
<p class="pre-cmd">.header-navbar{
  position: fixed;
  top:0;
  left:0;
  z-index: 1000;
  width: 100%;
  height:60px;
}
.sidebar{
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 260px;
}
.left-content{
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  z-index: 10;
  width: 83%;
}
.alert .cover {
  z-index:2000;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  background:#444;
  background:rgba(4,4,4,0.5);
  filter:alpha(opacity=80);
  clear:both;
}
.alert  .text{
  width: 70px;
  height: 70px;
  margin: 200px auto;
  position: relative;
  z-index: 2001;
  border: 5px solid #0099e6;
  border-left-color: #ddd;
  border-radius: 50px;
  animation: load-animate 1s linear infinite;
  -webkit-animation:load-animate 1s linear infinite;
  -ms-animation: load-animate 1s linear infinite;
} </p>
⑤问题解析
简单说一下css
header z-index : 1000   sidebar z-index : 10  left-conten  z-index : 10  cover  z-index : 2000
为什么 .cover的z-index的值大于header的值，但是却不能将header覆盖呢
如果简单的说就是因为.cover的父级left-content的z-index的值小于header，如果将header的z-index值修改成10就好了
header z-index : 1000 一开始为什么设置的这么大呢，是为了实现头部区域固定不随滚动条滚动效果
如果将header sidebar  left-content 的z-index都设成一样，这时候要注意：这时候滚动条就不是加在body上了是单独加给sidebar  left-content，让二者内容自行滚动。</pre>
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
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{

}
</style>
