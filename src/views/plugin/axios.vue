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
            <li v-for="(items,index) in catalogue"  :key="index" ><a @click="jump(index)">{{index+1}}、{{items.name}}</a></li>
          </ul>
          <h3>初始axios</h3>
          <pre>官网  http://axios-js.com/
安装 npm install axios</pre>
          <h3>axios 特点</h3>
          <pre>axios 特点:
1. 基于 xhr + promise 的异步 ajax 请求库,所以回调函数用then
2. 浏览器端/node 端都可以使用
3. 支持请求／响应拦截器
4. 支持请求取消
5. 请求/响应数据转换
6. 批量发送多个请求</pre>
          <h3>axios基本配置</h3>
          <pre>axios(config): 通用/最本质的发任意类型请求的方式
axios(url[, config]): 可以只指定 url 发 get 请求
axios.request(config): 等同于 axios(config)
axios.get(url[, config]): 发 get 请求
axios.delete(url[, config]): 发 delete 请求
axios.post(url[, data, config]): 发 post 请求
axios.put(url[, data, config]): 发 put 请求
axios.defaults.xxx: 请求的默认全局配置
axios.interceptors.request.use(): 添加请求拦截器
axios.interceptors.response.use(): 添加响应拦截器
---------------------------------------------------------------------------------
axios.create([config]): 创建一个新的 axios(它没有下面的功能)
axios.Cancel(): 用于创建取消请求的错误对象
axios.CancelToken(): 用于创建取消请求的 token 对象
axios.isCancel(): 是否是一个取消请求的错误
axios.all(promises): 用于批量执行多个异步请求
axios.spread(): 用来指定接收所有成功数据的回调函数的方法</pre>
          <h3>axios defaults默认配置</h3>
          <pre>
axios.defaults.method="post" //设置默认的请求类型
axios.defaults.baseURL="XXX" //设置默认url地址
axios.defaults.XXX=XXX   //设置XXX的默认配置为XXX
axios({
     ....
}).then(function(res){
    console.log(res.data)
   })</pre>
          <h3>axios请求响应结果的结构</h3>
          <pre>config:配置对象
data:响应体结果
headers:响应体信息
request:原生ajax对象
status:响应状态码
statusText:响应状态字符串</pre>
          <h3>axios基本使用语法</h3>
          <pre>axios发送get请求：
axios.get('url地址', { params: {请求的参数对象}}).then(function(res){
    //.then()表示成功的回调
    console.log(res.data)   //res.data 是服务器返回的数据,会自动转为js对象格式
})
-------------------------------------------------------------------------------------------
axios发送post请求：
axios.post('url地址', {要提交到服务器的数据}).then(function(res){
    console.log(res.data)   //res.data 是服务器返回的数据
})
-------------------------------------------------------------------------------------------
直接使用axios发起请求:
axios({
     method: '请求类型',
     url: '请求的URL地址',
     data: { POST数据  },    //POST 数据要通过data属性提供
     params: { GET参数 }    //GET参数要通过params属性提供
     }) .then(function(res){
         console.log(res.data)
     })</pre>
          <h3>axios取消请求</h3>
          <pre>var one=document.getElementById("one")
var two=document.getElementById("two") //获取按钮
let cancel=null   //声明全局变量
//发送请求
one.onclick=function(){
   axios({
       method:"post",
       url:"xxx",
       //添加配置对象的属性
       cancelToken:new axios.CancelToken(function(c){
           cancel=c   //将c的值赋值给cancel
       })
   }).then(function(res){
      console.log(res.data)
   })
}
//取消请求
two.onclick=function(){
   cancel()
}</pre>
          <h3>axios 项目中二次封装（重点）</h3>
          <pre>
// 在http.js中引入axios
<p class="language-bg">import axios from 'axios'; // 引入axios
import router from 'vue-router'</p>
// 环境的切换
<p class="language-bg">if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'https://www.baidu.com';
} else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://www.production.com';
}</p>
// 全局的请求头配置
<p class="language-bg">const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    sign: '',
    accountId: '',
    token: getStorage('loginInfo').token,
    timestamp: new Date().getTime(),
}
const service = axios.create({
   baseURL: process.env.VUE_APP_URL,
   timeout: 60000, // request timeout 30秒
   timeoutErrorMessage:'请求超时！',
   headers: headers
})</p>
// 请求拦截
// 我们在发送请求前可以进行一个请求的拦截，为什么要拦截呢，我们拦截请求是用来做什么的呢？
// 比如，有些请求是需要用户登录之后才能访问的，或者post请求的时候，我们需要序列化我们提交的数据。
// 这时候，我们可以在请求被发送之前进行一个拦截，从而进行我们想要的操作。
<p class="language-bg">import storage from '@/storage'; // 先导入vuex,因为我们要使用到里面的状态对象  vuex的路径根据自己的路径去写
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = storage.getItem('token');
    token && (config.headers.Authorization = token);
    console.log(config);
    return config;
  },
  error => {
    return Promise.error(error);
  });</p>
// 这里说一下token，一般是在登录完成之后，将用户的token通过localStorage或者cookie存在本地，然后用户每次在进入页面的时候（即在main.js中），
// 会首先从本地存储中读取token，如果token存在说明用户已经登陆过，则更新vuex中的token状态。
// 然后，在每次请求接口的时候，都会在请求的header中携带token，后台人员就可以根据你携带的token来判断你的登录是否过期，如果没有携带，则说明没有登录过。
// 这时候或许有些小伙伴会有疑问了，就是每个请求都携带token，那么要是一个页面不需要用户登录就可以访问的怎么办呢？
// 其实，你前端的请求可以携带token，但是后台可以选择不接收啊！
// 响应拦截器
<p class="language-bg">axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    console.log(response);
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    console.log(error);
    if (error.response.status) {
      let message ;
      switch (error.response.status) {
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          break;
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          message  = {
            message: '登录过期，请重新登录',
            duration: 1000,
            forbidClick: true
          };
          // 清除token
          localStorage.removeItem('token');
          store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          message = {
            message: '网络请求不存在',
            duration: 1500,
            forbidClick: true
          };
          break;
        // 其他错误，直接抛出错误提示
        default:
          message = {
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true
          };
      }
      return Promise.reject(error.response);
    }
  }
);</p>
响应拦截器很好理解，就是服务器返回给我们的数据，我们在拿到之前可以对他进行一些处理。例如上面的思想：如果后台返回的状态码是200，则正常返回数据，否则的根据错误的状态码类型进行一些我们需要的错误，其实这里主要就是进行了错误的统一处理和没登录或登录过期后调整登录页的一个操作。</pre>
          <h3>封装get方法和post方法（重点）</h3>
          <pre>我们常用的ajax请求方法有get、post、put等方法。
但是为了简化我们的代码，我们还是要对其进行一个简单的封装。下面我们主要封装两个方法：get和post。
get方法：我们通过定义一个get函数，get函数有两个参数，第一个参数表示我们要请求的url地址，第二个参数是我们要携带的请求参数。
get函数返回一个promise对象，当axios其请求成功时resolve服务器返回 值，请求失败时reject错误值。最后通过export抛出get函数。
<p class="language-bg">/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  });}</p>
post方法：原理同get基本一样，但是要注意的是，post方法必须要使用对提交从参数对象进行序列化的操作，所以这里我们通过node的qs模块来序列化我们的参数。这个很重要，如果没有序列化操作，后台是拿不到你提交的数据的。这就是文章开头我们import QS from 'qs';的原因。如果不明白序列化是什么意思的，就百度一下吧，答案一大堆。
<p class="language-bg">/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        console.log(res.data);resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
      })
  });
}</p>
这里有个小细节说下，axios.get()方法和axios.post()在提交数据时参数的书写方式还是有区别的。
区别就是，get的第二个参数是一个{}，然后这个对象的params属性值是一个参数对象的。
而post的第二个参数就是一个参数对象。两者略微的区别要留意哦！</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'axios',
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
