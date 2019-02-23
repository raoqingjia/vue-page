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
            1. 执行时间不同
          </h3>
          <pre>
1）$(window).load()是当页面所有资源全部加载完成后（包括DOM文档树，css文件，js文件，图片资源等），执行一个函数。问题是：如果图片资源较多，加载时间较长，load后等待执行的函数需要等待较长时间，所以一些效果可能受到影响
2）$(document).ready()是当DOM文档树加载完成后执行一个函数 （不包含图片，css等）所以会比load较快执行，在原生的jS中不包括ready()这个方法，只有load方法就是onload事件
</pre>
        <h3>
           2. 可以被执行的次数不同
        </h3>
<pre>
$(document).ready()可以在JavaScript代码中出现多次，并且里面的函数或者代码都可以得到执行；而$(window).load()只能在JavaScript代码中出现一次，如果有多个$(window).load()，那么只有最后一个$(window).load()里面的函数或者代码才会执行，之前的$(window).load()都将被覆盖;
<p class="pre-cmd">$(document).ready(function(){
   alert("test1");//这段代码会被执行
});
$(document).ready(function(){
   alert("test2");//这段代码会被执行
});
$(window).load(function(){
   alert("test1");//这段代码不会被执行
});
$(window).load(function(){
   alert("test2");//这段代码将被执行
});
</p>
</pre>
          <h3>
            3. 执行的效率不同：
          </h3>
          <pre>
如要在dom的元素节点中添加onclick属性节点，这时用$(document).ready()就要比用$(window).load()的效率高；但是在某些时候还必须得用$(window).load()才行，例如页面初始化有一个下载弹窗，如果要关闭这个下载弹窗，则必须要在整个下载弹窗加载完毕后，才能点击关闭图标，对下载弹窗执行隐藏。其实就是不同场景下要考虑页面的加载关系！！
<p class="pre-cmd">$(document).ready(function(){
  $(".the_body a").attr("onclick","alert('test')");
});
$(window).load(function(){  //要等close_btn关闭图标显示之后你才能关闭啊
   $(".close_btn").click(function(){
      $("#app_down").hide();
   });
});</p>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'loadAndReady',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){
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

  li {
    list-style: none;
  }
  .box{
    width: 500px;
    margin: 0 auto;
    margin-top: 10px;
  }

  .box ul {
    height: 30px;
  }
  .box ul li{
    float: left;
    width: 100px;
    text-align: center;
    line-height: 30px;
    height: 30px;
    cursor: pointer;
  }
  .box>div{
    border: 2px yellowgreen solid;
    background-color: #bce8f1;
    height: 150px;
    width: 496px;
    display: none;

  }
  .active {
    background-color:silver;
  }
  .box .show{
    display: block;
  }
</style>
