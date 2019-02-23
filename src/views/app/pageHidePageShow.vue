<template>
  <div class="article inner" id="pageShow">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
           <h3>1、jQuery Mobile pageshow事件、pagehide事件</h3>
          <pre>
①  pageshow事件、pagehide事件
pageshow 是在页面切换后显示之后，触发的事件
pagehide 是在页面切换后老页面隐藏之后，触发的事件。
例如：
$(document).on("pageshow","#pagetwo",function(){
  alert("pageshow 事件触发 - 展示页面二");
});
② 扩展
为所有页面触发事件:
$("document").on("pagehide",function(event){...})
为指定页面触发事件：(像vue这种单页面组件模板类就该指定页面)
$("document").on("pagehide","page",function(event,data){...})
function(event,data)指定事件触发时执行的函数
事件对象 - 包括任何jQuery事件属性 ( event.target, event.type 等) 。
数据对象 - 包含属性 nextPage, 要返回的过渡页面。
page指定事件触发时指向的页面id。
内部页面, 请使用 #id。外部页面，请使用 externalfile.html。
pagebeforeshow - 在页面切换后显示之前，触发的事件。
pagebeforehide - 在页面切换后老页面隐藏之前，触发的事件。</pre>
          <h3>2、在移动端浏览多个页面，其他非浏览状态页面会被浏览器缓存起来，包括DOM和JS，前进和回退的时候页面是不会刷新的</h3>
           <pre>
有这样一个场景：
    一个购物车页面，用户提交表单开始支付，支付完成进入成功提示页面，web移动端中进入成功提示页后，用户点击浏览器自带的回退按钮会发生什么那？结果会回到刚刚的订单提交页面，这就不合理了，这个订单已经被提交了，已经成历史了，怎么能回到提交页面呢！在pc端，浏览多个页面，点击浏览器回退前进按钮，页面都会刷新，但是在移动端浏览器上，浏览多个页面，其他非浏览状态页面会被浏览器缓存起来，包括DOM和JS，前进和回退的时候，不会产生新的交互，也就是页面不会刷新，想在页面监听load的同学可歇歇了；网上也有类似的插件，监听浏览器行为的，但是有兼容问题；利用history对象的更改来控制页面，效果也不理想；最终的解决方式是通过监听页面pagehide和pageshow事件来做其他的操作，使得用户要回退到已失效的订单提交页面会发生跳转到其他提示页面，
$(document).on("pageshow",function(){
  //some code in here...
});
捕获到本页面pageshow事件后，检查此表单是否被提交过，然后做相应的操作。这样就解决移动web中页面前进回退无法重新run js的问题了。           </pre>
          </p>
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
        //生成uuid
//        var uuidChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
//        function uuid() {
//          var r;
//          var uuid = [];
//          uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
//          uuid[14] = "4";
//          for (i = 0; i < 36; i++) {
//            if (!uuid[i]) {
//              r = 0 | Math.random() * 16;
//              uuid[i] = uuidChars[(i == 19) ? (r & 0x3) | 0x8 : r];
//            }
//          }
//          return uuid.join("");
//        }
//        // 兼容 android
//        history.replaceState(null, null, "/currentURL?a="+uuid());
//        // 兼容 ios
//        $(function () {
//          var isPageHide = false;
//          window.addEventListener('pageshow', function () {
//            if (isPageHide) {
//              window.location.reload();
//            }
//          });
//          window.addEventListener('pagehide', function () {
//            isPageHide = true;
//          });
//        })
        var pageshow=document.getElementById("pageShow")
        pageshow.addEventListener('pageshow', function () {
         alert(1)
        });
        pageshow.addEventListener('pagehide', function () {
          alert(0)
        });
        $("document").on("pageshow","#pageShow",function(event,data){
          alert(true)
        })

        $("document").on("pagehide","#pageShow",function(event,data){
          alert(false)
        })

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
