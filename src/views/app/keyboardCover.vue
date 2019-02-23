<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、使用scrollIntoView、scrollIntoViewIfNeeded</h3>
          <pre>
① var box=document.getElementById("box"); //输入框所在的模块
  $("#input").focus(function(){
    var _this=$(this)
    setTimeout(function(){
      box.scrollIntoView(true);
      box.scrollIntoViewIfNeeded();
    },300)
  });
② var inputs = document.getElementsByTagName("input");
for (var i = 0; i< inputs.length; i++) {
    inputs[i].onclick = function (e) {
        window.setTimeout(function () {
            e.target.scrollIntoView(true);
            e.target.scrollIntoViewIfNeeded();
        }, 0);
    }
}
测试结果：在body有滚动条的情况下Android下成功，在ios下成功；但是body没有滚动条的情况下，及是整屏幕的情况下Android跟iOS下都失败</pre>
          <p>点击测试:<input id="box" @focus="verifyOne()" type="text"></p>
          <h3>2、利用滚动，屏幕高度判断</h3>
          <pre>
ios端$(‘body').scrollTop()会改变
android端$(window).height()会改变
在iOS下执行$('body').scrollTop(1000000)，这样由于整个body滚动到了最下面，输入框自然就看见了，但是pc端不管用
测试结果：Android下成功，在ios下失败，不太明白$('body').scrollTop(1000000)在IOS在下是怎样的一个执行机构</pre>
          <p>点击测试:<input id="input" @focus="verifyOne()" type="text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hideKeyCover',
    mounted(){
      this.$nextTick(function(){
        var box=document.getElementById("box");
            $("#box").focus(function(){
              var _this=$(this);
              setTimeout(function(){
                box.scrollIntoView(true);
                box.scrollIntoViewIfNeeded();
              },300)
            });
      })
    },
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      verifyOne(){
        console.log(1);
        var timer = null;
          clearInterval(timer);
          var index = 0;
          timer = setInterval(function() {
            if(index>5) {
              $('body').scrollTop(1000000);
              clearInterval(timer);
            }
            index++;
          }, 50)

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
