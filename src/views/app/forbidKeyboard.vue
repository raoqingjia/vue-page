<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、在h5的项目中可能会碰到点击输入框是弹出自定义弹窗，而不是手机自带的虚拟键盘的需求</h3>
           <pre>
点击输入框分两种情况，一种情况是输入框是input标签的情况，一种情况输入框是利用span等标签模拟input输入框的情况，在移动端，input会默认触发手机的虚拟键盘，而模拟input标签的情况则不会触发虚拟键盘
下面我们就研究一下在点击input输入框的情况下如何禁止虚拟键盘
两种解决方法：
① 给input添加readonly属性
使用readonly方式来阻止虚拟键盘弹出应该是最简单最优雅的方式了。readonly 属性规定输入字段为只读。只读字段是不能修改的。不过，用户仍然可以使用 tab 键切换到该字段，还可以选中或拷贝其文本。值得一提的是它的取值，只要声明了readonly属性，不管取什么值都可以，比如readonly=""、readonly="readonly"、readonly="abc"都是一样的
测试结果：Android下成功，ios下失败
</pre>
<p>下面的input添加了readonly属性，测试虚拟键盘是否弹出</p>
<input type="text" value="点击测试虚拟键盘是否弹出" readonly="readonly">
<pre>
② 在点击input事件中添加一句document.activeElement.blur()。
先解释一下document.activeElement属性
activeElement 属性返回文档中当前获得焦点的元素。也就是告诉你用户点击了那个dom元素
注意：该属性是只读的。
提示：为元素设置焦点，可以使用 element.focus() 方法。
提示：可以使用 document.hasFocus() 方法来查看当前元素是否获取焦点。
那么document.activeElement.blur()为什么可以阻止虚拟键盘弹出呢？原因是：当你点击input的时候，document.activeElement获得了DOM中被聚焦的元素，也就是你点击的input，而调用.blur()方法，blur就是取消聚焦。获得聚焦的元素然后强制blur以达到没有聚焦的效果。
$("input").focus(function(){ document.activeElement.blur(); });
测试结果：在ios跟Android下成功
</pre>
<p>下面的input标签就是添加document.activeElement.blur();语句，点击测试是否有虚拟键盘弹出</p>
<input type="text" id="forbidKeyboard" @click="forbidKeyboard()"  value="点击测试虚拟键盘是否弹出">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'forbidKeyboard',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    methods: {
      forbidKeyboard(){
         document.activeElement.blur();
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    width: 220px;
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
  p{
    margin: 10px 0;
  }
</style>
