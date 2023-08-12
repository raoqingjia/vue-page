<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>1、判断全局的click点击事件或onmousemove 鼠标移动时间 下面以vue代码为例，其实思路通用</h3>
          <pre>根页面html层添加全局触发事件（这个逻辑有个弊端，需要长时间未操作后，用户再点击一次才会退出登录，而不是会自动退出登录）
< template>
  < div id="app" @click="isTimeOut">
    < router-view />
  < /div>
< /template>
< script>
export default  {
  name:  'App',
  data() {
    return {
      lastTime: null,
      //10分钟未检测到鼠标点击就退出登录，后台正常校验20h
      timeOut: 10 * 100 * 60,
    }
  },
  created() {
    this.lastTime = new Date().getTime()
  },
  methods: {
    //全局监听得点击事件
    isTimeOut() {
      var currentTime = new Date().getTime();
      // 判断上次最后一次点击的时间和这次点击的时间间隔
      if (currentTime - this.lastTime > this.timeOut) {
        this.$alert('身份验证已过期，请重新登录', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            //这里写路由（跳转到登录页）
            this.$router.replace('/login')
          }
        });
      } else {
        // 如果在期限内点击，则把这次点击的时间覆盖掉之前存的最后一次点击的时间
        this.lastTime = new Date().getTime()
      }
    }
  }
}
< /script></pre>
          <h3>2、引入js文件创建window全局时间变量判断是否超时 </h3>
          <pre>这个方便的弊端是要判断是否为登录页面，登录页或者重定向页不执行该方法
思路：创建一个.js文件，在main.js引入此js（vue框架）在登录成功的时候保存当前时间localStorage.setItem("lastTime",new Date().getTime());然后在点击的时候更新这个时间
1、首先创建一个astrict.js
var lastTime;
var currentTime = new Date().getTime();
var timeOut = 30 * 60 * 1000; //设置超时时间： 30分
window.onload = function () {
    window.document.onmousedown = function () {
        localStorage.setItem("lastTime",new Date().getTime());
    }
};
function checkTimeout() {
    currentTime = new Date().getTime(); //更新当前时间
    lastTime = localStorage.getItem("lastTime");
    if (currentTime - lastTime > timeOut) { //判断是否超时
        // console.log("超时");
        var url = window.location.href;
        var newUrl=url.match(/(\S*)#/)[1];
        // 这里还可以设置，删除存储的信息
        localstorage.remove('longinInfo')
        // 超时后自动跳转到登录页面
        window.open(newUrl + '#/login','_self');
    }
}
// 定时器 间隔30秒检测是否长时间未操作页面
window.setInterval(checkTimeout, 30000);

2、然后在mian.js引入,注册一下就可以了
import Astrict from './assets/js/astrict.js'
Vue.use(Astrict) </pre>
          <h3>3、基于序号2在来一版react 或者  angular 使用的</h3>
          <pre>1、因为现在的  angular 和 react 多半用的都是tyepscripty 的，需要改下一下js中的代码格式
首先创建一个astrict.js
let setIntervalTimer;
let timeOut = 3 * 60 * 1000;
let lastTime = new Date().getTime();
let currentTime = new Date().getTime();
//获取最外层div
let ICE_CONTAINER = document.getElementsByTagName('body')[0];
// timeType 判断页面是否为登录页，如果是不执行踢出登录操作，初始状态为false
let timeType = false;
const timerCallback=()=> {
  // 检测鼠标移动事件  我嫌弃mousemove生产变量太多改成  click 了
  ICE_CONTAINER.addEventListener('click', function() {
    // 更新最后的操作时间（鼠标每移动一次，就会重新计算时间）
    lastTime = new Date().getTime();
  })
  // 定时器
  let testTime=()=> {
    //获取当前路径   是否在登录页 还在主页即为true   如果不是项目初始化加载该文件不需要判断 login
    timeType = window.location.href.indexOf('login') < 0;
    //更新当前时间
    currentTime = new Date().getTime();
    //判断是否超时
    if (currentTime - lastTime > timeOut) {
      if (timeType) {
        // 清除定时器
        window.clearInterval(setIntervalTimer);
        // 超时操作
        alert("长时间未操作,请重新登陆");
        window.sessionStorage.clear()  //清除本地缓存
        window.location.replace('/absweb/ui/#/login');  //跳转至登录页
      } else {
        lastTime = new Date().getTime();
      }
    }
  }
  return testTime
}
export default function  overtimeLogin (){
  setIntervalTimer = window.setInterval(timerCallback(), 10000); // 定时监听是否超时
}

2、页面中
import overtimeLogin from '../../util/astrict.js';
初始化方法调用
overtimeLogin();</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'projectAutoExit',
        data() {
            return {
                created: this.$route.query.created,
                title: this.$route.query.name
            }
        },
        mounted() {
            this.$nextTick(function () {
            })
        },
        methods: {
            toggle() {

            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
