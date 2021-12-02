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

简单的post请求

const http = require('http')
const data = JSON.stringify({
  name: 'flydean'
})
const options = {
  hostname: 'www.flydean.com',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}
const req = http.request(options, res => {
  console.log(`status code: ${res.statusCode}`);
  res.on('data', d => {
    console.log(d);
  })
})
req.on('error', error => {
  console.error(error)
})
req.write(data);
req.end();
post和get相似，不同的是options中的method不一样，同时put可以有多种请求类型，所以我们需要在headers中指定。同样的，PUT 和 DELETE 也可以使用同样的方式来调用

第三方lib请求post
axios可以让post请求变得更加简单
const axios = require('axios')
axios.post('http://www.flydean.com', {
    name: 'flydean'
  })
  .then(res => {
    console.log(`status code: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
直接使用axios的post请求，并将请求结果封存成了promise，然后通过then和catch来进行相应数据的处理。非常的方便。

获取http请求的正文
在上面的例子中，我们通过监听req的data事件来输出http请求的正文：
  res.on('data', d => {
    console.log(d);
  })
})
这样做其实是有问题的，并不一定能够获得完整的http请求的正文。
因为res的on data事件是在服务器获得http请求头的时候触发的，这个时候请求的正文可能还没有传输完成，换句话说，请求回调中的request是一个流对象。
我们需要这样处理：
const server = http.createServer((req, res) => {
  let data = []
  req.on('data', chunk => {
    data.push(chunk)
  })
  req.on('end', () => {
    console.log(JSON.parse(data));
  })
})；
当每次触发data事件的时候，我们将接受到的值push到一个数组里面，等所有的值都接收完毕，触发end事件的时候，再统一进行输出。
这样处理显然有点麻烦。我们介绍一个在express框架中的简单方法，使用 body-parser 模块：
const bodyParser = require('body-parser')
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.post('/', (req, res) => {
  console.log(req.body)
})
上面的例子中，body-parser对req进行了封装，我们只用关注与最后的结果即可。</pre>
          <h3>express模块</h3>
          <pre>使用Express来搭建一个helloworld：
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
对不同的请求路径和请求方式进行不同的处理，使用到了express路由功能
// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');});
// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');});
// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');});
// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');});

Express 路由句柄中间件
有时候，一个请求可能有多个处理器，express提供了路由句柄（中间件）的功能，我们可自由组合处理程序。
注意，在路由句柄中，我们需要调用next方法，来触发下一个路由方法。
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();}
var cb1 = function (req, res, next) {
  console.log('CB1');
  next();}
app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});
上面的请求会经过cb0，cb1和自定义的两个function，最终结束

Express 使用模板引擎
          </pre>
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
