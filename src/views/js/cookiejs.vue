<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>什么是cookies</h3>
          <pre>cookies 就是浏览器储存在用户电脑上的一小段文本文件。cookies 是纯文本格式，不包含任何可执行的代码。
Cookie的本质是一个键值对（由键值对 key=value构成，键值对之间由一个分号和一个空格隔开），当浏览器访问web服务器的时候写入在客户端机器上，里面记录一些信息。
cookies是一种最原始也最简单的客户端存储方式。一个 Web 页面或服务器告知浏览器按照一定规范来储存这些信息，并在随后的请求中将这些信息发送至服务器，Web 服务器就可以使用这些信息来识别不同的用户。大多数需要登录的网站在用户验证成功之后都会设置一个 cookie，只要这个 cookie 存在这个用户，他就可以就可以自由浏览这个网站的任意页面
个人认为cookies比session的优势是可以主动设置失效时间，和指定访问页面，缺单是数据存在量小，保存格式单一只能以键值对key=value存在，无法存储复杂的数据格式</pre>
          <h3>如何设置cookies</h3>
          <pre>js设置设置cookies
//age=1是内容 后面的expires、domain、path是cookies相关属性的设置 每个健值对之间都用分号加空格隔开
document.cookie = "age=1; expires=Thu, 26 Feb 2116 11:50:25 GMT; domain=sankuai.com; path=/";
//当设置多个时用如下方式 不建议使用document.cookie = "age=1; name=tom; address=beijing;"（这种只设置进age=1,后面的设置不进去）
document.cookie = "name=tom;"
document.cookie = "address=beijing;"

js取cookies
// 函数中的参数为key key表示要获取的cookie键的名称。
function getCookie(key){
      if (document.cookie.length>0){
        c_start=document.cookie.indexOf(key+ "=");
        if (c_start!=-1){
          c_start=c_start + key.length+1;
          c_end=document.cookie.indexOf(";",c_start);
          if (c_end==-1){
              c_end=document.cookie.length;
          }
          return unescape(document.cookie.substring(c_start,c_end));
        }
     }
    return "";
}

cookie 编码
cookie其实是个字符串，但这个字符串中逗号、分号、空格被当做了特殊符号。所以当cookie的 key 和 value 中含有这3个特殊字符时，需要对其进行额外编码，一般会用escape进行编码，读取时用unescape进行解码；当然也可以用encodeURIComponent/decodeURIComponent或者encodeURI/decodeURI
有特殊字符 使用encodeURIComponent() 进行编码
document.cookie = 'user='+encodeURIComponent('郭钱;');
读取时 使用decodeURIComponent()

但是上面的这些方法都是js原生的写法，了解一下就行了，真正在项目中都用现成的对cookie封装好得第三方库，例如npm i js-cookie
js-cookie的使用我在插件板块有详细的描述</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexOf',
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
