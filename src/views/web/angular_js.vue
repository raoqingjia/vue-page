<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <ul class="catalogue clearfix">
          <li v-for="(items,index) in catalogue"  :key="index"><a @click="jump(index)">{{items.name}}</a></li>
         </ul>
          <h3>1、angular.js简介</h3>
          <pre>
① AngularJS是一款由Google公司开发维护的前端MVC框架， AngularJS非常结构化，大而全，坏处就是规定比较严格，好处是代码更一致。企业用户可能对性能没有那么敏感，反而喜欢这种写起来条理清晰，功能强大的框架。这有点像 Java，虽然臃肿，慢，但是成熟稳定，所以企业往往选择这样的框架。1.3及以上版本不支持IE8，我用的是1.2.9

② AngularJs与jQuery区别:
jQuery: 准确的说是一个类库(类库是一系列函数的集合),DOM为驱动核心
AngularJS: 是一个框架(是许多类库的集合) 以数据和逻辑维驱动(核心)

③ 什么是MVC:
MVC是一种开发模式，由模型（Model）、视图（View）、控制器（Controller）3部分构成，采用这种开发模式为合理组织代码提供了方便、降低了代码间的耦合度、功能结构清晰可见。MVC更多应用在后端开发程序里，后被引入到前端开发中，由于受到前端技术的限制便有了一些细节的调整，进而出现了很多MVC的衍生版（子集）如MVVM、MVW、MVP、MV*等。
模型（Model）一般用来处理数据（读取/设置），一般指操作数据库。
视图（View）一般用来展示数据，比如通过HTML展示。
控制器（Controller）一般用做连接模型和视图的桥梁。

④ AngularJs核心:
1)模块化: 将应用划分维如干模块,每个模块有各自的职责,实现代码复用,最总组合成一个整体
2)数据绑定:
    单项绑定:模型到试图的数据传递
            ng-bind :数据不会闪烁
            { {}}    :数据会闪烁 解决办法 属性加上 ng-bloak 并将Angular.js包放在前边引入
            ng-bind-template:多数据绑定
    双向绑定:模型与视图之间相互传递数据
            ng-model: &#60input type="text"  ng-model="xxx">  模型到试图的数据传递需要结束表单元素
            语义化标签,
            依赖注入..
3)指令:
    通过扩展一系列的HTML属性或标签来弥补HTML在构建应用（App）时存在诸多不足之处
4)作用域:
    控制器(每个都对应一个模型)之间产生嵌套 每个模型又是一个对象 所以$scope便产生了作用域
5)过滤器:
    在AngularJS中使用过滤器格式化展示数据，在“{{}}”中使用“|”来调用过滤器，使用“:”传递参数。
6)依赖注入:
    运行时自动查找依赖关系，然后将查找到依赖传递给使用者的一种机制 AngularJS内置有许多服务
7)服务:
    服务是一个对象或函数，对外提供特定的功能。
8)模块加载:
    模块可以在被加载和执行之前对其自身进行配置。我们可以在应用的加载阶段配置不同的逻辑
9)路由..
    一个应用是由若个视图组合而成的，根据不同的业务逻辑展示给用户不同的视图，路由则是实现这一功能的关键
#类似框架: BackBone、KnockoutJS、Vue、React..          </pre>
      <h3>2、angular.module模块</h3>
     <pre>
module是angular中重要的模块组织方式，它提供了将一组内聚的业务组件（controller、service、filter、directive…）封装在一起的能力。
angular.module("sportStop",["customFilter","shopCartContorl","ngRoute","ngAnimate"]) ;
[]中的customFilter就是另一个model模块，通过[]中的组件引用，这样sportStop就可以调用customFilter中的过滤器了。
例如angular.module("sportStop").controller("SeletControl",function($scope,shopCart){})
中的shopCart这个参数就是来自shopCartContorl模块中，shopCart是shopCartContorl中的service、filter、factory，controller
页面中各个模块的加载顺序
module config  run </pre>
          <h3>
            3、利用ui.router实现路由跳转
          </h3>
            <pre>
angular.module('myapp', ["ui.router"]);
① 依赖注入$routeProvider服务
myapp.config(["$httpProvider", '$stateProvider', '$urlRouterProvider', "$locationProvider",
    function ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
       // 开始配置路由
        $urlRouterProvider.otherwise(url);
        $urlRouterProvider.when(item.menuAddr, item.menuAddr + its.menuAddr);
        $stateProvider.state(item.menuAddr, {
                cache: false,
                url: url,
                templateUrl: templateUrl
            });
    }]);
② 配置路由方式
$stateProvider.state(stateNmae,{    //跳转状态的名称
        cache:false,     //是否留有缓存
        url:url,         //跳转链接的路径，注意url是'/login'写法要带/符号，而stateName则不需要
        templateUrl: templateUrl    //跳转时对应的页面
        params:{argumentsId:{},argumentsPoSpecId:{}} //页面跳转时带的参数
});
③ 页面跳转方法
通过$stateProvider.state的配置路由页面跳转就有了两种方式，
1)是通过stateNmae跳转的 ui-sref="page1"
或 $state.go("statistics."+url,{argumentsId:argumentsId,argumentsPoSpecId});
2)是通过url跳转的  ng-href="#/login"
&#60a ui-sref=".{ {items.menuAddr}}" href="#/statistics/{ {items.menuAddr}}">{ {items.name}}&#60/a>
3)是 app.controller("RouterACtrller", function ($scope, $location) {
    $location.path("/login");
});
④ 路由嵌套
在嵌套状态的路由控制中，默认方式是子状态的url附加到父状态的url之后。
$stateProvider
.state('contacts', {
   url: '/contacts',
   ...
})
.state('contacts.list', {  //注意这里用的是 .符号进行的父子级的嵌套
   url: '/list',     //注意这里，这里并没有显示父子级的嵌套关系，主观上就是一个 /list 的路径跳转
   ...
});
路由将成为：
'contacts'状态将匹配"/contacts"
'contacts.list'状态将匹配"/contacts/list"。子状态的url是附在父状态的url之后的。
$urlRouterProvider负责处理在状态配置中指定的url路由方式之外的 url 请求的路由方式。
$urlRouterProvider负责监视$location，当$location改变后，$urlRouterProvider将从一个列表，一个接一个查找匹配项，直到找到。所有url都编译成一个UrlMatcher对象。
$urlRouterProvider.otherwise(url);项目一启动就跳转到默认的url页面，注意这里的url是$stateProvider.state中的url而不是stateName
注意：当angular路由设置默认跳转路径$urlRouterProvider.otherwise(‘/default')，并且页面存在设置属性href="###"的a标签时，即&#60a href="###>&#60/a>时，每次点击&#60a>标签都会跳转到‘default'页面。解决该问题的方法就是去掉&#60a>标签的属性href="###"去掉该效果。
⑤ 比较不错的案例，借鉴思路
ui-router--登录页通过路由跳转到内页的demo
http://blog.csdn.net/zhuyucheng123/article/details/52981235
理解下面这段代码的含义
controllerProvider : function($rootScope){
    if($rootScope.$state.isLogin == false){
        $rootScope.$state.go('login');
    }
    return function(){};
}</pre>
          <h3>
            4、$http拦截器
          </h3>
          <pre>
<p class="pre-cmd">myapp.config(["$httpProvider", '$stateProvider', '$urlRouterProvider', "$locationProvider",
  function ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
  //启用html5模式
  //$locationProvider.html5Mode(true);
  //$httpProvider类似jquery ajax的beforesend的东西
  //添加token 不过后台也要配置获取token
  $httpProvider.defaults.headers.common = {"token": sessionStorage.getItem("token")};
  $httpProvider.interceptors.push(function ($q, $rootScope) {
        return {
            request: function (config) {
                var ourl = config.url;
                if (ourl.indexOf("customer/findCustsByName") > 0) {
                    //console.log("loading弹窗不会出来的-客户名称模糊查询")
                } else if (ourl.indexOf("customer/findCustSubscriptions") > 0) {
                    //console.log("loading弹窗不会出来的-客户订购查询")
                }else {
                    $rootScope.loading = true;
                }
                return config;
            },
            requestError: function (err) {
                $rootScope.loading = true;
                return $q.reject(err);
            },
            response: function (res) {
                if (res.status == "200") {
                    if (typeof res.data == "object") {
                        //if(res.data.code=="10000"){
                        //    $rootScope.loading = false;
                        //}else{
                        //    $rootScope.loading = true;
                        //}
                        // $rootScope.loading = false;    //loading弹层隐藏
                    } else {
                        $rootScope.loading = false;
                    }
                }
                return res;
            },
            responseError: function (err) {
                //if(-1 === err.status) {
                //    // 远程服务器无响应
                //} else if(500 === err.status) {
                //    // 处理各类自定义错误
                //} else if(501 === err.status) {
                //    // ...
                //}
                $rootScope.loading = true;
                return $q.reject(err);
            }
        };
    });
  }]);</p></pre>
          <h3>
           5、angular指令
          </h3>
          <pre>
①  ng-model="city"   数据的双向绑定
② if与show的不同是，不满足条件if的语句就不会生成，而show则是显示与隐藏
ng-show="false"
ng-hide="1<2"
ng-if="false"
③ ng-disabled=’表达式’；表达式的结果为true时，元素将禁用；为false时，将解除禁用，可以理解为
angular中ng-disabled表示是否允许更改ng-model绑定数据的值
④ ng-repeat高级用法：
遍历数组：
&#60li ng-repeat="item in array">{ {item}}&#60/li>
遍历对象：
key：对象的key
value：对象的value
&#60li ng-repeat="(key,value) in obj">{ {$index+1}}|{ {key}}|{ {value}}&#60/li>
使用 $index 要小心一点,因为以某些方式使用时很可能会产生BUG。
⑤ ng-class
1)&#60div ng-class = "{'red': item. starttime || item. endtime  }"> ... &#60/div>
如果后面item.starttime || item.endtime 为true的话，该div就会有 'red' 这个class
2) ng-repeat列表中的用法
&#60li ng-repeat="(i,item) in items" ng-click="chooseItem(item,$index)" ng-class="{red:i==index}">{ {iterm.name}}&#60/li>
3) 对象写法
ng-class="{'class1': isTrue,'class2': !isTrue,……}"
4) 三元表达式写法
ng-class="obj ?'class1':'class2'"
5) 匹配模式-对象写法
&#60div ng-class="{true :'red', false :'green'}[variable]">&#60/div>
这种用法就是说variable为true时，就给元素加上red这个class，如果variable为false就加上green这个class，这个在逻辑比较简单的时候还是蛮好用的。
⑥ ng-style
1) 设置函数
$scope.setColor = function (status) {
  var p = "";
  if (1 == status) {
      p = 'red';
  } else if (2 == status) {
      p = 'yellow';
  }
  return {"background-color": p};
};
2) &#60span ng-style='obj'>&#6/span>
$scope.obj={
    "font-size":"16px",
    "padding":"20px"
}          </pre>
          <h3>6、angular中的常量和全局变量</h3>
          <pre>
① 常量服务 constant
<p class="pre-cmd">angular.module("sportStop")
  .constant("pageHoldConstant",3)
  .controller("checkControl",function($scope,pageHoldConstant){   //不引入常量就没法调用
    $scope.pageHold=pageHoldConstant ;   //因为pageHold信息是长期不变的，所以命名一个常量赋
  })
</p>
② 全局变量 $rootScope
<p class="pre-cmd">myapp.controller("controlA",function($scope,$rootScope){    //$rootScope这算是共享的概念，
      $rootScope.city="北京" ;   //这里声明了就算是共享了，就算是下个控制器没有，但他也能调用
});
myapp.controller("controlB",function($scope,$rootScope){
      $scope.MyCity= $rootScope.city ;   //这里就是在调用
      $rootScope.city="上海"             //这里是修改
})</p>
PS ：
$rootScope针对全局的作用域生效
$scope只针对当前的controller作用域生效
rootscope类似于js中的全局变量、scope类似于局部变量 </pre>
          <h3>7、$watch()观察</h3>
          <pre>
$watch：(监听一个model,当一个model每次改变时，都会触发第二个函数)
$watch('watchFn',watchAction,deepWatch)
watchFn：带有Angular 表达式或者函数的字符串，它会返回被监控的数据模型的当前值。
watchAction: 一个函数function(newValue,oldValue){},当watchFn 发生变化时会被调用
deepWatch:默认为false,监听数组的某个元素或者对象的属性时设置为true;
<p class="pre-cmd">var myapp=angular.module("myapp",[])
  myapp.controller("controlA",function($scope){
  $scope.count=0;
  $scope.$watch("name",function(newValue,oldValue){
  console.log(newValue)
  console.log(oldValue)
  if(newValue==oldValue){
  return;
  }
  $scope.count++
  })
  //如果观察的是个对象的话
  $scope.user={
  name:"张三"
  }
  $scope.$watch("user",function(newValue,oldValue){
  console.log(newValue)
  console.log(oldValue)
  if(newValue==oldValue){
  alert("newValue")
  return;
  }
  alert(newValue.name)
  },true)      //这里的true是专门为了watch（）观察对象用的观察了对象里的值是否变化了
  });</p>
watch的性能消耗好像蛮大的，所以对于已经不需要监视的watch，记得定时取消掉，$watch函数会返回一个释放$watch绑定的unbind函数。所以当我们不再需要watch改变的时候，我们可以调用这个函数释放$watch。
<p class="pre-cmd">
  var count=1;
  var textWatch=$scope.$watch('todoList',function(){
  console.log('todoList change');
  count++;
  //相当于在todoList变化了4次之后，就调用textWatch()取消这个watch
  //在第5次todoList改变的时候,就不会输出todoList change了。
  if(count>4){
  textWatch(); //这里重新调用就算是清除了
  }
  });
  $scope.stop = function() {
  textWatch();   //或者绑定事件取消watch
  };</p>
</pre>
          <h3>8、$scope.$apply()</h3>
          <pre>
我们到底什么时候需要去调用apply()方法呢？情况非常少，实际上几乎我们所有的代码都包在scope.apply()里面，像ng−click，controller的初始化，http的回调函数等。　
$apply()方法可以在angular框架之外执行angular JS的表达式，也可以说这个方法序列不是是被angular JS的库的方法创建的，例如：DOM事件、setTimeout、XHR或其他第三方的库，这个时候我们需要将代码用scope.apply()包起来。
<p class="pre-cmd">myapp.controller("controlA",function($scope,$rootScope,$window){
  var ww=angular.element($window)
  ww.on("resize",function(){
  $scope.$apply(function(){
  $scope.winHeight=$window.innerHeight;
  })
  })
  angular.element(document).bind("click",function($event){
  $scope.businessTypeShow=false;
  $scope.$apply(function(){});
  $event.stopPropagation();
  });
  setTimeout(function () {
  $scope.$apply(function () {
  $scope.message = 'Hello World';
  });
  }, 2000);
  });
  //在指令中引入了第三方库
  myapp.directive('dayFilterStart',function(){
  return {
  restrict : 'EA',
  scope:false,
  template : '&#60input type="text"  id="dayFilterStart" ng-model="choseDateStart" title="{ {choseDateStart}}">',
  replace:true,
  link : function($scope,element,attrs,ctrl){
  $(element).val($scope.choseDateStart).datepicker({
  language:  'zh-CN',
  autoclose: true,
  format:'yyyy-mm-dd',
  startView:0,
  maxViewMode: 2,
  minViewMode:0,
  todayHighlight:false,  //如果为true, 高亮当前日期
  startDate:$scope.startDate,
  endDate:$scope.choseDateEnd
  }).on('changeDate',function (e){
  $scope.choseDateStart=$(this).val();
  $("#dayFilterEnd").datepicker("setStartDate", $(this).val());
  $scope.$apply(function(){});   //这里是为了让第三方库执行其函数
  });
  }
  }
  });
</p></pre>
          <h3>9、angular中filter过滤器</h3>
          <pre>
① angular中自带的过滤器：number,date,curcuery,limitTo,filer,oderBy
$scope.product={
        name:"Apple",
        price:"3456.78912",
        number:"3",
        birthday:new Date()
    }
//过滤器的方法就是在对象的后面加|加响应的过滤方法
商品名称:{ {product.name | uppercase}}
商品名称:{ {product.name | lowercase}}
商品价钱:{ {product.price | number:"3"}}  自动的四舍五入了，number后是3就保留三位小数
生产日期:{ {product.birthday |date:"shortDate"}}
生产日期:{ {product.birthday |date:"shortTime"}}>
生产日期:{ {product.birthday |date:"yyyy年MM月dd日 EEEE HH:mm:ss"}}
生产日期:{ {product.birthday |date:"EEEE"}}
商品总价:{ {product.price*product.number|currency:"$"}}
这些特殊的过滤器就要记好："" 且 "" 里的写法
$scope.objectArray=[
      {
          name:"张小三",
          sex:"男",
          age:25
      },
      {
          name:"李小四",
          sex:"女",
          age:35
      },
      {
          name:"王小五",
          sex:"男",
          age:45
      }
  ]
1) limitTo的第一个值是保留的个数，第二个值是从第几个下标开始
&#60div ng-repeat="object in objectArray | limitTo:2:1">
2) 通过filter:{}找到符合sex:'女'
&#60div ng-repeat="object in objectArray | filter:{ sex:'女'}">
3) 按照age从小到大排序
&#60div ng-repeat="object in objectArray | orderBy:'age'">

② angular的自定义过滤器
1. 先注意过滤器在html中使用的方式
&#60tr ng-repeat="items in tableArray | pageFilter:pageNumber:10">
pageFilter是过滤器的名称 冒号后面是过滤器的参数，但是过滤器的第一个形参永远是items你所过滤的对象
2.注意过滤器是否写在其他的模块中，如果是写在其他的模块中，要先在本模块中引入过滤器的模块，之后在控制器中引入过滤器的名称作为参数传入，如果过滤器是写在相同的模块中，直接在html中引用过滤器就行，不必再在控制器中作为参数引入
3过滤器的写法，过滤数组，跟过滤字符串，对象的写法是不一样的
如果过滤的是个数组，要在过滤器中声明一个新空数组ary变量，将符合的items一个一个push到ary中，之后将这个ary变量return返回
myapp.filter("pageFilter",function(){
  return function(items,pageNumber,pageHold){
      var resultItems = [];
      // items传入的总数组   pageNumber 当前页码    pageHold 每页显示的页数
      var a=(pageNumber-1)*pageHold;
      var b=(pageNumber-1)*pageHold+pageHold-1;
      angular.forEach(items,function(item,index){
          if(a<=index&&index<=b){
          resultItems.push(item)
          }
      });
     return resultItems
   }
});
这个是过滤 字符串的方式
{ {message|myFilter2:"EEE"}}     <!--这里的“EEE”就代表第二个参数arg-->
myapp.filter("myFilter",function(){
  return  function (data,arg){
      console.log(data); //这里的arg参数代表用户要自定义修改的形式参数
      console.log(arg);
      return  data.replace(/兔宝宝/g,arg);        //这是进行信息筛选了，把找到的信息进行替换
  }
})</pre>
          <h3>10、angular内置Service对象</h3>
          <pre>
<span>① $location：返回当前页面的 URL 地址</span>
需要注意的是location服务是作为一个参数传递到controller中。如果要使用它，需要在controller中定义。
<p class="pre-cmd">angular.module("myApp", []).controller("myCtrl", function($scope, $location) {
    $scope.items = [];
    $scope.items.push("absUrl:" + $location.absUrl());
    $scope.items.push("protocol:" + $location.protocol());
    $scope.items.push("host:" + $location.host());
    $scope.items.push("port:" + $location.port());
    $scope.items.push("path:" + $location.path()+"1111");
});
</p>
$location服务还提供了获得锚点等信息的方法$location.search();不过要配置些东西，链接地址 https://blog.csdn.net/jianggujin/article/details/50950142
<span>② $window $document</span>
$window 用于注入原生JS中的window对象；
$document用于注入原生JS中的document文档对象；
<p class="pre-cmd">myapp.controller("controlA",function($scope,$rootScope,$window,$document){
     $scope.winHeight=$window.innerHeight;
     $scope.docuTitle=$document[0].title;
     $document[0].title="hello";    //改变的页面title
     $document.find("button").on("click", function (e) {
         $scope.displayAlert(e.target.innerText);
     })
     //如果浏览器窗口发生变化，动态获取窗口的高度
       var ww=angular.element($window)
       ww.on("resize",function(){
           $scope.$apply(function(){
               $scope.winHeight=$window.innerHeight;
           })
       })
});</p>
<span>② $http</span>
用于注入封装的Ajax操作进行异步数据请求等等
(1)$http.get();
(2)$http.post();
(3)$http.jsonp();
(4)$http.header();
(5)$http.patch();
(6)$http.put();
(7)$http.delete()
如果是get请求，请使用params来传递参数；如果是Post请求，请使用data来尝试传递参数。
<p class="pre-cmd">angular.module("myApp", []).controller("myCtrl", ["$scope", "$http",function ($scope, $http) {
      // 异步请求获取数据
      $http({
      method:"GET",
      url:"http://datainfo.duapp.com/shopdata/getclass.php",
      params:{status:"login",userID:$scope.username, password:$scope.password}
      }).then(
      function success(resp){
          console.log(resp);
      },
      function error(resp){
          console.log("error" + resp);
      });
  }]);</p>
<span>② $interval</span>
$interval 服务对应了 JS window.setInterval 函数，会按照指定的周期（以毫秒计）来调用函数或计算表达式，会多次不停地调用执行。
<p class="pre-cmd">  angular.module("myApp", []).controller("myCtrl", function($scope, $interval) {
    $scope.now = new Date();
    $interval(function() {
        $scope.now = new Date();
    }, 1000);
    //不使用 $interval 服务的情况下，运用 $apply显示时间,强制使用原生的setInterval
    $scope.count=0;
    setInterval(function(){
      $scope.$apply(function(){
        $scope.count++
      })
    },1000);
});
</p>

<span>③ $timeout</span>
$timeout：在指定的毫秒数后调用函数或计算表达式，只执行一次
<p class="pre-cmd">app.controller("HelloCtrl", ["$scope", "$timeout", function ($scope, $timeout) {
    $scope.text = "Hello World!";
    $timeout(function () {
        $scope.text = "Hello AngularJS!";
    }, 2000);
}]);</p>
          </pre>
          <h3>11、angular自定义Service对象</h3>
          <pre>
服务的功能定义
服务的作用就是对外（或是说对其他模块）提供某种特定的功能，也就是我“为了实现某个功能而调用哪个服务”，他们一般是一个独立的模块
1）它是一个单利对象或函数，对外提供特定的功能。
2) 它与我们自己定义一个function然后在其他地方调用不同，因为服务被定义在一个模块中，所以它的作用范围是可以被我们来管理的，ng避免全局变量污染意识是非常强的。

网站链接 https://blog.csdn.net/qq_33587050/article/details/52138069
<span>① providers服务</span>
providers是唯一一种可以传进 .config() 函数的 service。
<span>② factory服务</span>
就是创建一个函数，函数中return了你所规定的对象、数组、字符串。之后把factory服务传进 controller 之后就可以使用了。我之所以喜欢用它，是因为factor里既可以储存公共的函数方法，还能用来储存全局变量。
<span>③ service服务</span>
相当于new的一个对象：var s = new myService();，只要把属性和方法添加到this上才可以在controller里调用。service和factory的使用是非常相似的，但是service是不能返回字符串的，而factory既可以返回对象也可以返回任意的字符串。
<span>④ constant服务</span>
返回一个json对象，用来申明常量constant，一般用来储存项目中固定数值
<span>⑤ value服务:</span>
返回一个json对象，如果属性和方法需要被修改内容,就用value来创建服务.
<span>⑥区别：</span>
provider需要借助$get来实现，而其余的都不需要。series不能返回字符串，而其他的都可以返回。
constant与value类似，只是看你储存的是否需要更改，二者最大的区别在于使用constant(name, value)注册的服务可以在config(configFn)方法中注入，而value(name, object)不可以。通常用value(name, object)来注册服务对象或者函数，而用constant(name, value)来配置数据。
其实angular中的服务有好多中，但是想一一都弄明白挺难的，而且各服务之间功能类似，只是书写规范不同，而且用到时也要考虑一下所用场景，在我的项目中我只使用了factory，其他的服务都没有用到。
<span>⑦各服务的代码实例</span>
1）factory
<p class="pre-cmd">myapp.factory('storage',['$window',function($window) {   //本地数据临时储存
    return{
        //存储单个属性
        set :function(key,value){
            $window.sessionStorage[key]=value;
        },
        //读取单个属性
        get:function(key,defaultValue){
            return $window.sessionStorage[key] || defaultValue;
        },
        //存储对象，以JSON格式存储
        setObject:function(key,value){
            $window.sessionStorage[key]=JSON.stringify(value);
        },
        //读取对象
        getObject: function (key) {
            return JSON.parse($window.sessionStorage[key] || '{}');
        },
        //清除所有的sessionStorage信息
        clearObject:function(){
            $window.sessionStorage.clear();
        }
    }
}]);
myapp.factory('orderOption',[function() {
  var service=[
    {name:"编码",code:"000"},{name:"订购ID",code:"111"}
  ];
  return service
}])

myapp.controller("statistics",
  ["$scope","$rootScope","$http","$window","$state","$document","storage","orderOption",
  function($scope,$rootScope,$http,$window,$state,$document,storage,orderOption) {
  $document[0].title="服务测试";
  var navArray =User.getObject("navArray");
  $scope.option=orderOption;
}]);</p>
2)service
 <p class="pre-cmd">angular.module("myApp", [])
.service('HQString', function() {
    this.toUpperCase = function(x) {
       return x.toUpperCase();
    }
}).controller("myCtrl", function($scope, HQString) {
    $scope.name = HQString.toUpperCase('jianggujin');
});</p>
3） constant
<p class="pre-cmd">angular.module("myApp", [])
  .constant("HQConstant", 10)
  .config(function(HQConstant) {
      console.info(HQConstant);
  })
  .controller("myCtrl", function($scope, HQConstant) {
       $scope.value = HQConstant;
  });
</p>
4)value
<p class="pre-cmd">angular.module("myApp", [])
  .value("HQValue", 10)
  .controller("myCtrl", function($scope, HQValue) {
      $scope.value = HQValue;
  });</p>
5)provider
provider(name, provider)是可以传入config(configFn)的服务，如果我们想要在 service对象启用之前，先进行模块范围的配置，那就应该用 provider。使用provider(name, provider)注册服务，我们需要为this添加$get函数，函数返回用于注入到controller中对象，我们也可以为this添加其他属性以便于我们在config(configFn)方法中使用。需要注意的是，如果我们的服务名称为：HQString，那么我们在config(configFn)方法中注入的名称应该为：HQStringProvider。下面我们通过代码来看一下如何使用：
<p class="pre-cmd"> angular.module("myApp", [])
  .provider('HQString', function() {
    this.defaults = "defaults";
    this.$get = function() {
       return {
         toUpperCase: function(x) {
            return x.toUpperCase();
         }
     };
    }
  }).config(function(HQStringProvider) {
       console.info(HQStringProvider.defaults)
   }).controller("myCtrl", function($scope, HQString) {
       $scope.name = HQString.toUpperCase('jianggujin');
   });</p></pre>
          <h3>12、directive自定义指令</h3>
          <pre></pre>
          <h3>13、angular.js表单校验</h3>
          <pre></pre>
          <h3>14、angular中使用$broadcast与$emit</h3>
          <pre>
① broadcast译为广播，即上级传递下级
&#60script>
  angular.module("app", []).controller("child", function($scope) {   //子级控制器
      $scope.$on("parentChange", function(e, m) {
        $scope.change = "changed";
        $scope.child = m;
      })
   }).controller("parent", function($scope) {     //父级控制器
      $scope.$watch("parent", function(n, o) {
        if (n == o) {
          return;
        }
        $scope.$broadcast("parentChange", n);    //父级传递到子级
      })
    })
&#60/script>
&#60body>
&#60div ng-controller="parent">        //父级作用域
  Parent: { {parent}}
  &#60input type="text" ng-model="parent">
  &#60div ng-controller="child">     //子级作用域
    { {change}} Child: { {child}}
  &#60/div>
&#60/div>
&#60/body>
上述代码使用$watch监听parent的值的变化，当发生变化时就会“广播”出parentChange事件并传递了参数（输入框的值），此时子元素作用域中使用了$scope.$on("parentChange, handler)" 来接收parentChange事件，然后接受输入框的值并赋值给子作用域中的child变量。 这样就完成了值的传递。

② emit译为发射，即下级传递上级
&#60script>
  angular.module("app", []).controller("parent", function($scope) {  //父级控制器
        $scope.$on("childChange", function(e, m) {
          $scope.change = "changed";
          $scope.parent = m
        })
    }).controller("child", function($scope) {    //子级控制器
        $scope.$watch("child", function(n, o) {
          if (n == o) {
            return;
          }
          $scope.$emit("childChange", n)     //子级触发父级
        })
    })
&#60/script>
&#60body ng-controller="parent">             //父级作用域
{ {change}} Parent: { {parent}}
&#60div ng-controller="child">           //子级作用域
  Child: { {child}}
  &#60input type="text" ng-model="child">
&#60/div>
&#60/body>
当子元素的child值发生变化时，会向上级发出childChange事件，此时父元素正在监听的$on(“childChange”)会做出响应，将传递的参数赋值给parent，整个流程与 broadcast类似。

③ $broadcast $emit上述作用域均存在层级关系，如果对于同级的作用域该如何做呢？
我们可以使用服务来广播事件：
&#60script>
  angular.module("app", []).service("myServive", function($rootScope) {
      return {
        change: function(n) {
          $rootScope.$broadcast("valueChange", n);
        }
      }
    }).controller("bro1", function($scope, myServive) {
      $scope.$watch("value1", function(n) {
        myServive.change(n);
      })
      $scope.$on("valueChange", function(e, m) {
        console.log("value1");
        $scope.value1 = m;
      })
    }).controller("bro2", function($scope, myServive) {
      $scope.$watch("value2", function(n) {
        myServive.change(n);
      })
      $scope.$on("valueChange", function(e, m) {
        console.log("value2");
        $scope.value2 = m;
      })
    })
&#60/script>
&#60body ng-app="app">
&#60div ng-controller="bro1">
  &#60h3> value1:&#60/h3>
  &#60input type="text" ng-model="value1">
&#60/div>
&#60div ng-controller="bro2">
  &#60h3>value2:&#60/h3>
  &#60input type="text" ng-model="value2">
&#60/div>
&#60/body>

④ $broadcast是父级向子级传递触发 $emit是子级向父级触发 ，但是最后接收的事件都在$scope.$on("name", function(e, m) { })中；$broadcast和$emit命名的函数名跟$on的函数名一样</pre>
          <h3>15、监听ng-repeat是否遍历完毕</h3>
          <pre>
在项目中给dom元素绑定事件有是要等ng-repeat遍历将元素渲染后才能开始绑定，这时就要监听ng-repeat是否遍历完成
<p class="pre-cmd">在html中
&#60tr ng-repeat="items in tableArray" on-finish-render>&#60/tr>
在controller控制器中
$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {    //监听table中数据是否ng-repeat遍历完毕
    console.log("repeat遍历完毕")
});
在directive指令中
//监听ng-repeat是否执行完毕
myapp.directive('onFinishRender',['$timeout', '$parse', function ($timeout, $parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished'); //事件通知
                });
            }
        }
    }
}]);</p></pre>
          <h3>16、angular数据类型判断</h3>
          <pre>
① angular.isArray
判断括号内的值是否为数组。
格式：angular.isArray(value);
value: 被判断是否为数组的值。
-------------------------
② angular.isDate
判断括号内的值是否是一个时间。
格式：angular.isDate(value);
value：被判断是否为时间的值。
-------------------------
③ angular.isDefined
判断括号内的值是否存在。
格式：angular.isDefined(value);
value:被判断是否存在的值。
-------------------------
④ angular.isFunction
判断括号内的值是否是一个函数。
格式：angular.isFunction(value);
value：被判断是否是函数在值。
-------------------------
⑥ angular.isElement
判断括号内的值是否是一个Dom元素（或者包装的jQuery元素）
格式：angular.isElement(value);
value:被判断是否是Dom元素/jQuery元素在值。
-------------------------
⑦ angular.isNumber
判断括号内的值是否是数字。
格式：angular.isNumber(value);
value:被判断是否是数字的值。
-------------------------
⑧ angular.isObject
判断括号内的值是否是一个对象。和Javascript的typeof不相同，它不把null视为对象。需要注意的是：数组也是对象。
格式：angular.isObject(value);
value:被判断是否是对象的值。
-------------------------
⑨ angular.isString
判断括号内的值是否是字符串。
格式：angular.isString(value);
value:被判断是否是字符串的值。
-------------------------
⑩ angular.isUndefined
判断括号内的值是否是undefined。
格式：angular.isUndefined(value);
value:被判断是否是undefined的值。
          </pre>
          <h3>17、angular中的坑</h3>
          <pre>
目前，在开发AngularJS项目时（只支持IE8及以上版本或chrome/firefox），
而有些同事IE8登录却还提示“请使用IE8及以上版本或chrome/firefox，如果您使用IE8，
请在”工具”菜单中，调整为非”兼容性视图”！
解决方法：
1.将项目中的.html及.jsp文件的&#60head>的最前面加上
&#60meta http-equiv="X-UA-Compatible" content="IE=edge">&#60/meta>
（即如上meta加在其它meta之前）

有空看一下这里的案例 https://blog.csdn.net/super_yang_android/article/details/51661342          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'angular_js',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
  mounted:function(){
    this.$nextTick(function(){
      this.createCatalogue();
    })
  },
    methods: {
      jump (index) {
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

        function smoothDown () {
          if (total>distance ) {
            distance += step;
            document.body.scrollTop = distance;
            document.documentElement.scrollTop = distance;
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total;
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if ( total<distance) {
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
      createCatalogue(){
        let object = document.getElementsByTagName('h3');
        var flag=[];
        for(var i=0;i<object.length;i++){
          flag.push({name:object[i].innerHTML})
        }
        this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
