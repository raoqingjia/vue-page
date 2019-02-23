<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">

          <h3>1、chrome和firefox中autocomplete属性失效的解决方法</h3>
           <pre>
问题描述：在写一个登陆页面的时候，打算把表单里input标签的自动完成功能关闭，于是把帐号和密码框的autocomplete属性设置为off。由于之前登陆选择了记住密码，每次在chrome和firefox打开或者刷新页面的时候都把帐号和密码给自动完成了。这也就算了，居然在清空了输入框的帐号以后，点击输入框还带有自动完成功能，这说明autocomplete功能完全没生效嘛。
思路：浏览器以password类型的input标签为识别标准，那么在输出页面的时候完全可以把这个密码框的type设置为text，然后在用户点击密码框输密码时把这个密码框的type再变回password。照着这么一改，果然有效果，chrome和firefox都不会记住密码和自动完成了，这下问题成功解决
① form中没有input[type=password]，autocomplete="off"将起作用
② 去掉form，设置input[type=text]的autocomplete也起作用 </pre>
          <h3>2、autocomplete="off"在谷歌浏览器下的pc模式可能不起作用，但是在测试移动端环境下是起作用的,下面是案例分析</h3>
<pre>
&#60input type="password" id="loginPassword" style="display: none"/>    这个隐藏的input只能有id
&#60input type="password" placeholder="密码"  class="user-password" />  这个显示的input不能有name与id
http://blog.csdn.net/qq_17351067/article/details/69389176 借鉴文件
下面的代码让密码跟用户名都不会出现自动填充的去哪个看，注意input[type="password"]中的style="display: none"的input，就是为了起到
autocomplete="off"的作用，而且最外围是div而不是form，因为input[type="password"]与form在一起就会出现自动填充文本信息
input[type="text"]中的name="user-name"，这个name也是个关键， &#60input type="text" style="display: none;"/>这行代码是为了防止点击label
光标定位到label下的第一个input文本框，是为了跟点击密码的label效果统一，并没有起到禁止自动填充的作用
 &#60div class="form-login">
   &#60h2>&#60/h2>
   &#60label>
     &#60i class="icon-user">&#60/i>
     &#60input type="text" style="display: none;"/>
     &#60input type="text" placeholder="用户名" name="user-name" class="user-name"/>
   &#60/label>
   &#60label>
     &#60i class="icon-lock">&#60/i>
     &#60input type="password" id="loginPassword" style="display: none"/>
     &#60input type="password" placeholder="密码"  class="user-password"/>
  &#60/label>
   &#60input type="button" value="登录" class="login-btn">
 &#60/div>

下面的代码仅仅是让input[type="password"]不会自动填充，用户名还是可以填充的，利用了label中的for=“” ，和让第一个input定位到看不到的地方，
 &#60form class="form-login">
   &#60label>
     &#60i class="icon-user">&#60/i>
     &#60input type="text" placeholder="用户名"  class="user-name"/>
  &#60/label>
   &#60label  for="">
     &#60i class="icon-lock">&#60/i>
     &#60input type="password" id="loginPassword" style="position: absolute;bottom: -200px;border: 1px red solid;z-index: -1"/>
     &#60input type="password" placeholder="密码"  class="user-password"/>
   &#60/label>
   &#60input type="button" value="登录" class="login-btn">
 &#60/form>
</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'autocompleteNoWork',
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
