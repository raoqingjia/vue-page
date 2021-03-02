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
简单举例
 $("#btn1").on("myClick",function(){
   alert("btn1自定义事件");
});
$("#btn2").trigger("myClick");  // 点击btn2触发btn1的myClick事件

传递参数
trigger(tpye[,datea])方法有两个参数，第一个参数是要触发的事件类型，第二个单数是要传递给事件处理函数的附加数据，以数组形式传递。通常可以通过传递一个参数给回调函数来区别这次事件是代码触发的还是用户触发的。
$("#btn").bind("myClick", function (event, message1, message2) { //获取数据
    alert( message1 +"--"+ message2);
});
$("#btn").trigger("myClick",["我的自定义","事件"]); //传递两个数据

执行默认操作
trigger()方法触发事件后，会执行浏览器默认操作。例如：
$("input").trigger("focus");
以上代码不仅会触发为input元素绑定的focus事件，也会使input元素本身得到焦点（浏览器默认操作）。
如果只想触发绑定的focus事件，而不想执行浏览器默认操作，可以使用jQuery中另一个类似的方法-triggerHandler()方法。
$("input").triggerHandler("focus");
该方法会触发input元素上绑定的特定事件，同时取消浏览器对此事件的默认操作，即文本框指触发绑定的focus事件，不会得到焦点
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'trim',
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

</style>
