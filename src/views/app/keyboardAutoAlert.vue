<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、下面是测试案例，01 02 03已测试， 04待测试</h3>
          <pre>
① 刚刚进入页面时通过js执行focus()
     window.onload=function(){
        document.getElementById("test01").focus(function(){
            alert(1)
        });
     }
测试结果：Android下刚进入页面时下聚焦，弹出软件键盘达到效果，但是如果仅是刷新页面只出现聚焦，不弹出软键盘；IOS下没有光标，没有弹出键盘。

② 增加autofocus属性，无法弹出软键盘。
&#60input type="text" id="test02" autofocus value="点击我验证" @focus="verify02()">
测试结果：Android下刚进入页面时下聚焦，弹出软件键盘达到效果，但是如果仅是刷新页面只出现聚焦，不弹出软键盘；IOS下没有光标，没有弹出键盘。

③ 通过button点击执行focus()实现文本框聚焦且弹出软键盘
    document.getElementById("box").onclick = function(){
        document.getElementById("test03").focus();
    }
测试结果：Android下自动聚焦，弹出软键盘，在IOS下没有光标，没有弹出键盘

④ 利用trigge()方法，调用一次click()事件触发软键盘，再触发focus()让input聚焦;$("input").trigger("click").focus()
测试结果：Android下测试成功，刚进入页面时触发并聚焦，但是仅仅是刷新页面时只有聚焦，没有弹出软键盘，IOS下刚进入页面第一次点击出现软件盘但是没有聚焦，之后再次点击聚焦并且软键盘显示
          </pre>
 <p>测试4：<input type="text" id="test04" value="点击我验证"><button type="button" @click="verify01()">click</button></p>
<input type="text"  value="切换光标用">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'keyboardAutoAlert',
    mounted(){
      this.$nextTick(function(){

        $("#test04").trigger("click").focus();
      })
    },
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      verify01(){
        $("#test04").trigger("click").focus()
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
  button{
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    outline: none;
    margin-left: 5px;
    padding: 6px;
    color: #000;
  }
</style>
