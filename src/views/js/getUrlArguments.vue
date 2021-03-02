<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、URL 编码</h3>
          <pre>
URL 编码
URL 只能使用 ASCII 字符集来通过因特网进行发送。
由于 URL 常常会包含 ASCII 集合之外的字符，URL 必须转换为有效的 ASCII 格式。
URL 编码使用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。
URL 不能包含空格。URL 编码通常使用 + 来替换空格。
对绝大多数HTTP client而言，URL长度都有上限，所以不能传太大的JSON，一般而言几K应该没问题，但是再长点就不好说了
JavaScript 中使用 encodeURI() 或encodeURIComponent（）函数，PHP 中使用 rawurlencode() 函数，ASP 中使用 Server.URLEncode() 函数。java 中使用URLEncoder 的encode()编码，decode()解码相应的JavaScript 中使用 decodeURI()解码</pre>
          <h3>2、从url获取参数</h3>
          <pre>
下面是一个获取参数的函数，但是在angualr 4.0里居然会报错,错误就出现在unescape这里;
<p class="pre-cmd">function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}</p>
例如：
<p class="pre-cmd">var initUrl="http://192.168.101:8080/auth/userRight?authNumber="+authNumber+"&token="+token;
var authNumber = getQueryString("AuthNumber");
var token = getQueryString("Token");</p></pre>
          <h3>3、从url中转译解码</h3>
          <pre>
<span>① JSON.stringify(Student)</span>
假设A页面要跳转到B页面，这个过程中要传递一个简单的JSON对象类型：
Student={name:"wsp",age:"24"}
浏览器时不支持传递Object对象的，只支持String类型的数据，故我们要对这个JSON对象进行序列化：使用 JSON.stringify方法
Student=JSON.stringify(Student);
序列化之后就可以进行跳转链接了：
location="b.html?Student="+Student;
但是这个时候会发现浏览器URL是这样显示的：
b.html?Student={"name":"wsp","age":"24"}
<span>② encodeURI()</span>
把字符串作为 URI 进行编码
在http调取后台接口时，可能会碰到参数为中文汉字，这时候将中文传给后台时，浏览器解析就会报错，因为浏览器不识别，这时候就要通过encodeURI() 函数把字符串作为 URI 进行编码；
<p class="pre-cmd">var url=IP+"/gprsdom/product?name=你好吗";
var urlUri = encodeURI(url);
或
var arg="你好吗"
arg=encodeURI(arg);
var url=IP+"/gprsdom/product?name="+arg</p>
decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码，将从url中传递过来的参数再次转译成原来的样子。
在get请求时可能前台需要用encodeURI()转译但是后台接收时就不需要decodeURI()解码，直接使用就行;如果是post传输参数是放在data中拼装传给后台不需要encodeURI()转译
<span>③ encodeURIComponent()</span>
与encodeURI()的区别是，它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码，它对应的解码函数是decodeURIComponent()。
例如：
<p class="pre-cmd">var test1="http://www.haorooms.com/My first/";
var nn=encodeURI(test1);
var now=decodeURI(test1);
var test1="http://www.haorooms.com/My first/";
var bb=encodeURIComponent(test1);
var nnow=decodeURIComponent(bb);</p>
输出结果是：
<p class="pre-cmd">http://www.haorooms.com/My%20first/
http://www.haorooms.com/My first/
http%3A%2F%2Fwww.haorooms.com%2FMy%20first%2F     //转译的有点过头了，呵呵
http://www.haorooms.com/My first/</p>
下面是一个在angulr 4.0中传输object的案例 decodeURIComponent()居然要转译两次
<p class="pre-cmd">A.html
let arg={
  CompanyID: '100',
  CustomerID: 12345889584,
  CustomerManager: [{
    ContactPhone: '',
    StaffID: 12,
    StaffNumber: 12,
    StaffName: ''
    }],
  CustomerName: '赵君度23123456',
  CustomerNumber: '553d3b61d08a453aa93e63b17a2a4dc4',
  CustomerServLevel: '1',
  IndustryID: '30',
  KeyPersons: [{
    Role: '4',
    ContactPhone: '13811447768',
    PartyName: '1'
    },
    {
    Role: '2',
    ContactPhone: '13811333447768',
    PartyName: '1'
    }],
  Location: '',
  OperTime: 1529926959000,
  ParentCustomerNumber: '666666',
  State: 3
}
var  abc=JSON.stringify(arg);    //这里要先转译
this.router.navigate(['/home/shoppingCar/sureInfo'],{ queryParams:{ name:encodeURIComponent(abc)} });
B.html
var arg=location.href.slice(1).split("=")[1];
console.log(decodeURIComponent(decodeURIComponent(arg))) ;  //这里要转译两次
//console.log(decodeURI(decodeURI(arg)));  //用encodeURI也可，因为只是参数转译，不是整个对url转译
arg=decodeURIComponent(decodeURIComponent(arg))
arg=JSON.parse(arg)</p>
<span>总结</span>
JSON.stringify(Student) 在url上会显示传输的内容，保密性不好
encodeURI()是Javascript中真正用来对URL编码的函数。 编码整个url地址，但对特殊含义的符号"; / ? : @ & = + $ , #"，也不进行编码。对应的解码函数是：decodeURI()。
encodeURIComponent() 能编码"; / ? : @ & = + $ , #"这些特殊字符。对应的解码函数是decodeURIComponent()。
假如要传递带&符号的网址，所以用encodeURIComponent()</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'getUrlArguments',
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
