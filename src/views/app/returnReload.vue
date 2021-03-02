<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、背景描述</h3>
          <pre>
用户点击浏览器工具栏中的后退按钮，或者移动设备上的返回键时，或者JS执行history.go(-1);时，浏览器会在当前窗口“打开”历史纪录中的前一个页面。不同的浏览器在“打开”前一个页面的表现上并不统一，这和浏览器的实现以及页面本身的设置都有关系。在移动端HTML5浏览器和webview中，“后退到前一个页面”意味着：前一个页面的html/js/css等静态资源的请求（甚至是ajax动态接口请求）根本不会重新发送，直接使用缓存的响应，而不管这些静态资源响应的缓存策略是否被设置了禁用状态。“后退刷新”的目标是浏览器在后退返回到前一个页面时，能从server端请求到一个全新的的页面内容（即status code 200 ok或status code 304 not modified的页面响应，而不是status 200 from cache根本不向server端请求）进行加载展示并重新执行JS代码。</pre>
          <h3>2、JS监听pagehide/pageshow来阻止页面进入bfcache/page cache，或者监测到页面从bfcache/page cache中加载展现时进行刷新   </h3>
           <pre>
history.go(-1); 仅仅适用于返回页面，相当于浏览器后退按键
Android 中回退会刷新页面  ios中不会刷新页面,要设置手动刷新页面
window.onpageshow = function(e) {   //返回页面刷新的回调函数
   var a=e||window.event;
  if (a.persisted) {    //true 页面是从浏览器缓存里调出来的
      window.location.reload();   // or
      window.location.refresh();
  }
};
相关文档：https://www.cnblogs.com/xxcanghai/articles/5550204.html
</pre>

          <h3>3、后退时表单控件用户输入内容</h3>
          <pre>
后退时，有些浏览器还会把表单控件中用户输入内容给记录并恢复。可以通过给form或者input添加autocomplete="off"属性解决。
① form中没有input[type=password]，autocomplete="off"将起作用
② 去掉form，设置input[type=text]的autocomplete也起作用</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'returnReload',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){
            alert("页面初始化")
      })
    },
    methods: {

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
  p{
    margin: 10px 0;
  }
</style>
