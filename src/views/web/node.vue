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
          <h3>2、先说一下模块的引入</h3>
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
          <h3>3、核心模块http</h3>
          <pre>
1)var http=require("http");    //引入node.js的核心模板http
2)createServer()     //创建了一个简单的web服务器
3).on("request",function(){});  //给创建的web服务器添加一个客户请求的request事件
4)listen(8080)   // 让创建的web服务器监听8080端口；当多个文件同时监听8080端口时，应只有一个在运行中，其他的关闭，否则会出问题
下面是一个常用的案例
<p class="pre-cmd">var star={
  name:"李明",
  sex:"boy",
  email:"liming@qq.com"
  };
var http=require("http");
http.createServer(function(requset,response){   //request是客户端相关信息 response是客户端的响应
  console.log("客户端发过来请求信息8022");
  console.log(requset.url);               //requset.url输出客户端输入的路径
  console.log(requset.method);          //requset.method输出客户端输入信息的方法
  //给客户端浏览器返回头文件的信息，定义了文字代码等内容
  response.writeHead(200,{"Content-Type":"application/json;charset=utf8"});//JSON类型
  response.write(JSON.stringify(star));   //给客户端浏览器返回的信息
  response.end();
}).listen(8022,function(){
  console.log("你创建的服务器正在监听8022")
});
</p></pre>
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
