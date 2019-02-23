<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、history.back(-1)，history.go(-1)</h3>
           <pre>
一般作为返回按钮的简写方法
#&60a href="javascript :;" onClick="javascript :history.back(-1);">
history.back(-1)，history.go(-1)的返回上一页适合于PC端；history.back(-1)用于移动端返回时远远不够的，但是history.go(-1)在部分的机型中也无法实现返回功能，我知道的在华为的荣耀9，mate10中history.go(-1)就是失效的。</pre>
          <h3>2、document.referrer</h3>
          <pre>
① javascript中一个可以获取前一页面的URL地址的方法;
② document.referrer IE7都支持，它的兼容性比较高，Android 5.0开始支持，iOS都支持，PC端浏览器从IE7就开始支持了，兼容性没有什么大的问题。但是IE 会主动清除 referref 属性。在IE中用javascript做跳转，比如用window.location.href = “”;使用document.referrer就无法取到浏览器请求的HTTP referrer，因为IE清空了referrer。而其他主流浏览器Firefox和Chrome都会保留referrer，没办法，只好判断，如果是IE浏览器，就主动给它增加一个 referrer 。这样的原理就是给IE浏览器的页面偷偷加了个链接，然后自动点这个链接，于是referrer就能保留了
 复制代码
var url = 'http://www.jb51.net';
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || /MSIE(\d+\.\d+);/.test(navigator.userAgent))
{
    var referLink = document.createElement('a');
    referLink.href = url;
    document.body.appendChild(referLink);
    referLink.click();
}
else
{
    location.href = url;
}
if (typeof document.referrer === '') {   //利用这个判断是否指回登录页面比较不错
    // 没有来源页面信息的时候，改成首页URL地址
    $('.jsBack').attr('href', '/');
}
③ 说的这么好，but我不爱用它，返回事件用它获取前一个页面的路径还是有不少bug的
下面的场景无法获得 referrer 信息
1）直接在浏览器中输入地址
2）使用location.reload()刷新（location.href或者location.replace()刷新有信息）
3）扫码进入微信或QQ的浏览器
4）直接新窗口打开一个页面
5）如果你进入的页面级别过深，例如你到四级页面了返回三级页面后，你再点击返回就又返回四级页面了，因为返回场景时三级页面的前一级页面是四级页面。</pre>
          <h3>3、返回事件的终极解决办法，利用storage储存前一页面路径</h3>
          <pre>
前一个页面
$('.header span.setting').on('click',function(){
  var url=window.location.href;
  console.log(url);
  storageArguments.setItem("modifyPasswordReturn",url); //这是要返回的路径，先储存起来
  window.location='ModifyPassword.html';
});
点击返回的页面
$('.header span.return').on('touchend',function(){
  var url=storageArguments.getItem("modifyPasswordReturn");
  url=url.split(sliceUrl)[1];   //注意这里哦，我去掉了IP跟端口
  storageArguments.removeItem("modifyPasswordReturn");   //返回就清除storage
  window.location=url;
});</pre>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'forbidCopy',
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
    padding: 8px;
    margin:8px 0;
    border: 1px solid #CCCCCC;
    border-radius: 4px;
  }
  p{
    margin: 10px 0;
  }
</style>
