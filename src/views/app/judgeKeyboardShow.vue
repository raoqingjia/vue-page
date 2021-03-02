<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、利用scrollTop(),height()验证是否存在软键盘</h3>
           <pre>
弹出软键盘时：
① ios端$('body').scrollTop()会改变  如果是不存在滚动条可以这样验证，如果已经存在滚动条该怎么办
② android端$(window).height()会改变
③ 注意：拉起键盘不是瞬间出现的，而是有个缓动过程；
测试结果：ios端$('body').scrollTop()会改变；android端$(window).height()会改变
$('body').scrollTop()------{{scrollTop}}
$(window).height()------{{windowHeightH}}
点击下面的input验证</pre>
          <input type="text" value="点击我验证" @focus="verifyOne()">
          <h3>2、监听input失焦blur</h3>
          <pre>
因为ios的第三方键盘可能并不会导致window resize，所以不能用resize监听，但是可以通过输入框是否获取焦点来判断;（在android中，点击键盘上的收起按钮，键盘虽然收起了，输入框仍然处于焦点状态，并没有触发focusout事件,focusin和focusout支持冒泡，对应focus和blur, 使用focusin和focusout的原因是focusin和focusout可以冒泡，focus和blur不会冒泡，这样就可以使用事件代理，处理多个输入框存在的情况。（这个视情况而定）
$(document).on('focusin', function () {
　　//软键盘弹出的事件处理
});
$(document).on('focusout', function () {
　　//软键盘收起的事件处理
});
测试结果：Android下键盘收起，输入框仍然处于焦点状态，并没有触发focusout事件，没法判断键盘的显示与隐藏;在IOS下测试成功，点击输入框时触发focusin，软键盘收入input失去聚焦，触发focusout</pre>
          <input type="text"  id="verifyTwo" value="点击我验证" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'judgeKeyboardShow',
    mounted(){
      this.$nextTick(function(){
        $(document).on('focusin', function () {
          //软键盘弹出的事件处理
          $("#verifyTwo").val("软键盘弹出")
        });
        $(document).on('focusout', function () {
          //软键盘收起的事件处理
          $("#verifyTwo").val("软键盘收起")
        })
      })
    },
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        scrollTop:$('body').scrollTop(),
        windowHeightH:$(window).height(),
        softInputMode:"",
        unspecifide:"",
        hidden:""
      }
    },
    methods: {
      verifyOne(){
        var _this=this;
        setTimeout(function(){
          _this.scrollTop=$('body').scrollTop();
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
