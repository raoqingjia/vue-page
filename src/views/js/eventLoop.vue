<template>
  <div class="article inner">
    <div class="content">
      <div class="wrap">
        <h2 class="art-title" v-html="title"></h2>
        <p class="art-time">
          <span v-html="created"></span>
        </p>
        <div class="art-content">
          <h3>先理解JavaScript是单线程</h3>
        <pre>作为浏览器脚本语言，JavaScript的主要用途是与用户互动，以及操作DOM。这决定了它只能是单线程，否则会带来很复杂的同步问题。比如，假定JavaScript同时有两个线程，一个线程在某个DOM节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？所以，为了避免复杂性，从一诞生，JavaScript就是单线程。

由于js是单线程的,只有当上一个任务完成之后才会继续完成下一个任务,如果前一个任务耗时很长，后一个任务就不得不一直等着。于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）</pre>
          <h3>Event Loop即事件循环</h3>
          <pre>Event Loop即事件循环，是指浏览器或Node的一种解决javaScript单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。
JavaScript代码的执行过程中，除了依靠函数调用栈来搞定函数的执行顺序外，还依靠任务队列(task queue)(先进先出)来搞定另外一些代码的执行。

Javascript单线程任务被分为同步任务和异步任务，同步任务会在调用栈中按照顺序等待主线程依次执行（代码从上到下的执行），异步任务会在异步任务有了结果后，将注册的回调函数放入任务队列中等待主线程空闲的时候（调用栈被清空），被读取到栈内等待主线程的执行。一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。

任务队列又分为macro-task（宏任务）与micro-task（微任务），在最新标准中，它们被分别称为task与jobs。
macro-task大概包括：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。
micro-task大概包括: process.nextTick, Promise, Object.observe(已废弃), MutationObserver(html5新特性)
setTimeout/Promise等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务。
来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。
事件循环的顺序，决定了JavaScript代码的执行顺序。它从script(整体代码)开始第一次循环（即宏任务）。之后全局上下文进入函数调用栈。直到调用栈清空(只剩全局)，然后执行所有的micro-task（微任务）。当所有可执行的micro-task（微任务）执行完毕之后。循环再次从macro-task（宏任务）开始，找到其中一个任务队列执行完毕，然后再执行所有的micro-task（微任务），这样一直循环下去</pre>
            <h3>看下面这个案例输出</h3>
          <pre>
console.log(0)
setTimeout(function() {
console.log(1)
}, 1000);
console.log(2)
//打印顺序是 0 2 1

同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；
异步任务：不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。
上面代码中 主线程首先会打印0.遇到setTimeout时按照异步处理,1秒之后,setTimeout的回调函数会进入任务队列,主线程会继续运行 打印2,当主线程中的任务运行完成之后,会运行任务队列中的任务 打印出1

https://www.bilibili.com/video/BV1u54y1j7Yu/?spm_id_from=333.788.recommend_more_video.-1  B站上比较不错的一个视频介绍</pre>
          <img src="../../img/eventloop01.png" width="500px" height="600px">
          <img src="../../img/eventloop02.png" width="500px" height="600px">
          <img src="../../img/eventloop03.png" width="1000px" height="600px">
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
