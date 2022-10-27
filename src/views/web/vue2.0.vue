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
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{items.name}}</a></li>
          </ul>
          <h3>
            1、vue介绍
          </h3>
          <article>
            <p>Vue.js 不支持 IE8 及其以下版本，因为 Vue.js使用了IE8不能模拟的 ECMAScript 5 特性。 </p>
            <p> Vue.js 支持所有兼容 ECMAScript 5 的浏览器。 </p>
            <p> IOS 平台的支持覆盖率：> 96.6% （IOS7以上） </p>
            <p>Android 平台的支持覆盖率：>85.1% （Android 4.2以上） </p>
            <p>如果直接下载并用 &#60script> 标签引入，Vue 会被注册为一个全局变量。这是的Vue.js 应用的起步都是创建一个Vue（记住V是大写的）的根实例：var vm = new Vue({})Vue中的id就类似于angular的控制器的名称</p>
            <p>如果直接下载并用 &#60script> 标签引入，Vue 会被注册为一个全局变量。这是的Vue.js 应用的起步都是创建一个Vue（记住V是大写的）的根实例：var vm = new Vue({})Vue中的id就类似于angular的控制器的名称</p>
            <p>Vue开源项目库汇总 : https://www.jianshu.com/p/7f195e58daa5</p>
            <p>vue2.0全家桶项目实用代码 : https://blog.csdn.net/sinat_17775997/article/details/68940803</p>
          </article>
          <h3>
            2、利用vue-cli脚手架搭建vue项目
          </h3>
          <article>
            <p>npm install vue-cli -g 全局安装</p>
            <p>npm uninstall vue-cli -g 全局卸载</p>
            <p>vue init webpack project-web(项目名称)  创建项目</p>
            <p class="cmd-bg">
              Project name salss-web<br>
              Project description A Vue.js project   //项目描述<br>
              Author raoqingjia     //自动把作者名称加进去了<br>
              Vue build standalone<br>
              Install vue-router? Yes<br>
              Use ESLint to lint your code? No   //用ESLint规范你的代码，一个空格错误都将报错，不开启，可以避免不必要的麻烦<br>
              Set up unit tests? No 是否建立单元测试<br>
              Pick a test runner jest<br>
              Setup e2e tests with Nightwatch? No   //E2E测试<br>
            </p>

          </article>
          <h3>
            3、阐述程序加载关系
          </h3>
          <article>
            <p>index.html.是整个项目的入口是整个vue启动的开始，其实main.js中的new Vue其实就是给index.html配置的的，
              整个页面的路由也配置在main.js中，这个的template是App，就是请index.html全局挂载为App.vue这个组件；
              之后进入App.vue这个template模板中，App.vue可以说是整个项目的第一个模板，其他模板的入口</p>
          </article>
          <h3>
            4、css引入方式
          </h3>
          <pre>
1.单独在*.vue组件文件中单独引入css
&#60!-- Add "scoped" attribute to limit CSS to this component only --> 的含义是让css只在当前组件中起作用
&#60style lang="css" scoped>
@import "../css/login.css",
&#60/style>

2.在main.js中全局的引入css样式 （注意文件引入的路径是assets或static，否则影响后期打包）
require('./css/lib/common.css');
import './assets/libs/bootstrap/css/bootstrap.min.css'</pre>
          <h3>
            5、全局添加jquery
          </h3>
          <pre>
1.先要确定node_modules中是否有jquery的包 如果没有则npm install jquery 安装
如果不用npm安装也可以利用本地下载好的js，只不过引入方式为import $ from '@/js/lib/jquery-3.2.1.min.js'
2.在main.js中添加 import $ from 'jquery'全局引入
3.webpack.base.conf.js的开头添加
const webpack = require('webpack')    //为了引入jquery
和module.exports中的结尾添加
 plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]</pre>
         <h3>
           6、@/ ./ ../ 路径解释
         </h3>
         <pre>
@/这是webpack设置的路径别名，在vue标准模板里面的build/webpack.base.conf这个文件里面。
resolve: {
  // 路径别名
  alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.esm.js'
  }
},
就是说@这东西代表着到src这个文件夹的路径
'./'表示同目录文件引用
'../'表示上一级目录文件引用</pre>
          <h3>
            7、引入vue-resource
          </h3>
         <pre>
1.先要确定node_modules中是否有vue-resource的包 如果没有则npm install vue-resource --save安装
2.在main.js中添加 import vueResource from 'vue-resource' 后全局引入Vue.use(vueResource)
3.页面中调取
      this.$http({
              url: that.IP+ "sendVCode",
              method: 'POST',
              params:{'mobile': that.phone},
              headers: {},
              emulateJSON: true
            }).then(function(response){
                 // 响应成功回调
                 console.log('响应成功回调');
                 console.log(response)
               }, function(response){
                 // 响应错误回调
                 console.log('响应错误回调');
                 console.log(response)
               });
get请求使用data传参,并且写成data:{}形式;
post等传参使用params传参,是params:{}形式
现在vue升级到2.0之后就不在开发vue-resource，所以调取数据尽量用axious
http://www.jb51.net/article/103159.htm  这是一个比较好的解释vue-resource配置参数的链接</pre>
          <h3>
            8、vue-router路由参数配置
          </h3>
          <pre>
一般通过vue-cli创建vue项目会自动下载vue-router模块
import Router from 'vue-router' 先引入路由模块
路由的模板
export default new Router({
   routes:[
       {path:'/hello',component:helloPage}，
       {name:'home',path:'/homePage',component:homePage}，
       {path:'/',component:loginPage}
   ]
})
路由对象
即$router，从本页面跳转其他页面中带参应用
路由跳转this.$router.push()
由于动态路由也是传递params的，所以在 this.$router.push() 方法中
path不能和params一起使用，否则params将无效，需要用name来配合使用
this.$router.push({name: 'home',query:{"startMonth":argument}});
this.$router.push({name: 'home',params:{"startMonth":argument}});
this.$router.push({path:"/hello?startMonth"+argument});
this.$router.push({path:"/hello",query:{"startMonth":argument}});

路由匹配
即$route 多是页面跳转接收参数信息，对判断页面跳转信息上很有用
属性说明
$route.path	当前路由对象的路径，如'/view/a'
$$route.params	关于动态片段（如/user/:username)的键值对信息,如{username: 'paolino'}
$route.query	请求参数，如/foo?user=1获取到query.user = 1
$route.router	所属路由器以及所属组件信息
$route.matched	数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
$route.name	当前路径名字

路由选项
路由选项名          默认值     	           作用
 hashbang	        true	            将路径格式化为#!开头
 history	        false	            启用HTML5 history模式，
                                    可以使用pushState和replaceState来管理记录
 abstract	        false	            使用一个不依赖于浏览器的浏览历史虚拟管理后端。
transitionOnLoad	false	            初次加载是否启用场景切换
saveScrollPosition	false	          在启用html5 history模式的时候生效，
                                    用于后退操作的时候记住之前的滚动条位置
linkActiveClass	"v-link-active"	    链接被点击时候需要添加到v-link元素上的class类,
                                    默认为active

路由拦截器
放到main.js中
 new Vue({
  el: '#app',
  router,     router.beforeEach((to, from, next)的router对应的是这里
  store,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
//假设登陆成功后，user信息保存在sessionStorage中。
console.log(to);
console.log(from);
console.log(next);
if (to.path == '/login') {
  sessionStorage.removeItem('user');
  //如果访问登录页，清空之前sessionStorage中的user信息
}
let user = JSON.parse(sessionStorage.getItem('user'));
if (!user && to.path != '/login') {
  next({ path: '/login' })
} else {
  next()
}
next()
//如果访问非登陆页，判断是否有保存的user信息，如果没有，则判断为非法访问，重定向到登录页面
});
to: Route : 即将要进入的目标 [路由对象]
from: Route : 当前导航正要离开的路由
next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
1.next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed （确认的）。
2.next(false): 中断当前的导航。如果浏览器的 URL 改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。
3.next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
拓展：
this.$router.go(-1);//返回上一层
// watch函数监测路由的变化
    watch: {
      $route(now,old){     //监控路由变换，控制返回按钮的显示
        if(now.path=="/index"||now.path=="/pie"||now.path=="/highValue"||now.path=="/customSearch"||now.path=="/scale"){
          this.returnShow=false;
        } else{
          this.returnShow=true;
        }
      }
    }
如果把路由router想象成一个访问记录的栈，router.replace()是替换掉栈顶，而router.push()则是
向栈中再堆如一个新记录。一般情况下，要做前进后退的浏览记录管理的，基本上都是用router.push()，
但是也是有一些特殊情况需要用到router.replace()。比如，有一个授权页，用户在按流程操作时，
某一步需要授权，是直接跳到授权页，授权页提交授权请求，直到成功授权后，跳到流程中的下一步
操作的地址。此处，授权请求的那页面应该用replace去替换掉自身的访问记录，防止用户跳到下一步
流程后按后退键回退到授权页，而导致重复授权
页面跳转时注意点击的元素如果是a标签注意href="###"千万别这么写，不然浏览器中url的末尾也带有###,浏览器要回退两次
https://blog.csdn.net/leileibrother/article/details/79376502 使用keep-alive页面返回不刷新案例</pre>
          <h3>
            9、vue中使用MD5加密
          </h3>
          <pre>
1..在项目根目录下安装
npm install --save js-base64
npm install --save js-md5
2.
在项目文件中引入
import md5 from 'js-md5';
let Base64 = require('js-base64').Base64;
Vue.prototype.md5 =md5; //引用为全局变量,不然就要每个页面都import md5 from 'js-md5'引入一次
使用方法   this.md5()
3.在项目文件中使用
Base64.encode('小飼弾');    // 5bCP6aO85by+
Base64.encodeURI('小飼弾'); // 5bCP6aO85by-
Base64.decode('ZGFua29nYWk=');  // dankogai
md5(''); // d41d8cd98f00b204e9800998ecf8427e
md5.hex(''); // d41d8cd98f00b204e9800998ecf8427e
md5.array(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
md5.digest(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]</pre>
          <h3>
           10、vue中监听手势插件
          </h3>
           <pre>
Vue 2.0 移动设备指令 (Vue touch directive)
https://github.com/BensonDu/vue-directive-touch#
npm install vue-directive-touch --save;
import touch from 'vue-directive-touch';
Vue.use(touch);
&#60p v-touch:tap="eventFun">绑定事件&#60/p>
单击： v-touch:tap
长按： v-touch:long
左滑： v-touch:left
右滑： v-touch:right
上滑： v-touch:up
下滑： v-touch:down</pre>
          <h3>
           11、vue中引入swiper插件
          </h3>
           <pre>
可以通过npm引入swiper，或static静态引入（使用static静态插件引入方法时我没做成功）
npm install swiper --save-dev
npm install --save-dev  swiper@3.4.2
查看node包下swiper的所有版本号的方法：npm view swiper versions
http://www.jb51.net/article/134022.htm  一个案例
在要使用滑屏的页面中调用swiper，或是在main.js文件中用引入swiper，
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
在methods中抒写swiper的调用函数例如
setSwiper(){
      new Swiper ('.swiper-container', {
        loop: true,
        touchMoveStopPropagation : false  //阻止冒泡事件
      })
    }
在mounted中调用这个setSwiper()函数
mounted() {
    this.$nextTick(function () {
       this.setSwiper();
    })
  }</pre>
          <h3>
           12、vue中引入Axios插件
          </h3>
           <pre>
先npm install axios 引入模块
import Axios from 'axios'
Vue.prototype.$http=Axios;
下面是两个关于 axios的文档说明
https://segmentfault.com/a/1190000008470355?utm_source=tuicool&utm_medium=referral
https://www.kancloud.cn/yunye/axios/234845
    this.$http.post(url,_postdata)
        .then(function (response) {
        })
        .catch(function (error) {
        });</pre>
          <h3>
           13、vue中使用vuex插件
          </h3>
           <pre>
npm install vuex --save   用不-dev
① 在main.js中中的配置
import store from './store'
new Vue({
  el: '#app',
  router,
  store,   //注意这里要引入store
  template: '&#60App/>',
  components: {App}
})
② 在store.js中的配置
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
在调用store中的变量时，尽量使用computed去调用this.$store.state.token而不是使用data
放在data中在渲染页面属于直接调用，当data中内容依赖变更时，data 属性不会变更（它的设计
目标就是保存组件的局部状态数据而已）。
而 computed 则是通过【依赖追踪】实现的，在 computed 求值时引用的 Vuex 变量变化时，
会触发对 computed 的重新计算
const store = new Vuex.Store({
  // 定义状态
  state: {
    author: false
  },
  mutations:{              //在vue 中，mutation改变state修改方式this.$store.commit()
    login(state,msg){
      state.author = msg;    // 假定登陆成功后，设置 state.
    }
  },
  getters :{
    loadingStatus: state => state.loadingStatus
   }
});
getters是一个函数，将state中的值通过...mapGetters([ ])方式暴露给其他组件，
这样就可以调用store.state的值，或是换算过的值了
export default store
在其他的js文件中对store修改
this.$store.commit('login',true);
注意：页面刷新vuex数据消失！！！！

State负责存储整个应用的状态数据，一般需要在使用的时候在跟节点注入store对象,之后就可以store.commit('footerShowFun',true)调用，在vue的export default{}就可以使用this.$store.state直接获取状态

           </pre>
          <h3>
            14、vue中使用Echarts插件
          </h3>
          <pre>
npm install echarts --save
然后在项目文件的入口js文件main.js中添加(但是我没有全局添加，我只是在各个组件中单独添加)
import echarts from "echarts
我在需要添加图表的组件中创建依赖的实例
var echarts = require('echarts') or import echarts from 'echarts'（推荐）
5.0之后的echart版本 导入语法变了  import * as echarts from 'echarts'
下是我写的一个图标组件案例，如果需要直接引用组件就行
环形图组件
&#60template>
  &#60div :id="id" :class="className" :style="{height:height,width:width}">&#60/div>
&#60/template>
&#60script>
  import echarts from 'echarts'
  export default {
    props: {
      id: {
        type: String,
        default: 'circle'
      },
      className: {
        type: String,
        default: ''
      },
      height: {
        type: String,
        default: '19rem'
      },
      width: {
        type: String,
        default:'100%'
      },
      data: {
        type: Array,
        default:[]
      },
      series: {
        type: Array,
        default:[]
      }
    },
    data() {
      return {
      }
    },
    mounted() {
      this.setLineCharts()
    },
    beforeDestroy() {
    },
    methods: {
      setLineCharts(){
        var myChart = echarts.init(document.getElementById(this.id));
        myChart.setOption({
          title : {
            text: '',
            subtext: '',
            x:'center'
          },
          tooltip : {
            trigger: 'item',
            borderRadius: 8,//边框圆角
            formatter: "{a} <br/>{b} : {c}万 ({d}%)"
          },
          color:['#e837f8', '#0d79ff','#0ebef1','#15bc60','#f1c515'],

          legend: {
            x : '10%',
            y : '25%',
            orient:'vertical',
            itemWidth:10,
            itemHeight:10,
            textStyle: {
              color: 'rgba(255,255,255,0.6)',
              fontSize: 12
            },
            data:['集团专线','集团固话','IDC','物联网','其它产品']
          },
          toolbox: {
            show : false,
            feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {
                show: true,
                type: ['pie', 'funnel']
              },
              restore : {show: true},
              saveAsImage : {show: true}
            }
          },
          calculable : true,
          series : [
            {
              name:'客户经理销售支撑系统',
              type:'pie',
              radius : [60, 85],
              center : ['65%', '50%'],
              clockWise: false,
              roseType : 'radius',
              width: '60%',       // for funnel
              height:'90%',
              max: 40,            // for funnel
              itemStyle : {
                normal : {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  },
                  shadowColor: 'rgba(0, 0, 0, 1)'//阴影的颜色
                },
                emphasis : {
                  label : {
                    show : false
                  },
                  labelLine : {
                    show : false
                  }
                }
              },
              data:[
                {value:15100, name:'集团专线'},
                {value:13450, name:'集团固话'},
                {value:17900, name:'IDC'},
                {value:23530, name:'物联网'},
                {value:34515, name:'其它产品'}
              ]
            }
          ]
        });
      }
    }
  }
&#60/script>
父组件的引用
import circleCharts from  '@/components/charts/circleCharts'
components: {circleCharts},
data () {
      return {
        pie_x_data:[],
        pie_series:[],
      }
    }
&#60circle-charts :data="pie_x_data" :series="pie_series" className="piemian">&#60/circle-charts>
          </pre>
          <h3>
          15、vue中引入过滤器
          </h3>
           <pre>
<span>① 字段过滤</span>
&#60h1>{message | capitalize}&#60/h1>
&#60h1>{ message | addStr(val,danwei,'')}&#60/h1>   //注意这里的两个参数，是可以动态时时改变的
 var product = new Vue({
        el: '#product',
        data () {
            return {
                message: 'filter-vue',
                val:"",
                danwei:"元"
            }
        },
        filters: {
            capitalize: function (value) {
                if (!value) return '';
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            },
            addStr: function (value,arg1,arg2) {
                var that=this;
                return value +":"+ arg1+"-"+arg2;
            }
        }
    });
<span>② v-for中的过滤</span>
&#60li class="clearfix" v-for="items in list_ary| pageFilter">
当我在v-for中依旧利用上述的filters:{}过滤方法居然会报错
Property or method "filterFun" is not defined on the instance but referenced during render.
后来我就换了一种方式
&#60li class="clearfix" v-for="items in  pageFilter(list_ary) ">  pageFilter()是methods里的一种方法
methods:{
  pageFilter (value) {
    let numMin=(this.current-1)*10;
    let numMax=this.current*10-1;
    console.log(numMin);
    console.log(numMax);
    let ary=[];
    if(this.$store.getters.listTab=="all"){
      ary=value;
    }else{
      for(let i= 0;i< value.length;i++){
        if(numMin<=i&&i<=numMax){
          ary.push(value[i])
        }
      }
    }
    return ary
  }
}</pre>
          <h3>
            15、vue中指令用法
          </h3>
          <pre>
① :class
1）三元运算法要加[]  :class="[items.code===$store.getters.listTab ? 'active':'']"
2）如果存在两个动态class  可以如下这样写 注意标签上不能写两个:class
&#60div class="allCommon "  @contextmenu.prevent="clickSet(_module)" :class="[colorFun,{'takePlace':!flag}]">
computed:{
    colorFun:{
            if(this.flag){
             return colorGreen
            }else{
             return colorRed
            }

        }
    }
}
3）&#60strong :class="[reds,blues]">凉凉三生三世，为你四年成河水&#60strong> 　
data:{
　reds:"red",   //此处的red和blue指的是style中的red类和blue类
　blues:"blue"
　}            　
4）通过参数动态添加类名
&#60strong :class="{red:a,bule:b}" >凉凉三生三世，为你四年成河水&#60strong>　
data:{
　　a:true,
　　b:false
}
5)&#60strong :class="json">凉凉三生三世，为你四年成河水&#60strong> 　
data:{  //把属性都放在一个对象里面
　　json:{
　　　red:false,
　　　blue:true
　　　}
　}　</pre>
          <h3>
           16、vue中 :key 的作用
          </h3>
           <pre>
key 的特殊属性主要用在 Vue的虚拟DOM算法，在新旧nodes对比时辨识VNodes。
如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试修复/再利用相同类型元素的算法。
使用key，它会基于key的变化重新排列元素顺序，并且会移除key不存在的元素。
有相同父元素的子元素必须有独特的key。重复的key会造成渲染错误。
最常见的用例是结合 v-for:
&#60ul>
  &#60li v-for="item in items" :key="item.id">...&#60/li>
&#60/ul>
它也可以用于强制替换元素/组件而不是重复使用它。当你遇到如下场景时它可能会很有用:
完整地触发组件的生命周期钩子
触发过渡
&#60transition>
  &#60span :key="text">{ text }&#60/span>
&#60/transition>
当 text 发生改变时，&#6span> 会随时被更新，因此会触发过渡。</pre>
          <h3>
            17、vue项目中引入loading效果
          </h3>
          <pre>
https://github.com/jkchao/vue-loading  我是通过这个组件去展示的加载效果
http://blog.csdn.net/u011649976/article/details/76854372 一个loading的案例
loading是否显示是通过，是否有http请求决定的，
1 .要用到VUEX中的store一个全局变量loadingStatus储存是否展示的状态，
2.在axios中设置请求拦截器去判断请求的状态，通过store.commit('loadingStatus',false)如改变loadingStatusde的状态，
3.在VUEX中利用getter函数和页面中使用...mapGetters([ ])的方式将loadingStatusde的状态暴露给其他组件
   getters :{
      // 请求数据时加载状态
    loadingStatus: state => state.loadingStatus       getters中的loadingStatus函数名要与state中的变量名loadingStatus一致
   }
  import { mapGetters } from 'vuex'
  computed:{                    引入到computed之后就可以直接用loadingStatus
      ...mapGetters([
        'loadingStatus',
      ]),
    },
4.在页面中通过v-if v-show（使用show是因为有的组件加载要调取html中的元素，差不存在的元素会报错）展示loading的显示隐藏，</pre>
          <h3>
            18、npm run build打包技巧
          </h3>
          <pre>
相关文档链接
https://www.cnblogs.com/libin-1/p/6596810.html   //build目录下的webpack配置做详细分析
http://blog.csdn.net/sanstu/article/details/76058134?locationNum=2
http://www.jb51.net/article/135514.htm    //各配置代码说明
① 打包后只能放到服务器上使用，不能在本地打开
② 如果在config -> index.js 中的 build 代码中的 productionSourceMap的值设为false ，打包后文件体积可以减少百分之八十  //亲测有效
③ 引入字体图标，比如font-awesome的图标路径出错， 在webpack.base.conf.js里面修改limit要改大，把10000改为90000
webpack.base.conf.js文件夹下
{
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    loader: 'url-loader',
    options: {
      limit: 90000,
      name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
    }
}
④  有的时候打包后图片路径是对的，但是也会报404是因为图片过大，在webpack.base.conf.js里面修改limit要改大，把10000改为90000，不过不推荐这样做，尽量将图片压缩到10k左右
{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, //图片后缀
    loader: 'url-loader', //使用url-loader处理
    query: {  // query是对loader做额外的选项配置
      limit: 10000, //图片小于10000字节时以base64的方式引用
      name: utils.assetsPath('img/[name].[hash:7].[ext]') //文件名为name.7位hash值.拓展名
    }
}，
⑤ 打包后router-view路由跳转的内容显示不出来，或者报错，这是因为在没有后端配合的情况下就打开路由history模式的时候，将mode: 'history'这个模式关闭就好，这里并不是说不能打开这个模式，这个模式需要后端设置的配合
如果打包后显示空白页，或者img图片报404，按照下面的方式修改一下：
⑥ 到config文件夹中打开index.js文件，更改build里面的assetsPublicPath属性：改为assetsPublicPath: './'；assetsPublicPath属性作用是指定编译发布的根目录，‘/’指的是项目的根目录（相对路径，一般打包用的就是相对定位），’./’指的是当前目录（绝对路径）。
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),   // 编译输入的index.html文件
    assetsRoot: path.resolve(__dirname, '../dist'),  // webpack输出的目标文件夹路径
    assetsSubDirectory: 'static',              // webpack编译输出的二级文件夹
    assetsPublicPath: './',                   // webpack编译输出的发布路径
⑦ build文件夹下在webpack.prod.conf.js中的output中添加 publicPath:'./'这一项；
 output: {
    publicPath:'./',
    path: config.build.assetsRoot,   //导出文件目录
    filename: utils.assetsPath('js/[name].[chunkhash].js'),  //导出的文件名
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')  //非入口文件的文件名，而又需要被打包出来的文件命名配置,如按需加载的模块
  },
⑧ build文件夹下utils.js添加publicPath:'../../'
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath: '../../'  //在这里修改 ，看你方的.css有多深，要向上找几级
  })
}</pre>
          <h3>
            19、静态资源处理：
          </h3>
          <pre>
assets和static文件夹的区别
相信有很多人知道vue-cli有两个放置静态资源的地方，分别是src/assets文件夹和static文件夹,这两者的区别很多人可能不太清楚。
assets目录中的文件会被webpack处理解析为模块依赖，只支持相对路径形式。例如，在 &#60img src="./logo.png">
和 background: url(./logo.png)中，”./logo.png” 是相对的资源路径，将由Webpack解析为模块依赖。
static/ 目录下的文件并不会被Webpack处理：它们会直接被复制到最终的打包目录（默认是dist/static）下。
必须使用绝对路径引用这些文件，这是通过在 config.js 文件中的 build.assetsPublicPath 和 build.assetsSubDirectory 连接来确定的。
任何放在 static/ 中文件需要以绝对路径的形式引用：/static/[filename]。
在我们实际的开发中，总的来说：static放不会变动的文件 assets放可能会变动的文件。
在js数据中如何引用图片
因为webpack会将图片当做模块来引用，所以在js中需要使用require将图片引用进来，不能直接以字符串的形式。</pre>
          <h3>
            20、动态加载图片路径问题
          </h3>
          <pre>
在html中img直接引入图片路径就写成像&#60img src="../../img/404.jpg">这样，如果是&#60img :src="url"> url就要是require般的引入了，例如url:require('../../img/404.jpg')这样，如果是url:../../img/404.jpg;会被解析成字符串，而不是路径,一般是通过data，或computed 调取图片路径时，必须用require(),如果直接书写图片路径，:src则会将其当成字符串来处理，无法正取加载图片,img标签的onerror事件，img标签中的src图片加载失败，原来的图片位置会出现一个碎片图标
&#60img :src="items" :onerror="onerror">
data (){
      return {
        onerror:'this.src="' + require('@/img/404.jpg') + '"'
      }
    },
vue 使用v-for引入本地图片
data () {
    return {
       banner: [
       {img: require('./img/banner1.jpg')},
       {img: require('./img/banner2.jpg')},
       {img: require('./img/banner3.jpg')},
       {img: require('./img/banner4.jpg')}
       ]
      }
   &#60swiper-slide v-for="(item,index) in banner" :key="index">
     &#60a>
       &#60img :src="item.img">
     &#60/a>
   &#60/swiper-slide>
项目案例分析
我做初次做项目时是src->views/img/css/assets 的结构，页面都放在了views中，页面组件中引入图片的路径是../img/404.png,css中的样式是background: url(../img/edit.png) no-repeat;但是当我把img/css两个文件夹放入到assets中，css中引入方式还是background: url(../img/edit.png) no-repeat;理论上这样的引入css是能找到img图片的，但是如果是在views的html中引入css样式的话就报错啦,报：* ../img/edit.png in ./node_modules/css-loader?{"sourceMap":false}!./node_modules/vue-loader/lib/style-compiler?{"vue":true,错误说到底是views中引入css后，css找不到img图片路径报错，因为页面中引入css后，css中图片的路径就要按照当前html页面的层级去找img背景图片，而不是按照css的层级去找，以后只要是views引入的图片在assets中，图片引入路径都要写成../assets/img/edit.png的形式;但是css要是放在mains中引入就不能这么写了，但是也是要层级关系找，是以main.js为当前的层级，
</pre>
          <h3>
            21、vue文件下载
          </h3>
          <pre>
利用&#60a :href="downloadurl" download="w3logo">下载&#60/a> 可以实现text jpg 文件或图片的下载，
但是想下载zip，rar就不行啦，要用一些模块帮助下载
JSZip是一个用于创建，阅读和编??辑.zip文件的 支持测试IE 6/7/8/9/10
用npm：npm install jszip
file-saver  IE 10+   利用file-saver保存文件
npm install file-saver --save
JSZip 请求的文件地址，不管是后台的还是本地的文件，都要用ajax的方式请求文件
关于下载的文章
http://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/</pre>
          <h3>
            22、引入Bootstrap文件
          </h3>
          <pre>
npm install --save-dev bootstrap
vue中的其他坑
问题：require引入文件报错
 return {
        banner: [
              {img: require('../../img/404.jpg')},
        ],
        nav:{img: require('../../img/bg.jpg')},
        down:require('../../img/bg.jpg'),
        url:require('../../downLoad/apache.rar'),    //这里报错，因为引入的文件是压缩包，是rar zip 格式就会报错
      }</pre>
          <h3>
            23、Vue.set()
          </h3>
          <pre>
Vue.set()出现的背景是由于 JavaScript 的限制，Vue 不能检测以下变动的数组：
当你利用索引直接设置一个项时，例如：vm.items[indexOfItem] = newValue
当你修改数组的长度时，例如：vm.items.length = newLength
这种=的赋值方式不可取，这就是为什么在openshift项目中自己没用push（），splic（）方式而是用=赋值
拼装object对象错误的原因
Vue.set() 的作用通俗点说就是触发视图重新更新一遍，数据动态起来
调用方法：Vue.set( target, key, value )
target：要更改的数据源(可以是对象或者数组)
key：要更改的具体数据，或说成是数据的第几项
value ：更改后的数据
Vue.set() 不仅仅只是可以更新已有的数据，还可以创造新的数据，注意Vue.set()中Vue的含义是从哪里取来的
import Vue from 'vue'
export default{
　　　　data(){
　　　　　　return {
　　　　　　　　items: [
　　　　　　　　　　{select:'第一行'},
　　　　　　　　　　{select:'第二行'},
　　　　　　　　　　{select:'第三行'},
　　　　　　　　　　{select:'第四行'}
　　　　　　　　]
　　　　　　}
　　　　},
 　　methods: {
　　　　selectStyle (item, index) {
　　　　　　　　this.items.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);  // 我没有active 但是我可以创造
　　　　　　　　});
　　　　　　　　Vue.set(item,'active',true);
　　　　}
　　}
  }</pre>
          <h3>24、vue中 :class :style 的使用</h3>
          <pre>
v-bind:class 类的渲染

三元运算符写法
v-bind:class="{clicked? 'blue-class':'red-class'}"
&#60div v-bind:class="[classA, isB ? classB : ' ']">
此例始终添加 classA，但是只有在 isB 是 true 时添加 classB 。
绑定 vue中的class中的类名是用逗号分隔的

有多个条件class的写法
&#60div v-bind:class="[classA, { classB: isB, classC: isC }]">

对象语法
&#60div v-bind:class="{ active: isActive,'background': hasError }">&#60/div>
data如下 ：
data: {
isActive: true,
hasError: false
}
或写成
&#60div v-bind:class="setStyle">&#60/div>
data{
setStyle:{active: isActive,'background': hasError }
}

数组语法（不常用）
我们可以把一个数组传给 v-bind:class ，以应用一个 class 列表：
&#60div v-bind:class="[activeClass, errorClass]">
  data: {
  activeClass: 'active',
  errorClass: 'text-danger'
  }

"字符串"拼接写法（不常用）
&#60div v-bind:class="'box'+num">box{num}&#60/div>
  data:{
  　　　num:2
  　　}

v-bind:style样式的渲染
v-bind:style 的对象语法十分直观——看着非常像 CSS，其实它是一个 JavaScript 对象。
CSS 属性名可以用驼峰式（camelCase）或短横分隔命名（kebab-case）：
&#60div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">&#60/div> 注意样式的单位，单位，单位
v-bind:style 的数组语法可以将多个样式对象应用到一个元素上：
&#60div v-bind:style="[styleObjectA, styleObjectB]">
data: {
    styleObject:{
    color: 'red',
    fontSize: '13px'
    }
   }

使用三元表达式
&#60div :style="{ 'opacity': !editableCheckNum ? 0.5 : 1 }">555&#60/div>

使用计算属性
&#60div :style="computeStyle">555&#60/div>
computed: {
   computeStyle() {
      return { opacity: !this.editableCheckNum ? 0.5 : 1 }
   }
}</pre>
          <h3>
            25、Vue2.0生命周期和钩子函数
          </h3>
          <pre>
<img src="../../img/vue-lifecycle01.png">
<img src="../../img/vue-lifecycle02.png">
① beforecreated：
解释：el和data 并未初始化,也就是data中的数据跟dom元素都没生成呢
这个时期，this变量还不能使用，在data下的数据，和methods下的方法，watcher中的事件都不能获得到；
② created:
完成了data数据的初始化，el还没有初始化，即dom元素没生成，
这个时候可以操作vue实例中的数据和各种方法，但是还不能对"dom"节点进行操作；这时jQuery插件操作相关dom不会起作用
③ beforeMount：
完成了el和data初始化，data中的数据跟页面中dom元素都生成了，但是数据还没挂载到页面中
在挂载开始之前被调用：相关的 render 函数首次被调用
④ mounted ：
完成挂载，将data中的数据加载到dom元素中
这时dom节点被渲染到文档内，一些需要dom的操作在此时才能正常进行
⑤ beforeUpdate：
作用是在页面初始渲染视图之后，一旦监测到data发生变化，在变化的数据重新渲染视图之前会触发beforeUpdate钩子函数，这也是重新渲染之前最后修改数据的机会
⑥ updated：
作用则是在data发生变化渲染更新视图之后触发。
⑦ $el 是用来获取元素DOM对象
扩展建议：
beforecreate : 举个例子：可以在这加个loading事件
created ：在这结束loading，还做一些初始化，实现函数自执行
mounted ： 在这发起后端请求，拿回数据，配合路由钩子做一些事情
beforeDestory： 你确认删除XX吗？ destoryed ：当前组件已被删除，清空相关内容
相关文档：
https://www.cnblogs.com/xkloveme/p/7435271.html </pre>
          <h3>
            26、vue中应用瀑布流
          </h3>
          <pre>
① 做一个小项目，需要瀑布流利用vue-waterfall-easy组件
npm安装  npm install vue-waterfall-easy --save-dev
安装后运行报 Error: Cannot find module 'pug' 错误
先全局安装pug-cli
npm install pug-cli -g
之后在所在项目中本地安装
npm install pug --save-dev
之后运行报Couldn't find preset "es2015" relative to directory问题
是因为vue-waterfall-easy使用了ES标准，所以编译会报错，解决办法如下：
npm install babel-preset-es2015 --save-dev
② 之后在项目中引入模块
import vueWaterfallEasy from './Waterfall/vue-waterfall-easy.vue' 引入模块
components: {
vueWaterfallEasy   注入模块
},
③ 修改组件，修改成你想要的格式
 //这是原本的格式
&#60vue-waterfall-easy  :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
&#60/vue-waterfall-easy>
//这是你按自己需求进行的格式修改
&#60vue-waterfall-easy  :imgsArr="imgsArr" @scrollLoadImg="fetchImgsData">
   &#60template slot-scope="props">   //这里就是你修改的位置
    &#60h3>{props.value.title}}&#60/h3>
   &#60p>{props.value.info}}&#60/p>
&#60/template>
&#60/vue-waterfall-easy>
components:
return {
//imgsArr中图片条数过少，也就是小于一行的数量，会报Cannot read property 'style' of undefined错误
  imgsArr: [
    {src:'./static/img/ecweb.jpg',link:"",info:""},
    {src:'./static/img/icon.jpg',link:"",info:""},
    {src:'./static/img/ecweb.jpg',link:"",info:""}
  ],
  fetchImgsData:[{src:'./static/img/1.png',link:"",info:""}]
  }
}
相关链接：
https://www.cnblogs.com/LChenglong/p/8073332.html  一个很好的案例
http://npm.taobao.org/package/vue-waterfall-easy</pre>
          <h3>
            27、利用vue-i18n实现中英文切换
          </h3>
          <pre>
<span>① 安装vue-i18n</span>
npm install vue-i18n --save
<span>② main.js文件的配置，在main.js中添加以下跟vue-i18n的使用有关的配置项</span>
<p class="pre-cmd">import VueI18n from 'vue-i18n'
Vue.use(VueI18n);// 通过插件的形式挂载
  const i18n = new VueI18n({
  locale: 'zh-CN',    // 通过切换locale的值来实现语言切换   zh-CN 可以写成 this.$i18n.locale来动态切换
  messages: {
  'zh-CN':require('./js/zh'),// 中文语言包
  'en-US': require('./js/en')  // 英文语言包
  }
});
new Vue({
  el: '#app',
  router,
  store,
  i18n,  //将i18n注入到vue实例中
  components: { App },
  template: '&#60App/>'
})</p>
require('./js/zh') 与  require('./js/en') 中key值结构一是样，只是value值不同,这里也就说明如果想达到中英文切换，要提前翻译好两分文档内容，一份中文，一份英文
<p class="pre-cmd">./js/en.js
{
    "common": {
        "home": "Home",
        "login": "Login",
        "register": "Register",
        "appDownload": "APP Download",
    "message": {
        "hint1": "Please Input Nickname",
        "hint2": "Please Input Username",
        "hint3": "Please Input Password",
}
./js/zh.js
{
    "common":{
        "home": "首页",
        "login": "登录",
        "register": "注册",
        "appDownload": "APP下载",
    },
    "message":{
        "hint1": "请输入昵称",
        "hint2": "请输入账号",
        "hint3": "请输入密码",
    }
}</p>
<span>③ 在html中使用vue-i18n</span>
<p class="pre-cmd">&#60a href="javascript:;" @click="urlFun(items)">{ {$t(common."home":)}}&#60/a>
data() {
  return {
    type: this.$t(`xxx.xxx.xxx`)
  }
}
medths(){
  changeLocale () {
    this.$confirm(this.$t('layer.toggle'), this.$t('layer.tips'), {
        confirmButtonText: this.$t('button.ok'),
        cancelButtonText: this.$t('button.cancel'),
        type: 'warning'
      }).then(() => {
        let locale = this.$i18n.locale
        locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'  //切换语言类型
      }).catch(() => {
        this.$message({
        type: 'info',
      })
    })
  },
}
</p></pre>
          <h3>
            28、vue中报错解析
          </h3>
          <pre>
1.问题:vue中npm run dev运行项目不能自动打开浏览器!Your application is running here: http://localhost:8080
在你的项目中找到config/index.js文件，并打开，修改一下参数：
autoOpenBrowser: true,  //是否默认打开浏览器,默认是false，改为true即可
或是在package.json中
  "scripts": {
    "dev": "webpack-dev-server --inline --open --progress --config build/webpack.dev.conf.js",
  }
添加--open

2.问题； IE报vuex requires a Promise polyfill in this browser问题解决
解决方法
第一步： 安装 babel-polyfill 。 babel-polyfill可以模拟ES6使用的环境，可以使用ES6的所有新方法
npm install babel-polyfill --save -dev
第二步： 在 Webpack/Browserify/Node中使用
在webpack.*.config.js文件中，使用    (不出意外应该是在webpack.base.config.js中)
module.exports = {
entry: {
app: ["babel-polyfill", "./src/main.js"]
}
};
替换掉原有app: './src/main.js'的写法
module.exports = {
entry: {
app: './src/main.js'
}
}

3.问题：vue cli 项目在IE9/10中报错SCRIPT1002: 语法错误
原因是webpack-dev-server版本太高，换成2.6.1版本就好了，我看了报错信息，babel-loader好像不能把高版本webpack-dev-server的es6，
如const转换成es5，在ie就报错了
npm install webpack-dev-server@2.6.1

4.问题：IE9下报 [Vue warn]: Error in nextTick: "TypeError: 无法获取未定义或 null 引用的属性“add”"
解决方法：说明错误在nextTick上，也就是下面中$nextTick调用其他函数出现错误
 mounted() {
      this.$nextTick(function () {
        this.setSwiper();     //错误出现在这里，因为我用的是swiper3.0  IE9对IE3的兼容有问题，所以报错了
        this.setNavColor();
      })
    }

5.问题: Vue报错?[vuex] unknown mutation type: loadingFun
说明store中的mutation并没有loadingFun这个函数
通过require('./css/common.css');引入css样式报下面的错误
./node_modules/css-loader?{"sourceMap":true}!./node_modules/postcss-loader/lib?{"sourceMap":true}!.
说明在node_modules中并没有引入css-loader 跟postcss-loader 这两个模块
npm install --save-dev css-loader
npm i -D postcss-loader

6.问题：在vue的项利用jq中append()手动添加dom元素，造成css样式丢失
 vue的原理是数据操作dom，你所维护的数据模型更新了，ui和dom会自动更新
例如 $#62li v-for="item in list">  this.list.push(_this.getRandomStr(10));</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'vue',
    data () {
      return {
        created: this.$route.query.created,
        title: this.$route.query.name,
        catalogue:[]
      }
    },
    created(){

    },
    mounted:function(){
      this.$nextTick(function(){
          this.createCatalogue();

     })
    },
    computed:{},
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
          var o={name:object[i].innerHTML};
          flag.push(o)
        }
       this.catalogue=flag;
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
