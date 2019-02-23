<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、当虚拟键盘弹出的时候，window的resize事件会被触发</h3>
          <pre>
因为focus事件将在resize事件前触发，监听input元素的focus事件，以及window的resize事件。当虚拟键盘弹出的时候，window的resize事件会被触发。
window.addEventListener('resize', function () {
  if (document.activeElement.tagName == 'INPUT'||document.activeElement.tagName == 'TEXTAREA') { //点击焦点聚在input或textarea
      window.setTimeout(function () {
         //document.activeElement.scrollIntoViewIfNeeded();
         alert("浏览器窗口发生变化")
       }, 300);
   }
})
测试结果：在body出现滚动条的情况下，在浏览器下软键盘显示隐藏Android下触发resize()事件(但是将h5嵌入到app中还是没能触发resize()事件)，iOS不会触发resize()事件；在整屏的情况，及body没有滚动条的情况下Android跟iOS下都不会触发
链接出处：
http://blog.51cto.com/dabaozi/1923321</pre>
          <p>点击验证:<input id="box" type="text"></p>
          <span>{{val}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keyboardEffectWindow',
    mounted(){
      this.$nextTick(function(){
        var _this=this;
        window.addEventListener('resize', function () {
          _this.val="浏览器窗口发生变化:"+$(window).height()+"px";
          if (document.activeElement.tagName == 'INPUT'||document.activeElement.tagName == 'TEXTAREA') {
            window.setTimeout(function () {
              //document.activeElement.scrollIntoViewIfNeeded();

            }, 0);
          }
        })
      })
    },
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        val:$(window).height()+"px"
      }
    },
    methods: {
      verifyOne(){
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
   h3{
     word-break:break-all; /*只对英文起作用，以字母作为换行依据*/
     word-wrap:break-word; /*只对英文起作用，以单词作为换行依据*/
     white-space:pre-wrap; /*只对中文起作用，强制换行*/
   }
</style>
