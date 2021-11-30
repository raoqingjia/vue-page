npm <template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            <a class="download" href="https://pan.baidu.com/s/1WeWc_nESVsg96MIUxoO6vg" target="_blank">下载地址</a>
          </h3>
          <h3>先说一下模块的引入</h3>
          <pre>
<p class="pre-cmd">//模块文件 modelTest.js
module.exports={      //module.exports是重点，我的理解是将这个模块暴露出去
  add:function (number1,number2){
      return number1+number2
  },
  multiple:function (number1,number2){
      return number1*number2
  }
}
//在另一个文件中引入这个模块
  var a=5,b=4;
  var fn=require("modelTest.js");
  var sum=fn.add(a,b);
  console.log("求和="+sum);
  var multiple=fn.multiple(a,b);
  console.log("乘机"+multiple)
</p>
module.exports模块的几种写法
<p class="pre-cmd">① module.exports=function (number1,number2){
    return number1*number2
}
② module.exports.add=function (number1,number2){
    return number1+number2
}
③ module.exports=function (num1){
    return   function (num2){    //这里是匿名函数且用了return
       return num1*num2
    }
}
④就是上面那种，也是最常用的一种</p>
写法上都差不多，换汤不换药 </pre>
          <h3>http模块</h3>
          <pre>
1)var http=require("http");    //引入node.js的核心模板http
2)createServer()     //创建了一个简单的web服务器
3).on("request",function(){});  //给创建的web服务器添加一个客户请求的request事件
4)listen(8080)   // 让创建的web服务器监听8080端口；当多个文件同时监听8080端口时，应只有一个在运行中，其他的关闭，否则会出问题

案例一：http模块来创建一个web服务
const star={
  name:"李明",
  sex:"boy",
  email:"liming@qq.com"
  };
const hostname = '127.0.0.1'
const port = 3000
const http=require("http");
http.createServer(function(requset,response){
  console.log(requset.url);
  //给客户端浏览器返回头文件的信息，定义了文字代码等内容
  response.writeHead(200,{"Content-Type":"application/json;charset=utf8"});//JSON类型
  response.write(JSON.stringify(star));   //给客户端浏览器返回的信息
  response.end('welcome to web');
}).listen(port, hostname,function(){
  console.log(`please visit http://${hostname}:${port}/`);
});
上面创建的http服务监听在3000端口。我们通过使用createServer方法来创建这个http服务。
该方法接受一个callback函数，函数的两个参数分别是 req (http.IncomingMessage 对象）和一个res（http.ServerResponse 对像)。在上面的例子中，我们在response中设置了header和body值，并且以一个end方法来结束response

案例二：http模块来创建get请求
const http = require('http')
const options = {
  hostname: '10.248.50.224',
  port: 80,
  path: '/',
  method: 'GET'
}
const req = http.request(options, res => {
  console.log(`status code: ${res.statusCode}`)
  res.on('data', d => {
    console.log(d);
  })
})
req.on('error', error => {
  console.error(error)
})
req.end();

</pre>
          <h3>express模块</h3>
          <pre>//应用启动入口
var express=require('express')
//创建app应用 =》NodeJS Http.createServer();
var app=express();
//监听http请求
app.listen(8081);
app.get('/',function (req,res,next) {
    res.send("欢迎光临！</h1>")
})</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted(){
      this.$nextTick(function(){
        console.log("open");
        open("http://www.baidu.com", "chrome");
      })
    },
    computed:{

    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .download{
    color: #000;
    float: right;
    text-decoration:underline;
    cursor: pointer;
  }
</style>
