<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、猜想弹出键盘导致浏览器的高度被压缩</h3>
           <pre>
代码验证
document.documentElement.clientHeight
document.body.clientHeight
window.innerHeight
$(window).height();
changeH(){
  var _this=this;
  setTimeout(function(){
    _this.documentElementH=document.documentElement.clientHeight;
    _this.bodyH=document.body.clientHeight;
    _this.innerHeightH=window.innerHeight;
    _this.windowHeightH=$(window).height();
  },1000)
}
</pre>
<p>下面案例在pc端测试无效，要在手机端测试</p>
<input type="text" value="点击我触发软键盘事件" @focus="changeH()">
<p >document.documentElement.clientHeight-----{{documentElementH}}px</p>
<p style="margin-top: 10px">document.body.clientHeight-----{{bodyH}}px</p>
<p style="margin-top: 10px">window.innerHeight-----{{innerHeightH}}px</p>
<p style="margin-top: 10px">$(window).height()-----{{windowHeightH}}px</p>
<pre>
测试结果
<img src="../../img/keyboardEffectHigh.jpg">
结论：Android下键盘的显示隐藏可以通过$(window).height()去判断（前提body不是整屏的情况），ios的显示隐藏无法通过高度去判断
</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keyboardEffectHigh',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        documentElementH:document.documentElement.clientHeight,
        bodyH:document.body.clientHeight,
        innerHeightH:window.innerHeight,
        windowHeightH:$(window).height()
      }
    },
    methods: {
      changeH(){
        var _this=this;
        setTimeout(function(){
          _this.documentElementH=document.documentElement.clientHeight;
          _this.bodyH=document.body.clientHeight;
          _this.innerHeightH=window.innerHeight;
          _this.windowHeightH=$(window).height();
        },1000)
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }

</style>
