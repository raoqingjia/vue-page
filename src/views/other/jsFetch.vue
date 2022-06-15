<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <pre>
fetch是一种HTTP数据请求的方式，是XMLHttpRequest的一种替代方案。fetch不是ajax的进一步封装，而是原生js。Fetch函数就是原生js，没有使用XMLHttpRequest对象。

fetch 规范与 jQuery.ajax() 主要有三种方式的不同：
当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject， 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。fetch 不会发送 cookies

fetch与axios的区别
1、axios在第一个.then中就可以拿到数据，
fetch在第二个拿，第一个是未处理的结果集

2、axios是一个基于Promise的一个http request的请求方式
既能在服务端请求也能在客户端请求数据
服务端: 根据Http进行数据请求
客户端: 根据XMLHttpRequest进行数据请求
判断客户是在服务端请求的还是客户端请求的?
使用属性 Process (只有在服务端才会有node中才会有这个属性)
这个属性不存在肯定是在客户端
判断window如果有那肯定是客户端
fetch不是用XMLHttpRequest进行数据请求的
特点:符合关注分离，没有将输入、输出和用事件来跟踪的状态混杂在一个对象里
脱离了XHR，是ES规范里新的实现方式
fetch没有办法原生监测请求的进度，而XHR可以

3、fetch 默认返回的 body 就是 ReadableStream 数据，需要自己处理成期望的数据格式
你得知道后端返回的数据格式是什么。
如果是 json字符串 ，使用 res.json() 方法来将数据转换成 json 格式数据
  fetch('请求地址').then(res=>{
    return res.json();
  }).then(res=>{
    console.log(res); // 这里得到的就是 json 格式数据
  });
如果是普通的字符串，使用 res.text() 方法将数据转换成普通字符串
  fetch('请求地址').then(res=>{
    return res.text();
  }).then(res=>{
    console.log(res); // 这里得到的就是普通字符串格式数据
  });

使用方式
var req = new Request(URL, {method: 'GET', cache: 'reload'});
fetch(req).then(function(response) {
  return response.json();
}).then(function(json) {
 console.log(json);
 $(".text").val(json)
}).catch(function(data) {
  console.log(data);
});

fetch(btnItem.url, {
  method: "post",
  headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded",   //解决跨域
  }),
  body: new URLSearchParams({
      staffNum: "",
      location: "",
  }).toString(),
  }).then((res) =>{
    try {
        return resp.json();
    } catch (err) {}
    return resp.text();
   }).then((data) => {
          console.log(data);
  }).catch((error) => {
          if (error) throw error;
  });

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
    mounted() {
      this.$nextTick(function () {
      })
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
