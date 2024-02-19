npm <template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
            <li v-for="(items,index) in catalogue" :key="index"><a @click="jump(index)">{{items.name}}</a>
            </li>
          </ul>
          <h3>先说一个简单的js案例，复制粘贴到js文件能直接运行</h3>
          <pre><p class="pre-cmd">//1. 导入 http 模块
const http = require('http');
//2. 创建服务器对象
const server = http.createServer();
//3. 开启服务器
server.listen(3000, () => {
  console.log('Server is running...');
});
//4. 监听浏览器请求并进行处理
server.on('request', (req, res) => {
  // end方法能够将数据返回给浏览器，浏览器会显示该字符串
  res.end('Hello Nodejs');
 });</p></pre>
          <h3>Node.js 文件夹遍历技巧</h3>
          <pre>常用方法
以下是几种常用的方法来遍历文件夹：
1.使用 fs.readdir： fs.readdir 方法可以读取指定目录下的文件和子目录列表。结合递归，可以实现遍历文件夹的功能。
2.使用 fs.readdirSync： 同步版本的 fs.readdir，会阻塞代码执行直到读取完成。
3.使用递归函数： 可以编写一个递归函数，深度遍历文件夹及其子文件夹，并获取文件列表。
4.使用第三方库： 一些第三方库如 readdirp 和 glob 也提供了方便的文件遍历功能。

实践案例
<p class="pre-cmd">const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/list-files', (req, res) => {
  const folderPath = path.join(__dirname); // 修改为实际文件夹路径
  const files = [];
   console.log(folderPath);
  function traverseFolder(folderPath) {
    const items = fs.readdirSync(folderPath);
    items.forEach(item => {
      const itemPath = path.join(folderPath, item);
      const stats = fs.statSync(itemPath);
      if (stats.isDirectory()) {
        traverseFolder(itemPath);
      } else if (stats.isFile()) {
        files.push(item);
      }
    });
  }

  traverseFolder(folderPath);
  res.json({ files });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

在浏览器或 API 工具中访问 http://localhost:3000/list-files，你将看到文件列表的 JSON 响应。</p>

Node.js fs 模块文档：nodejs.org/api/fs.html
Express.js 官网：expressjs.com/
readdirp 第三方库：https://www.npmjs.com/package/readdirp
glob 第三方库：https://www.npmjs.com/package/glob</pre>
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
<p class="pre-cmd">const star={
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
</p>
案例二：http模块来创建get请求
<p class="pre-cmd">const http = require('http')
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
req.end();</p>
简单的post请求
<p class="pre-cmd">const http = require('http')
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
req.end();</p>
post和get相似，不同的是options中的method不一样，同时put可以有多种请求类型，所以我们需要在headers中指定。同样的，PUT 和 DELETE 也可以使用同样的方式来调用

第三方lib请求post
axios可以让post请求变得更加简单
<p class="pre-cmd">const axios = require('axios')
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
上面的例子中，body-parser对req进行了封装，我们只用关注与最后的结果即可。</p></pre>
          <h3>express模块</h3>
          <pre>使用Express来搭建一个helloworld：
<p class="pre-cmd">var express = require('express');
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
上面的请求会经过cb0，cb1和自定义的两个function，最终结束</p></pre>
          <h3>fs 模块</h3>
          <pre>1. fs模块基本概念
fs全称为 file system 模块是Node.js中的核心模块之一，用于对 文件系统进行操作。它提供了丰富的函数和方法，可以进行文件的读取、写入、复制、删除等操作，同时也支持目录的创建、遍历和修改等操作。使用fs模块，你可以在Node.js环境中轻松地与文件系统交互。
fs必须在node 环境中使用，vue angular react中没法使用
浏览器环境下是没有Node环境的，自然不能使用 NodeJS 中的 FS 模块。另外浏览器环境下的项目是没有权限写本地磁盘的。
如果需要读写本地磁盘需要考虑启动一个本地服务通过一些方式去通讯，或者使用 ElectronJS 来实现。

2. 文件写入
文件写入就是将 数据保存到 文件 中，我们可以使用如下几个方法来实现该效果.
writeFile	异步写入
writeFileSync	同步写入
appendFile / appendFileSync	追加写入
createWriteStream	流式写入

2-1. writeFile 异步写入
语法：fs.writeFile(file, data[, options], callback)

参数说明：
file 文件名
data 待写入的数据
options 选项设置 可选
callback 写入回调
返回值： undefined

代码示例：
<p class="cmd-bg">// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require('fs');
//将 『生活不止眼前的苟且，还有诗和远方。』 写入到当前文件夹下的『座右铭.txt』文件中
const txt =  '生活不止眼前的苟且，还有诗和远方。';
fs.writeFile('./座右铭.txt', txt, err => {
	if(err){  //如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
		console.log(err);
	return;
	}
	console.log('写入成功')；
});</p>

2-2. writeFileSync 同步写入
语法：fs.writeFileSync(file, data[, options])

参数说明：
file 文件名
data 待写入的数据
options 选项设置 可选
返回值： undefined

代码示例：
<p class="cmd-bg">try{
	fs.writeFileSync('./座右铭.txt', '生活不止眼前的苟且，还有诗和远方。');
}catch(e){
	console.log(e);
}</p>

Node.js 中的磁盘操作是由其他 线程 完成的，结果的处理有两种模式：
同步处理 JavaScript 主线程会等待其他线程的执行结果，然后再继续执行主线程的代码， 效率较低
异步处理 JavaScript 主线程 不会等待其他线程的执行结果，直接执行后续的主线程代码， 效率较好

2-3. appendFile / appendFileSync 追加写入
appendFile 作用是在文件尾部追加内容，appendFile 语法与 writeFile 语法完全相同
语法：

fs.appendFile(file, data[, options], callback)
fs.appendFileSync(file, data[, options])

返回值： 二者都为 undefined

实例代码：
<p class="cmd-bg">fs.appendFile('./座右铭.txt','择其善者而从之，其不善者而改之。', err => {
	if(err) throw err;
	console.log('追加成功')
});
fs.appendFileSync('./座右铭.txt','\r\n努力前行，勇往直前。');</p>
2-4. createWriteStream 流式写入
语法： fs.createWriteStream(path[, options])

参数说明：
path 文件路径
options 选项配置（ 可选 ）
返回值： Object

代码示例：<p class="cmd-bg">let ws = fs.createWriteStream('./观书有感.txt');
ws.write('半亩方塘一鉴开\r\n');
ws.write('天光云影共徘徊\r\n');
ws.write('问渠那得清如许\r\n');
ws.write('为有源头活水来\r\n');
ws.end();</p>
程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数。
流式写入方式适用于 大文件写入或者频繁写入 的场景, writeFile 适合于 写入频率较低的场景

 2-5. 写入文件的场景
文件写入 在计算机中是一个非常常见的操作，下面的场景都用到了文件写入
下载文件
安装软件
保存程序日志，如 Git
编辑器保存文件
视频录制
当 需要持久化保存数据 的时候，应该想到 文件写入

3. 文件读取
文件读取顾名思义，就是通过程序从文件中取出其中的数据，我们可以使用如下几种方式：

方法	说明
readFile	异步读取
readFileSync	同步读取
createReadStream	流式读取

3-1.readFile 异步读取
语法： fs.readFile(path[, options], callback)

参数说明：

path 文件路径
options 选项配置
callback 回调函数
返回值： undefined

代码示例：
<p class="pre-cmd">//导入 fs 模块
const fs = require('fs');
fs.readFile('./座右铭.txt', (err, data) => {
	if(err) throw err;
	console.log(data);
});
fs.readFile('./座右铭.txt', 'utf-8',(err, data) => {
	if(err) throw err;
	console.log(data);
});</p>

3-2 readFileSync 同步读取
语法： fs.readFileSync(path[, options])

参数说明：

path 文件路径
options 选项配置
返回值： string | Buffer

代码示例：
<p class="pre-cmd">let data = fs.readFileSync('./座右铭.txt');
let data2 = fs.readFileSync('./座右铭.txt', 'utf-8');</p>









https://blog.csdn.net/weixin_50233139/article/details/131431444


</pre>
          <h3>关于node通过officegen生成word使用（服务端）</h3>
          <pre><p class="pre-cmd">1、首先安装officegen
npm install officegen --save

在controller层引入
const officegen = require('officegen')
const fs = require('fs')

// Create an empty Word object:
let docx = officegen('docx')

// Officegen calling this function after finishing to generate the docx document:
docx.on('finalize', function(written) {
  console.log(
    'Finish to create a Microsoft Word document.'
  )
})

// Officegen calling this function to report errors:
docx.on('error', function(err) {
  console.log(err)
})

// Create a new paragraph:
let pObj = docx.createP()

pObj.addText('Simple')
pObj.addText(' with color', { color: '000088' })
pObj.addText(' and back color.', { color: '00ffff', back: '000088' })

pObj = docx.createP()

pObj.addText('Since ')
pObj.addText('officegen 0.2.12', {
  back: '00ffff',
  shdType: 'pct12',
  shdColor: 'ff0000'
}) // Use pattern in the background.
pObj.addText(' you can do ')
pObj.addText('more cool ', { highlight: true }) // Highlight!
pObj.addText('stuff!', { highlight: 'darkGreen' }) // Different highlight color.

pObj = docx.createP()

pObj.addText('Even add ')
pObj.addText('external link', { link: 'https://github.com' })
pObj.addText('!')

pObj = docx.createP()

pObj.addText('Bold + underline', { bold: true, underline: true })

pObj = docx.createP({ align: 'center' })

pObj.addText('Center this text', {
  border: 'dotted',
  borderSize: 12,
  borderColor: '88CCFF'
})

pObj = docx.createP()
pObj.options.align = 'right'

pObj.addText('Align this text to the right.')

pObj = docx.createP()

pObj.addText('Those two lines are in the same paragraph,')
pObj.addLineBreak()
pObj.addText('but they are separated by a line break.')

docx.putPageBreak()

pObj = docx.createP()

pObj.addText('Fonts face only.', { font_face: 'Arial' })
pObj.addText(' Fonts face and size.', { font_face: 'Arial', font_size: 40 })

docx.putPageBreak()

pObj = docx.createP()

// We can even add images:
pObj.addImage('some-image.png')

// Let's generate the Word document into a file:

let out = fs.createWriteStream('example.docx')

out.on('error', function(err) {
  console.log(err)
})

// Async call to generate the output file:
docx.generate(out)</p></pre>
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
        title: this.$route.query.name,
        catalogue: []
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.createCatalogue();
      })
    },
    methods: {
      jump(index) {
//        let jump = document.getElementsByTagName('h3');
//       // 获取需要滚动的距离
//        let total = jump[index].offsetTop;
//        // Chrome
//        document.body.scrollTop = total;
//        // Firefox
//        document.documentElement.scrollTop = total;
//       // Safari
//        window.pageYOffset = total
//        https://www.cnblogs.com/wisewrong/p/6495726.html  参考网站
        let jump = document.getElementsByTagName('h3');
        let total = jump[index].offsetTop;  // 获取目标位置滚动的距离
        let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取当前滚动轴的位置
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50;
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total;  //防止total，let step=total/50太小，移动缓慢
          step = newTotal / 50;
          smoothUp()
        }

        function smoothDown() {
          if (total > distance) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }

        function smoothUp() {
          if (total < distance) {
            distance -= step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
      },
      //创建目录函数
      createCatalogue() {
        let object = document.getElementsByTagName('h3');
        var flag = [];
        for (var i = 0; i < object.length; i++) {
          object[i].innerHTML = ((i + 1) + ". " + object[i].innerHTML);
          flag.push({name: object[i].innerHTML})
        }
        this.catalogue = flag;
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
