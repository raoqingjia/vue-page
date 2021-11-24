<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <a href="static/demo/macroTaskMicroTask.html" target="_blank" class="demo-link">微任务早于Dom渲染早于宏任务案例</a>
          <h3>先看一道面试题</h3>
          <pre>
console.log('start')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
new Promise((resolve) => {
  console.log('promise')
  resolve()
}).then(() => {
    console.log('then1')
  })
  .then(() => {
    console.log('then2')
  })
console.log('end')
结果为：
start、promise、end、then1、then2、setTimeout</pre>
          <h3>宏任务微任务解析</h3>
          <pre>
JS是单线程执行
”JS是单线程的”指的是JS引擎线程。在浏览器环境中，有JS 引擎线程和渲染线程，且两个线程互斥。Node环境中，只有JS 线程。
JavaScript是单线程执行的，他的特点是先进后出，发现同步任务会马上执行，调用栈发现异步任务的时候会先把异步任务放入队列中，异步任务队列分为微任务队列和宏任务队列，队列都按照先进先出的规则

微任务：Promise的.then .catch .finally方法（单独一个new Promise实例是主线程）    async/await
宏任务：setTimeout setInterval  Dom事件 AJAX请求  I/O

执行顺序是
主线程 >  微任务 > Dom渲染 > 宏任务

注意：不要在then中进行耗时的操作，不然会影响后续其他的Dom渲染和宏任务

举例  微任务 > Dom渲染 > 宏任务
var box = document.getElementById('box');
var h1 = document.createElement("h1");
 h1.innerText='hello world';
 box.appendChild(h1);    // 页面没有先渲染，而是先打印的console.log(1)

 console.log(1);

 Promise.resolve().then(()=>{
    console.log('2 Promise');
    alert('Promise then');
 });

 setTimeout(()=>{
     console.log('3 setTimeout');  // 先执行appendChild之后才执行setTimeout
     alert('setTimeout');
 },0);

 console.log(4);</pre>
          <h3>拓展 ：async和await是如何处理异步任务的？</h3>
          <pre>
简单说，async是通过Promise包装异步任务。
比如有如下代码：
async function async1() {
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2 end')
}
async1();
改为ES5的写法：
new Promise((resolve, reject) => {
  console.log('async2 end')
  async2()
  ...
}).then(() => {
 // 执行async1()函数await之后的语句
  console.log('async1 end')
})
当调用 async1 函数时，会马上输出 async2 end，并且函数返回一个 Promise，接下来在遇到 await的时候会就让出线程开始执行 async1 外的代码（可以把 await 看成是让出线程的标志）。
然后当同步代码全部执行完毕以后，就会去执行所有的异步代码，那么又会回到 await 的位置，去执行 then 中的回调。</pre>
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
