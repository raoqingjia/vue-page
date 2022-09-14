<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>vue里不支持$.ajax，axios不支持jsonp请求，如果我们要用jsonp来请求数据可以使用fetch-jsonp这个模块
jsonp
优势：
1:请求数据没有跨域的限制,后台不用考虑跨域问题
2:对于老版本浏览器更加支持

缺陷:：
1:只支持get请求,不支持其他所有方式的请求(请求方式受到了限制)
2：只支持get请求,不支持post(不安全因素一)
3：因为没有跨域，所以调用接口方不能限制ip，安全方面不是很到位(不安全因素二)
总结:如果服务端是支持跨域的，一般都会选择json,不会选择jsonp

使用方式：
安装jsonp的模块，后面加上--save方便移动项目的时候也能使用模块
npm install fetch-jsonp --save
npm uninstall fetch-jsonp --save 卸载
https://www.npmjs.com/package/fetch-jsonp   npm官方文档地址

单页面使用
import fetchJSONP from 'fetch-jsonp'
fetchJSONP("https://example.com/api/test")
.then(response => response.json())
.then( data => {
	console.log(data)
})

全局使用
在main.js里面注册jsonp的全局变脸
import fetchJsonp from 'fetch-jsonp';
app.config.globalProperties.fetchJsonp=fetchJsonp;
在methods:里面定义方法
getJsonpGet() {
      var that = this;//因为then后面是function不是箭头函数,所有呢里一定要把this提出来,否则直接在下面使用this.list=json，会出现list无效，(最好是不定义that,在.then后面直接使用箭头函数,  .catch后面也使用箭头函数)
      this.fetchJsonp(
        "http://localhost:43597/api/Test/JsonpList?userName=zhangsan",
        {
          jsonpCallback: "myCallBack",
        }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.list = json;
        })
        .catch(function (ex) {
          console.log("parsing failed", ex);
        });
    },
改成箭头函数( (response) =>)过后的getJsonpGet就可以在.then里面使用this了
getJsonpGet() {
      this.fetchJsonp(
        "http://localhost:43597/api/Test/JsonpList?userName=zhangsan",
        {
          jsonpCallback: "myCallBack",
        }
      )
        .then( (response) =>{
          return response.json();
        })
        .then( (json) =>{
          this.list = json;
        })
        .catch( (ex)=> {
          console.log("parsing failed", ex);
        });
    },
注意点:
在getJsonpGet方法里面，因为then后面是function不是尖括号,所有呢里一定要把this提出来,否则直接在下面使用this.list=json，会出现list无效，(最好是不定义that,在.then后面直接使用箭头函数 .catch后面也使用箭头函数))</pre>
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
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
