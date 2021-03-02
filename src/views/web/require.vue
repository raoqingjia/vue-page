<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>
            1、简单介绍一下require.js
          </h3>
            <pre>
<span>① 使用requirejs就有如下优点：</span>
RequireJS是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一
防止js加载阻塞页面渲染
使用程序调用的方式加载js，防出现文件过多丑陋的场景
<span>② 文档链接</span>
1）官网链接 http://www.requirejs.cn/
2）RequireJS配置文件的学习
https://segmentfault.com/a/1190000002401665
https://www.ibm.com/developerworks/cn/web/1209_shiwei_requirejs/
3）文件下载地址
http://www.requirejs.cn/docs/download.html</pre>
          <h3>
            2、案例模板
          </h3>
          <pre>
main.js文件
<p class="pre-cmd">require.config({
   baseUrl:"lib",  //配置基目录jquery.js和test.js都在lib路径下
   urlArgs:'v='+(new Date()).getTime(),//清楚缓存
   paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        'underscore': 'js/underscore',
        'bootstrap': 'js/bootstrap',
        'jquery.form': 'js/jquery.form',
        'test': 'js/test'
        'a': 'js/a'
    },
    shim: {
        "underscore" : {
            exports : "_"; //exports值（输出的变量名），表明这个模块外部调用时的名称；
        },
        'bootstrap': ['jquery'],
        "jquery.form" : {
            deps : ["jquery"]  //deps数组，表明该模块的依赖性
        },
        'foo': {
            deps: ['bar'],
            exports: 'Foo',
            init: function (bar) {}
        }
})</p>
a.js文件
<p class="pre-cmd">define(function(){
    function fun1(){
      alert("it works");
    }
    fun1();
})</p>
html文件
<p class="pre-cmd">&#60script data-main="js/main" defer async="true"  src="js/require.js">&#60/script>  //注意这里的data-main="js/main"
&#60script type="text/javascript">
    require(["jquery","underscore","test"],function($,_){   //  注意这里的$参数
    $(function(){
        var test = require("test");
        alert("load finished");
    })
})
&#60/script></p>
1）data-main:指定了函数入口（省去了.js，其实就是加载main.js这个文件，源码中应该有处理，目前我不清楚原理，你打开网页的F12你可以发现它已经帮你写好了
2）async 属性表明这个文件需要异步加载 defer表示在IE中异步加载
3）在最新的jQuery1.9.X中，jQuery已经在最后直接将自己注册为一个AMD模块，即是说可以直接被requireJS作为模块加载。</pre>
          <h3>
            3、参数详解
          </h3>
          <pre>
<span>① 重点参数</span>
1)三个基本参数
config--配置requirejs依赖。
define--创建模块，全局函数。
require--读取依赖，全局函数。
2)config中的参数
baseUrl:定义了用于加载模块的根路径
paths:引入文件的路径
shim:将非AMD插件转化,为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
3)define中的形参
define(id，dependencies，factory)；
第一个参数id，表示模块标识，可省略；
第二个参数dependencies，表示模块依赖，可省略；
第三个参数factory，模块的实现，或一个js对象。
<span>② 基本变量</span>
先看下面这个例子
<p class="pre-cmd">a.js文件
   define(function(){
   function fun1(){
   alert("it works");
   }
   fun1();
})
&#60script type="text/javascript" src="require.js">&#60/script>
&#60script type="text/javascript">
    require(["js/a"]);     //require的引入都是写在script中的
&#60/script>
</p>
require会定义三个变量：define,require,requirejs，其中require === requirejs，一般使用require更简短
define  用来定义一个模块
require 加载依赖模块，并执行加载完后的回调函数，而且require中的依赖是一个数组，即使只有一个依赖，你也必须使用数组来定义，require API的第二个参数是callback，一个function，是用来处理加载完毕后的逻辑，如：
<p class="pre-cmd">require(["js/a"],function(){
    alert("load finished");
})</p>
<span>③ 加载文件  require.config()</span>
之前的例子中加载模块都是本地js，但是大部分情况下网页需要加载的JS可能来自本地服务器、其他网站或CDN，这样就不能通过这种方式来加载了，我们以加载一个jquery库为例：
<p class="pre-cmd">require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"]
    }
})
require(["jquery","js/a"],function($){
    $(function(){
        alert("load finished");
    })
})
</p>
require.config是用来配置模块加载位置，简单点说就是给模块起一个更短更好记的名字，比如将百度的jquery库地址标记为jquery，这样在require时只需要写["jquery"]就可以加载该js，本地的js我们也可以这样配置：
 <p class="pre-cmd">require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery"],
        "a" : "js/a"
    }
})
require(["jquery","a"],function($){
    $(function(){
        alert("load finished");
    })
})</p>
通过paths的配置会使我们的模块名字更精炼，paths还有一个重要的功能，就是可以配置多个路径，如果远程cdn库没有加载成功，可以加载本地的库，如：
 <p class="pre-cmd">require.config({
  paths : {
      "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],//配置了两个文件路径
       "a" : "js/a"
  }
})
require(["jquery","a"],function($){   //  注意这里的$参数
    $(function(){
        alert("load finished");
    })
})</p>
这样配置后，当百度的jquery没有加载成功后，会加载本地js目录下的jquery，但是不常用这没写，感觉没必要
1）在使用requirejs时，加载模块时不用写.js后缀的，当然也是不能写后缀
2）上面例子中的callback函数中发现有$参数，这个就是依赖的jquery模块的输出变量，如果你依赖多个模块，可以依次写入多个参数来使用：
 <p class="pre-cmd">require(["jquery","underscore"],function($, _){   $代表jquery _代表underscore
    $(function(){
        _.each([1,2,3],alert);
    })
})</p>
如果某个模块不输出变量值，则没有，所以尽量将输出的模块写在前面，防止位置错乱引发误解
<span>④ 全局配置</span>
如果每个页面中都加入require.config配置，必然显得十分不雅，requirejs提供了一种叫"主数据"的功能，我们首先创建一个main.js：
 <p class="pre-cmd">require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"
    }
})</p>
然后再页面中使用下面的方式来使用requirejs：
<p class="pre-cmd">a.js文件
define(function(){
  function fun1(){
    alert("it works");
  }
  fun1();
})
&#60script data-main="js/main" src="js/require.js">&#60/script>  //注意这里的data-main="js/main"
&#60script type="text/javascript">
    require(["jquery","a"],function($){   //  注意这里的$参数
    $(function(){
        alert("load finished");
    })
})
&#60/script>
</p>
从上面的引入require.js的代码开始到a.js的代码结束，基本上算是一个完整的项目流程
解释一下，加载requirejs脚本的script标签加入了data-main属性，这个属性指定的js将在加载完reuqire.js后处理，我们把require.config的配置加入到data-main后，就可以使每一个页面都使用这个配置，然后页面中就可以直接使用require来加载所有的短模块名
<span>⑤ 第三方模块</span>
通过require加载的模块一般都需要符合AMD规范即使用define来申明模块，但是部分时候需要加载非AMD规范的js，这时候就需要用到另一个功能：shim，shim直接翻译为"垫"，在这里我理解为将非AMD转变成AMD，目前我主要用在两个地方
1. 非AMD模块输出，将非标准的AMD模块"垫"成可用的模块，比如我要是用underscore类库，但是他并没有实现AMD规范，那我们可以这样配置
<p class="pre-cmd">require.config({
    shim: {
        "underscore" : {
            exports : "_";
        }
    }
})</p>
这样配置后，我们就可以在其他模块中引用underscore模块：
<p class="pre-cmd">require(["underscore"], function(_){
    _.each([1,2,3], alert);
})</p>
插件形式的非AMD模块，我们经常会用到jquery插件，而且这些插件基本都不符合AMD规范，比如jquery.form插件，这时候就需要将form插件"垫"到jquery中：
<p class="pre-cmd">require.config({
    shim: {
        "underscore" : {
            exports : "_";
        },
        "jquery.form" : {
            deps : ["jquery"]
        }
    }
})</p>
也可以简写为：
<p class="pre-cmd">require.config({
    shim: {
        "underscore" : {
            exports : "_";
        },
        "jquery.form" : ["jquery"]
    }
})</p>
这样配置之后我们就可以使用加载插件后的jquery了
<p class="pre-cmd">require.config(["jquery", "jquery.form"], function($){
    $(function(){
        $("#form").ajaxSubmit({...});
    })
})</p></pre>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
  var less = require('less');
  export default {
    name: 'npm',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name
      }
    },
    mounted() {
      this.$nextTick(function () {
        less.render('.class { width: 1 + 1 }', function (e, css) {
          console.log(css);
        });
      })
    },
    methods: {
      toggle(){

      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

</style>
